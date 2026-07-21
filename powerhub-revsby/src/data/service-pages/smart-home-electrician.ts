import type { ServicePageData } from './types';

const a = 'font-semibold text-brand-secondary underline decoration-brand-accent/50 underline-offset-4 hover:text-brand-accent';

const page: ServicePageData = {
  metaTitle: 'Smart Home Electrician Revesby | Powerhub Electrical',
  metaDescription: 'Need a smart home electrician in Revesby? Powerhub Electrical offers fixed pricing, obligation-free quotes and $50 off first service. Call 0400 332 331.',

  eyebrow: 'Wired for smart control',
  h1: 'Smart Home Electrician Revesby',
  supporting: 'A smart home electrician in Revesby wires switches, power points and lighting for app or voice control. Brian Ho personally oversees every job.',
  badges: ['Fixed pricing', 'Obligation-free quotes', 'Licensed #467291C'],
  heroImg: '/images/powerhub/services/smart%20home.webp',
  navLabel: 'Smart Home Electrician',

  introHeading: 'Smart Home Electrical Work for Revesby Properties',
  introSub: 'Fixed pricing confirmed upfront, obligation-free quotes and 100+ positive reviews across greater Sydney.',
  introBody: 'Controlling lights, power points and switchboards from a phone or by voice starts with the wiring behind the wall, not just the device itself. Powerhub Electrical provides a smart home electrician in Revesby to ensure switches, power points, and lighting circuits are wired correctly for reliable app or voice control.',

  coreHeading: 'Smart Home Services We Provide Across Revesby',
  coreLeadIn: 'Powerhub Electrical installs and wires the following smart home systems across Revesby:',
  coreItems: [
    { title: 'Smart Switch and Dimmer Installation', desc: 'A smart home electrician in Revesby can replace standard switches and dimmers with app-controlled or voice-compatible versions, wired correctly to the existing circuit rather than swapped over at the wall.' },
    { title: 'Smart Power Point Installation', desc: 'Smart power points can be switched individually via an app, allowing a household to turn off appliances left on standby without physically walking to each outlet.' },
    { title: 'Voice Assistant Compatible Wiring', desc: 'Switches and power points wired to work with voice assistants let a household control lighting or appliances by voice, provided the chosen devices are genuinely compatible with each other beforehand.' },
    { title: 'Smart Switchboard and Circuit Monitoring', desc: 'Some switchboard upgrades include circuit-level monitoring, letting a household see which circuits are using the most power rather than just a single total figure on the electricity bill each month.' },
    { title: 'Smart Lighting Scenes and Scheduling', desc: 'Lighting can be grouped into scenes or schedules, such as dimming living areas at night or automatically turning on outdoor lights at dusk each day, with no manual adjustment needed.' },
    { title: 'Retrofitting Smart Switches in Older Homes', desc: 'Many older Revesby homes lack a neutral wire at the switch, which some smart switches require to operate, so compatibility is checked before recommending a specific product for that location.' },
    { title: 'Smart Home Wiring for New Builds and Renovations', desc: 'Planning smart switches, lighting or power points during a renovation or new build allows the correct wiring to be run from the start, rather than retrofitted into a finished property.' },
  ],

  whyHeading: 'Why Proper Smart Home Wiring Matters',
  whyLeadIn: 'Smart home wiring is worth getting right for reasons beyond convenience:',
  whyItems: [
    { title: 'Avoiding Fire Risk From Incompatible Devices', desc: 'Fitting a smart switch not suited to the existing wiring, such as one requiring a neutral wire where none exists, can cause overheating, so compatibility should always be confirmed first.' },
    { title: 'Keeping Electrical and Data Work Separate', desc: 'Smart home installations often mix electrical wiring with data cabling for cameras or hubs, and these need to be run and separated correctly to meet current safety and network standards.' },
    { title: 'Avoiding Unreliable Smart Home Setups', desc: 'A smart switch or power point installed without proper wiring, or paired with an incompatible hub, often becomes unreliable, dropping connection or failing to respond rather than working as intended.' },
    { title: 'Supporting Future Upgrades', desc: 'Wiring installed correctly for smart switches or power points now makes it easier to add further smart devices later, rather than needing additional rewiring every time the system is expanded.' },
  ],

  processHeading: 'Our Process for Smart Home Work in Revesby',
  processLeadIn: 'A smart home electrician in Revesby with Powerhub Electrical usually follows this sequence from enquiry to final testing:',
  processImg: '/images/powerhub/home/why-choose.webp',
  processSteps: [
    { n: '01', title: 'Enquiry and Goals Discussion', desc: 'Revesby customers describe what they want to control, such as lighting or power points, so suitable products can be recommended.' },
    { n: '02', title: 'Fixed Price Quote', desc: 'A fixed price for the requested smart devices and installation is confirmed before any work is booked, avoiding surprise costs.' },
    { n: '03', title: 'Wiring Compatibility Check', desc: 'The electrician checks whether existing switch boxes have a neutral wire and confirms which smart devices will work reliably in those locations.' },
    { n: '04', title: 'Installation and Wiring', desc: 'Smart switches, power points, or switchboard components are wired and fitted correctly, in accordance with current wiring rules for each circuit involved.' },
    { n: '05', title: 'Testing and App Setup', desc: 'Every device is tested for correct operation, with the electrician confirming app or voice assistant connectivity before finishing the job.' },
  ],

  problemsHeading: 'Common Smart Home Problems Reported Across Revesby',
  problemsLeadIn: 'These are the smart home issues Revesby customers raise most often:',
  problemsItems: [
    { title: 'A Smart Switch That Will Not Work', desc: 'A smart switch that fails to operate correctly often points to a missing neutral wire, an incompatible hub, or wiring that was not suited to that product from the start.' },
    { title: 'Devices Dropping Connection Regularly', desc: 'Smart devices that regularly lose connection to an app or hub are usually affected by Wi-Fi signal strength, hub placement, or interference, rather than a fault with the switch itself.' },
    { title: 'No Neutral Wire at the Switch', desc: 'Many established Revesby homes were wired before smart switches existed, meaning some switch boxes have no neutral wire, which limits product choice unless a neutral is run to that point.' },
    { title: 'Confusion Over What Is Achievable', desc: 'Homeowners are sometimes unsure what a smart home electrician can actually wire versus what is handled through an app or a separate device purchased directly by the customer themselves later.' },
  ],

  propertyHeading: 'How Smart Home Needs Differ by Property Type in Revesby',
  propertyLeadIn: 'Smart home needs vary depending on the type of Revesby property involved:',
  propertyItems: [
    { title: 'Established Family Homes', desc: 'Older Revesby homes often need a compatibility check before adding smart switches, since original wiring rarely included the neutral wire that many smart switch products expect to be present today.' },
    { title: 'New Builds and Renovations', desc: 'New homes or major renovations across Revesby offer the easiest opportunity to wire in smart switches, power points and lighting circuits correctly from the outset, rather than retrofitting them later.' },
    { title: 'Small Businesses and Shopfronts', desc: 'Revesby cafes, offices or small shopfronts sometimes use smart lighting or power scheduling to reduce running costs outside trading hours, without needing staff to manually switch everything off each night.' },
  ],

  safetyHeading: 'Safety and Compliance for Smart Home Electrical Work',
  safetyLeadIn: 'A few things Powerhub Electrical wants Revesby customers to know about smart home electrical work and compliance:',
  safetyBullets: [
    { text: 'Smart switches, power points and switchboard wiring must be installed by a licensed electrician, the same as any other fixed electrical work' },
    { html: `Some smart home work, such as security camera or network data cabling, falls under separate <a href="https://www.acma.gov.au/cabling-provider-rules" target="_blank" rel="noopener noreferrer" class="${a}">telecommunications cabling registration rules</a> rather than a standard electrical licence` },
    { html: `All electrical wiring is completed in line with <a href="https://www.nsw.gov.au/housing-and-construction/compliance-and-regulation/electricians/electrical-standards-rules-and-notes" target="_blank" rel="noopener noreferrer" class="${a}">AS/NZS 3000</a> wiring rules` },
    { text: 'All work is completed under Electrical Supervisor Licence #467291C' },
  ],

  chooseHeading: 'What Sets Powerhub Electrical Apart on Smart Home Work',
  chooseLeadIn: 'A few reasons Revesby customers choose Powerhub Electrical for smart home electrical work:',
  chooseItems: [
    { title: '$50 Off Your First Service', desc: 'New customers booking smart home electrical work in Revesby can claim $50 off their first service, applied directly to the invoice rather than hidden behind confusing conditions or fine print.' },
    { title: '15% Pensioner Discount', desc: 'Pensioners in Revesby receive 15% off the invoice for any smart home electrical work, a straightforward reduction rather than a discount limited to a single call-out or inspection fee alone.' },
    { title: 'Transparent Advice, No Pressure', desc: 'Product and wiring options are explained honestly in plain language, including simpler alternatives where genuinely suitable, rather than being upsold to the most expensive smart home setup available every time.' },
    { title: 'Quality Over Quick Fixes', desc: 'The team focuses on quality workmanship over quick fixes or cutting corners, so smart devices are wired properly and tested thoroughly rather than left unreliable to save a few minutes.' },
  ],

  ctaHeading: 'Ready to Control Your Home From Your Phone?',
  ctaBody: "Call Powerhub Electrical Revesby on 0400 332 331 for a smart home electrician in Revesby, whether it's smart switches, app-controlled power points or voice assistant-compatible lighting. New customers save $50 on their first service, with every quote always obligation-free.",

  faqs: [
    { q: 'How much does a smart home electrician in Revesby charge?', a: 'A smart home electrician in Revesby prices work based on the number of switches or devices involved, whether a neutral wire needs running, and any switchboard work required.' },
    { q: 'Do all smart switches need a neutral wire?', a: 'No, some smart switches are designed to work without one, though options are more limited and the electrician will confirm what suits the existing wiring at each switch location.' },
    { q: 'Can you install security camera wiring as part of smart home work?', a: 'Basic electrical wiring for smart devices is within a standard electrical licence, though some security camera and data cabling work requires separate telecommunications cabling registration to complete.' },
    { q: 'Do smart switches work with any voice assistant?', a: 'Compatibility varies by product and brand, so it is worth confirming which voice assistant or app ecosystem a household already uses before choosing specific smart switches or power points.' },
    { q: 'Do you offer any discount on smart home work in Revesby?', a: 'New Powerhub Electrical Revesby customers save $50 off their first service, and pensioners receive 15% off, discounts that apply to smart home wiring as well as other electrical work.' },
    { q: 'How long does smart switch installation usually take?', a: 'A handful of smart switches can often be installed within a couple of hours, while larger jobs involving new circuits or switchboard monitoring may take longer to complete.' },
  ],
};

export default page;
