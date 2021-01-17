const title = 'coop';
const description = 'financial';

const SEO = {
  title,
  description,
  canonical: 'https://coop.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://coop.vercel.app',
    title,
    description,
    images: [
      {
        url: '',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;
