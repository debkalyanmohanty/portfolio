import { Inter } from 'next/font/google';

import GlobalStyles from '../styles/GlobalStyles';

// Self-hosted at build time by next/font: no request to Google from visitors, no layout shift.
const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${inter.style.fontFamily};
        }
      `}</style>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
