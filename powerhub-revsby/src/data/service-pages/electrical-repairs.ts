import type { ServicePageData } from './types';

const a = 'font-semibold text-brand-secondary underline decoration-brand-accent/50 underline-offset-4 hover:text-brand-accent';

const page: ServicePageData = {
  metaTitle: 'Electrical Repairs Revesby | Powerhub Electrical',
  metaDescription: 'Need electrical repairs in Revesby? Powerhub Electrical offers fixed pricing, obligation-free quotes and $50 off first service. Call 0400 332 331.',

  eyebrow: 'Honest diagnosis first',
  h1: 'Electrical Repairs Revesby',
  supporting: 'Electrical repairs in Revesby should start with an honest diagnosis, not a guess. Every quote is transparent, with no pushy sales tactics.',
  badges: ['Fixed pricing', 'Obligation-free quotes', 'Licensed #467291C'],
  heroImg: '/images/powerhub/services/electrical-repairs.webp',
  navLabel: 'Electrical Repairs',

  introHeading: 'Fixing Electrical Faults Across Revesby Homes and Businesses',
  introSub: 'Fixed pricing confirmed upfront, obligation-free quotes and 100+ positive reviews across greater Sydney.',
  introBody: 'Not every electrical problem is an emergency, but tripping circuits, dead power points and flickering lights still deserve a proper diagnosis. Powerhub Electrical carries out electrical repairs in Revesby that identify the actual cause of a fault, rather than guessing or replacing parts that were never the problem.',

  coreHeading: 'Electrical Repairs We Carry Out Across Revesby',
  coreLeadIn: 'Powerhub Electrical carries out the following types of electrical repairs across Revesby:',
  coreItems: [
    { title: 'General Fault Finding and Diagnosis', desc: 'Electrical repairs in Revesby often start with fault-finding, using proper testing equipment to trace the actual cause of a problem rather than guessing or unnecessarily replacing parts.' },
    { title: 'Repairs to Old or Deteriorated Wiring', html: `Homes with ageing VIR or TRS wiring from before the 1960s may have brittle, cracked insulation, which is assessed and repaired or replaced before it becomes a genuine <a href="https://qbcc.qld.gov.au/news/electrical-fittings-watch-out" target="_blank" rel="noopener noreferrer" class="${a}">fire risk</a>.` },
    { title: 'Power Point and Switch Repairs', desc: 'Power points and light switches that spark, feel loose, or no longer hold a plug firmly are repaired or replaced rather than left in everyday use as a hidden hazard.' },
    { title: 'Lighting and Circuit Repairs', desc: 'Flickering lights, dead circuits or lights that trip a safety switch when turned on are diagnosed to find the real cause, rather than simply replacing a globe over and over.' },
    { title: 'Appliance Circuit and Connection Repairs', desc: 'Faults affecting an appliance, such as an oven, hot water system or air conditioner, are traced back to the wiring or connection point rather than blamed on the appliance alone.' },
    { title: 'Repairs Following Renovations or DIY Work', desc: 'Wiring altered during a renovation or a previous DIY attempt is checked and corrected where needed, since incorrect connections can create hidden faults that surface after the work is finished.' },
    { title: 'Commercial and Small Business Electrical Repairs', desc: 'A Revesby shopfront or small office affected by tripping circuits or dead power points can have faults repaired with minimal disruption, keeping trading hours as close to normal as possible.' },
  ],

  whyHeading: 'Why Getting a Repair Right the First Time Matters',
  whyLeadIn: 'Getting a repair right the first time matters more than it might seem:',
  whyItems: [
    { title: 'Avoiding Repeat Callouts', desc: 'Diagnosing the actual cause of a fault, rather than a quick temporary fix, reduces the chance of the same problem returning within weeks and needing a second, avoidable callout later.' },
    { title: 'Reducing Fire and Shock Risk', desc: 'Ageing wiring, loose connections and worn fittings are common causes of house fires and electric shock, so treating small warning signs early considerably reduces genuine, avoidable safety risk over time.' },
    { title: 'Protecting Appliances and Devices', desc: 'Unstable connections, voltage fluctuations or a failing circuit can damage sensitive electronics and appliances over time, so identifying and fixing the underlying fault protects everything connected to that same circuit.' },
    { title: 'Supporting Insurance and Sale Records', desc: 'A documented electrical repair, including what failed and how it was fixed, gives homeowners a paper trail that can support an insurance claim or reassure a buyer when selling later.' },
  ],

  processHeading: 'Our Repair Process for Revesby Properties',
  processLeadIn: 'Electrical repairs in Revesby with Powerhub Electrical usually follow this sequence from enquiry to final testing:',
  processImg: '/images/powerhub/home/why-choose.webp',
  processSteps: [
    { n: '01', title: 'Enquiry and Fault Description', desc: 'Revesby customers describe the symptoms they notice, such as tripping, sparking or a dead circuit, before a technician is arranged.' },
    { n: '02', title: 'On Site Diagnosis', desc: 'The electrician inspects the switchboard, wiring or fitting involved and identifies the exact cause before explaining the findings in person.' },
    { n: '03', title: 'Fixed Price Quote', desc: 'A clear price for the repair is confirmed before any work begins, avoiding surprise charges once the fault is fixed.' },
    { n: '04', title: 'Repair and Testing', desc: 'The fault is repaired using correctly rated parts and materials, with the affected circuit tested thoroughly before power is restored.' },
    { n: '05', title: 'Sign Off and Explanation', desc: 'The electrician explains what was found and fixed in plain language, so the fault and the solution both make sense.' },
  ],

  problemsHeading: 'Common Electrical Problems Reported Across Revesby',
  problemsLeadIn: 'These are the general electrical problems Revesby customers raise most often:',
  problemsItems: [
    { title: 'Circuits That Keep Tripping', desc: 'A circuit that trips repeatedly, even after resetting, usually points to a specific overloaded appliance, damaged wiring, or moisture, rather than to a fault with the safety switch at all initially.' },
    { title: 'Burning Smells or Warm Fittings', desc: 'A burning smell near a power point, switch or the switchboard should be treated as a fire risk and reported immediately, with that circuit isolated until it can be checked.' },
    { title: 'Old Wiring That Has Never Been Inspected', desc: 'Homes that have never had their wiring inspected may still contain deteriorated cabling from decades ago, which can hide faults behind walls or ceilings until a problem appears without warning.' },
    { title: 'Repairs After a DIY Attempt Gone Wrong', desc: 'A previous DIY repair or an unlicensed job can leave behind incorrect connections, missing earthing or exposed wiring, which is identified and corrected properly during a professional electrical repair visit.' },
  ],

  propertyHeading: 'How Electrical Repairs Differ by Property Type in Revesby',
  propertyLeadIn: 'Electrical repairs look a little different depending on the type of Revesby property involved:',
  propertyItems: [
    { title: 'Established Family Homes', desc: 'Older Revesby homes are more likely to need repairs involving ageing wiring, outdated fittings or a switchboard nearing the end of its working life, rather than a simple, isolated fault.' },
    { title: 'Rental and Unit Properties', desc: 'Tenants who notice an electrical fault are encouraged to contact their property manager promptly, as repairs to fixed wiring in a rental must be arranged and approved by the landlord.' },
    { title: 'Small Businesses and Shopfronts', desc: 'A Revesby business affected by a recurring electrical fault can lose trading time and stock, such as refrigerated goods, making a prompt, thorough repair more important than a quick patch.' },
  ],

  safetyHeading: 'Safety and Compliance for Electrical Repairs',
  safetyLeadIn: 'A few things Powerhub Electrical wants Revesby customers to know about electrical repairs and compliance:',
  safetyBullets: [
    { html: `General advice on avoiding electrical accidents at home is available from <a href="https://www.nsw.gov.au/legal-and-justice/consumer-rights-and-protection/safety/electrical-safety/avoiding-electrical-accidents" target="_blank" rel="noopener noreferrer" class="${a}">NSW Fair Trading</a>` },
    { text: 'Electrical wiring work in NSW must be carried out by a licensed electrician, not attempted as a DIY repair' },
    { html: `All electrical repairs are completed in line with <a href="https://www.nsw.gov.au/housing-and-construction/compliance-and-regulation/electricians/electrical-standards-rules-and-notes" target="_blank" rel="noopener noreferrer" class="${a}">AS/NZS 3000</a> wiring rules` },
    { text: 'All work is completed under Electrical Supervisor Licence #467291C' },
  ],

  chooseHeading: 'What Sets Powerhub Electrical Revesby Apart on Repair Work',
  chooseLeadIn: 'A few reasons Revesby customers choose Powerhub Electrical for electrical repairs:',
  chooseItems: [
    { title: '$50 Off Your First Service', desc: 'New customers booking electrical repair work in Revesby can claim $50 off their first service, applied directly to the invoice rather than buried in confusing terms and conditions at all.' },
    { title: '15% Pensioner Discount', desc: 'Pensioners in Revesby receive 15% off the invoice for any electrical repair work, a straightforward reduction rather than a discount limited to a single call-out or inspection fee.' },
    { title: 'Transparent Advice, No Pressure', desc: 'Faults are explained honestly in plain language, including cheaper repair options where genuinely appropriate, rather than being upsold to a full rewire or replacement that is not yet needed.' },
    { title: 'Free 5-Star Safety Inspection', desc: 'Every repair booking includes a complimentary 5-star electrical safety inspection, giving Revesby homeowners a comprehensive check of switchboard and wiring safety beyond the immediate fault, at no additional cost.' },
  ],

  ctaHeading: 'Something Not Working Right?',
  ctaBody: 'Call Powerhub Electrical Revesby on 0400 332 331 for electrical repairs in Revesby, whether it\'s a tripping circuit, a dead power point or a fault you can\'t pin down. New customers save $50 on their first service, with obligation-free quotes.',

  faqs: [
    { q: 'How much do electrical repairs in Revesby cost?', a: 'Electrical repairs Revesby pricing depends on the type of fault, whether parts need replacing, and whether the issue is isolated or linked to a wider circuit or switchboard problem.' },
    { q: 'What counts as a general electrical repair?', a: 'General electrical repairs cover everything from tripping circuits and dead power points to faulty switches, flickering lights, and ageing wiring that has not yet caused a full emergency.' },
    { q: 'Is it worth getting old wiring inspected even if nothing seems wrong?', a: 'Yes, deteriorated wiring can hide behind walls or in the roof space for years before a fault becomes obvious, so an inspection can catch problems before they become serious.' },
    { q: 'Should I try to fix an electrical fault myself?', a: 'No, electrical wiring work in NSW must be carried out by a licensed electrician, and attempting DIY repairs can create serious safety risks as well as compliance issues later.' },
    { q: 'Do you offer any discount on electrical repair work in Revesby?', a: 'New Powerhub Electrical Revesby customers save $50 off their first service, and pensioners receive 15% off, discounts that apply to general repairs as well as other electrical work.' },
    { q: 'How long does a typical electrical repair take?', a: 'A straightforward repair, such as a faulty power point or switch, can often be completed within an hour, while more complex faults may take longer to fully diagnose.' },
  ],
};

export default page;
