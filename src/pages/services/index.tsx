import ListAccordion from "@/components/lists/listAccordion/listAccordion";
import Head from "next/head";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Gerald Cacho | Web Design, Development, and SEO</title>
        <meta name="description" content="Explore the range of services offered by Gerald Cacho, including logo and branding design, graphics design, UI/UX design, web design and development, web hosting management, and SEO services. Serving clients in the Philippines, US, Australia, and UK." />
        <meta name="keywords" content="web design, web development, SEO services, logo design, branding design, graphics design, UI/UX design, web hosting management, Gerald Cacho, Philippines, US, Australia, UK" />
        <meta property="og:title" content="Services | Gerald Cacho" />
        <meta property="og:description" content="Discover the professional services offered by Gerald Cacho, from logo and branding design to web development and SEO, catering to clients in the Philippines, US, Australia, and UK." />
        <meta property="og:image" content="https://geraldcacho.com/img/services-cover.jpg" />
        <meta property="og:url" content="https://geraldcacho.com/services" />
        <meta name="twitter:title" content="Services | Gerald Cacho" />
        <meta name="twitter:description" content="Explore the diverse services provided by Gerald Cacho, including web design, development, SEO, and more, for clients in the Philippines, US, Australia, and UK." />
        <meta name="twitter:image" content="https://geraldcacho.com/img/services-cover.jpg" />
        <link rel="canonical" href="https://geraldcacho.com/services" />
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
              content: "Crafting unique logos and comprehensive brand identities, including all necessary assets and guidelines to establish a cohesive and memorable brand presence."
            },
            {
              title: "Graphics Design",
              content: "Designing impactful marketing collaterals such as brochures, flyers, social media posts, email marketing materials, presentations, and banners to enhance your brand visibility and engagement."
            },
            {
              title: "UI/UX Design",
              content: "Providing thorough UI/UX design services, including detailed prototyping, strategic planning, and implementation of best practices to ensure an exceptional user experience and interface."
            },
            {
              title: "Web Design & Development",
              content: "Creating custom websites with responsive design, tailored functionality, and meticulous attention to detail to meet your unique needs and objectives."
            },
            {
              title: "Web Hosting Management",
              content: "Managing and maintaining your web hosting environment to ensure optimal performance, robust security, and reliable uptime for your online presence."
            },
            {
              title: "SEO Services",
              content: "Enhancing your site's visibility with a comprehensive SEO strategy, including on-page and off-page techniques, to improve search engine rankings and drive more organic traffic."
            }
          ]} />
        </div>
      </div>
    </>
  )
}
