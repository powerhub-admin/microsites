import type { APIRoute } from 'astro';

// On-demand (server) route, even though the rest of the site is static.
export const prerender = false;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const POST: APIRoute = async ({ request, locals }) => {
  // Parse either JSON (from fetch) or a classic form POST.
  let form: Record<string, string> = {};
  try {
    const ct = request.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      form = await request.json();
    } else {
      const fd = await request.formData();
      fd.forEach((v, k) => { form[k] = String(v); });
    }
  } catch {
    return json({ ok: false, error: 'We could not read that submission. Please try again.' }, 400);
  }

  // Honeypot: bots fill this hidden field; humans never see it.
  if ((form.company || '').trim()) return json({ ok: true });

  const name = (form.name || '').trim();
  const phone = (form.phone || '').trim();
  const email = (form.email || '').trim();
  const suburb = (form.suburb || '').trim();
  const service = (form.service || '').trim();
  const message = (form.message || '').trim();

  if (!name || !phone) {
    return json({ ok: false, error: 'Please include your name and phone number.' }, 400);
  }

  // Read config from the Cloudflare runtime env (production) or import.meta.env (local dev).
  const runtimeEnv = (locals as any)?.runtime?.env ?? {};
  const pick = (key: string) =>
    runtimeEnv[key] ??
    (import.meta as any).env?.[key] ??
    (typeof process !== 'undefined' ? process.env?.[key] : undefined);

  const apiKey = pick('RESEND_API_KEY') || pick('powerhub-resend-key');
  const to = pick('CONTACT_TO') || 'powerhub-electrical@proton.me';
  const from = pick('RESEND_FROM') || 'Powerhub Electrical Website <onboarding@resend.dev>';

  if (!apiKey) {
    return json({ ok: false, error: 'The enquiry service is not set up yet. Please call us on 0400 332 331.' }, 500);
  }

  const rows: [string, string][] = [
    ['Name', name], ['Phone', phone], ['Email', email], ['Suburb', suburb], ['Service', service], ['Message', message],
  ].filter(([, v]) => v) as [string, string][];

  const html =
    '<h2 style="font-family:sans-serif">New website enquiry — Powerhub Electrical</h2>' +
    '<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">' +
    rows.map(([k, v]) => `<tr><td style="font-weight:bold;vertical-align:top;padding-right:12px">${k}</td><td>${esc(v).replace(/\n/g, '<br>')}</td></tr>`).join('') +
    '</table>';
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');

  const payload: Record<string, unknown> = {
    from,
    to: [to],
    subject: `New enquiry from ${name}${suburb ? ' — ' + suburb : ''}`,
    html,
    text,
  };
  if (email) payload.reply_to = email;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('Resend error', res.status, detail);
      return json({ ok: false, error: 'We could not send your enquiry right now. Please call us on 0400 332 331.' }, 502);
    }
    return json({ ok: true });
  } catch (e) {
    console.error('Resend request failed', e);
    return json({ ok: false, error: 'We could not send your enquiry right now. Please call us on 0400 332 331.' }, 502);
  }
};
