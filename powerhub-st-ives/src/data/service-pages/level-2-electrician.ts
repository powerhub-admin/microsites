import type { ServicePageData } from './types';

const a = 'font-semibold text-brand-secondary underline decoration-brand-accent/50 underline-offset-4 hover:text-brand-accent';

const page: ServicePageData = {
  metaTitle: 'Level 2 Electrician St Ives | Powerhub Electrical',
  metaDescription: 'Need a Level 2 electrician in St Ives? Powerhub Electrical handles service lines, meters and network connections properly. Call 0400 332 331 today.',

  eyebrow: 'Mains and network connections',
  h1: 'Level 2 Electrician St Ives',
  supporting: 'Accredited Level 2 electrician working across St Ives, handling network connections. Backed by 100+ five-star reviews and a licensed electrician.',
  badges: ['Genuine Level 2 accreditation', '24/7 availability', 'Licensed #467291C'],
  heroImg: '/images/powerhub/services/Our-committment-to-success.webp',
  navLabel: 'Level 2 Electrician',

  introHeading: 'Need Work Done Between Your Home and the Street?',
  introSub: 'Genuine Level 2 accreditation, handling the network side properly and legally.',
  introBody: 'Anything between your switchboard and the street- service lines, meters, private poles- needs an electrician with genuine Level 2 accreditation, not just a standard licence. Powerhub Electrical provides Level 2 electrical services across St Ives, properly handling this specialised network-side work.',

  coreHeading: 'Level 2 Situations We Handle',
  coreLeadIn: 'Our Level 2 electricians handle a range of network-side work across St Ives, including:',
  coreItems: [
    { title: 'Overhead service line repairs', desc: 'Storm damage, fallen branches or everyday wear can bring down the overhead line connecting a property to the network, and our Level 2 electricians repair or replace it safely and legally.' },
    { title: 'Underground service connections', desc: 'Properties with underground supply sometimes need a new or repaired connection between the property boundary and the network, and our Level 2 electricians coordinate this work directly with the distributor.' },
    { title: 'Meter box relocations', desc: 'Renovations sometimes require the meter box to be moved to a new position on the property, and our Level 2 electricians handle the relocation and reconnection with the network distributor.' },
    { title: 'Temporary disconnection and reconnection', desc: 'Major renovations, demolitions, or extensions sometimes require power to be temporarily disconnected and safely reconnected once the work is complete, and our Level 2 electricians manage this process from start to finish.' },
    { title: 'Private power pole work', desc: "A private power pole supplying the property is the owner's responsibility to maintain, and our Level 2 electricians inspect, repair or replace these poles properly and legally, keeping everyone safe." },
    { title: 'New service connections for renovations or additions', desc: 'Granny flats, additions, or knockdown rebuilds sometimes require an entirely new service connection to the network, and our Level 2 electricians manage the application and physical work involved directly.' },
  ],

  whyHeading: 'Why Using a Genuine Level 2 Electrician Matters',
  whyLeadIn: 'Using a genuinely accredited Level 2 electrician matters for reasons beyond simple convenience:',
  whyItems: [
    { title: 'Avoiding unlawful or rejected work', desc: 'Network-side work completed without genuine Level 2 accreditation is not legally recognised, and the network distributor can refuse to energise or approve a connection completed by an unaccredited electrician altogether.' },
    { title: 'Reducing time without power', desc: 'Coordinating both the network application and the physical connection work through one accredited electrician generally means fewer delays than managing separate contractors for each half of the same job overall.' },
    { title: 'Protecting a renovation timeline', desc: 'Delays in connecting or disconnecting supply can hold up an entire renovation or rebuild, and having a Level 2 electrician manage this directly keeps the wider project on schedule.' },
    { title: 'Genuine accountability for network work', desc: "An accredited electrician takes direct responsibility for network-side work that meets the distributor's technical requirements, rather than leaving a homeowner to discover a problem only after an inspection has already failed." },
  ],

  processHeading: 'Our Level 2 Process for St Ives Properties',
  processLeadIn: 'Booking a Level 2 electrician across St Ives generally follows this straightforward sequence:',
  processSteps: [
    { n: '01', title: 'Discuss the job', desc: 'You describe the work needed, whether that is a service line repair, meter relocation, or a new connection entirely from scratch.' },
    { n: '02', title: 'Obligation-free quote', desc: 'We provide a clear, obligation-free quote that covers both the network application and the physical connection work throughout the process.' },
    { n: '03', title: 'Network application and coordination', html: `We lodge any required application with the <a href="https://www.ausgrid.com.au/Connections/About-your-connection" target="_blank" rel="noopener noreferrer" class="${a}">network distributor</a> and coordinate timing so the work proceeds as smoothly as possible.` },
    { n: '04', title: 'Completing the work', desc: 'Our Level 2 electrician completes the physical connection, repair or relocation safely, restoring power as quickly as practically possible.' },
  ],

  problemsHeading: 'Common Level 2 Issues Across St Ives',
  problemsLeadIn: 'Certain Level 2 issues come up again and again across St Ives properties, including:',
  problemsItems: [
    { title: 'Storm-damaged overhead lines', desc: 'Falling branches or severe weather across the leafy streets of St Ives can bring down the overhead line connecting a property to the network, requiring urgent Level 2 attention.' },
    { title: 'Meters in the wrong position after renovation', desc: 'A kitchen extension or major renovation can leave the meter box awkwardly positioned or blocking new work entirely, and relocating it requires a Level 2 electrician, not a standard one.' },
    { title: 'Private power poles left unmaintained', desc: 'Many homeowners are unaware they are personally responsible for maintaining their own private power pole, and a Level 2 electrician can inspect it before a genuine problem develops unexpectedly later.' },
    { title: 'Delayed connections holding up a project', desc: 'Underestimating how long a network application can take often leaves a renovation or new build waiting on a connection, so booking a Level 2 electrician early helps avoid unnecessary delays.' },
  ],

  safetyHeading: 'Level 2 Standards for St Ives Homeowners',
  safetyLeadIn: 'A few important points are worth knowing about Level 2 electrical work:',
  safetyBullets: [
    { html: `Level 2 work is governed by the <a href="https://www.energy.nsw.gov.au/nsw-plans-and-progress/regulation-and-policy/asp-scheme-and-contestable-works/asp-scheme-frequently" target="_blank" rel="noopener noreferrer" class="${a}">ASP Scheme</a>, and only electricians with genuine Level 2 accreditation are authorised to connect, disconnect or alter network-side supply` },
    { text: 'A standard electrical licence alone is not sufficient for this work, and using an unaccredited electrician can result in a connection being refused' },
    { html: `Powerhub Electrical holds Electrical Contractor Licence #467291C, verifiable through the <a href="https://verify.licence.nsw.gov.au/details/Contractor%20Licence/1-46C84T5" target="_blank" rel="noopener noreferrer" class="${a}">NSW licence register</a>` },
    { html: `ABN 91 677 354 602, searchable through the <a href="https://abr.business.gov.au/ABN/View?id=91677354602" target="_blank" rel="noopener noreferrer" class="${a}">Australian Business Register</a>` },
  ],

  chooseHeading: 'Why Choose Powerhub Electrical for Level 2 Work',
  chooseLeadIn: "Here's what genuinely sets Powerhub Electrical apart for Level 2 electrical work:",
  chooseItems: [
    { title: 'Director-led workmanship', desc: 'Brian personally oversees many of the trickier Level 2 jobs across St Ives, particularly service line faults and private pole work, applying real care to every project we take on.' },
    { title: '25+ years of combined trade experience', desc: 'Between Brian and the team, Powerhub Electrical brings more than 25 years of combined electrical experience to every Level 2 job across St Ives and the wider Ku-ring-gai region.' },
    { title: 'Obligation-free quotes', desc: 'Every Level 2 job starts with a clear, obligation-free quote covering both the network side and the physical work involved, so St Ives homeowners know the full cost upfront always.' },
    { title: '24/7 emergency availability', desc: 'A downed service line or faulty private pole can leave a home without power at any hour, so Powerhub Electrical remains available around the clock to respond to genuine emergencies.' },
  ],

  ctaHeading: 'Need Network-Side Work Done Properly?',
  ctaBody: "If you need a Level 2 electrician across St Ives, call Powerhub Electrical on 0400 332 331 for an honest, obligation-free quote. Every job is backed by genuine accreditation, 25+ years' combined experience, and around-the-clock availability for any genuine emergency.",

  faqs: [
    { q: 'Do you offer a Level 2 electrician across St Ives?', a: 'Yes, Powerhub Electrical provides Level 2 electrical services across St Ives, including service line repairs, meter relocations, private pole work, and new network connections as needed.' },
    { q: 'What is the difference between a regular electrician and a Level 2 electrician?', a: 'A regular electrician handles work inside your switchboard, while a Level 2 electrician is specifically accredited to work on the connection between your property and the network.' },
    { q: 'Do you handle private power pole repairs?', a: "Yes, we inspect, repair, or replace private power poles, which are the property owner's responsibility to maintain, rather than the network distributor's responsibility here." },
    { q: 'Can you relocate my meter box during a renovation?', a: 'Yes, we handle meter box relocations as part of a renovation, coordinating the physical move and the required network paperwork simultaneously and properly.' },
    { q: 'How long does a network connection application take?', a: 'Timeframes vary depending on the distributor and the scope of work, and we help plan around this so a renovation or rebuild is not unnecessarily delayed.' },
    { q: 'Do you offer emergency service line repairs?', a: 'Yes, a downed or damaged service line is treated as a genuine emergency, and we remain available around the clock to respond.' },
  ],
};

export default page;
