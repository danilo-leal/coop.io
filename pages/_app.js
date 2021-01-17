import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>coop</title>
        <meta property="og:title" name="coop" content="financial" key="title" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <DefaultSeo {...SEO} />
      <body className="bg-white dark:bg-gray-900">
        <Component {...pageProps} />
      </body>
    </ThemeProvider>
  );
}

export default MyApp;
