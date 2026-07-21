// Structured content for a long-form service page. All text is copied verbatim
// from the client's onboarding documents.
export interface SPItem { title: string; desc?: string; html?: string }
export interface SPStep { n: string; title: string; desc?: string; html?: string }
export interface SPBullet { text?: string; html?: string }
export interface SPFaq { q: string; a: string }

export interface ServicePageData {
  metaTitle: string;
  metaDescription: string;

  eyebrow: string;
  h1: string;            // full H1, e.g. "Switchboard Upgrade Revesby"
  supporting: string;    // hero supporting line
  badges: string[];
  heroImg: string;
  navLabel: string;      // breadcrumb label

  introHeading: string;
  introSub: string;
  introBody: string;
  introImg?: string;     // right-container image for the overview section (defaults to heroImg)

  coreHeading: string;
  coreLeadIn: string;
  coreItems: SPItem[];

  whyHeading: string;
  whyLeadIn: string;
  whyItems: SPItem[];

  processHeading: string;
  processLeadIn: string;
  processSteps: SPStep[];
  processImg?: string;

  problemsHeading: string;
  problemsLeadIn: string;
  problemsItems: SPItem[];

  propertyHeading?: string;
  propertyLeadIn?: string;
  propertyItems?: SPItem[];

  safetyHeading: string;
  safetyLeadIn: string;
  safetyBullets: SPBullet[];

  chooseHeading: string;
  chooseLeadIn: string;
  chooseItems: SPItem[];

  ctaHeading: string;
  ctaBody: string;

  faqs: SPFaq[];
}
