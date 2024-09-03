import Head from "next/head";
import { useState } from "react";
import portfolio from '@/data/portfolio.json';
import ListChrono from "@/components/lists/listChrono/listChrono";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Website Projects");

  return (
    <>
      <Head>
        <title>Portfolio | Gerald Cacho</title>
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
