// Powerhub Electrical — St Ives service catalogue.
// Drives the Services nav dropdown, the Services index page, and the
// dynamic /services/[slug] pages. Copy follows the brand voice:
// Australian English, sentence case, "we/us", "your home", no em dashes.

export interface ServicePoint {
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  navLabel: string;   // label used in the nav dropdown + cards
  title: string;      // page H1 (keyword-led)
  tagline: string;    // short eyebrow / card sub-line
  img: string;
  img2?: string;
  alt: string;
  blurb: string;      // ~30-word summary (from onboarding copy)
  intro: string;      // hero supporting paragraph
  body: string;       // longer explanatory paragraph
  points: ServicePoint[];
  link?: { label: string; href: string }; // optional authority link
}

export const services: Service[] = [
  {
    slug: 'emergency-electricians',
    navLabel: 'Emergency Electricians',
    title: 'Emergency electrician St Ives',
    tagline: '24/7 rapid response',
    img: '/images/powerhub/services/emergency-repairs.webp',
    img2: '/images/powerhub/services/emergency-electricians-2.webp',
    alt: 'Powerhub Electrical emergency electrician work in a St Ives home',
    blurb: 'When power drops out unexpectedly in an established St Ives home, our team responds quickly to trace the fault, restore supply safely, and explain exactly what actually caused the outage.',
    intro: 'Power out, switchboard tripped, or a burning smell you cannot place? We answer the phone 24/7 and get a licensed electrician to your St Ives home fast.',
    body: 'Electrical emergencies rarely happen at a convenient hour. When the power drops out in an established St Ives home, our team responds quickly, isolates the hazard, and traces the fault back to its real cause. We restore supply safely, then explain in plain English what went wrong and what it takes to fix it for good.',
    points: [
      { title: 'Round-the-clock callouts', desc: 'We answer the phone any hour, any day, and prioritise same-day attendance across St Ives and the Upper North Shore.' },
      { title: 'Make-safe first', desc: 'We isolate the hazard the moment we arrive, so your home and family are protected before any repair begins.' },
      { title: 'Honest diagnosis', desc: 'We tell you what caused the outage and what it will cost before we start, with no pressure and no scare tactics.' },
    ],
  },
  {
    slug: 'electrical-repairs',
    navLabel: 'Electrical Repairs',
    title: 'Electrical repairs St Ives',
    tagline: 'Fixed properly, first time',
    img: '/images/powerhub/services/electrical-repairs.webp',
    alt: 'Powerhub Electrical carrying out electrical repairs in St Ives',
    blurb: 'From a power point that stopped working to lights that flicker for no clear reason, our electricians diagnose the problem and repair it properly, without unnecessary return visits.',
    intro: 'From a dead power point to lights that flicker for no clear reason, we find the fault and repair it properly, so the same problem does not come back next month.',
    body: 'A quick patch is easy. A proper repair is what actually saves you money. Our electricians diagnose the underlying issue behind a failed power point, a warm switch or flickering lights, then repair it to current standards. We carry common parts on the van, so most jobs are sorted in a single visit without a return trip.',
    points: [
      { title: 'Real diagnosis', desc: 'We find the cause, not just the symptom, so you are not paying us again for the same fault in a month.' },
      { title: 'Stocked vans', desc: 'We carry common components, which means most repairs are completed in one visit rather than dragged out.' },
      { title: 'Tidy workmanship', desc: 'We leave your home clean and every repair documented, so you know exactly what was done and why.' },
    ],
  },
  {
    slug: 'electrical-fault-finding',
    navLabel: 'Electrical Fault Finding',
    title: 'Electrical fault finding St Ives',
    tagline: 'Tracing faults to the source',
    img: '/images/powerhub/services/electrical-fault-finding.webp',
    alt: 'Powerhub Electrical fault finding at a St Ives switchboard',
    blurb: 'Intermittent electrical faults are some of the hardest problems to pin down, and our electricians trace the issue back to its actual root source instead of simply replacing random parts.',
    intro: 'A safety switch that trips at random. A circuit that dies in the rain. We methodically trace intermittent faults to their real source instead of guessing.',
    body: 'Intermittent faults are the hardest electrical problems to pin down, and the most frustrating to live with. Rather than swapping parts and hoping, we work through the circuit methodically with proper test equipment until we find the actual root cause. Then we fix it once, and show you the result so you can trust the power in your St Ives home again.',
    points: [
      { title: 'Methodical testing', desc: 'We use proper diagnostic equipment to isolate the fault, not trial and error that adds parts and cost.' },
      { title: 'Nuisance tripping solved', desc: 'We find why your safety switch keeps tripping and fix the underlying circuit so it stays on.' },
      { title: 'Clear report', desc: 'You get a straight explanation of what was wrong and what we did, in words that make sense.' },
    ],
  },
  {
    slug: 'switchboard-upgrade',
    navLabel: 'Switchboard Upgrade',
    title: 'Switchboard upgrade St Ives',
    tagline: 'Modern, safe, compliant',
    img: '/images/powerhub/services/switchboard-upgrade.webp',
    img2: '/images/powerhub/services/switchboard-upgrade-2.webp',
    alt: 'Modern switchboard upgraded by Powerhub Electrical in St Ives',
    blurb: 'Many St Ives properties built decades ago still run on outdated fuse-style switchboards, so we upgrade them to modern safety-switch-protected boards that comply with current wiring standards and operate safely.',
    intro: 'Ceramic fuses, no safety switches, or a board that runs hot? We upgrade older St Ives switchboards to modern, safety-switch-protected boards that meet current standards.',
    body: 'Many St Ives properties built decades ago still run on outdated fuse-style switchboards that were never designed for how a modern home draws power. We upgrade them to neat, clearly labelled boards protected by modern safety switches, so every circuit is covered. The result is a safer home and a board that comfortably handles today\'s appliances.',
    points: [
      { title: 'Safety switches on every circuit', desc: 'We replace old fuses with RCDs and RCBOs so a fault cuts power in an instant, not after damage is done.' },
      { title: 'Built for modern load', desc: 'A new board handles air conditioning, induction cooking and EV charging without nuisance tripping.' },
      { title: 'Compliant and certified', desc: 'Every upgrade meets current wiring rules and comes with a Certificate of Compliance for your records.' },
    ],
    link: { label: 'NSW electrical licensing framework', href: 'https://www.nsw.gov.au/business-and-economy/licences-and-credentials/building-and-trade-licences-and-registrations/electrical' },
  },
  {
    slug: 'safety-switch-installation',
    navLabel: 'Safety Switch Installation',
    title: 'Safety switch installation St Ives',
    tagline: 'Protection that acts instantly',
    img: '/images/powerhub/services/safety-switch-installation.webp',
    alt: 'Safety switch installation by Powerhub Electrical in St Ives',
    blurb: 'Safety switches cut power the instant a fault is detected, yet many older St Ives homes still rely on just one switch covering every single circuit throughout the entire property.',
    intro: 'Safety switches cut power the instant a fault is detected. Many older St Ives homes still have just one, or none at all. We install proper protection on every circuit.',
    body: 'A safety switch monitors the flow of electricity and cuts power in a fraction of a second when it senses a fault, which can be the difference between a scare and a serious injury. Many older St Ives homes still rely on a single switch covering the whole property, or have none at all. We install dedicated protection circuit by circuit, so one fault never leaves your whole home in the dark.',
    points: [
      { title: 'Per-circuit protection', desc: 'We fit safety switches so a fault on one circuit does not shut down power to the entire home.' },
      { title: 'Fast, tested install', desc: 'We install and then test every safety switch on the day, so you can see it works before we leave.' },
      { title: 'Compliance included', desc: 'Installation meets current NSW wiring rules and is documented with a Certificate of Compliance.' },
    ],
    link: { label: 'NSW Government — safety switches protect you', href: 'https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/safety-switches-protect-you' },
  },
  {
    slug: 'lighting-installation',
    navLabel: 'Lighting Installation',
    title: 'Lighting installation St Ives',
    tagline: 'Clean, modern lighting',
    img: '/images/powerhub/services/lighting-installation.webp',
    alt: 'LED lighting installed by Powerhub Electrical in a St Ives home',
    blurb: 'Whether you are brightening a renovated kitchen or replacing tired downlights throughout an older St Ives home, our electricians install lighting cleanly, safely and to current safety standards every time.',
    intro: 'Fresh downlights, a statement pendant, or LED strips that lift a whole room. We install lighting cleanly and safely, and help you get the levels right first time.',
    body: 'The right lighting changes how a room feels and how much you spend running it. Whether you are brightening a renovated kitchen or replacing tired, yellowing downlights through an older St Ives home, we install modern LED lighting neatly and to current safety standards. We help you plan placement and colour temperature so the finish looks considered, not cobbled together.',
    points: [
      { title: 'Energy-efficient LED', desc: 'We fit modern LED fittings that cut running costs and last years longer than the globes they replace.' },
      { title: 'Planned placement', desc: 'We help you get beam spread and colour temperature right, so kitchens, living areas and hallways feel balanced.' },
      { title: 'Neat, safe finish', desc: 'Cabling is done properly and cleanly, with every fitting installed to current wiring standards.' },
    ],
  },
  {
    slug: 'ceiling-fan-installation',
    navLabel: 'Ceiling Fan Installation',
    title: 'Ceiling fan installation St Ives',
    tagline: 'Balanced and whisper-quiet',
    img: '/images/powerhub/services/ceiling-fan-installation.webp',
    alt: 'Ceiling fan installed by Powerhub Electrical in a St Ives home',
    blurb: 'Warmer months make ceiling fans essential in larger St Ives living rooms and bedrooms, and our electricians mount every fan securely, wire it correctly and balance it for silent running.',
    intro: 'A ceiling fan should move air, not rattle the room. We mount every fan securely, wire it correctly, and balance it so it runs quietly for years.',
    body: 'Warmer months make ceiling fans essential in larger St Ives living rooms and bedrooms, but a poorly fitted fan wobbles, hums and shortens its own life. We mount every fan to a secure fixing point, wire it correctly to its switch or remote, and balance the blades so it runs quietly. Whether it is a new install or a swap, the result is comfortable, silent airflow.',
    points: [
      { title: 'Secure fixing', desc: 'We mount each fan to a proper structural point so there is no wobble and no worry overhead.' },
      { title: 'Switch or remote', desc: 'We wire fans to wall controls or remotes, including speed and light control, exactly how you want them.' },
      { title: 'Balanced for silence', desc: 'We balance the blades on install, so you get airflow without the hum or rattle.' },
    ],
  },
  {
    slug: 'exhaust-fan-installation',
    navLabel: 'Exhaust Fan Installation',
    title: 'Exhaust fan installation St Ives',
    tagline: 'Ventilation that beats mould',
    img: '/images/powerhub/services/exhaust-fan-installation.webp',
    alt: 'Exhaust fan installation by Powerhub Electrical in a St Ives bathroom',
    blurb: 'Bathrooms and laundries in St Ives homes need proper ventilation to prevent mould, so we install exhaust fans that are correctly ducted, quiet in operation, and sized for the room.',
    intro: 'Steamy bathroom, mould on the ceiling, or a laundry that never dries out? We install correctly ducted, quiet exhaust fans sized for the room.',
    body: 'Bathrooms and laundries in St Ives homes need proper ventilation, and a weak or poorly ducted fan simply pushes moisture into the ceiling cavity where mould thrives. We install exhaust fans that are the right size for the room, ducted correctly to the outside, and quiet enough that you will actually use them. That keeps moisture, condensation and mould under control for good.',
    points: [
      { title: 'Sized for the room', desc: 'We match fan capacity to your bathroom or laundry so moisture is actually cleared, not just stirred around.' },
      { title: 'Ducted outside', desc: 'We duct the fan correctly to the exterior, rather than dumping damp air into your roof space.' },
      { title: 'Quiet operation', desc: 'We fit fans quiet enough to run when needed, with timer or humidity-sensing options available.' },
    ],
  },
  {
    slug: 'power-point-installation',
    navLabel: 'Power Point Installation',
    title: 'Power point installation St Ives',
    tagline: 'Power where you need it',
    img: '/images/powerhub/services/power-point-installation.webp',
    img2: '/images/powerhub/services/power-point-installation-2.webp',
    alt: 'New power point installed by Powerhub Electrical in a St Ives home',
    blurb: 'Home offices, entertainment units, and kitchen benchtops across St Ives often need extra power points, and our electricians install them safely without overloading the existing household electrical circuit.',
    intro: 'Reaching for double adaptors and power boards? We add safe, properly wired power points where you actually need them, without overloading your circuits.',
    body: 'Home offices, entertainment units and kitchen benchtops across St Ives constantly outgrow the power points they were built with. Rather than relying on double adaptors and trailing power boards, we install new outlets, including USB and weatherproof options, wired safely back to the board. We check the circuit load first, so adding power never means overloading what is already there.',
    points: [
      { title: 'Load checked first', desc: 'We assess the existing circuit so new outlets are added safely, never overloading your wiring.' },
      { title: 'USB and outdoor options', desc: 'We install USB points, double and quad outlets, and weatherproof outdoor power where you need it.' },
      { title: 'Clean cable runs', desc: 'Cabling is run neatly and to standard, with minimal disruption to walls and finishes.' },
    ],
  },
  {
    slug: 'house-rewiring',
    navLabel: 'House Rewiring',
    title: 'House rewiring St Ives',
    tagline: 'Old wiring made safe',
    img: '/images/powerhub/services/house-rewiring.webp',
    img2: '/images/powerhub/services/house-rewiring-2.webp',
    alt: 'House rewiring by Powerhub Electrical in an established St Ives home',
    blurb: 'Established St Ives properties near Garigal National Park often carry wiring that is decades old, and we rewire these homes section by section to restore both safety and modern capacity.',
    intro: 'Cloth or rubber wiring, no earth, circuits that cannot cope? We rewire established St Ives homes section by section, restoring safety and capacity without you moving out.',
    body: 'Established St Ives properties, including the character homes near Garigal National Park, often still carry wiring that is decades old and never designed for modern loads. We rewire these homes section by section, so you can keep living there while the work progresses. The outcome is wiring you can rely on, capacity for how you actually live today, and full compliance with current standards.',
    points: [
      { title: 'Staged for living', desc: 'We rewire in planned sections so your home stays usable and you are not forced to move out.' },
      { title: 'Capacity for today', desc: 'New wiring is sized for modern appliances, air conditioning and EV charging, not 1960s demand.' },
      { title: 'Fully compliant', desc: 'The completed rewire meets current wiring rules and is certified with a Certificate of Compliance.' },
    ],
  },
  {
    slug: '3-phase-power-upgrade',
    navLabel: '3 Phase Power Upgrade',
    title: '3 phase power upgrade St Ives',
    tagline: 'Capacity for bigger homes',
    img: '/images/powerhub/services/3-phase-power-upgrade.webp',
    alt: 'Three phase power upgrade by Powerhub Electrical in St Ives',
    blurb: 'Larger St Ives homes with pools, home theatres or workshops often outgrow standard single-phase supply, so we design and install three-phase upgrades sized correctly for real, ongoing household electrical demand.',
    intro: 'Tripping mains, ducted air conditioning, a pool, a workshop or fast EV charging? We design and install three-phase upgrades sized for how your St Ives home really runs.',
    body: 'Larger St Ives homes with pools, ducted air conditioning, home theatres or workshops often outgrow standard single-phase supply. We assess your actual and future demand, then design and install a three-phase upgrade with the network operator so the load is shared properly across phases. That means no more nuisance tripping and comfortable headroom for everything you want to run.',
    points: [
      { title: 'Demand assessed', desc: 'We size the upgrade to your real and future load, from ducted air conditioning to EV charging.' },
      { title: 'Network coordinated', desc: 'We handle the coordination with the local network operator so the connection is done correctly.' },
      { title: 'Balanced and reliable', desc: 'Load is shared across phases, ending nuisance tripping and giving you headroom to grow.' },
    ],
  },
  {
    slug: 'level-2-electrician',
    navLabel: 'Level 2 Electrician',
    title: 'Level 2 electrician St Ives',
    tagline: 'Mains and network connections',
    img: '/images/powerhub/services/level-2-electrician.webp',
    alt: 'Level 2 electrician work by Powerhub Electrical in St Ives',
    blurb: 'Knock-down rebuilds and major renovations across St Ives sometimes need new underground or overhead service connections, and our Level 2 electricians coordinate that specialised work with the local network operator.',
    intro: 'New service connection, metering, or a damaged consumer main? Our Level 2 electricians handle the specialised work between your St Ives home and the network.',
    body: 'Knock-down rebuilds and major renovations across St Ives sometimes need new underground or overhead service connections, metering changes or repairs to the consumer mains, work that only a Level 2 electrician can carry out. We coordinate this specialised work with the local network operator and complete it safely, so the connection between the grid and your home is done right the first time.',
    points: [
      { title: 'Service connections', desc: 'We install and repair overhead and underground service lines between the network and your home.' },
      { title: 'Metering and mains', desc: 'We handle new metering, meter relocations and repairs to damaged or ageing consumer mains.' },
      { title: 'Network coordinated', desc: 'We manage the required coordination and approvals with the local network operator on your behalf.' },
    ],
  },
  {
    slug: 'appliance-installation',
    navLabel: 'Appliance Installation',
    title: 'Appliance installation St Ives',
    tagline: 'Connected safely, same day',
    img: '/images/powerhub/services/appliance-installation.webp',
    alt: 'Appliance installation by Powerhub Electrical in a St Ives kitchen',
    blurb: 'Kitchen renovations are common in St Ives, and when a new oven, cooktop or rangehood arrives, we handle the electrical connection safely so the appliance is ready the same day.',
    intro: 'New oven, cooktop or rangehood arriving? We handle the electrical connection safely and correctly, so your appliance is wired up and ready to use the same day.',
    body: 'Kitchen renovations are common in St Ives, and a new oven, cooktop or rangehood needs a proper electrical connection, not a rushed job that trips the board. We connect fixed appliances safely to a suitably rated circuit, check the supply can handle the load, and test everything before we leave. In most cases your appliance is ready to use the same day it arrives.',
    points: [
      { title: 'Correctly rated circuits', desc: 'We connect ovens, cooktops and rangehoods to properly rated circuits so nothing overloads or trips.' },
      { title: 'Same-day where possible', desc: 'We aim to have your new appliance wired, tested and ready to use on the day it is delivered.' },
      { title: 'Tested before we go', desc: 'We check every connection and confirm the appliance runs correctly before we pack up.' },
    ],
  },
  {
    slug: 'smoke-alarm-installation',
    navLabel: 'Smoke Alarm Installation',
    title: 'Smoke alarm installation St Ives',
    tagline: 'Compliant, interconnected safety',
    img: '/images/powerhub/services/smoke-alarm-installation.webp',
    img2: '/images/powerhub/services/smoke-alarm-installation-2.webp',
    alt: 'Smoke alarm installation by Powerhub Electrical in a St Ives home',
    blurb: 'Older homes around Ku-ring-gai often have smoke alarms that predate current photoelectric requirements, and our electricians replace and interconnect them so that every level of your home is always fully protected.',
    intro: 'Old alarms, dead batteries, or units that predate current rules? We install and interconnect photoelectric smoke alarms so every level of your St Ives home is protected.',
    body: 'Older homes around Ku-ring-gai often have smoke alarms that predate current photoelectric requirements, or that are not linked together. We replace outdated units with compliant photoelectric alarms and interconnect them, so when one sounds they all sound. That gives everyone in your St Ives home the earliest possible warning, on every level, day or night.',
    points: [
      { title: 'Photoelectric and compliant', desc: 'We install photoelectric alarms that meet current NSW legislation and give earlier warning of smouldering fires.' },
      { title: 'Interconnected coverage', desc: 'We link alarms so that when one detects smoke, every alarm in the home sounds together.' },
      { title: 'Every level covered', desc: 'We place alarms correctly across each level, so no bedroom or hallway is left unprotected.' },
    ],
    link: { label: 'Fire and Rescue NSW — smoke alarm law', href: 'https://www.fire.nsw.gov.au/fire-safety/home-fire-safety/smoke-alarms/smoke-alarms-what-is-the-law' },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
