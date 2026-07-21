import type { ServicePageData } from './types';

const a = 'font-semibold text-brand-secondary underline decoration-brand-accent/50 underline-offset-4 hover:text-brand-accent';

const page: ServicePageData = {
  metaTitle: 'Electrical Fault Finding Revesby | Powerhub Electrical',
  metaDescription: 'Need electrical fault finding in Revesby? Powerhub Electrical offers fixed pricing, obligation-free quotes and $50 off first service. Call 0400 332 331.',

  eyebrow: 'Root cause diagnosis',
  h1: 'Electrical Fault Finding Revesby',
  supporting: 'Electrical fault-finding in Revesby means locating the root cause, not just resetting a switch. The focus is on quality over quick fixes.',
  badges: ['Fixed pricing', 'Obligation-free quotes', 'Licensed #467291C'],
  heroImg: '/images/powerhub/services/electrical-fault-finding.webp',
  navLabel: 'Electrical Fault Finding',

  introHeading: 'Diagnosing Tricky Electrical Problems Across Revesby',
  introSub: 'Fixed pricing confirmed upfront, obligation-free quotes and 100+ positive reviews across greater Sydney.',
  introBody: 'Some electrical problems do not have an obvious cause, especially faults that come and go or seem to move between circuits. Powerhub Electrical carries out electrical fault-finding in Revesby using proper testing equipment to trace the root cause of a problem, rather than guessing or unnecessarily replacing parts.',

  coreHeading: 'Fault Finding Services We Provide Across Revesby',
  coreLeadIn: 'Powerhub Electrical carries out the following types of fault finding across Revesby:',
  coreItems: [
    { title: 'Intermittent Fault Diagnosis', desc: 'Electrical fault finding in Revesby often involves problems that come and go, using test equipment to catch a fault that might not be present when an electrician arrives.' },
    { title: 'Tracing Tripping Circuits to the Source', desc: 'A circuit that trips repeatedly is traced back to the actual cause, whether that is a specific appliance, a damaged cable or moisture, rather than being reset over and over.' },
    { title: 'Testing and Isolating Faulty Circuits', desc: 'Suspect circuits are tested and isolated one at a time with test equipment, narrowing down the exact location of a fault rather than guessing where the problem might be.' },
    { title: 'Locating Faults Behind Walls or Ceilings', desc: 'Hidden faults behind walls, under floors, or inside ceiling cavities are located using testing equipment rather than unnecessarily opening up plaster or flooring to search for a problem visually first.' },
    { title: 'Diagnosing Appliance vs Wiring Faults', desc: 'A fault affecting one appliance or area is traced to confirm whether the problem lies with the appliance, the power point, or the wiring feeding that part of the property.' },
    { title: 'Fault Finding Before a Larger Renovation', desc: 'Older wiring is tested and assessed before a renovation begins, identifying existing faults early rather than discovering them mid-project once walls are open and the job is already underway completely.' },
    { title: 'Fault Finding for Commercial and Rental Properties', desc: 'Revesby businesses and rental properties benefit from documented fault finding, giving landlords, tenants or business owners a clear record of what was tested and found, rather than a verbal explanation.' },
  ],

  whyHeading: 'Why Proper Fault Finding Matters',
  whyLeadIn: 'Getting to the real cause of a fault protects more than just convenience:',
  whyItems: [
    { title: 'Reducing Fire Risk From Unresolved Faults', html: `<a href="https://www.fire.nsw.gov.au/page.php?id=9216" target="_blank" rel="noopener noreferrer" class="${a}">Electrical faults cause almost 40% of home fires in NSW, so properly diagnosing and fixing</a> the actual cause of a problem is far safer than resetting a switch or breaker.` },
    { title: 'Avoiding Repeat Callouts and Wasted Cost', desc: 'A fault properly diagnosed the first time is less likely to return within weeks, saving the cost and inconvenience of a second callout for a problem that was never resolved.' },
    { title: 'Protecting Appliances and Devices', desc: 'An unresolved wiring fault, such as unstable voltage or a poor connection, can damage sensitive electronics over time, so identifying the true cause protects everything connected to that same circuit.' },
    { title: 'Supporting Records for Insurance or Sale', desc: 'A documented fault finding report, including what was tested and what was found, gives homeowners a clear paper trail that can support an insurance claim or reassure a buyer later.' },
  ],

  processHeading: 'Our Fault Finding Process for Revesby Properties',
  processLeadIn: 'Electrical fault finding in Revesby usually follows this sequence from enquiry to final testing:',
  processImg: '/images/powerhub/home/why-choose.webp',
  processSteps: [
    { n: '01', title: 'Enquiry and Symptom Description', desc: 'Revesby customers describe when the fault occurs, what triggers it, and exactly which circuits or appliances are affected.' },
    { n: '02', title: 'Fixed Price Quote', desc: 'A fixed price for the fault-finding visit is confirmed before any work begins, avoiding surprise costs during diagnosis itself.' },
    { n: '03', title: 'Systematic Testing', desc: 'The electrician tests suspect circuits methodically, using test equipment to precisely narrow down the exact location of the fault.' },
    { n: '04', title: 'Explaining the Findings', desc: 'Once the cause is identified, the electrician explains it in plain language, along with the recommended fix and any options.' },
    { n: '05', title: 'Repair and Sign Off', desc: 'Once the customer agrees to proceed, the fault is repaired and tested, with the electrician confirming everything is working safely.' },
  ],

  problemsHeading: 'Common Fault Finding Scenarios Reported Across Revesby',
  problemsLeadIn: 'These are the fault-finding scenarios Revesby customers raise most often:',
  problemsItems: [
    { title: 'A Fault That Only Happens Sometimes', desc: 'An intermittent fault that appears only occasionally, such as under load, in certain weather, or at particular times of day, is often harder to trace but not impossible to find.' },
    { title: 'Lights or Appliances That Flicker Randomly', desc: 'Random flickering across multiple lights or appliances can indicate a loose connection somewhere in the switchboard or on a shared circuit, rather than a fault with any single fitting.' },
    { title: 'A Fault That Keeps Coming Back', desc: 'A problem that seems fixed but returns weeks later usually means the original repair addressed a symptom rather than the underlying cause, which fault-finding aims to identify properly.' },
    { title: 'No Obvious Cause for a Power Loss', desc: 'A total or partial loss of power with no visible trigger, such as a storm or an overloaded appliance, needs systematic testing rather than guesswork to find what actually happened.' },
  ],

  propertyHeading: 'How Fault Finding Differs by Property Type in Revesby',
  propertyLeadIn: 'Fault finding with Powerhub Electrical looks a little different depending on the type of Revesby property involved:',
  propertyItems: [
    { title: 'Established Family Homes', desc: 'Older Revesby homes are more likely to have hidden faults linked to ageing wiring, previous DIY work, or outdated switchboards, making thorough fault-finding worthwhile before problems become more serious.' },
    { title: 'Rental and Unit Properties', desc: 'Tenants noticing an unexplained electrical issue are encouraged to contact their property manager, since fault-finding and any resulting repairs in a rental generally require the landlord\'s approval first.' },
    { title: 'Small Businesses and Shopfronts', desc: 'A recurring or unexplained fault affecting a Revesby business can disrupt trading and equipment, making a thorough diagnosis more valuable than a quick fix that only addresses the visible symptom.' },
  ],

  safetyHeading: 'Safety and Compliance for Electrical Fault Finding',
  safetyLeadIn: 'A few things worth knowing about electrical fault finding and compliance in Revesby:',
  safetyBullets: [
    { text: 'Attempting to trace or fix an electrical fault without a licence is illegal and dangerous in NSW' },
    { html: `General information on avoiding electrical accidents at home is available from <a href="https://www.nsw.gov.au/housing-and-construction/electrical-safety/common-electrical-hazards" target="_blank" rel="noopener noreferrer" class="${a}">NSW Fair Trading</a>` },
    { html: `All fault finding and any resulting repairs are completed in line with <a href="https://www.nsw.gov.au/housing-and-construction/compliance-and-regulation/electricians/electrical-standards-rules-and-notes" target="_blank" rel="noopener noreferrer" class="${a}">AS/NZS 3000</a> wiring rules` },
    { text: 'All work is completed under Electrical Supervisor Licence #467291C' },
  ],

  chooseHeading: 'What Sets Powerhub Electrical Apart on Fault Finding',
  chooseLeadIn: 'A few reasons Revesby customers choose Powerhub Electrical for fault finding work:',
  chooseItems: [
    { title: '$50 Off Your First Service', desc: 'New customers booking fault-finding work in Revesby can claim $50 off their first service, applied directly to the invoice rather than buried in confusing terms and conditions.' },
    { title: '15% Pensioner Discount', desc: 'Pensioners in Revesby receive 15% off the invoice for any fault-finding work, a straightforward reduction rather than a discount limited to a single call-out or inspection fee.' },
    { title: 'Director-Led Electrical Work', desc: 'Brian Ho, director of Powerhub Electrical, personally oversees the standard of work across Revesby, meaning the licence responsible for every fault-finding job belongs to the person quoting the work.' },
    { title: 'Transparent Advice, No Pressure', desc: 'Findings are explained honestly in plain language, including the actual cause of a fault, rather than being upsold to a full rewire or switchboard replacement that is not actually needed.' },
  ],

  ctaHeading: 'Got an Electrical Problem Nobody Can Explain?',
  ctaBody: "Call Powerhub Electrical Revesby on 0400 332 331 for electrical fault-finding in Revesby, whether it's a circuit that keeps tripping, a light that flickers, or a fault nobody else has found. New customers save $50 on their first service.",

  faqs: [
    { q: 'How much does electrical fault finding in Revesby cost?', a: 'Electrical fault finding Revesby pricing depends on how long the diagnosis takes and how many circuits need testing, with a fixed price confirmed before any repair work begins.' },
    { q: 'Why is my circuit tripping for no clear reason?', a: 'A circuit that trips without an obvious cause often has a loose connection, damaged cabling or moisture somewhere in the circuit, which testing equipment can help identify precisely.' },
    { q: 'Can you find a fault that only happens occasionally?', a: 'Intermittent faults are harder to trace than constant ones, but detailed questioning about when the fault occurs, combined with testing equipment, can usually identify the likely cause.' },
    { q: 'Is it illegal to try to find an electrical fault myself?', a: 'Yes, electrical fault-finding involving fixed wiring must be carried out by a licensed electrician in NSW, and attempting it yourself can pose serious safety and compliance risks.' },
    { q: 'Do you offer any discount on fault finding work in Revesby?', a: 'New Powerhub Electrical customers save $50 off their first service, and pensioners receive 15% off, discounts that apply to fault finding as well as other electrical work.' },
    { q: 'How long does a typical fault finding visit take?', a: 'A straightforward fault can often be identified within an hour, while intermittent or hidden faults may take longer to trace, especially if the problem does not occur during testing.' },
  ],
};

export default page;
