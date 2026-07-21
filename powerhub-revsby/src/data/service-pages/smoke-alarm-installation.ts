import type { ServicePageData } from './types';

const a = 'font-semibold text-brand-secondary underline decoration-brand-accent/50 underline-offset-4 hover:text-brand-accent';

const page: ServicePageData = {
  metaTitle: 'Smoke Alarm Installation Revesby | Powerhub Electrical',
  metaDescription: 'Need a smoke alarm installation in Revesby? Powerhub Electrical offers fixed pricing, obligation-free quotes and $50 off first service. Call 0400 332 331.',

  eyebrow: 'Compliant fire safety',
  h1: 'Smoke Alarm Installation Revesby',
  supporting: 'Installing a smoke alarm in Revesby helps a home meet NSW safety requirements. Every booking with us includes a free 5-star safety inspection.',
  badges: ['Fixed pricing', 'Obligation-free quotes', 'Licensed #467291C'],
  heroImg: '/images/powerhub/services/smoke-alarm-01.webp',
  navLabel: 'Smoke Alarm Installation',
  introImg: '/images/powerhub/services/smoke-alarm-installation-2.webp',

  introHeading: 'Protecting Revesby Homes and Rentals With Working Smoke Alarms',
  introSub: 'Fixed pricing confirmed upfront, obligation-free quotes and 100+ positive reviews across greater Sydney.',
  introBody: 'Working smoke alarms are one of the simplest ways to protect a home, and NSW law sets clear requirements for where alarms must be installed. Powerhub Electrical carries out smoke alarm installations in Revesby that meet current requirements, using photoelectric, interconnected alarms rather than outdated technology.',

  coreHeading: 'Smoke Alarm Services We Provide Across Revesby',
  coreLeadIn: 'Powerhub Electrical installs and services the following smoke alarm systems across Revesby:',
  coreItems: [
    { title: 'New Smoke Alarm Installation', desc: 'A smoke alarm installation in Revesby covers fitting new alarms in bedrooms, hallways, and living areas, positioned to give early warning to everyone sleeping in the property at night.' },
    { title: 'Interconnected Smoke Alarm Systems', html: `<a href="https://ncc.abcb.gov.au/editions/2019-a1/ncc-2019-volume-two-amendment-1/part-37-fire-safety/part-375-smoke-alarms-and" target="_blank" rel="noopener noreferrer" class="${a}">Interconnected alarms</a> are wired or wirelessly linked so that if one alarm detects smoke, every alarm in the property sounds at the same time, no matter where it starts.` },
    { title: 'Hardwired Smoke Alarm Upgrades', html: `<a href="https://www.fire.nsw.gov.au/page.php?id=441" target="_blank" rel="noopener noreferrer" class="${a}">Hardwired alarms</a> connect directly to the property's 240-volt supply with a battery backup, removing the risk of a flat battery leaving a home unprotected overnight without anyone noticing.` },
    { title: 'Photoelectric Alarm Replacement', desc: 'Older ionisation alarms or units approaching the end of their working life are replaced with current photoelectric alarms, which detect slow-burning, smouldering fires faster than older alarm technology typically could.' },
    { title: 'Smoke Alarms for Rental Compliance', html: `Landlords and property managers across Revesby can arrange smoke alarm testing, repairs and replacement to meet <a href="https://www.nsw.gov.au/housing-and-construction/rules/smoke-alarms-a-rental-property" target="_blank" rel="noopener noreferrer" class="${a}">ongoing rental compliance</a> obligations without waiting for a tenant complaint to prompt the work.` },
    { title: 'Smoke Alarm Testing and Servicing', desc: 'Existing alarms are tested, cleaned and checked against their manufacture date, since alarms over ten years old lose sensitivity even if the test button appears to work normally when checked.' },
    { title: 'Smoke Alarms for Renovations and New Circuits', desc: 'Kitchen, bathroom, or whole-home renovations are common triggers for upgrading to hardwired, interconnected smoke alarms when walls and ceilings are already open for other electrical work during the project.' },
  ],

  whyHeading: 'Why Working Smoke Alarms Matter',
  whyLeadIn: 'Working smoke alarms remain one of the simplest ways to protect a home and the people in it:',
  whyItems: [
    { title: 'Early Warning Saves Critical Time', desc: 'A working smoke alarm can detect smoke and sound an alert well before a fire becomes visible or a sleeping household would otherwise notice, giving valuable extra time to escape.' },
    { title: 'Meeting Legal Obligations', desc: 'NSW law requires working smoke alarms in every home where people sleep, and landlords carry additional legal obligations to keep alarms in rented properties tested and in working order year-round.' },
    { title: 'Reducing False Alarms From Cooking', desc: 'Correctly positioned alarms, kept clear of kitchens and steamy bathrooms, are less likely to be triggered by cooking or steam, which means residents are less tempted to disconnect or ignore them.' },
    { title: 'Supporting Insurance and Compliance Records', desc: 'A documented smoke alarm installation or upgrade, including the alarm type and location, provides homeowners and landlords with a clear compliance record that can support an insurance claim if a fire occurs.' },
  ],

  processHeading: 'Our Installation Process for Revesby Properties',
  processLeadIn: 'A smoke alarm installation in Revesby usually follows this sequence from enquiry to final testing:',
  processImg: '/images/powerhub/home/why-choose.webp',
  processSteps: [
    { n: '01', title: 'Enquiry and Property Assessment', desc: 'Revesby customers describe their property layout and existing alarms, helping determine how many new alarms are needed to meet compliance.' },
    { n: '02', title: 'Fixed Price Quote', desc: 'A fixed price for the required alarms and installation is confirmed before any work is booked, avoiding surprise costs later.' },
    { n: '03', title: 'Placement and Type Selection', desc: 'The electrician selects photoelectric alarms and confirms correct placement in bedrooms, hallways and living areas based on the property layout.' },
    { n: '04', title: 'Installation and Interconnection', desc: 'New alarms are wired or wirelessly linked so that every alarm activates together, then connected to the switchboard or an existing circuit.' },
    { n: '05', title: 'Testing and Sign Off', desc: 'Every alarm is tested individually and as a group before the electrician explains the system and confirms it is working.' },
  ],

  problemsHeading: 'Common Smoke Alarm Problems Reported Across Revesby',
  problemsLeadIn: 'These are the smoke alarm issues Revesby customers raise most often:',
  problemsItems: [
    { title: 'An Alarm That Keeps Chirping', desc: 'A smoke alarm that chirps intermittently, rather than sounding a full alarm, usually signals a low or faulty battery and should be addressed immediately rather than removed or ignored.' },
    { title: 'An Alarm Over Ten Years Old', html: `Smoke alarms lose sensitivity over time, and any alarm more than 10 years past its <a href="https://www.fire.nsw.gov.au/page.php?id=444" target="_blank" rel="noopener noreferrer" class="${a}">manufacture date</a> should be replaced entirely rather than relying on the test button alone.` },
    { title: 'Alarms That Are Not Interconnected', desc: 'A property with several standalone alarms rather than an interconnected system means a fire detected in one room may not be heard quickly enough by people sleeping in another bedroom.' },
    { title: 'Alarms Installed in the Wrong Position', desc: 'Alarms placed too close to kitchens, bathrooms or ceiling fans can trigger false alarms or fail to detect smoke effectively, both of which lead residents to distrust or disable them.' },
  ],

  propertyHeading: 'How Smoke Alarm Needs Differ by Property Type in Revesby',
  propertyLeadIn: 'Smoke alarm needs vary depending on the type of Revesby property involved:',
  propertyItems: [
    { title: 'Established Family Homes', desc: 'Older Revesby homes often still have outdated ionisation alarms or standalone battery units, making them a common candidate for upgrading to current interconnected, photoelectric smoke alarm systems throughout the property.' },
    { title: 'Rental and Unit Properties', desc: 'Landlords and property managers across Revesby need to ensure smoke alarms are tested and compliant at all times, with repairs generally required within two business days of any fault being reported.' },
    { title: 'Small Businesses and Shopfronts', desc: 'Commercial premises in Revesby may have different smoke alarm or fire detection obligations than residential homes, depending on the type of business and any specific fire safety requirements that apply.' },
  ],

  safetyHeading: 'Safety and Compliance for Smoke Alarm Installations',
  safetyLeadIn: 'A few things Powerhub Electrical wants Revesby customers to know about smoke alarms and compliance:',
  safetyBullets: [
    { text: 'Landlords have specific ongoing legal obligations for smoke alarms in rented properties, separate from standard homeowner requirements' },
    { html: `Alarm testing, cleaning and battery guidance is outlined in <a href="https://www.fire.nsw.gov.au/page.php?id=444" target="_blank" rel="noopener noreferrer" class="${a}">Fire and Rescue NSW's maintenance guidance</a>` },
    { html: `All smoke alarm wiring is completed in line with <a href="https://www.nsw.gov.au/housing-and-construction/compliance-and-regulation/electricians/electrical-standards-rules-and-notes" target="_blank" rel="noopener noreferrer" class="${a}">AS/NZS 3000</a> wiring rules` },
    { text: 'All work is completed under Electrical Supervisor Licence #467291C' },
  ],

  chooseHeading: 'What Sets Powerhub Electrical Revesby Apart on Fire Safety Work',
  chooseLeadIn: 'A few reasons Revesby customers trust Powerhub Electrical with fire safety work:',
  chooseItems: [
    { title: '25+ Years Combined Experience', desc: 'Powerhub Electrical brings more than 25 years of combined trade experience to smoke alarm work, giving Revesby customers a team familiar with older wiring and outdated alarm systems still installed.' },
    { title: 'Transparent Advice, No Pressure', desc: 'Alarm types, placement and compliance requirements are explained honestly in plain language, rather than upselling unnecessary alarms or features a Revesby property does not actually need to remain fully compliant.' },
    { title: '100+ Positive Reviews', desc: 'Over 100 positive customer reviews give Revesby homeowners and landlords a track record to check before trusting someone with fire safety equipment in their homes or businesses today.' },
    { title: 'Free 5-Star Safety Inspection', desc: 'Every smoke alarm booking includes a complimentary 5-star electrical safety inspection, giving Revesby homeowners a broader check of switchboard and wiring safety beyond the alarms themselves, at no cost whatsoever.' },
  ],

  ctaHeading: 'Need Smoke Alarms Installed or Tested?',
  ctaBody: "Call Powerhub Electrical Revesby on 0400 332 331 for a smoke alarm installation in Revesby, whether it's new alarms, a compliance check or a rental inspection. New customers save $50 on their first service, with every quote kept fully obligation-free.",

  faqs: [
    { q: 'How much does a smoke alarm installation in Revesby cost?', a: 'Smoke alarm installation pricing in Revesby depends on the number of alarms needed, whether they are hardwired or battery-powered, and whether interconnection between alarms is required.' },
    { q: 'How many smoke alarms does my home need?', a: 'NSW law requires at least one working smoke alarm on every level of a home, with alarms also generally required in bedrooms and connecting hallways.' },
    { q: 'What type of smoke alarm is required in NSW?', a: 'NSW requires photoelectric smoke alarms rather than older ionisation-type alarms, since photoelectric alarms detect slow, smouldering fires more quickly and produce fewer false alarms from cooking.' },
    { q: 'Do smoke alarms need to be interconnected?', a: 'Interconnection is required where more than one smoke alarm is installed, so that every alarm in the property sounds together no matter where the smoke is first detected.' },
    { q: 'Do you offer any discount on smoke alarm work in Revesby?', a: 'New Powerhub Electrical Revesby customers save $50 off their first service, and pensioners receive 15% off, discounts that apply to smoke alarm installations as well as other electrical work.' },
    { q: 'Do you install smoke alarms in rental properties?', a: 'Yes, smoke alarm installation and compliance testing are available for rental properties across Revesby, helping landlords and property managers meet their ongoing legal obligations to tenants.' },
  ],
};

export default page;
