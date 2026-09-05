/**
 * Centralised SEO constants and JSON-LD structured data.
 * Every value here is drawn from Gerald's real portfolio, resume and GitHub —
 * nothing is invented. Keep this in sync with the visible page content.
 */

export const SITE_URL = 'https://www.geraldcacho.com';
export const SITE_NAME = 'Gerald Cacho';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/img/gerald-cacho-digital-services.jpg`;

const PERSON_ID = `${SITE_URL}/#gerald-cacho`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** Skills / topics Gerald demonstrably works with (from resume + portfolio). */
const KNOWS_ABOUT = [
  'Web Development',
  'WordPress Development',
  'WooCommerce',
  'UI/UX Design',
  'Front-End Development',
  'PHP',
  'JavaScript',
  'Next.js',
  'Shopify',
  'Webflow',
  'Technical SEO',
  'HubSpot',
  'GoHighLevel',
  'Marketing Automation',
  'Figma',
  'Adobe Creative Suite',
  'Web Hosting Management',
];

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Gerald Cacho',
  url: SITE_URL,
  image: `${SITE_URL}/img/gerald-cacho-avatar.png`,
  jobTitle: 'Senior Web Developer & UI/UX Designer',
  description:
    'Senior web developer and designer with 10+ years of experience building websites, eCommerce platforms and CRM-driven digital systems for clients across the US, UK and Australia.',
  email: 'mailto:gc.geraldcacho@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Baguio City',
    addressRegion: 'Benguet',
    addressCountry: 'PH',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Baguio',
  },
  knowsAbout: KNOWS_ABOUT,
  sameAs: [
    'https://www.linkedin.com/in/gerald-cacho/',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: 'en',
  publisher: { '@id': PERSON_ID },
};

/** ProfilePage wrapper for /about. */
export const aboutProfilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/about#profilepage`,
  url: `${SITE_URL}/about`,
  name: 'About Gerald Cacho',
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': PERSON_ID },
  mainEntity: { '@id': PERSON_ID },
};

type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === '/' ? '/' : c.path.replace(/\/$/, '')}`,
    })),
  };
}

/** Natural-language Q&A shown on /about, mirrored as FAQPage structured data. */
export const aboutFaq: { question: string; answer: string }[] = [
  {
    question: 'Who is Gerald Cacho?',
    answer:
      'Gerald Cacho is a senior web developer and UI/UX designer based in Baguio City, Philippines, with more than 10 years of experience delivering websites and digital systems for international clients. He holds a BS in Information Technology (Software Development) from the University of Baguio.',
  },
  {
    question: 'What does Gerald Cacho specialize in?',
    answer:
      'Custom WordPress and WooCommerce development, UI/UX design in Figma, front-end development, technical SEO, and CRM and marketing automation with HubSpot and GoHighLevel. Gerald typically owns the full delivery cycle: discovery, design, build, third-party integrations, QA, launch and ongoing optimization.',
  },
  {
    question: 'What services does Gerald Cacho provide?',
    answer:
      'Logo and branding design, graphics design, UI/UX design, web design and development, CRM and marketing automation, web hosting management, and SEO — for small and mid-sized businesses and agencies.',
  },
  {
    question: 'What technologies does Gerald Cacho work with?',
    answer:
      'WordPress, PHP, JavaScript, HTML5, CSS3, WooCommerce, Shopify, Webflow, Next.js and Nuxt.js; Figma and Adobe Creative Suite; HubSpot, GoHighLevel and Snapforms; WP Engine, Amazon Lightsail, Linux, cPanel/WHM and Cloudflare; Git, and technical SEO tools including Google Analytics, Google Tag Manager and Screaming Frog.',
  },
  {
    question: 'What kinds of projects has Gerald Cacho worked on?',
    answer:
      'Business and marketing websites, WooCommerce and Shopify stores, custom WordPress themes and plugins, CRM and marketing-automation setups, and brand and marketing collateral — across industries including energy, education, recruitment, real estate, homewares and workplace safety and compliance.',
  },
  {
    question: 'Where is Gerald Cacho based and who does he work with?',
    answer:
      'Gerald is based in Baguio City, Philippines and works remotely with clients and agencies in the United States, United Kingdom and Australia.',
  },
];

export const aboutFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: aboutFaq.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};
