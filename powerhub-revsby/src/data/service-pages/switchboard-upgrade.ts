import type { ServicePageData } from './types';

const a = 'font-semibold text-brand-secondary underline decoration-brand-accent/50 underline-offset-4 hover:text-brand-accent';

const page: ServicePageData = {
  metaTitle: 'Switchboard Upgrade Revesby | Powerhub Electrical',
  metaDescription: 'Need a switchboard upgrade in Revesby? Powerhub Electrical offers fixed pricing, obligation-free quotes and $50 off first service. Call 0400 332 331.',

  eyebrow: 'Modern, safe, compliant',
  h1: 'Switchboard Upgrade Revesby',
  supporting: 'A switchboard upgrade in Revesby replaces outdated fuses or circuit breakers with a safer, modern board. Every upgrade is backed by 100+ positive reviews.',
  badges: ['Fixed pricing', 'Obligation-free quotes', 'Licensed #467291C'],
  heroImg: '/images/powerhub/services/switchboard-upgrade.webp',
  navLabel: 'Switchboard Upgrade',

  introHeading: 'Modernising Old Switchboards Across Revesby',
  introSub: 'Fixed pricing confirmed upfront, obligation-free quotes and 100+ positive reviews across greater Sydney.',
  introBody: 'Fuse boxes and undersized switchboards common in older Revesby homes were never built for today\'s appliances, air conditioners and home offices. A switchboard upgrade in Revesby starts with an honest assessment of the existing board and a plain-language explanation of what actually needs fixing.',

  coreHeading: 'Switchboard Work We Carry Out Across Revesby',
  coreLeadIn: 'Powerhub Electrical carries out the following switchboard work across Revesby:',
  coreItems: [
    { title: 'Old Fuse Box Replacement', desc: 'A switchboard upgrade in Revesby often starts by replacing ceramic rewireable fuses with modern circuit breakers, removing the need to rewire a fuse by hand after every trip or overload.' },
    { title: 'Safety Switch and RCD Installation', html: `Modern switchboards are fitted with <a href="https://www.nsw.gov.au/housing-and-construction/compliance-and-regulation/electricians/electrical-standards-rules-and-notes/residual-current-device-compliance" target="_blank" rel="noopener noreferrer" class="${a}">RCDs</a> that cut power within milliseconds of detecting a leakage current, protecting people from electric shock far faster than an old fuse ever really could.` },
    { title: 'Circuit Breaker Upgrades', desc: 'Ageing or undersized circuit breakers that trip under normal household load are replaced with correctly rated breakers matched to the circuits and appliances they are genuinely meant to protect.' },
    { title: 'Switchboard Relocation', html: `Older switchboards and <a href="https://www.nsw.gov.au/housing-and-construction/compliance-and-regulation/electricians/electrical-standards-rules-and-notes/metering-installations" target="_blank" rel="noopener noreferrer" class="${a}">meters</a> positioned in awkward or unsafe spots, such as inside a small cupboard, can be relocated to a safer, more accessible location during the upgrade.` },
    { title: 'Additional Circuit Capacity', desc: 'Homes adding air conditioning, an electric vehicle charger, or a granny flat often need extra circuit space, which an upgraded switchboard can provide without overloading existing circuits.' },
    { title: 'Digital and Smart Switchboard Upgrades', desc: 'Smart monitoring and app-based alerts can be built into a new switchboard, giving homeowners visibility over their power use without needing to open the switchboard cupboard to check it manually.' },
    { title: 'Switchboard Repairs', desc: 'Not every switchboard issue requires a full replacement, so a loose connection, a damaged breaker, or a single faulty circuit can sometimes be repaired without necessarily upgrading the entire board straight away.' },
  ],

  whyHeading: 'Why a Proper Switchboard Upgrade Matters',
  whyLeadIn: 'A properly upgraded switchboard protects more than convenience; it protects the whole property:',
  whyItems: [
    { title: 'Reducing Fire and Shock Risk', desc: 'Old fuses and worn wiring inside an outdated switchboard are a recognised cause of house fires and electric shock, so replacing them removes a hazard rather than just a nuisance.' },
    { title: 'Supporting Modern Appliance Loads', desc: 'Switchboards designed decades ago were never sized for air conditioners, induction cooktops or EV chargers, so an upgrade avoids nuisance tripping and lets the home run modern appliances without issue.' },
    { title: 'Avoiding Bigger Repair Bills Later', desc: 'Delaying an upgrade on a failing switchboard often means more urgent, more expensive emergency repairs later, once fuses fail completely or wiring deteriorates beyond the scope of a simple, planned repair.' },
    { title: 'Supporting Insurance and Compliance Records', desc: 'A documented switchboard upgrade, including what was replaced and why, gives homeowners a clear compliance record that can be useful when selling a property or dealing with an insurer later.' },
  ],

  processHeading: 'Our Switchboard Upgrade Process for Revesby Properties',
  processLeadIn: 'A switchboard upgrade in Revesby usually follows this sequence from first inspection to final sign-off:',
  processImg: '/images/powerhub/home/why-choose.webp',
  processSteps: [
    { n: '01', title: 'Initial Switchboard Inspection', desc: 'The electrician inspects the switchboard, wiring condition and circuit layout before recommending a full upgrade, partial repair or simple replacement.' },
    { n: '02', title: 'Written Upgrade Quote', desc: 'A fixed price for the recommended upgrade is provided in writing before any work is booked, with no hidden extras.' },
    { n: '03', title: 'Power Isolation and Safety Prep', desc: 'Power to the property is safely isolated before the old switchboard is removed, protecting the electrician and anyone on site.' },
    { n: '04', title: 'New Switchboard Installation', desc: 'The new switchboard is fitted with correctly rated circuit breakers and safety switches, matched to the property\'s circuits and appliances.' },
    { n: '05', title: 'Testing and Final Sign Off', desc: 'Every circuit is tested once power is restored, with the finished switchboard explained clearly before the electrician leaves the property.' },
  ],

  problemsHeading: 'Common Switchboard Problems Reported Across Revesby',
  problemsLeadIn: 'These are the switchboard warning signs Revesby homeowners raise most often:',
  problemsItems: [
    { title: 'Fuses That Keep Blowing', desc: 'A fuse that blows repeatedly, even after replacement, usually signals an overloaded circuit or an ageing switchboard that can no longer safely handle the property\'s actual demand at all today.' },
    { title: 'A Buzzing or Warm Switchboard', desc: 'A humming, buzzing or warm-to-touch switchboard is never normal, and usually points to a loose connection or overloaded component that should be inspected before it worsens any further than this.' },
    { title: 'Rust, Corrosion or Visible Damage', desc: 'Rust, water staining or visible corrosion inside or around a switchboard suggests moisture has reached the components, which can compromise safety even if the board still appears to fully work.' },
    { title: 'No Spare Circuit Capacity', desc: 'A switchboard with no free circuit slots left cannot safely accommodate a new air conditioner, EV charger or extra power points without either overloading a circuit or upgrading the board.' },
  ],

  propertyHeading: 'How Switchboard Upgrades Differ by Property Type in Revesby',
  propertyLeadIn: 'Switchboard upgrades look a little different depending on the type of Revesby property involved:',
  propertyItems: [
    { title: 'Established Houses With Original Switchboards', html: `Homes built <a href="https://www.asbestos.nsw.gov.au/bituminous-electrical-backing-board-and-asbestos" target="_blank" rel="noopener noreferrer" class="${a}">before the early 1990s</a> may have an asbestos backing board behind the switchboard, which is assessed and safely managed as part of any upgrade in Revesby homes today.` },
    { title: 'Rental and Unit Properties', desc: 'Tenants who notice a switchboard fault are encouraged to contact their property manager, as switchboard upgrades in a rental property must be arranged and approved by the landlord, not the tenant.' },
    { title: 'Small Businesses and Shopfronts', desc: 'A switchboard fault affecting a Revesby business can shut down registers, lighting, or refrigeration, making a properly sized upgrade important to avoid repeated trading disruption down the track.' },
  ],

  safetyHeading: 'Safety and Compliance for Switchboard Upgrades',
  safetyLeadIn: 'A few things worth knowing about switchboard upgrades and compliance at Powerhub Electrical Revesby:',
  safetyBullets: [
    { html: `General advice on avoiding electrical accidents at home, including the role of safety switches, is available from <a href="https://www.nsw.gov.au/legal-and-justice/consumer-rights-and-protection/safety/electrical-safety/avoiding-electrical-accidents" target="_blank" rel="noopener noreferrer" class="${a}">NSW Fair Trading</a>` },
    { html: `Switchboard main switches are positioned and labelled in line with <a href="https://www.nsw.gov.au/housing-and-construction/compliance-and-regulation/electricians/electrical-standards-rules-and-notes/location-and-identification-of-main-switch" target="_blank" rel="noopener noreferrer" class="${a}">NSW guidance on main switch location</a>` },
    { html: `All switchboard work is completed in line with <a href="https://www.nsw.gov.au/housing-and-construction/compliance-and-regulation/electricians/electrical-standards-rules-and-notes" target="_blank" rel="noopener noreferrer" class="${a}">AS/NZS 3000</a> wiring rules` },
    { text: 'All switchboard upgrades are completed under Electrical Supervisor Licence #467291C' },
  ],

  chooseHeading: 'What Sets Powerhub Electrical Revesby Apart on Switchboard Work',
  chooseLeadIn: 'A few reasons Revesby customers trust Powerhub Electrical with their switchboard upgrade:',
  chooseItems: [
    { title: '25+ Years Combined Experience', desc: 'Powerhub Electrical brings more than 25 years of combined trade experience to every switchboard job, giving Revesby customers a team that has seen most switchboard problems in older homes before.' },
    { title: 'Family-Owned and Operated', desc: 'Powerhub Electrical Revesby is a family-owned and operated business, meaning Revesby customers deal directly with the people who founded it, rather than with a large, impersonal call centre elsewhere.' },
    { title: 'Quality Over Quick Fixes', desc: 'The team focuses on quality workmanship over quick fixes or cutting corners, so a switchboard upgrade is built to last rather than patched together to pass a quick visual check.' },
    { title: 'Free 5-Star Safety Inspection', desc: 'Every switchboard upgrade quote includes a complimentary 5-star electrical safety inspection, giving Revesby homeowners a broader check of wiring and safety switches beyond the switchboard itself, at no cost.' },
  ],

  ctaHeading: 'Old Fuse Box or Switchboard Playing Up?',
  ctaBody: 'Call Powerhub Electrical Revesby on 0400 332 331 for a switchboard upgrade in Revesby, whether it\'s an old fuse box, constant tripping or no spare circuits left. New customers save $50 on their first service, with every quote kept obligation-free.',

  faqs: [
    { q: 'How much does a switchboard upgrade in Revesby cost?', a: 'Switchboard upgrade pricing in Revesby depends on the board\'s condition, the number of circuits, and whether asbestos removal is needed, with a fixed price confirmed in writing before work begins.' },
    { q: 'How do I know if my switchboard needs upgrading?', a: 'Warning signs include fuses that keep blowing, a warm or buzzing switchboard, visible rust or corrosion, and running out of spare circuits for new appliances or major planned home renovations.' },
    { q: 'Do older homes in Revesby often need asbestos removed during an upgrade?', a: 'Homes built before the early 1990s sometimes have an asbestos backing board behind the switchboard, which is identified and safely managed as part of the upgrade process itself where needed.' },
    { q: 'Will I lose power for long during a switchboard upgrade?', a: 'Power is switched off only while the old switchboard is removed and the new one connected, with most straightforward residential upgrades completed within a single visit on the day itself.' },
    { q: 'Do you offer any discount on switchboard upgrades in Revesby?', a: 'New Powerhub Electrical Revesby customers save $50 off their first service, and pensioners receive 15% off, discounts that apply to switchboard upgrades as well as other electrical work.' },
    { q: 'Is a written quote provided before any switchboard work begins?', a: 'Yes, a fixed price is confirmed in writing after the initial inspection, so Revesby customers know the full cost before agreeing to any switchboard upgrade or repair.' },
  ],
};

export default page;
