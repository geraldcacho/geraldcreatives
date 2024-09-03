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
        <title>About Me | Gerald Cacho</title>
      </Head>
      <div className="wrapper">
        <div className="content">
          <h1>About Me</h1>
          <p>Hi there! I&apos;m Gerald Cacho, a web developer and designer based in Baguio City, Philippines 🌟. I specialize in creating high-performance websites using WordPress, PHP, and other CMS platforms like Squarespace and Shopify 💻🎨. With expertise in web development, SEO, and graphic design, I create engaging, user-friendly web experiences.</p>
          <br/>
          <p>When I&apos;m not coding or designing, you&apos;ll find me engaging with the digital nomad community or exploring new ways to share and gain knowledge.</p>
          <br/>
          <p>Let&apos;s create something amazing together!</p>
        </div>

        <ContentImage src="/img/gerald-cacho-abra-digital-nomads.jpg" width={1024} height={560} alt="Gerald Cacho - Abra Digital Nomads Meet-up 2024">
        </ContentImage>

        <div className="content">
          <ListTimeline title="Experience">
            {experiences.map((experience, index) => (
              <li key={index}>
                <CardTimeline title={experience.title} company={experience.company} year={experience.year} description={experience.description} />
              </li>
            ))}
          </ListTimeline>

          <ListTags title="Skills" list={[
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
            'ClickUp'
          ]} />
        </div>
      </div>
    </>
  )
}
