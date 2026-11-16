// Single source of truth for all site content. Edit this file to update the portfolio.
// Anything marked TODO still needs a real value from you.

export const site = {
  // TODO: replace with your live URL (no trailing slash). Used for canonical + Open Graph tags.
  url: 'https://debkalyanmohanty.vercel.app',
  title: 'Deb Kalyan Mohanty - Backend Engineer (Go, Node.js, AWS)',
  description:
    'Backend engineer building secure, fast Go and Node.js services on AWS - authorization, rate limiting, serverless pipelines - in production fintech. AWS Certified Developer - Associate. Open to roles in Bengaluru, Hyderabad, Pune and Kolkata.',
  ogImage: '/og-image.png',
};

export const profile = {
  name: 'Deb Kalyan Mohanty',
  role: 'Backend Software Engineer',
  stack: 'Go (Golang), Node.js, TypeScript',
  pitch:
    'Backend engineer who builds secure, fast Go and Node.js services on AWS - authorization, rate limiting, serverless pipelines - in production fintech.',
  experienceSummary: '1+ year full-time + ~2 years of internships',
  relocate: ['Bengaluru', 'Hyderabad', 'Pune', 'Kolkata'],
  noticePeriod: '60 days',
  email: 'debkalyanmohanty.id@gmail.com',
  phone: '+91 8455819280',
  phoneHref: 'tel:+918455819280',
  linkedin: 'https://www.linkedin.com/in/mohantydebkalyan/',
  github: 'https://github.com/debkalyanmohanty',
  // TODO: put the PDF in /public with exactly this file name.
  resume: '/Deb_Kalyan_Mohanty_Backend_Engineer_Resume.pdf',
};

export const metrics = [
  { value: '~30%', label: 'lower API latency' },
  { value: '60%', label: 'faster PDF generation' },
  { value: '50%', label: 'faster deployments' },
];

export const experience = [
  {
    role: 'Software Engineer',
    company: 'KFin Technologies',
    type: 'Full-time',
    period: 'Sep 2025 - Present',
    points: [
      { lead: '~30% lower API latency', rest: ' - built API rate limiting.' },
      {
        lead: 'API responses up to 1 GB and 7 lakh (700K) rows',
        rest: ' - built a Go data-ingestion pipeline on AWS Lambda that pulls API data at this size.',
      },
      { lead: 'Analytics for wealth managers', rest: ' - built the backend systems that power it.' },
      { lead: 'Attribute-based access control (ABAC)', rest: ' implemented with AWS Cedar.' },
      { lead: 'Go backend services', rest: ' (Gin, GORM) for a regulated financial-services platform.' },
    ],
    tags: ['Go', 'Gin', 'GORM', 'AWS Lambda', 'AWS Cedar'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'KFin Technologies',
    type: 'Internship',
    period: 'Dec 2024 - Aug 2025',
    points: [
      { lead: '~60% faster PDF generation', rest: ' - rebuilt it with Typst.' },
      { lead: 'Serverless pipelines', rest: ' on AWS Lambda, S3 and Athena.' },
    ],
    tags: ['AWS Lambda', 'S3', 'Athena', 'Typst'],
  },
  {
    role: 'Technology Intern',
    company: 'Hindustan Times',
    type: 'Internship',
    period: 'Jul 2024 - Nov 2024',
    points: [
      { lead: '~50% faster deployments', rest: ' - set up CI/CD with GitHub Actions → AWS EC2 behind NGINX.' },
      { lead: 'AI-powered professional networking platform', rest: ' built on the MERN stack.' },
    ],
    tags: ['MERN', 'GitHub Actions', 'AWS EC2', 'NGINX'],
  },
  {
    role: 'SDE Intern (part-time)',
    company: 'Markoknow',
    type: 'Internship',
    period: 'Jun 2023 - Nov 2024',
    points: [
      { lead: '~30% higher engagement', rest: ' from gamification features in an LMS built on the MERN stack.' },
      { lead: 'Payment gateway', rest: ' integrated into the LMS.' },
    ],
    tags: ['MERN', 'Payments'],
  },
];

export const projects = [
  {
    title: 'GOIAM',
    lang: 'Go',
    image: null, // no screenshot: card shows a code header instead
    problem: 'Every service needs sign-in and permission checks; rebuilding them per app is error-prone.',
    built: 'A Go identity and access management service with JWT and OAuth 2.0 authentication and role-based access control (RBAC).',
    tags: ['Go', 'JWT', 'OAuth 2.0', 'RBAC'],
    source: 'https://github.com/debkalyanmohanty/go-iam-system',
    live: null,
  },
  {
    title: 'TwinFin',
    lang: 'Go',
    image: '/images/twin-fin.webp',
    alt: 'TwinFin dashboard showing linked bank accounts, total balance and recent transactions',
    problem: 'Money spread across several bank accounts is hard to track and move.',
    built: 'A React + Go app that links bank accounts through Plaid, shows balances and transactions, and transfers funds with Stripe.',
    tags: ['Go', 'React', 'Plaid API', 'Stripe API'],
    source: 'https://github.com/debkalyanmohanty/Twin-fin',
    live: 'https://twin-fin.vercel.app/sign-up',
  },
  {
    title: 'TWIN AI',
    lang: 'Node.js',
    image: '/images/twin-ai.webp',
    alt: 'TWIN AI community feed with a search bar and a grid of AI-generated images',
    problem: 'Turn a text prompt into an image and share it with other people.',
    built: 'A MERN app that generates images with the OpenAI API, stores them on Cloudinary and shows them in a searchable community feed.',
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'OpenAI API', 'Cloudinary'],
    source: 'https://github.com/debkalyanmohanty/TWIN_AI',
    live: 'https://twin-ai-clone.netlify.app/',
  },
];

// kind: 'go' | 'aws' highlights the chip.
export const skills = [
  {
    group: 'Languages',
    items: [{ name: 'Go (Golang)', kind: 'go' }, { name: 'JavaScript' }, { name: 'TypeScript' }, { name: 'Java' }],
  },
  {
    group: 'Backend',
    items: [
      { name: 'Gin', kind: 'go' },
      { name: 'GORM', kind: 'go' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'REST APIs' },
      { name: 'Microservices' },
      { name: 'Authorization (ABAC / AWS Cedar)' },
      { name: 'Rate limiting' },
    ],
  },
  {
    group: 'Cloud & DevOps',
    items: [
      { name: 'AWS Lambda', kind: 'aws' },
      { name: 'AWS S3', kind: 'aws' },
      { name: 'AWS Athena', kind: 'aws' },
      { name: 'AWS EC2', kind: 'aws' },
      { name: 'Serverless' },
      { name: 'GitHub Actions CI/CD' },
      { name: 'NGINX' },
      { name: 'Docker' },
    ],
  },
  {
    group: 'Databases',
    items: [{ name: 'PostgreSQL' }, { name: 'MySQL' }, { name: 'MongoDB' }],
  },
  {
    group: 'Frontend',
    items: [{ name: 'React' }, { name: 'MERN stack' }],
  },
];

export const certification = {
  name: 'AWS Certified Developer - Associate',
  issuer: 'Amazon Web Services',
  date: 'Aug 2025',
  // TODO: add your Credly verification URL, e.g. 'https://www.credly.com/badges/…'
  verifyUrl: null,
};

export const education = {
  degree: 'B.Tech in Information Technology',
  school: 'Veer Surendra Sai University of Technology (VSSUT), Burla',
  date: 'May 2025',
  grade: 'CGPA 9.11',
};
