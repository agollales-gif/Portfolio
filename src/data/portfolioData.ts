export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  role: string;
  techStack: string[];
  category: 'Full-Stack & AI' | 'Commercial Web' | 'UI/UX & Frontend';
  overview: string;
  deliverables: {
    label?: string;
    description: string;
  }[];
  liveUrl?: string;
  liveDomain?: string;
  status: string;
  architectureNodes: {
    layer: string;
    component: string;
    detail: string;
  }[];
}

export interface SkillCategory {
  id: string;
  code: string;
  category: string;
  summary: string;
  accent: 'cyan' | 'emerald' | 'amber' | 'rose';
  skills: {
    name: string;
    role: string;
    featured?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  year: string;
  title: string;
  location: string;
  flag: string;
  tag: string;
  highlights: string[];
}

export const PROFILE_DATA = {
  name: 'Alesjo Agolli',
  location: 'Tirana, Albania',
  coordinates: '41.3275° N, 19.8187° E',
  nodeId: 'TIA-AL-NODE-01',
  roles: [
    'Full-Stack Web Developer',
    'UI/UX & Frontend Engineer',
  ],
  hero: {
    headline:
      'Alesjo Agolli — Full-Stack Web Developer crafting scalable web platforms, responsive interfaces, and modern digital products.',
    subHeadline:
      'Bridging modern front-end architecture with fast back-end APIs and clean user experiences.',
    primaryCtaProjects: 'View My Projects',
    primaryCtaCv: 'Download CV',
    secondaryCtaContact: 'Contact Me',
  },
  about: {
    intro:
      'I am a Tirana-based Full-Stack Web Developer passionate about building fast, user-centric web platforms and digital products. With a strong foundation in Information & Communication Technology (ICT) from Don Bosko Technical High School in Tirana, I focus on engineering production-ready applications, institutional digital platforms, and clean web workflows.',
    toolkitIntro: 'My technical toolkit spans the entire development lifecycle:',
    lifecyclePillars: [
      {
        code: 'STAGE_01 // INTERFACE & FRONTEND',
        title: 'UI/UX & Responsive Front-End Architecture',
        description:
          'Designing clean, user-centric interfaces in Figma and building responsive front-ends using React, Next.js, TypeScript, Vite, and Tailwind CSS.',
        tags: ['Figma', 'React', 'Next.js', 'TypeScript', 'Vite', 'Tailwind CSS'],
      },
      {
        code: 'STAGE_02 // CORE BACKEND & DATA',
        title: 'Secure, High-Speed Back-End Engineering',
        description:
          'Developing fast, secure back-end architectures and databases with Node.js, Express, Hono, Python, and Supabase.',
        tags: ['Node.js', 'Express', 'Hono', 'Python', 'Supabase', 'PostgreSQL'],
      },
      {
        code: 'STAGE_03 // AUTOMATION & DEPLOYMENT',
        title: 'Modern Tooling & Workflows',
        description:
          'Automating build, deployment, and API integrations for reliable, scalable production systems.',
        tags: ['Git', 'Vercel', 'REST APIs', 'Workflow Automation'],
      },
    ],
    closing:
      'As an alumnus of international tech competitions and vocational mobility programs—including HackJunction (Tirana & Finland) and CultiVETing in Liguria, Italy—I thrive in fast-paced, collaborative environments focused on solving real-world problems through technology.',
  },
  numerals: [
    {
      value: '03',
      label: 'Production ecosystems & commercial platforms live in production',
    },
    {
      value: '04',
      label: 'Core pillars: Frontend, Backend/DB, Local AI & UI/UX Design',
    },
    {
      value: '20+',
      label: 'Modern technologies across React, Next.js, TypeScript, Node.js & Ollama',
    },
    {
      value: '03',
      label: 'European innovation hubs on record — Albania, Finland & Italy',
    },
  ],
  marqueeRecord: [
    'Qendra Sociale "Don Bosko" Tirana',
    'Luka Rent a Car (lukarentacar.com)',
    'HaNeul — Asian Food Distributor',
    'HackJunction (Tirana & Finland)',
    'CultiVETing (Liguria, Italy)',
    'Bosko AI — Local LLM via Ollama',
    'Sekretaria Management System',
  ],
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'don-bosko-tirana',
    index: 'PRJ-01',
    title: '"Don Bosko Tirana" Digital Ecosystem',
    role: 'Lead Full-Stack Developer & AI Engineer',
    techStack: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Ollama AI', 'Tailwind CSS'],
    category: 'Full-Stack & AI',
    overview:
      'Architected, developed, and deployed a comprehensive suite of digital platforms for Qendra Sociale "Don Bosko" Tirana.',
    liveUrl: 'https://www.qendradonbosko.com/',
    liveDomain: 'qendradonbosko.com',
    status: 'PRODUCTION // QENDRADONBOSKO.COM',
    deliverables: [
      {
        label: 'Official Web Portal',
        description: 'Designed and launched a modern, accessible public website for the institution.',
      },
      {
        label: '"Sekretaria" Management System',
        description:
          'Engineered an internal administrative web application to streamline student records, institutional data, and staff workflows.',
      },
      {
        label: '"Bosko AI" Virtual Assistant',
        description:
          'Integrated a custom conversational AI assistant running on local LLM infrastructure using Ollama to assist students and staff in real time.',
      },
    ],
    architectureNodes: [
      {
        layer: 'Client Applications',
        component: 'Public Portal + "Sekretaria" Admin SPA',
        detail: 'React + TypeScript interfaces tailored for public visitors and administrative staff',
      },
      {
        layer: 'Application & Data Core',
        component: 'Node.js API + Supabase PostgreSQL',
        detail: 'Structured institutional records, student lifecycle management, and role-based access',
      },
      {
        layer: 'Local AI Inference',
        component: '"Bosko AI" via Ollama Local LLM',
        detail: 'Real-time conversational AI assistant for students and institutional staff',
      },
    ],
  },
  {
    id: 'luka-rent-a-car',
    index: 'PRJ-02',
    title: 'Luka Rent a Car',
    subtitle: 'lukarentacar.com',
    role: 'Full-Stack Web Developer',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Node.js'],
    category: 'Commercial Web',
    overview:
      'Built a commercial, mobile-first vehicle rental and booking platform tailored for speed, SEO performance, and a seamless user booking experience.',
    liveUrl: 'https://lukarentacar.com',
    liveDomain: 'lukarentacar.com',
    status: 'LIVE COMMERCIAL // LUKARENTACAR.COM',
    deliverables: [
      {
        label: 'Dynamic Fleet & Booking Engine',
        description: 'Developed an intuitive vehicle catalog with dynamic filtering and booking inquiry flows.',
      },
      {
        label: 'Performance & Core Web Vitals',
        description: 'Optimized core web vitals and responsive layouts across all device types.',
      },
    ],
    architectureNodes: [
      {
        layer: 'Presentation Layer',
        component: 'React + Vite + Tailwind CSS',
        detail: 'Mobile-first responsive UI with instant fleet search and multi-criteria filtering',
      },
      {
        layer: 'Booking & Inquiry Pipeline',
        component: 'Node.js Backend Services',
        detail: 'Streamlined reservation requests, date availability validation, and customer notifications',
      },
      {
        layer: 'SEO & Core Web Vitals',
        component: 'Asset & Bundle Optimization',
        detail: 'Sub-second initial paint, structured metadata, and high conversion mobile UX',
      },
    ],
  },
  {
    id: 'haneul-distributor',
    index: 'PRJ-03',
    title: 'HaNeul — Asian Food Distributor Platform',
    role: 'Front-End Developer & UI/UX Designer',
    techStack: ['Figma', 'React', 'Tailwind CSS'],
    category: 'UI/UX & Frontend',
    overview:
      'Designed and developed a bespoke multi-page web application for an Asian food distribution company to showcase its product catalog and brand identity.',
    liveUrl: 'https://haneul.blackbear-solutions.com/',
    liveDomain: 'haneul.blackbear-solutions.com',
    status: 'DEPLOYED // HANEUL.BLACKBEAR-SOLUTIONS.COM',
    deliverables: [
      {
        label: 'High-Fidelity Design System',
        description: 'Created high-fidelity UI/UX prototypes in Figma prior to full code implementation.',
      },
      {
        label: 'Product Discovery Architecture',
        description: 'Delivered a clean, scalable front-end architecture focused on product discovery.',
      },
    ],
    architectureNodes: [
      {
        layer: 'Design Engineering',
        component: 'Figma Design System & Prototypes',
        detail: 'Custom brand typography, color tokens, and interactive multi-page wireframes',
      },
      {
        layer: 'Component Architecture',
        component: 'React Modular Views',
        detail: 'Reusable catalog cards, category taxonomy navigation, and brand storytelling layouts',
      },
      {
        layer: 'Styling & Responsiveness',
        component: 'Tailwind CSS Utility System',
        detail: 'Fluid grid layouts engineered for wholesale buyers and retail browsing',
      },
    ],
  },
];

export const SKILLS_MATRIX: SkillCategory[] = [
  {
    id: 'frontend',
    code: 'SYS_MOD_01',
    category: 'Front-End Development',
    summary: 'Component-driven interfaces, type-safe state management, and responsive modern web standards.',
    accent: 'cyan',
    skills: [
      { name: 'React', role: 'UI Architecture & SPA', featured: true },
      { name: 'Next.js', role: 'SSR & Full-Stack React', featured: true },
      { name: 'TypeScript', role: 'Static Type Safety', featured: true },
      { name: 'JavaScript (ES6+)', role: 'Core Web Runtime' },
      { name: 'Vite', role: 'Next-Gen Build Tooling', featured: true },
      { name: 'Tailwind CSS', role: 'Design System & Styling', featured: true },
      { name: 'HTML5', role: 'Semantic Markup' },
      { name: 'CSS3', role: 'Modern Layouts & Animations' },
    ],
  },
  {
    id: 'backend',
    code: 'SYS_MOD_02',
    category: 'Back-End & Databases',
    summary: 'High-throughput APIs, relational data modeling, real-time backends, and version control.',
    accent: 'emerald',
    skills: [
      { name: 'Node.js', role: 'Server Runtime', featured: true },
      { name: 'Express.js', role: 'REST API Framework', featured: true },
      { name: 'Hono', role: 'Ultrafast Edge/Web APIs', featured: true },
      { name: 'Python', role: 'Backend & AI Scripting', featured: true },
      { name: 'C++', role: 'Algorithmic & Systems Programming' },
      { name: 'Supabase', role: 'BaaS, Auth & Postgres', featured: true },
      { name: 'PostgreSQL', role: 'Relational Database Engine', featured: true },
      { name: 'RESTful APIs', role: 'Service Integration & Contracts' },
      { name: 'Git & GitHub', role: 'Version Control & Collaboration', featured: true },
    ],
  },
  {
    id: 'ai',
    code: 'SYS_MOD_03',
    category: 'AI & Emerging Tech',
    summary: 'Private, low-latency local LLM inference, custom institutional assistants, and automated pipelines.',
    accent: 'amber',
    skills: [
      { name: 'Ollama', role: 'Local LLM Runtime', featured: true },
      { name: 'Local LLM Deployment & Integration', role: 'Custom AI Integration', featured: true },
      { name: 'Prompt Engineering', role: 'System Context & Guardrails' },
      { name: 'AI Workflow Automation', role: 'Task & Process Orchestration', featured: true },
    ],
  },
  {
    id: 'design',
    code: 'SYS_MOD_04',
    category: 'UI/UX & Design',
    summary: 'Human-centered wireframing, interactive high-fidelity prototypes, and mobile-first ergonomics.',
    accent: 'rose',
    skills: [
      { name: 'Figma', role: 'UI/UX Design & Prototyping', featured: true },
      { name: 'Responsive Web Design', role: 'Multi-Device Fluid Layouts', featured: true },
      { name: 'Wireframing & Prototyping', role: 'User Flows & Design Systems' },
    ],
  },
];

export const INTERNATIONAL_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'cultiveting-2026',
    year: '2026',
    title: 'CultiVETing Vocational Mobility Program',
    location: 'Liguria, Italy',
    flag: '🇮🇹',
    tag: 'INTERNATIONAL TECHNICAL STUDY VISIT',
    highlights: [
      'Selected participant for an international technical study visit focused on European best practices in vocational education, innovation, and technological development.',
    ],
  },
  {
    id: 'hackjunction-2025',
    year: '2025',
    title: 'HackJunction Hackathon Alumnus',
    location: 'Tirana, Albania & Finland',
    flag: '🇦🇱 🇫🇮',
    tag: 'EUROPEAN HACKATHON ECOSYSTEM',
    highlights: [
      "Competed in Europe's leading hackathon ecosystem, collaborating under tight deadlines to build and pitch innovative software prototypes.",
    ],
  },
];

export interface BrandKitCustomTokens {
  portfolioUrl: string;
  email: string;
  githubUser: string;
  linkedinUser: string;
  phone: string;
}

export const DEFAULT_BRAND_TOKENS: BrandKitCustomTokens = {
  portfolioUrl: 'alesjoagolli.dev',
  email: 'agollales@gmail.com',
  githubUser: 'agollales-gif',
  linkedinUser: 'alesjo-agolli-a82223361',
  phone: '',
};

export function generateBrandKitAssets(tokens: BrandKitCustomTokens) {
  const portfolioDisplay = tokens.portfolioUrl.trim() || 'alesjoagolli.dev';
  const emailDisplay = tokens.email.trim() || 'agollales@gmail.com';
  const githubDisplay = tokens.githubUser.trim() || 'agollales-gif';
  const linkedinDisplay = tokens.linkedinUser.trim() || 'alesjo-agolli-a82223361';
  const phoneDisplay = tokens.phone.trim() || '[Your Phone Number]';

  return {
    linkedinHeadline: `Full-Stack Web Developer (React, Next.js, TypeScript, Node.js) | Local AI Integrations (Ollama) | UI/UX Design | HackJunction Alumni`,
    linkedinAbout: `I build web platforms and AI-powered applications that scale.

As a Full-Stack Web Developer based in Tirana, I work across the entire development lifecycle—from crafting clean, responsive interfaces in Figma and React to building fast Node.js/Python backends, Supabase databases, and local AI deployments with Ollama.

🚀 Key Highlights of My Work:
• Institutional Digitalization: Architected and deployed the official web portal (qendradonbosko.com), the "Sekretaria" administrative management platform, and the "Bosko AI" assistant for Qendra Sociale Don Bosko Tirana.
• Commercial Web Solutions: Delivered custom, high-performance web applications for businesses including Luka Rent a Car (lukarentacar.com) and HaNeul (haneul.blackbear-solutions.com).
• International Experience: HackJunction 2025 participant (Tirana & Finland) and CultiVETing 2026 certified study visit participant in Liguria, Italy.

💻 Core Stack:
• Front-End & UI/UX: React, Next.js, TypeScript, Vite, Tailwind CSS, Figma
• Back-End & DB: Node.js, Express, Hono, Python, C++, Supabase, PostgreSQL
• Local AI: Ollama, Local LLMs, Conversational AI Assistants

I am always open to connecting with fellow engineers, tech founders, and teams working on ambitious digital products. Feel free to reach out!`,
    githubShortBio: `Full-Stack Web Developer | Building with TypeScript, React, Next.js, Node.js & Python`,
    githubReadme: `### Hi there, I'm Alesjo Agolli 👋

**Full-Stack Web Developer** based in Tirana, Albania 🇦🇱.  
I focus on engineering modern web applications, responsive interfaces, and digital platforms.

- 🔭 **Current Focus:** Full-stack web architecture (\`React\`, \`Next.js\`, \`TypeScript\`, \`Node.js\`, \`Supabase\`).
- 🏗️ **Notable Deployments:** Digital Ecosystem for [Don Bosko Tirana](https://www.qendradonbosko.com/) (*Web Portal & Sekretaria Admin Platform*), [Luka Rent a Car](https://lukarentacar.com), and [HaNeul Distributor Web App](https://haneul.blackbear-solutions.com/).
- 🌍 **International Experience:** HackJunction 2025 (Tirana & Finland 🇫🇮) | CultiVETing 2026 (Liguria, Italy 🇮🇹).
- 📫 **How to reach me:** ${emailDisplay} | https://www.linkedin.com/in/${linkedinDisplay}/

#### 🛠️ Tech Stack & Tools
- **Frontend & UI/UX:** React, Next.js, TypeScript, Vite, Tailwind CSS, Figma
- **Backend & Databases:** Node.js, Express, Hono, Python, Supabase, PostgreSQL, REST APIs`,
    socialBioOption1: `Alesjo Agolli
💻 Full-Stack Web Developer
⚡ React • TypeScript • Next.js • Node.js • Supabase
🌍 HackJunction 🇫🇮 | CultiVETing 🇮🇹
📍 Tirana, AL | 👇 Portfolio & Projects
${portfolioDisplay}`,
    socialBioOption2: `Full-Stack Web Developer.
Building scalable web apps, modern interfaces, and digital systems.
📍 Tirana, Albania | 🌐 ${portfolioDisplay}`,
    emailSignature: `Best regards,

Alesjo Agolli
Full-Stack Web Developer
📍 Tirana, Albania
🌐 Portfolio: ${portfolioDisplay}
💻 GitHub: github.com/${githubDisplay} | 🔗 LinkedIn: linkedin.com/in/${linkedinDisplay}
✉️ ${emailDisplay}${tokens.phone.trim() ? ` | 📞 +355 ${phoneDisplay}` : ''}`,
  };
}
