import type { ServicePageData } from './types';

const a = 'font-semibold text-brand-secondary underline decoration-brand-accent/50 underline-offset-4 hover:text-brand-accent';

const page: ServicePageData = {
  metaTitle: 'Home Rewiring Revesby | Powerhub Electrical',
  metaDescription: 'Need home rewiring in Revesby? Powerhub Electrical offers fixed pricing, obligation-free quotes and $50 off first service. Call 0400 332 331.',

  eyebrow: 'Safe, compliant wiring',
  h1: 'Home Rewiring Revesby',
  supporting: "Home rewiring in Revesby replaces outdated cabling throughout a property, not just one circuit. More than 100 positive reviews back the team's work.",
  badges: ['Fixed pricing', 'Obligation-free quotes', 'Licensed #467291C'],
  heroImg: '/images/powerhub/services/house-rewiring.webp',
  introImg: '/images/powerhub/services/house-rewiring-2.webp',
  navLabel: 'Home Rewiring',

  introHeading: 'Rewiring Older Revesby Homes and Properties',
  introSub: 'Fixed pricing confirmed upfront, obligation-free quotes and 100+ positive reviews across greater Sydney.',
  introBody: "Homes built decades ago often still run on original wiring that was never designed for today's electrical demand. Powerhub Electrical carries out home rewiring in Revesby, replacing outdated cabling throughout a property and bringing it up to current wiring rules from the switchboard to every point.",

  coreHeading: 'Rewiring Services We Provide Across Revesby',
  coreLeadIn: 'Powerhub Electrical carries out the following types of rewiring across Revesby:',
  coreItems: [
    { title: 'Full Home Rewiring', desc: 'Home rewiring in Revesby replaces all the wiring throughout a property, from the switchboard to every power point, light, and switch, bringing an older home up to current standards.' },
    { title: 'Partial Rewiring for Specific Areas', desc: 'Not every property needs a complete rewire; specific circuits or rooms with known issues can be rewired individually rather than replacing every circuit in the property at once.' },
    { title: 'Rewiring for Renovations and Extensions', desc: 'Kitchen, bathroom, or whole-home renovations are common triggers for rewiring, since walls and ceilings are open for other work, making it the most practical time to upgrade outdated wiring.' },
    { title: 'Replacing VIR and TRS Cabling', html: `<a href="https://qbcc.qld.gov.au/news/electrical-fittings-watch-out" target="_blank" rel="noopener noreferrer" class="${a}">Homes with VIR or TRS wiring</a> from before the 1960s often need a full rewire, since the rubber insulation has usually dried out, cracked and become unsafe to leave untouched.` },
    { title: 'Upgrading Circuit Capacity During a Rewire', desc: 'A full rewire is a practical time to add extra circuits for air conditioning, EV charging or a home office, rather than retrofitting new circuits separately at a later date.' },
    { title: 'Rewiring Around Asbestos Materials', html: `Older switchboards and backing boards in pre-1990s homes may contain <a href="https://www.asbestos.nsw.gov.au/bituminous-electrical-backing-board-and-asbestos" target="_blank" rel="noopener noreferrer" class="${a}">asbestos</a>, which should be identified and safely managed as part of a rewiring project rather than disturbed without proper precautions.` },
    { title: 'Rewiring for Rental and Investment Properties', desc: "Landlords managing an older Revesby rental can arrange rewiring between tenancies, reducing disruption to tenants while bringing the property's wiring up to current safety standards before the next lease begins." },
  ],

  whyHeading: 'Why a Proper Rewire Matters',
  whyLeadIn: 'A proper rewire protects a lot more than just convenience:',
  whyItems: [
    { title: 'Reducing Fire and Shock Risk', desc: 'Deteriorated wiring is a recognised cause of house fires and electric shock, so replacing it removes a hazard that often stays hidden behind walls until a fault or fire occurs.' },
    { title: 'Supporting Modern Household Demand', desc: "Older wiring was never designed for today's air conditioners, EV chargers and home entertainment systems, so a rewire brings a property's capacity in line with genuine modern household electrical demand." },
    { title: 'Reducing Future Repair Costs', desc: 'Fixing wiring problems one at a time as they appear can cost more over the years than addressing them during a single rewire, which resolves the issue throughout the property.' },
    { title: 'Supporting Insurance and Compliance Records', desc: 'A documented rewire, completed and certified by a licensed electrician, gives homeowners a clear compliance record that can support insurance discussions or reassure a buyer when the property is sold.' },
  ],

  processHeading: 'Our Rewiring Process for Revesby Properties',
  processLeadIn: 'Home rewiring in Revesby usually follows this sequence from enquiry to final certification:',
  processImg: '/images/powerhub/home/why-choose.webp',
  processSteps: [
    { n: '01', title: 'Enquiry and Property Assessment', desc: "Revesby customers describe their property's age and any known wiring issues, helping determine whether a full or partial rewire suits." },
    { n: '02', title: 'Fixed Price Quote', desc: 'A fixed price for the required rewiring scope is confirmed before any work is booked, avoiding surprise costs later.' },
    { n: '03', title: 'Circuit Planning', desc: 'The electrician plans new circuits and cable routes, factoring in current household needs and any planned additions, such as air conditioning.' },
    { n: '04', title: 'Rewiring and Installation', desc: 'New cable is run throughout the property, connected to the switchboard, and old wiring is removed or isolated as needed.' },
    { n: '05', title: 'Testing and Certification', desc: 'Every circuit is tested before a Certificate of Compliance is issued, confirming that the completed rewiring fully meets current wiring rules.' },
  ],

  problemsHeading: 'Common Wiring Problems Reported Across Revesby',
  problemsLeadIn: 'These are the wiring issues that most often lead to a rewiring conversation in Revesby:',
  problemsItems: [
    { title: 'Frequent Fuses or Tripping Circuits', desc: 'Fuses that blow repeatedly or circuits that trip often, even after other repairs, can indicate wiring that has deteriorated throughout the property rather than a single isolated fault.' },
    { title: 'Warm Switches or Discoloured Power Points', desc: 'Power points or switches that feel warm, or show discolouration around the edges, often indicate wiring that is struggling under load and may need replacing rather than repeated spot repairs.' },
    { title: 'Visible or Deteriorated Old Wiring', desc: 'Cracked, brittle or exposed wiring found during an inspection, particularly in older Revesby homes, usually means the affected section, or the whole property, needs rewiring rather than a patch repair.' },
    { title: 'Not Enough Circuits for Modern Living', desc: 'A property relying on extension leads and powerboards because there are not enough circuits often benefits more from a proper rewire than repeated small additions to an already stretched system.' },
  ],

  propertyHeading: 'How Rewiring Needs Differ by Property Type in Revesby',
  propertyLeadIn: 'Rewiring needs vary depending on the type of Revesby property involved:',
  propertyItems: [
    { title: 'Established Family Homes', desc: 'Older Revesby homes built decades ago are the most common candidates for a full rewire, particularly where original VIR or TRS cabling has never been touched since the original build.' },
    { title: 'Rental and Unit Properties', desc: 'Landlords are encouraged to plan rewiring during a vacancy period rather than while a property is tenanted, since a full rewire typically requires several days without power throughout the property.' },
    { title: 'Small Businesses and Shopfronts', desc: 'A Revesby business that relies on original wiring from decades ago may benefit from rewiring during quieter trading periods, reducing disruption and bringing the electrical system up to current safety standards.' },
  ],

  safetyHeading: 'Safety and Compliance for Home Rewiring',
  safetyLeadIn: 'A few things worth knowing about home rewiring and compliance in Revesby:',
  safetyBullets: [
    { text: 'Homes built before the early 1990s may contain an asbestos backing board or asbestos-related materials, which are assessed and managed safely as part of a rewiring project' },
    { text: 'Completed rewiring work must be certified with a Certificate of Compliance for Electrical Work before it is considered finished' },
    { html: `All rewiring is completed in line with <a href="https://www.nsw.gov.au/housing-and-construction/compliance-and-regulation/electricians/electrical-standards-rules-and-notes" target="_blank" rel="noopener noreferrer" class="${a}">AS/NZS 3000</a> wiring rules` },
    { text: 'All work is completed under Electrical Supervisor Licence #467291C' },
  ],

  chooseHeading: 'What Sets Powerhub Electrical Apart on Rewiring Work',
  chooseLeadIn: 'A few reasons Revesby customers choose Powerhub Electrical for rewiring work:',
  chooseItems: [
    { title: '100+ Positive Reviews', desc: 'Powerhub Electrical Revesby has built more than 100 positive customer reviews, giving Revesby homeowners a track record to check before committing to a significant investment like a full home rewire project.' },
    { title: '25+ Years Combined Experience', desc: 'Powerhub Electrical Revesby brings more than 25 years of combined trade experience to rewiring work, giving Revesby customers a team familiar with older cable types and outdated wiring systems throughout Sydney.' },
    { title: 'Quality Over Quick Fixes', desc: 'The team focuses on quality workmanship over quick fixes or cutting corners, so rewiring is completed properly and tested thoroughly rather than rushed to move on to the next job.' },
    { title: 'Free 5-Star Safety Inspection', desc: "Every rewiring quote includes a complimentary 5-star electrical safety inspection, giving Revesby homeowners a comprehensive check of the property's overall electrical condition before deciding on the required scope of work." },
  ],

  ctaHeading: 'Time to Replace Outdated Wiring?',
  ctaBody: "Call Powerhub Electrical Revesby on 0400 332 331 for home rewiring in Revesby, whether it's a full rewire, a partial upgrade or wiring assessed ahead of a renovation. New customers save $50 on their first service, with obligation-free quotes provided.",

  faqs: [
    { q: 'How much does home rewiring in Revesby cost?', a: 'Home rewiring pricing in Revesby depends on the size of the property, whether a full or partial rewire is needed, and how accessible the existing wiring is for replacement.' },
    { q: 'How do I know if my home needs a full rewire?', a: 'Signs include frequent fuses or tripping circuits, warm switches, visible or brittle old wiring, or simply not having enough circuits for modern appliances and everyday household demand.' },
    { q: 'How long does a full home rewire take?', a: 'A full rewire typically takes several days, depending on the size of the property, and power is usually available only in short periods while circuits are being connected and tested.' },
    { q: 'Do I need to move out during a home rewire?', a: 'Most homeowners can stay during a rewire, though some rooms may be without power for short periods, and dust or minor disruption should be expected while work is underway.' },
    { q: 'Do you offer any discount on home rewiring in Revesby?', a: 'New Powerhub Electrical customers save $50 off their first service, and pensioners receive 15% off, discounts that apply to rewiring as well as other electrical work booked in.' },
    { q: 'Is asbestos a concern during rewiring in older homes?', a: 'Homes built before the early 1990s may have an asbestos backing board behind the switchboard, which is identified and safely managed during the rewiring process where needed.' },
  ],
};

export default page;
