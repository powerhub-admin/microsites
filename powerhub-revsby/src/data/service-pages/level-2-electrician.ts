import type { ServicePageData } from './types';

const a = 'font-semibold text-brand-secondary underline decoration-brand-accent/50 underline-offset-4 hover:text-brand-accent';

const page: ServicePageData = {
  metaTitle: 'Level 2 Electrician Revesby | Powerhub Electrical',
  metaDescription: 'Need a level 2 electrician in Revesby? Powerhub Electrical offers fixed pricing, obligation-free quotes and $50 off first service. Call 0400 332 331.',

  eyebrow: 'Network-side connection work',
  h1: 'Level 2 Electrician Revesby',
  supporting: "A level 2 electrician in Revesby handles the network side of a property's power connection. Brian Ho personally oversees every job.",
  badges: ['Fixed pricing', 'Obligation-free quotes', 'Licensed #467291C'],
  heroImg: '/images/powerhub/services/level-2-electrician.webp',
  navLabel: 'Level 2 Electrician',

  introHeading: 'Level 2 Electrical Work for Revesby Properties',
  introSub: 'Fixed pricing confirmed upfront, obligation-free quotes and 100+ positive reviews across greater Sydney.',
  introBody: "Some electrical jobs, such as a damaged service line or a meter relocation, fall outside what a standard electrician's licence covers. Powerhub Electrical Revesby provides a Level 2 electrician in Revesby for this network-side work, coordinated correctly with Ausgrid from application through to final connection.",

  coreHeading: 'Level 2 Services We Provide Across Revesby',
  coreLeadIn: 'Powerhub Electrical Revesby carries out the following types of Level 2 work across Revesby:',
  coreItems: [
    { title: 'Service Line Repairs and Replacement', desc: 'A level 2 electrician in Revesby can repair or replace the service line connecting a property to the street, work that sits outside the scope of a standard electrical licence.' },
    { title: 'Meter Installation and Relocation', desc: 'Meter boxes are installed, replaced, or relocated during renovations or extensions, with the network connection coordinated correctly rather than left to a standard electrician without the right accreditation to attempt it.' },
    { title: 'New Connections for Renovations and Extensions', desc: 'Renovations, extensions or new dwellings that change how a property connects to the network require Level 2 involvement, from the initial application through to final energisation of the new supply.' },
    { title: 'Overhead Service Line Work', desc: 'Damaged or sagging overhead service lines connecting a Revesby property to the street are repaired or replaced by accredited technicians, in accordance with network safety requirements from start to finish every time.' },
    { title: 'Underground Service Line Work', desc: 'Underground service lines running from the street to a property are repaired or replaced in line with network requirements, with the relevant authority notified before any work begins safely underground.' },
    { title: 'Point of Attachment Repairs', desc: "The point of attachment, where the network's service line meets a property's own wiring, is repaired or replaced when damaged, loose or no longer weatherproof enough to protect the connection." },
    { title: "Temporary Builder's Supply Connections", desc: "New builds or renovations across Revesby often need a temporary builder's supply connected to the network before permanent power is available, arranged through the same accredited Level 2 process throughout." },
  ],

  whyHeading: 'Why Level 2 Accreditation Matters',
  whyLeadIn: 'Level 2 work matters because it sits on the network side of the property boundary:',
  whyItems: [
    { title: 'Working Safely Near Live Network Infrastructure', desc: 'Service lines and connection points can carry higher voltages and different risks than internal household wiring, so this work requires accreditation well beyond a standard electrical licence to perform safely.' },
    { title: 'Avoiding Delays on Renovations and New Builds', desc: 'A renovation or new build that changes the network connection can stall without Level 2 involvement, since a standard electrician is not authorised to complete that part of the job.' },
    { title: 'Meeting Network Provider Requirements', html: `<a href="https://www.energy.nsw.gov.au/nsw-plans-and-progress/regulation-and-policy/asp-scheme-and-contestable-works" target="_blank" rel="noopener noreferrer" class="${a}">Network providers set strict rules</a> for who can work on service lines, meters and points of attachment, and only accredited Level 2 electricians are authorised to carry out that work.` },
    { title: 'Keeping Documentation for Future Reference', desc: 'Level 2 work is documented with the network provider, giving homeowners a clear record that can support a future sale, an insurance claim, or additional work at the same connection point.' },
  ],

  processHeading: 'Our Process for Level 2 Work in Revesby',
  processLeadIn: 'A level 2 electrician in Revesby with Powerhub Electrical Revesby usually follows this sequence from enquiry to final energisation:',
  processImg: '/images/powerhub/home/why-choose.webp',
  processSteps: [
    { n: '01', title: 'Enquiry and Job Assessment', desc: 'Revesby customers describe the job, such as a meter relocation or a damaged service line, before a time is arranged.' },
    { n: '02', title: 'Fixed Price Quote', desc: 'A fixed price for the Level 2 work is confirmed before any job is booked in, avoiding surprise costs later.' },
    { n: '03', title: 'Network Coordination Where Required', desc: 'For some jobs, the network provider is notified, or a connection application is lodged before any physical work can begin.' },
    { n: '04', title: 'Service Line or Meter Work', desc: 'The repair, replacement or relocation is carried out to network standards, whether it involves overhead, underground or meter-related network work.' },
    { n: '05', title: 'Testing and Sign Off', desc: 'The finished connection is tested and confirmed safe, with the electrician explaining what was done before power is fully restored.' },
  ],

  problemsHeading: 'Common Level 2 Problems Reported Across Revesby',
  problemsLeadIn: 'These are the Level 2 issues Revesby customers raise most often:',
  problemsItems: [
    { title: 'A Damaged or Sagging Service Line', desc: 'A service line that sags, has come loose from the point of attachment, or shows visible wear is a safety concern that needs attention from an accredited Level 2 electrician.' },
    { title: 'Meter Box Damage or Access Issues', desc: 'A cracked, water-damaged, or hard-to-access meter box can complicate routine meter reading or maintenance and often requires repair or relocation as part of a Level 2 accredited job done right.' },
    { title: 'Delays Connecting a Renovation or Extension', desc: 'Building work that changes how a property connects to the network can be delayed if Level 2 involvement is organised too late rather than planned in from the very start.' },
    { title: 'Confusion Over What Requires Level 2 Work', desc: 'Homeowners are sometimes unsure whether a job, such as a meter relocation or service line repair, requires Level 2 accreditation or can be completed entirely by a standard electrician.' },
  ],

  propertyHeading: 'How Level 2 Needs Differ by Property Type in Revesby',
  propertyLeadIn: 'Level 2 needs vary depending on the type of Revesby property involved:',
  propertyItems: [
    { title: 'Established Family Homes', desc: "Older Revesby homes sometimes have ageing overhead service lines or outdated meter boxes that were never designed for today's household electrical demand, making Level 2 assessment worthwhile during other upgrades." },
    { title: 'New Builds and Renovations', desc: 'New homes, granny flats, or major renovations across Revesby often need a new or upgraded network connection, arranged and energised through the same Level 2 accredited process every time.' },
    { title: 'Small Businesses and Shopfronts', desc: 'Revesby businesses upgrading their power supply, such as adding equipment or a 3 phase connection, generally need Level 2 involvement to coordinate the change safely with the network provider first.' },
  ],

  safetyHeading: 'Safety and Compliance for Level 2 Electrical Work',
  safetyLeadIn: 'A few things Powerhub Electrical wants Revesby customers to know about Level 2 work and compliance:',
  safetyBullets: [
    { text: "Level 2 work covers the section of the electrical network between the property and the network provider's supply, distinct from standard internal electrical work" },
    { text: 'Level 2 electricians hold accreditation from the relevant network provider in addition to a standard electrical licence' },
    { html: `Revesby sits within the <a href="https://www.ausgrid.com.au/asp-and-contractors/installation-and-service" target="_blank" rel="noopener noreferrer" class="${a}">Ausgrid network area</a>, and Level 2 work here follows Ausgrid's connection and installation standards` },
    { html: `All electrical work is completed in line with <a href="https://www.nsw.gov.au/housing-and-construction/compliance-and-regulation/electricians/electrical-standards-rules-and-notes" target="_blank" rel="noopener noreferrer" class="${a}">AS/NZS 3000</a> wiring rules` },
    { text: 'All work is completed under Electrical Supervisor Licence #467291C' },
  ],

  chooseHeading: 'What Sets Powerhub Electrical Revesby Apart on Level 2 Work',
  chooseLeadIn: 'A few reasons Revesby customers choose Powerhub Electrical for Level 2 work:',
  chooseItems: [
    { title: 'Obligation-Free Quotes', desc: 'A fixed price for the confirmed Level 2 work is provided before any job is booked in, so Revesby customers know the full cost without any pressure to proceed immediately.' },
    { title: 'Quality Over Quick Fixes', desc: 'The team focuses on quality workmanship over quick fixes or cutting corners, so Level 2 work is completed and documented correctly rather than rushed to move onto the next job.' },
    { title: 'Free 5-Star Safety Inspection', desc: 'Every Level 2 booking includes a complimentary 5-star electrical safety inspection, giving Revesby homeowners a broader check of switchboard and wiring safety beyond the network connection itself, at no cost.' },
    { title: 'Same Day Service Where Possible', desc: 'Urgent issues, such as a damaged service line or a loose meter, can often be scheduled for the same day, since Level 2 faults are treated as urgent.' },
  ],

  ctaHeading: 'Need Network-Side Electrical Work Done?',
  ctaBody: "Call Powerhub Electrical Revesby on 0400 332 331 for a level 2 electrician in Revesby, whether it's a damaged service line, a meter relocation or a new connection for a renovation. New customers save $50 on their first service today.",

  faqs: [
    { q: 'What does a level 2 electrician in Revesby actually do?', a: 'A level 2 electrician in Revesby works on the network side of a property, including service lines, meters, and connection points that sit entirely outside a standard electrical licence.' },
    { q: 'Is a Level 2 electrician different from a standard electrician?', a: 'Yes, a standard licence covers wiring inside a property, while Level 2 accreditation is required for work on the network side, such as service lines, meters and connection points.' },
    { q: 'Do I need Level 2 work for a home renovation?', a: 'If the renovation changes how the property connects to the network, such as relocating a meter or upgrading the service line, Level 2 involvement is generally required by law.' },
    { q: 'Which network provider services Revesby?', a: "Revesby sits within the Ausgrid network area, so Level 2 electrical work in Revesby is carried out in line with Ausgrid's accreditation, connection and installation requirements." },
    { q: 'Do you offer any discount on Level 2 work in Revesby?', a: 'New Powerhub Electrical Revesby customers save $50 off their first service, and pensioners receive 15% off, discounts that apply to Level 2 work as well as other electrical services.' },
    { q: 'How long does Level 2 work usually take?', a: 'A straightforward meter relocation or minor service line repair can often be completed within a few hours, while more complex connection work may take a full day or longer.' },
  ],
};

export default page;
