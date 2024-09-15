import Head from 'next/head';
import Link from 'next/link';

import CardTimeline from '@/components/cards/cardTimeline/cardTimeline';
import ContentImage from '@/components/content/contentImage/contentImage';
import ListTimeline from '@/components/lists/listTimeline/listTimeline';
import experiences from '@/data/experiences.json';
import ListTags from '@/components/lists/listTags/listTags';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>About Gerald Cacho | Web Developer & Designer | Baguio City</title>
        <meta name="description" content="Gerald Cacho is a skilled web developer and designer based in Baguio City, specializing in PHP, WordPress, Shopify, and Webflow. Let's collaborate to create high-performance websites and user experiences." />
        <meta name="keywords" content="Gerald Cacho, web developer, designer, PHP, WordPress, Shopify, Webflow, Baguio City, SEO, digital nomad" />
        <meta property="og:title" content="About Gerald Cacho | Web Developer & Designer" />
        <meta property="og:description" content="Learn more about Gerald Cacho, a web developer and designer from Baguio City, Philippines, with expertise in CMS platforms like WordPress, Shopify, and Webflow." />
        <meta property="og:image" content="/img/gerald-cacho-abra-digital-nomads.jpg" />
        <meta property="og:url" content="https://geraldcacho.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="wrapper">
        <div className="content">
          <h1>About Me</h1>
          <p>Hi there! I&apos;m <strong>Gerald Cacho</strong>, a <strong>web developer and designer</strong> based in <strong>Baguio City, Philippines</strong>. I specialize in creating <strong>high-performance websites</strong> using PHP, WordPress, Webflow, and other CMS platforms like Squarespace and Shopify. My work focuses on web development, <strong>SEO</strong>, and graphic design to create engaging, user-friendly web experiences.</p>
          <br />
          <p>In addition to my professional work, I&apos;m an active participant in the <strong>digital nomad community</strong> and continuously exploring new ways to share knowledge and improve my skills.</p>
          <br />
          <p>Let&apos;s collaborate to build something amazing together!</p>
        </div>

        <ContentImage
          src="/img/gerald-cacho-abra-digital-nomads.jpg"
          width={1024}
          height={560}
          alt="Gerald Cacho hosting the Abra Digital Nomads Meet-up 2024"
        />

        <div className="content">
          <h2>Professional Experience</h2>
          <ListTimeline>
            {experiences.map((experience, index) => (
              <li key={index}>
                <CardTimeline
                  title={experience.title}
                  company={experience.company}
                  year={experience.year}
                  description={experience.description}
                />
              </li>
            ))}
          </ListTimeline>

          <h2>Skills & Technologies</h2>
          <ListTags
            list={[
              'HTML',
              'CSS',
              'JavaScript',
              'PHP',
              'WordPress',
              'Shopify',
              'Webflow',
              'Next.js',
              'Git',
              'User Experience',
              'User Interface',
              'Figma',
              'Photoshop',
              'Illustrator',
              'GHL',
              'ClickUp',
            ]}
          />
        </div>
      </div>
    </>
  );
}
