import Head from 'next/head';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/data/seo';

type Props = {
  /** Full <title> text. */
  title: string;
  /** Meta description — one clear sentence, not a keyword list. */
  description: string;
  /** Route path, e.g. '/about'. Used for canonical + og:url. */
  path: string;
  /** Absolute URL or site-relative path to the share image. */
  image?: string;
  ogType?: 'website' | 'profile' | 'article';
  /** One JSON-LD object or an array of them. */
  jsonLd?: object | object[];
};

export default function Seo({
  title,
  description,
  path,
  image,
  ogType = 'website',
  jsonLd,
}: Props) {
  const canonical = `${SITE_URL}${path === '/' ? '/' : path.replace(/\/$/, '')}`;
  const shareImage = image
    ? image.startsWith('http')
      ? image
      : `${SITE_URL}${image}`
    : DEFAULT_OG_IMAGE;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={shareImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={shareImage} />

      {blocks.map((block, i) => (
        <script
          key={`ld-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </Head>
  );
}
