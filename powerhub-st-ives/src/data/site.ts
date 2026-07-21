// Powerhub Electrical — shared business details.
export const site = {
  name: 'Powerhub Electrical',
  region: 'St Ives & the Upper North Shore',
  phoneDisplay: '0400 332 331',
  phoneHref: 'tel:+61400332331',
  email: 'info@powerhubelectrical.com.au',
  emailHref: 'mailto:info@powerhubelectrical.com.au',
  licence: 'NSW Licence #467291C',
  abn: 'ABN 91 677 354 602',
  founder: 'Brian',
  home: '/',
};

// Primary nav (labels shown; Services is a dropdown handled in Nav components).
export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services', dropdown: true },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Offers & Guarantees', href: '/offers-guarantees' },
  { label: 'Contact Us', href: '/contact-us' },
];
