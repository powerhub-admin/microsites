import type { ServicePageData } from './types';

const a = 'font-semibold text-brand-secondary underline decoration-brand-accent/50 underline-offset-4 hover:text-brand-accent';

const page: ServicePageData = {
  metaTitle: 'Appliance Installation St Ives | Powerhub Electrical',
  metaDescription: 'Need appliance installation in St Ives? Powerhub Electrical safely wires ovens, cooktops, rangehoods and more. Call 0400 332 331 for a fixed quote.',

  eyebrow: 'Connected safely, same day',
  h1: 'Appliance Installation St Ives',
  supporting: 'Careful appliance installation across St Ives, ensuring the circuit and isolation switch are correct. Backed by a 15% pensioner discount and a fully licensed electrician.',
  badges: ['$50 off first service', 'Free safety inspection', 'Licensed #467291C'],
  heroImg: '/images/powerhub/services/appliance-install.webp',
  navLabel: 'Appliance Installation',

  introHeading: 'New Appliance Waiting to Be Connected?',
  introSub: 'Correct circuits, correct isolation switches, and a clean connection every time.',
  introBody: 'Ovens, cooktops and rangehoods need more than a plug; they need the right dedicated circuit and, in many cases, a properly positioned isolation switch. Powerhub Electrical completes appliance installation across St Ives correctly, so your new appliance is safe and ready to use.',

  coreHeading: 'Appliance Installation Situations We Handle',
  coreLeadIn: 'Our electricians handle appliance installation across St Ives in a range of common situations, including:',
  coreItems: [
    { title: 'Wall oven installation', desc: 'A new wall oven needs a dedicated circuit sized correctly for its load, and we connect it safely so the appliance operates exactly as the manufacturer intended from day one.' },
    { title: 'Cooktop and induction cooktop installation', desc: 'Electric and induction cooktops are open cooking surfaces that require a nearby isolation switch under the wiring rules, and we position and wire this correctly as part of the connection.' },
    { title: 'Rangehood electrical connection', desc: 'New rangehoods need their own properly wired connection, and where combined with ducted exhaust or lighting, we make sure every part works together correctly and safely afterwards without any issues.' },
    { title: 'Dishwasher circuits', desc: 'Dishwashers often need their own dedicated circuit rather than sharing one with other kitchen appliances, and we wire this properly so the circuit never trips during everyday household use.' },
    { title: 'Dedicated circuits for air conditioners', desc: "Split system and ducted air conditioners generally need their own isolation switch and dedicated circuit, and we install this to the manufacturer's specifications so the unit runs reliably for years." },
    { title: 'Appliance isolation switches', html: `Certain fixed appliances are legally required to have a nearby <a href="https://www.standards.org.au/flagship-projects/wiring-rules" target="_blank" rel="noopener noreferrer" class="${a}">isolation switch</a> for safe servicing and emergency shutoff, and we install these in the correct position as part of every eligible appliance connection.` },
  ],

  whyHeading: 'Why Getting Appliance Installation Right Matters',
  whyLeadIn: 'Getting appliance installation right delivers benefits that go well beyond simply having power at the wall:',
  whyItems: [
    { title: 'Genuine emergency isolation', desc: 'A properly positioned isolation switch lets anyone cut power to a cooktop or appliance instantly during a fault or fire, rather than fumbling toward a distant switchboard in an emergency.' },
    { title: 'Avoiding nuisance tripping and overload', desc: 'Sharing a circuit between a dishwasher, oven and other appliances often causes nuisance tripping, and a dedicated circuit for each high-draw appliance keeps everything running smoothly without interruption or hassle.' },
    { title: 'Protecting manufacturer warranty', desc: 'Many appliance warranties require correct electrical installation to remain valid, and a poorly wired connection can quietly void coverage on an oven, cooktop or dishwasher worth many thousands of dollars.' },
    { title: 'Avoiding costly rework later', desc: 'Connecting a new appliance to an undersized or shared circuit today often means paying for a proper dedicated circuit later anyway, once the original setup inevitably starts causing genuine problems.' },
  ],

  processHeading: 'Our Appliance Installation Process for St Ives Homes',
  processLeadIn: 'Booking appliance installation across St Ives generally follows this straightforward sequence:',
  processSteps: [
    { n: '01', title: 'Confirm appliance details', desc: 'You tell us the appliance model and location, so we can confirm exactly which circuit and switch it needs.' },
    { n: '02', title: 'Fixed quote', desc: 'We provide a clear, fixed quote covering the wiring, isolation switch, and connection work involved before anything begins in earnest.' },
    { n: '03', title: 'Installation', desc: 'Our electrician runs the circuit, fits any required isolation switch, and connects the appliance safely and correctly throughout the process.' },
    { n: '04', title: 'Testing and handover', desc: 'We test the appliance to confirm it operates correctly before considering the installation fully complete and properly finished.' },
  ],

  problemsHeading: 'Common Appliance Installation Problems Across St Ives',
  problemsLeadIn: 'Certain appliance installation problems come up again and again across St Ives homes, including:',
  problemsItems: [
    { title: 'Missing isolation switches', desc: 'Older kitchens sometimes have a cooktop connected without a proper isolation switch, which is a gap in the safety setup that needs to be corrected during any appliance upgrade.' },
    { title: 'Shared circuits causing nuisance trips', desc: 'A new dishwasher, oven or air conditioner sharing a circuit with several other appliances often trips repeatedly under combined load, and giving it its own dedicated circuit resolves this permanently.' },
    { title: 'Undersized circuits for modern appliances', desc: 'Circuits wired decades ago for a smaller, simpler oven often cannot handle a modern high-power model safely, and upgrading the circuit is a genuine necessity, not an optional extra afterwards.' },
    { title: 'Rangehood ducting overlooked during installation', desc: 'New rangehoods are connected electrically but never properly ducted; they still just recirculate steam and grease around the kitchen, so we check the ducting alongside the electrical connection during any rangehood installation.' },
  ],

  safetyHeading: 'Appliance Installation Standards for St Ives Homeowners',
  safetyLeadIn: 'A few important points are worth knowing about appliance installation:',
  safetyBullets: [
    { html: `Before installing a used or older appliance, it is worth checking the <a href="https://www.productsafety.gov.au/recalls" target="_blank" rel="noopener noreferrer" class="${a}">ACCC's product recall register</a> to confirm it has not been recalled for a safety issue` },
    { text: 'Fixed cooking appliances with an open cooking surface generally require a nearby isolation switch under the wiring rules' },
    { html: `Powerhub Electrical holds Electrical Contractor Licence #467291C, verifiable through the <a href="https://verify.licence.nsw.gov.au/details/Contractor%20Licence/1-46C84T5" target="_blank" rel="noopener noreferrer" class="${a}">NSW licence register</a>` },
    { html: `ABN 91 677 354 602, searchable through the <a href="https://abr.business.gov.au/ABN/View?id=91677354602" target="_blank" rel="noopener noreferrer" class="${a}">Australian Business Register</a>` },
  ],

  chooseHeading: 'Why Choose Powerhub Electrical for Appliance Installation',
  chooseLeadIn: "Here's what genuinely sets Powerhub Electrical apart for appliance installation:",
  chooseItems: [
    { title: '$50 off your first service', desc: 'New customers across St Ives save $50 off their first booking with Powerhub Electrical, whether that is a single oven connection or a full kitchen renovation electrical fit-out.' },
    { title: 'Same-day service where possible', desc: 'Straightforward appliance connections, such as a single oven or dishwasher, can often be completed the same day, and Powerhub Electrical prioritises this whenever the schedule genuinely allows during renovations.' },
    { title: 'Free 5-star safety inspection', desc: 'Every appliance installation includes a complimentary five-star electrical safety inspection, so St Ives homeowners also learn whether anything else nearby needs attention while the electrician is already on site anyway.' },
    { title: '100+ five-star reviews', desc: 'More than one hundred five-star reviews reflect consistently correct, properly wired appliance installations across St Ives, giving homeowners real confidence before a single oven, cooktop or dishwasher gets safely connected.' },
  ],

  ctaHeading: 'New Appliance Ready to Be Connected?',
  ctaBody: 'If you need appliance installation across St Ives, call Powerhub Electrical on 0400 332 331 for a fixed quote. New customers save $50 on their first service, and every job includes a free five-star safety inspection.',

  faqs: [
    { q: 'Do you offer appliance installation across St Ives?', a: 'Yes, Powerhub Electrical provides appliance installation across St Ives, connecting ovens, cooktops, rangehoods, dishwashers and air conditioners safely and correctly, every single time we visit.' },
    { q: 'Do I need an isolation switch for my new cooktop?', a: 'Yes, electric and induction cooktops generally require a nearby isolation switch under the wiring rules, and we install this correctly as part of the connection.' },
    { q: 'Why does my dishwasher keep tripping the circuit?', a: 'Sharing a circuit with other appliances often causes nuisance tripping, and giving the dishwasher its own dedicated circuit usually resolves this issue permanently.' },
    { q: 'Can you install a rangehood as part of a kitchen renovation?', a: 'Yes, we handle the electrical connection and check the ducting, so the rangehood actually vents outside rather than just recirculating steam and cooking odours indoors.' },
    { q: 'Will my new oven need its own dedicated circuit?', a: "Yes, ovens generally need a dedicated circuit sized correctly for the appliance's load, rather than sharing a circuit with other kitchen appliances or outlets instead." },
    { q: 'Should I check if my appliance has been recalled before installation?', a: "Yes, checking the ACCC's product recall register before installing a used or older appliance is a sensible, quick safety step to take every time." },
  ],
};

export default page;
