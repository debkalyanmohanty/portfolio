import Head from 'next/head';

import Contact from '../components/Contact';
import Credentials from '../components/Credentials';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { certification, education, profile, site } from '../data/profile';

const ogImage = `${site.url}${site.ogImage}`;

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  description: profile.pitch,
  url: site.url,
  image: ogImage,
  email: `mailto:${profile.email}`,
  sameAs: [profile.linkedin, profile.github],
  worksFor: { '@type': 'Organization', name: 'KFin Technologies' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: education.school },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: certification.name,
    recognizedBy: { '@type': 'Organization', name: certification.issuer },
  },
  knowsAbout: ['Go', 'Golang', 'Node.js', 'TypeScript', 'Java', 'AWS', 'AWS Lambda', 'Data pipelines', 'Backend development', 'REST APIs', 'Serverless'],
};

const Home = () => (
  <>
    <Head>
      <title>{site.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={site.description} />
      <meta name="author" content={profile.name} />
      <link rel="canonical" href={`${site.url}/`} />

      <meta property="og:type" content="profile" />
      <meta property="og:site_name" content={profile.name} />
      <meta property="og:title" content={site.title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:url" content={`${site.url}/`} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${profile.name} - ${profile.role}`} />
      <meta property="og:locale" content="en_IN" />
      <meta property="profile:first_name" content="Deb Kalyan" />
      <meta property="profile:last_name" content="Mohanty" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={site.title} />
      <meta name="twitter:description" content={site.description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    </Head>

    <Header />
    <main id="main">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Credentials />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Home;
