import Seo from '@/components/seo/seo';
import styles from './about.module.scss';

import CardTimeline from '@/components/cards/cardTimeline/cardTimeline';
import ContentImage from '@/components/content/contentImage/contentImage';
import ListTimeline from '@/components/lists/listTimeline/listTimeline';
import experiences from '@/data/experiences.json';
import ListTags from '@/components/lists/listTags/listTags';
import {
  personSchema,
  websiteSchema,
  aboutProfilePageSchema,
  aboutFaq,
  aboutFaqSchema,
  breadcrumbSchema,
} from '@/data/seo';

export default function About() {
  return (
    <>
      <Seo
        title="About Gerald Cacho | Senior Web Developer & UI/UX Designer"
        description="Gerald Cacho is a senior web developer and designer in Baguio City, Philippines, with 10+ years delivering WordPress, WooCommerce, UI/UX, technical SEO and CRM automation for US, UK and Australian clients."
        path="/about"
        image="/img/gerald-cacho-abra-digital-nomads.jpg"
        ogType="profile"
        jsonLd={[
          personSchema,
          websiteSchema,
          aboutProfilePageSchema,
          aboutFaqSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
        ]}
      />

      <div className="wrapper">
        <div className={`content ${styles.intro}`}>
          <h1>About Gerald Cacho</h1>
          <p>
            I&apos;m <strong>Gerald Cacho</strong>, a{' '}
            <strong>senior web developer and UI/UX designer</strong> based in{' '}
            <strong>Baguio City, Philippines</strong>, with{' '}
            <strong>10+ years</strong> building websites, eCommerce platforms and
            CRM-driven digital systems for clients across the{' '}
            <strong>United States, United Kingdom and Australia</strong>. I work
            with business owners and agency teams as the person who takes a
            project from requirements and design through development,
            integrations, testing, deployment and ongoing optimization.
          </p>
          <p>
            My work centers on <strong>custom WordPress and WooCommerce</strong>{' '}
            development, <strong>UI/UX design in Figma</strong>, front-end
            development, <strong>technical SEO</strong>, and{' '}
            <strong>marketing automation</strong> with HubSpot and GoHighLevel.
            I&apos;ve also managed cloud hosting on WP Engine, Amazon Lightsail
            and Linux servers, and integrated payment gateways and third-party
            APIs for production sites.
          </p>
          <p>
            I studied Information Technology (Software Development) at the
            University of Baguio and stay active in the{' '}
            <strong>digital nomad community</strong>, hosting local meet-ups and
            sharing what I learn.
          </p>
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
        </div>

        <div className={`content ${styles.faq}`}>
          <h2>Frequently Asked Questions</h2>
          {aboutFaq.map((item) => (
            <div key={item.question} className={styles.faqItem}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="content">
          <h2>Skills &amp; Technologies</h2>
          <ListTags
            list={[
              'WordPress',
              'PHP',
              'JavaScript',
              'HTML5',
              'CSS3',
              'WooCommerce',
              'Shopify',
              'Webflow',
              'Next.js',
              'Nuxt.js',
              'UI/UX Design',
              'Figma',
              'Adobe Photoshop',
              'Adobe Illustrator',
              'Technical SEO',
              'HubSpot',
              'GoHighLevel',
              'Google Analytics',
              'Google Tag Manager',
              'WP Engine',
              'Amazon Lightsail',
              'Linux',
              'cPanel / WHM',
              'Git',
            ]}
          />
        </div>
      </div>
    </>
  );
}
