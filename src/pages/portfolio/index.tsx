import { useState } from "react";
import Seo from "@/components/seo/seo";
import portfolio from '@/data/portfolio.json';
import ListChrono from "@/components/lists/listChrono/listChrono";
import { SITE_URL, breadcrumbSchema } from "@/data/seo";

type Job = { title: string; description?: string; tags: string[]; image?: string; url?: string };
type Group = { category: string; jobs: Job[] };

const groups: Group[] = portfolio;
const websiteProjects: Job[] =
  groups.find((c) => c.category === "Website Projects")?.jobs ?? [];

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portfolio of Gerald Cacho",
  url: `${SITE_URL}/portfolio`,
  about: { "@id": `${SITE_URL}/#gerald-cacho` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: websiteProjects
      .filter((job): job is Job & { url: string } => Boolean(job.url))
      .map((job, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: job.title,
          url: job.url,
          creator: { "@id": `${SITE_URL}/#gerald-cacho` },
        },
      })),
  },
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Website Projects");

  return (
    <>
      <Seo
        title="Portfolio | Gerald Cacho | Web Developer & Designer"
        description="Selected work by Gerald Cacho: WordPress and WooCommerce websites, custom themes, and logo and brand design for clients in the US, UK and Australia."
        path="/portfolio"
        jsonLd={[
          portfolioSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
          ]),
        ]}
      />
      <div className="wrapper">
        <div className="content">
          <h1><strong>Portfolio</strong></h1>
          <div className="tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "Website Projects"}
              onClick={() => setActiveTab("Website Projects")}
              className={activeTab === "Website Projects" ? "active" : ""}
            >
              Website Projects
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "Graphics & Logo Design"}
              onClick={() => setActiveTab("Graphics & Logo Design")}
              className={activeTab === "Graphics & Logo Design" ? "active" : ""}
            >
              Graphics & Logo Design
            </button>
          </div>
          <ListChrono list={portfolio} category={activeTab} />
        </div>
      </div>
    </>
  );
}
