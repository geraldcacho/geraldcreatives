import ListAccordion from "@/components/lists/listAccordion/listAccordion";
import Head from "next/head";

export default function servicos() {
  return(
    <>
      <Head>
        <title>Services | Gerald Cacho</title>
      </Head>
      <div className="wrapper">
        <div className="content">
          <h1>
            <span>Your Web Partner</span>
            <strong>From Design to Launch</strong>
          </h1>

          <ListAccordion list={[
          {
            title: "Logo & Branding Design",
            content: "Crafting unique logos and comprehensive brand identities, including all necessary assets and guidelines for a cohesive brand presence."
          },
          {
            title: "Graphics Design",
            content: "Designing marketing collaterals such as brochures, flyers, social media posts, email marketing materials, presentations, and banners to elevate your brand."
          },
          {
            title: "UI/UX Design",
            content: "Providing complete UI/UX design services, including thorough prototyping, strategic planning, and implementation of best practices for optimal user experience."
          },
          {
            title: "Web Design & Development",
            content: "Creating and developing custom websites with responsive design, tailored functionality, and attention to detail to meet your specific needs."
          },
          {
            title: "Web Hosting Management",
            content: "Managing and maintaining your web hosting environment to ensure optimal performance, security, and reliability for your online presence."
          },
          {
            title: "SEO Services",
            content: "Enhancing your site's visibility with comprehensive on-page and off-page SEO strategies to improve search engine rankings and attract more traffic."
          }
          ]} />
        </div>
      </div>
    </>
  )
}