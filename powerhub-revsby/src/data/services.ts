// Powerhub Electrical — Revesby service catalogue.
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
    title: 'Emergency electrician Revesby',
    tagline: 'Same-day rapid response',
    img: '/images/powerhub/services/emergency-electricians.webp',
    img2: '/images/powerhub/services/emergency-electricians-2.webp',
    alt: 'Powerhub Electrical emergency electrician work in a Revesby home',
    blurb: 'Power outages, sparking outlets and tripped safety switches cannot always wait. As an emergency electrician in Revesby, we aim to get a licensed technician on site the same day.',
    intro: 'Power out, switchboard tripped, or a burning smell you cannot place? We prioritise same-day attendance and get a licensed electrician to your Revesby home fast.',
    body: 'Power outages, sparking outlets and tripped safety switches cannot always wait for a scheduled appointment. As an emergency electrician in Revesby, Powerhub Electrical aims to get a licensed technician on site the same day the issue is reported, isolate the hazard, and trace the fault back to its real cause before explaining it in plain language.',
    points: [
      { title: 'Same-day priority', desc: 'Emergency calls are prioritised ahead of routine bookings, with same-day attendance arranged wherever possible for urgent safety issues across Revesby.' },
      { title: 'Make-safe first', desc: 'We isolate the hazard the moment we arrive, so your home and family are protected before any repair begins.' },
      { title: 'Honest diagnosis', desc: 'We confirm the price before work begins and explain what caused the fault, with no pressure and no scare tactics.' },
    ],
  },
  {
    slug: 'electrical-repairs',
    navLabel: 'Electrical Repairs',
    title: 'Electrical repairs Revesby',
    tagline: 'Diagnosed properly, first time',
    img: '/images/powerhub/services/electrical-repairs.webp',
    alt: 'Powerhub Electrical carrying out electrical repairs in Revesby',
    blurb: 'From a dead power point to lights that flicker for no clear reason, we identify the actual cause of a fault rather than guessing or replacing parts that were never the problem.',
    intro: 'From a dead power point to lights that flicker for no clear reason, we find the fault and repair it properly, so the same problem does not come back next month.',
    body: 'Not every electrical problem is an emergency, but tripping circuits, dead power points and flickering lights still deserve a proper diagnosis. Powerhub Electrical carries out electrical repairs in Revesby that identify the actual cause of a fault, using correctly rated parts and testing the affected circuit thoroughly before power is restored.',
    points: [
      { title: 'Real diagnosis', desc: 'We find the cause, not just the symptom, so you are not paying us again for the same fault in a month.' },
      { title: 'Correctly rated parts', desc: 'Repairs are completed with correctly rated parts and materials, then tested before power is restored.' },
      { title: 'Plain-language sign off', desc: 'We explain what was found and fixed in plain English, so the fault and the solution both make sense.' },
    ],
  },
  {
    slug: 'electrical-fault-finding',
    navLabel: 'Electrical Fault Finding',
    title: 'Electrical fault finding Revesby',
    tagline: 'Tracing faults to the source',
    img: '/images/powerhub/services/electrical-fault-finding.webp',
    alt: 'Powerhub Electrical fault finding at a Revesby switchboard',
    blurb: 'Some faults come and go or seem to move between circuits. We use proper testing equipment to trace the root cause of a problem, rather than guessing or unnecessarily replacing parts.',
    intro: 'A safety switch that trips at random. A circuit that dies in the rain. We methodically trace intermittent faults to their real source instead of guessing.',
    body: 'Some electrical problems do not have an obvious cause, especially faults that come and go or seem to move between circuits. Powerhub Electrical carries out electrical fault finding in Revesby using proper testing equipment to trace the root cause of a problem methodically, then explains the recommended fix in plain language before any repair begins.',
    points: [
      { title: 'Methodical testing', desc: 'We use proper diagnostic equipment to isolate the fault, not trial and error that adds parts and cost.' },
      { title: 'Nuisance tripping solved', desc: 'We find why a circuit keeps tripping and fix the underlying cause so it stays on.' },
      { title: 'Clear explanation', desc: 'You get a straight explanation of what was wrong and what we did, in words that make sense.' },
    ],
  },
  {
    slug: 'switchboard-upgrade',
    navLabel: 'Switchboard Upgrade',
    title: 'Switchboard upgrade Revesby',
    tagline: 'Modern, safe, compliant',
    img: '/images/powerhub/services/switchboard-upgrade.webp',
    img2: '/images/powerhub/services/switchboard-upgrade-2.webp',
    alt: 'Modern switchboard upgraded by Powerhub Electrical in Revesby',
    blurb: 'Fuse boxes and undersized switchboards common in older Revesby homes were never built for today\'s appliances. We upgrade them to safer, modern boards with proper safety switch protection.',
    intro: 'Ceramic fuses, no safety switches, or a board that runs hot? We upgrade older Revesby switchboards to modern, safety-switch-protected boards that meet current standards.',
    body: 'Fuse boxes and undersized switchboards common in older Revesby homes were never built for today\'s appliances, air conditioners and home offices. A switchboard upgrade in Revesby starts with an honest assessment of the existing board and a plain-language explanation of what actually needs fixing before any work begins.',
    points: [
      { title: 'Safety switches on every circuit', desc: 'We replace old fuses with RCDs and RCBOs so a fault cuts power in an instant, not after damage is done.' },
      { title: 'Built for modern load', desc: 'A new board handles air conditioning, induction cooking and EV charging without nuisance tripping.' },
      { title: 'Compliant and certified', desc: 'Every upgrade meets current AS/NZS 3000 wiring rules and is completed under Licence #467291C.' },
    ],
  },
  {
    slug: 'safety-switch-installation',
    navLabel: 'Safety Switch Installation',
    title: 'Safety switch installation Revesby',
    tagline: 'Protection that acts instantly',
    img: '/images/powerhub/services/safety-switch-rcd.webp',
    alt: 'Safety switch installation by Powerhub Electrical in Revesby',
    blurb: 'A safety switch, or RCD, cuts power within milliseconds of a fault. We install protection that covers every circuit, not just the one or two an older switchboard may already have.',
    intro: 'Safety switches cut power the instant a fault is detected. Many older Revesby homes still have just one, or none at all. We install proper protection on every circuit.',
    body: 'A safety switch, also called an RCD, is one of the simplest devices for preventing a fatal electric shock at home. Powerhub Electrical carries out a safety switch installation in Revesby that covers every circuit, not just the one or two points an older switchboard may already have protected.',
    points: [
      { title: 'Per-circuit protection', desc: 'We fit safety switches so a fault on one circuit does not shut down power to the entire home.' },
      { title: 'Fast, tested install', desc: 'We install and then test every safety switch on the day, so you can see it works before we leave.' },
      { title: 'Rental compliance', desc: 'We install, test and document safety switches to meet the condition report requirements for NSW tenancies.' },
    ],
  },
  {
    slug: 'lighting-installation',
    navLabel: 'Lighting Installation',
    title: 'Lighting installation Revesby',
    tagline: 'Clean, modern LED lighting',
    img: '/images/powerhub/services/light-install.webp',
    alt: 'LED lighting installed by Powerhub Electrical in a Revesby home',
    blurb: 'Many Revesby homes still run old halogen downlights that generate heat and offer little energy saving. We install modern LED fittings, safely wired and matched to each room.',
    intro: 'Fresh downlights, a statement pendant, or LED strips that lift a whole room. We install lighting cleanly and safely, and help you get the levels right first time.',
    body: 'Many Revesby homes still run old halogen downlights that generate significant heat and offer little in the way of energy savings. Powerhub Electrical carries out a lighting installation in Revesby using modern LED fittings, safely wired and matched to the layout of each room.',
    points: [
      { title: 'Energy-efficient LED', desc: 'We fit modern LED fittings that cut running costs and last years longer than the globes they replace.' },
      { title: 'IC-rated where needed', desc: 'We use IC-rated downlights that safely contact ceiling insulation, unlike most older halogen fittings.' },
      { title: 'Neat, safe finish', desc: 'Cabling is done properly and cleanly, with every fitting installed to current wiring standards.' },
    ],
  },
  {
    slug: 'ceiling-fan-installation',
    navLabel: 'Ceiling Fan Installation',
    title: 'Ceiling fan installation Revesby',
    tagline: 'Balanced and whisper-quiet',
    img: '/images/powerhub/services/ceiling-fan-install.webp',
    alt: 'Ceiling fan installed by Powerhub Electrical in a Revesby home',
    blurb: 'A well-placed ceiling fan keeps rooms comfortable through summer without running the aircon constantly. We check the ceiling structure before recommending the right fan for the room.',
    intro: 'A ceiling fan should move air, not rattle the room. We mount every fan securely, wire it correctly, and balance it so it runs quietly for years.',
    body: 'Summers in Revesby put pressure on air conditioning bills, and a well-placed ceiling fan is a simple way to stay comfortable without running the aircon constantly. Powerhub Electrical starts every ceiling fan installation in Revesby by checking the ceiling structure before recommending the right fan for the room.',
    points: [
      { title: 'Fan-rated bracing', desc: 'We fit a proper fan-rated brace to the joist, since a standard light fitting box is not built to carry a spinning fan.' },
      { title: 'Switch or remote', desc: 'We wire fans to wall controls or remotes, including speed and light control, exactly how you want them.' },
      { title: 'Balanced for silence', desc: 'We balance the blades on install, so you get airflow without the hum, wobble or rattle.' },
    ],
  },
  {
    slug: 'exhaust-fan-installation',
    navLabel: 'Exhaust Fan Installation',
    title: 'Exhaust fan installation Revesby',
    tagline: 'Ventilation that beats mould',
    img: '/images/powerhub/services/exhaust-fan-installation.webp',
    alt: 'Exhaust fan installation by Powerhub Electrical in a Revesby bathroom',
    blurb: 'Steam, cooking smoke and humidity build up quickly without proper ventilation. We install exhaust fans that vent moisture directly outside, rather than into the roof space.',
    intro: 'Steamy bathroom, mould on the ceiling, or a laundry that never dries out? We install correctly ducted, quiet exhaust fans sized for the room.',
    body: 'Steam, cooking smoke and general humidity build up quickly in kitchens, bathrooms and laundries without proper ventilation. Powerhub Electrical carries out an exhaust fan installation in Revesby that vents moisture directly to the outside air, rather than into the roof space where it can cause hidden problems.',
    points: [
      { title: 'Sized for the room', desc: 'We match fan capacity to your bathroom or laundry so moisture is actually cleared, not just stirred around.' },
      { title: 'Ducted outside', desc: 'We duct the fan correctly to the exterior, rather than dumping damp air into your roof space.' },
      { title: 'Quiet operation', desc: 'We fit fans quiet enough to run when needed, with run-on timer options available.' },
    ],
  },
  {
    slug: 'power-point-installation',
    navLabel: 'Power Point Installation',
    title: 'Power point installation Revesby',
    tagline: 'Power where you need it',
    img: '/images/powerhub/services/power-point-installation.webp',
    img2: '/images/powerhub/services/power-point-installation-2.webp',
    alt: 'New power point installed by Powerhub Electrical in a Revesby home',
    blurb: 'Older Revesby homes were rarely built with enough power points for today\'s devices. We install extra outlets safely, wired back to the board rather than relying on double adaptors.',
    intro: 'Reaching for double adaptors and power boards? We add safe, properly wired power points where you actually need them, without overloading your circuits.',
    body: 'Older Revesby homes were rarely built with enough power points for today\'s laptops, chargers, kitchen appliances and entertainment units. A power point installation in Revesby starts with a straightforward assessment of where extra outlets are actually needed, then checks the circuit load before any cabling begins.',
    points: [
      { title: 'Load checked first', desc: 'We assess the existing circuit so new outlets are added safely, never overloading your wiring.' },
      { title: 'USB and outdoor options', desc: 'We install USB points, double outlets, and weatherproof outdoor power where you need it.' },
      { title: 'Clean cable runs', desc: 'Cabling is run neatly and to standard, with minimal disruption to walls and finishes.' },
    ],
  },
  {
    slug: 'house-rewiring',
    navLabel: 'Home Rewiring',
    title: 'Home rewiring Revesby',
    tagline: 'Old wiring made safe',
    img: '/images/powerhub/services/house-rewiring.webp',
    img2: '/images/powerhub/services/house-rewiring-2.webp',
    alt: 'Home rewiring by Powerhub Electrical in an established Revesby home',
    blurb: 'Homes built decades ago often still run on original wiring never designed for today\'s demand. We replace outdated cabling throughout a property and bring it up to current wiring rules.',
    intro: 'Cloth or rubber wiring, no earth, circuits that cannot cope? We rewire established Revesby homes section by section, restoring safety and capacity without you moving out.',
    body: 'Homes built decades ago often still run on original wiring that was never designed for today\'s electrical demand. Powerhub Electrical carries out home rewiring in Revesby, replacing outdated cabling throughout a property and bringing it up to current wiring rules from the switchboard to every point.',
    points: [
      { title: 'Staged for living', desc: 'We rewire in planned sections so your home stays usable and you are not forced to move out.' },
      { title: 'Capacity for today', desc: 'New wiring is sized for modern appliances, air conditioning and EV charging, not decades-old demand.' },
      { title: 'Fully compliant', desc: 'The completed rewire is tested and certified with a Certificate of Compliance for Electrical Work.' },
    ],
  },
  {
    slug: '3-phase-power-upgrade',
    navLabel: '3 Phase Power Upgrade',
    title: '3 phase power upgrade Revesby',
    tagline: 'Capacity for bigger loads',
    img: '/images/powerhub/services/3-phase-power-upgrade.webp',
    alt: 'Three phase power upgrade by Powerhub Electrical in Revesby',
    blurb: 'EV chargers, workshop equipment and larger ducted systems can push past a single-phase supply. We coordinate a 3-phase upgrade correctly with Ausgrid from application to final connection.',
    intro: 'Tripping mains, ducted air conditioning, a workshop or fast EV charging? We design and install three-phase upgrades coordinated correctly with Ausgrid.',
    body: 'Standard single-phase power is enough for most homes, but EV chargers, workshop equipment, or larger ducted systems can push past its limits. Powerhub Electrical carries out a 3-phase power upgrade in Revesby, coordinated correctly with Ausgrid from application through to final connection.',
    points: [
      { title: 'Load assessed', desc: 'We size the upgrade to your real and future load, from ducted air conditioning to EV charging.' },
      { title: 'Ausgrid coordinated', desc: 'We handle the application and coordination with Ausgrid so the connection is done correctly.' },
      { title: 'Balanced and reliable', desc: 'Load is shared across three phases, ending nuisance tripping and giving you headroom to grow.' },
    ],
  },
  {
    slug: 'level-2-electrician',
    navLabel: 'Level 2 Electrician',
    title: 'Level 2 electrician Revesby',
    tagline: 'Mains and network connections',
    img: '/images/powerhub/services/level-2-electrician.webp',
    alt: 'Level 2 electrician work by Powerhub Electrical in Revesby',
    blurb: 'Some jobs, such as a damaged service line or a meter relocation, fall outside a standard licence. Our Level 2 work is coordinated correctly with Ausgrid from application to connection.',
    intro: 'New service connection, metering, or a damaged consumer main? Our Level 2 electricians handle the specialised work between your Revesby home and the network.',
    body: 'Some electrical jobs, such as a damaged service line or a meter relocation, fall outside what a standard electrician\'s licence covers. Powerhub Electrical provides a Level 2 electrician in Revesby for this network-side work, coordinated correctly with Ausgrid from application through to final connection.',
    points: [
      { title: 'Service connections', desc: 'We install and repair overhead and underground service lines between the network and your home.' },
      { title: 'Metering and mains', desc: 'We handle new metering, meter relocations and repairs to damaged or ageing consumer mains.' },
      { title: 'Ausgrid coordinated', desc: 'We manage the required coordination and approvals with Ausgrid on your behalf.' },
    ],
  },
  {
    slug: 'smart-home-electrician',
    navLabel: 'Smart Home Electrician',
    title: 'Smart home electrician Revesby',
    tagline: 'Wired for app and voice control',
    img: '/images/powerhub/services/smart%20home.webp',
    alt: 'Smart home wiring by Powerhub Electrical in a Revesby home',
    blurb: 'Controlling lights, power points and switchboards by phone or voice starts with the wiring behind the wall. We wire switches and points correctly for reliable app or voice control.',
    intro: 'Smart switches, app-controlled power points, or voice-assistant lighting? We make sure the wiring behind the wall supports reliable smart control in your Revesby home.',
    body: 'Controlling lights, power points and switchboards from a phone or by voice starts with the wiring behind the wall, not just the device itself. Powerhub Electrical provides a smart home electrician in Revesby to ensure switches, power points, and lighting circuits are wired correctly for reliable app or voice control.',
    points: [
      { title: 'Compatibility checked', desc: 'We confirm whether a switch box has a neutral wire before recommending a specific smart switch for that location.' },
      { title: 'Wired to last', desc: 'Smart switches and power points are wired correctly to the circuit, not just swapped over at the wall.' },
      { title: 'Tested and set up', desc: 'Every device is tested for correct operation, with app or voice connectivity confirmed before we finish.' },
    ],
  },
  {
    slug: 'smoke-alarm-installation',
    navLabel: 'Smoke Alarm Installation',
    title: 'Smoke alarm installation Revesby',
    tagline: 'Compliant, interconnected safety',
    img: '/images/powerhub/services/smoke-alarm-01.webp',
    img2: '/images/powerhub/services/smoke-alarm-installation-2.webp',
    alt: 'Smoke alarm installation by Powerhub Electrical in a Revesby home',
    blurb: 'NSW law sets clear requirements for where alarms must be installed. We fit photoelectric, interconnected alarms so that when one sounds, every alarm in the home sounds together.',
    intro: 'Old alarms, dead batteries, or units that predate current rules? We install and interconnect photoelectric smoke alarms so every level of your Revesby home is protected.',
    body: 'Working smoke alarms are one of the simplest ways to protect a home, and NSW law sets clear requirements for where alarms must be installed. Powerhub Electrical carries out smoke alarm installations in Revesby that meet current requirements, using photoelectric, interconnected alarms rather than outdated technology.',
    points: [
      { title: 'Photoelectric and compliant', desc: 'We install photoelectric alarms that meet current NSW requirements and give earlier warning of smouldering fires.' },
      { title: 'Interconnected coverage', desc: 'We link alarms so that when one detects smoke, every alarm in the home sounds together.' },
      { title: 'Rental compliance', desc: 'We test, document and replace alarms to help landlords meet their ongoing tenancy obligations.' },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
