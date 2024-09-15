import Head from "next/head";
import { useState } from "react";
import portfolio from '@/data/portfolio.json';
import ListChrono from "@/components/lists/listChrono/listChrono";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Website Projects");

  return (
    <>
      <Head>
        <title>Portfolio | Gerald Cacho | Web Developer & Designer</title>
        <meta name="description" content="Explore the portfolio of Gerald Cacho, a web developer and designer specializing in website development, graphic design, and branding. Serving clients in the Philippines, US, Australia, and UK." />
        <meta name="keywords" content="web developer, web designer, graphic designer, portfolio, website projects, logo design, branding, Gerald Cacho, Philippines, US, Australia, UK" />
        <meta property="og:title" content="Gerald Cacho | Portfolio" />
        <meta property="og:description" content="Explore the portfolio of Gerald Cacho, showcasing expertise in web development, graphic design, and branding across the Philippines, US, Australia, and UK." />
        <meta property="og:image" content="https://geraldcacho.com/img/portfolio-cover.jpg" />
        <meta property="og:url" content="https://geraldcacho.com/portfolio" />
        <meta name="twitter:title" content="Gerald Cacho | Portfolio" />
        <meta name="twitter:description" content="Discover Gerald Cacho's portfolio featuring web development and graphic design projects for clients in the Philippines, US, Australia, and UK." />
        <meta name="twitter:image" content="https://geraldcacho.com/img/portfolio-cover.jpg" />
        <link rel="canonical" href="https://geraldcacho.com/portfolio" />
      </Head>
      <div className="wrapper">
        <div className="content">
          <h1><strong>Portfolio</strong></h1>
          <div className="tabs">
            <button 
              onClick={() => setActiveTab("Website Projects")} 
              className={activeTab === "Website Projects" ? "active" : ""}
            >
              Website Projects
            </button>
            <button 
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
