import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description?: string;
  path?: string;
}

const SITE_NAME = 'Maa Bhawani Luxury Showroom';
const BASE_URL = 'https://maabhawani.com';

export default function Seo({ title, description, path }: SeoProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = path ? `${BASE_URL}${path}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
    </Helmet>
  );
}
