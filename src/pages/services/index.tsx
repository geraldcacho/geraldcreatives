import ListAccordion from "@/components/lists/listAccordion/listAccordion";
import Seo from "@/components/seo/seo";
import { SITE_URL, breadcrumbSchema } from "@/data/seo";

const services = [
  {
    title: "Logo & Branding Design",
    content:
      "Unique logos and complete brand identities — logo suite, colour, type and usage guidelines — so your brand stays consistent and recognisable across every touchpoint.",
  },
  {
    title: "Graphics Design",
    content:
      "Marketing collateral that supports campaigns and sales: brochures, flyers, social media posts, email graphics, presentations and web banners.",
  },
  {
    title: "UI/UX Design",
    content:
      "End-to-end UI/UX in Figma — user flows, wireframes, prototypes and design systems — built for clarity, accessibility and straightforward hand-off to development.",
  },
  {
    title: "Web Design & Development",
    content:
      "Custom, responsive websites built mainly on WordPress and WooCommerce, with tailored functionality, third-party and payment-gateway integrations, and performance and SEO baked in.",
  },
  {
    title: "Web Hosting Management",
    content:
      "Setup and ongoing management of hosting on WP Engine, Amazon Lightsail and Linux servers — deployments, staging, backups, SSL, security hardening and uptime monitoring.",
  },
  {
    title: "SEO Services",
    content:
      "Technical and on-page SEO: site structure, Core Web Vitals and page speed, indexing, schema markup, and analytics setup with Google Analytics 4 and Google Tag Manager.",
  },
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Services by Gerald Cacho",
  url: `${SITE_URL}/services`,
  about: { "@id": `${SITE_URL}/#gerald-cacho` },
  mainEntity: {
    "@type": "OfferCatalog",
    name: "Web design, development and SEO services",
    provider: { "@id": `${SITE_URL}/#gerald-cacho` },
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.content,
        provider: { "@id": `${SITE_URL}/#gerald-cacho` },
      },
    })),
  },
};

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Gerald Cacho | Web Design, Development & SEO"
        description="Web design and development, UI/UX, logo and branding, hosting management and technical SEO by Gerald Cacho, for businesses and agencies in the US, UK and Australia."
        path="/services"
        jsonLd={[
          servicesSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <div className="wrapper">
        <div className="content">
          <h1>
            <span>Your Web Partner</span>
            <strong>From Design to Launch</strong>
          </h1>

          <ListAccordion list={services} />
        </div>
      </div>
    </>
  );
}
