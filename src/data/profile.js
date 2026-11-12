// All site content lives here. When the resume changes, update this file only.

export const profile = {
  name: 'Yariv Menachem',
  headline: 'Backend & AI Engineer',
  stackLine: '.NET · Python · Java · LLM Agents',
  location: 'Rishon LeZion, Israel',
  email: 'yariv220895@gmail.com',
  phone: '+972-52-459-4598',
  phoneHref: 'tel:+972524594598',
  linkedin: 'https://www.linkedin.com/in/yarivmen/',
  github: 'https://github.com/yariv245',
  resumePdf: 'resume.pdf',
  summary:
    'Backend engineer who builds with AI: 5+ years of production services in C#/.NET, Python and Java, multi-agent development workflows, and LLM-powered products shipped end to end.',
  about: [
    'I build backend services that have to keep working when the systems around them do not: booking flows that depend on external suppliers, cancellations that touch several systems at once, and data pipelines that a bank has to accept.',
    'Most of my production work is in C#/.NET today, after three years of Java and Spring Boot microservices and a year of Python and FastAPI as a freelancer.',
    'AI is part of how I work, not a side topic. At work I built a multi-agent development workflow that I use to ship code every day, and in my own time I build LLM-powered products, from RAG pipelines to CV tailoring and multi-agent market analysis.',
  ],
};

export const skills = [
  { group: 'Languages', icon: 'code', items: ['C#', 'Java', 'Python', 'SQL', 'JavaScript'] },
  {
    group: 'Backend',
    icon: 'server',
    items: ['.NET 8+', '.NET Framework', 'Spring Boot', 'Hibernate / JPA', 'FastAPI', 'Microservices', 'Event-driven / Saga'],
  },
  {
    group: 'Data',
    icon: 'database',
    items: ['PostgreSQL', 'MSSQL', 'Redis', 'Neo4j', 'Elasticsearch', 'Qdrant'],
  },
  {
    group: 'Cloud & DevOps',
    icon: 'cloud',
    items: ['Azure Service Bus', 'AWS EC2', 'AWS S3', 'AWS SQS', 'Docker', 'Jenkins', 'CI/CD', 'Pytest'],
  },
  {
    group: 'AI',
    icon: 'brain',
    items: ['Multi-agent workflows', 'GitHub Copilot agents', 'CrewAI', 'LangChain', 'Claude Code', 'MCP', 'RAG', 'Ollama', 'OpenAI / Claude / Gemini'],
  },
  {
    group: 'Architecture',
    icon: 'award',
    items: ['Microservices', 'Design Patterns', 'SOLID', 'OOP', 'Dependency Injection', 'Agile'],
  },
];

// Each achievement: `text` is the resume line; optional `details` opens under "More details".
// details blocks: { type: 'p', text } | { type: 'flow', steps: [] } | { type: 'outcomes', items: [{ title, text }] } | { type: 'list', items: [] }
export const experience = [
  {
    period: 'Oct 2025 – Present',
    company: 'ISSTA',
    role: 'Software Developer',
    context: 'Flight and hotel booking platform, C#/.NET.',
    achievements: [
      {
        title: 'Checkout reliability',
        text: 'Cut flight and hotel checkout failures by more than half (18% → 9%, 11% → 4%) through root cause analysis of C#/.NET booking services.',
        details: [
          {
            type: 'p',
            text: 'Checkout is the step from search to a closed booking, and it depends on external suppliers. I compared the payloads we actually sent, from telemetry and logs, against what each supplier API required, field by field.',
          },
          {
            type: 'list',
            items: [
              'Flights: found a schema and mapping mismatch that made the supplier reject calls silently, and fixed the mapping.',
              'Hotels: many bookings failed only at the last step because the room was no longer available. I added a light availability pre-check that fails fast, before the customer goes through the whole checkout.',
            ],
          },
        ],
      },
      {
        title: 'Multi-agent development workflow',
        text: 'Built a multi-agent AI development workflow (plan → implement → review → PR) with approval gates, Beads task tracking and persistent context; now my primary way of shipping code.',
        details: [
          {
            type: 'flow',
            steps: ['Work item', 'Plan', 'Approve', 'Implement & test', 'Independent review', 'Pull request', 'CI fix'],
          },
          {
            type: 'list',
            items: [
              'One agent per job, built as GitHub Copilot custom agents and skills: planning, slice-by-slice implementation, read-only bug investigation, opening PRs and repairing failing pipelines.',
              'Nothing is written before I approve the plan. Every slice must build and pass its tests before it is committed.',
              'A fresh reviewer subagent checks the diff against the requirements only, and I choose which findings to fix.',
              'Safety rules: a strict git allow-list, no force-push, no skipped hooks, no commits to protected branches.',
              'Beads tracks every task, so work survives a session reset, and a shared feature memory means the next agent does not re-investigate what the last one learned.',
            ],
          },
          {
            type: 'p',
            text: 'The code belongs to the company, but the design has no business logic, so I am happy to walk through it.',
          },
        ],
      },
      {
        title: 'Self-service hotel cancellation',
        text: 'Designed self-service hotel cancellation as an event-driven saga on Azure Service Bus, with partial-failure handling and server-side validation, reducing support load.',
        details: [
          {
            type: 'p',
            text: 'One cancellation touches several systems: the external hotel supplier and the back-office booking system. An orchestration service cancels on both sides, evaluates the two results, updates the order state and sends the right emails.',
          },
          {
            type: 'outcomes',
            items: [
              { title: 'Both succeed', text: 'The customer gets a confirmation.' },
              { title: 'One side fails', text: 'The booking moves to "under review" and an agent is notified.' },
              { title: 'Both fail', text: 'The customer sees a failure and an agent steps in.' },
            ],
          },
          {
            type: 'p',
            text: 'The server checks the booking status and the exact cancellation window itself before any external call, instead of relying on the UI hiding the button.',
          },
        ],
      },
    ],
  },
  {
    period: 'Jan 2025 – Oct 2025',
    company: 'Freelance',
    role: 'Backend & AI Developer',
    achievements: [
      {
        title: 'Bill of Materials backend',
        text: 'Architected a hybrid Bill of Materials backend with FastAPI, PostgreSQL and Neo4j, modeling multi-level component hierarchies as a graph alongside relational product data.',
      },
      {
        title: 'RAG document Q&A',
        text: 'Engineered an end-to-end RAG document Q&A pipeline: PDF chunking, Hugging Face embeddings, Qdrant vector search and answers generated with the OpenAI API.',
      },
      {
        title: 'Shipping certificates',
        text: 'Integrated a GraphQL API and OCR to automate shipping certificate workflows.',
      },
    ],
  },
  {
    period: 'Sep 2021 – Sep 2024',
    company: 'Home365',
    role: 'Backend Developer',
    context: 'Property-management platform managing up to 7,000 properties.',
    achievements: [
      {
        title: 'Core microservices',
        text: 'Developed core REST microservices in Java, Spring Boot and Hibernate/JPA, and integrated third-party systems.',
      },
      {
        title: 'Bank data pipeline',
        text: "Built a data pipeline (ETL) that extracts, transforms and securely transfers transaction data to the bank's SFTP servers in a bank-compliant CSV format.",
      },
      {
        title: 'PDF generation service',
        text: 'Designed a PDF generation service with Apache PDFBox and AWS S3 that fills templates with dynamic content and images.',
      },
    ],
  },
  {
    period: 'Nov 2019 – Mar 2020',
    company: 'DBmaestro',
    role: 'Automation Developer',
    achievements: [
      {
        title: 'Test automation',
        text: 'Developed automated UI and API test suites in Python (Pytest, Selenium) running in Jenkins CI.',
      },
    ],
  },
];

export const projects = [
  {
    name: 'Sidekix',
    tagline: '3D multiplayer creature-companion web game',
    description:
      'Explore a 3D world with a creature companion, catch wild creatures and battle other players live, on desktop or in a mobile browser.',
    highlights: [
      'Real-time multiplayer over a Node.js WebSocket server, with React, Three.js and Rapier physics in the browser.',
      'Accounts in MongoDB with email sign-up and password reset through Resend, so players can continue on any device.',
      'An Instagram DM bot that answers players with the game link.',
      'Custom Claude Code agents and skills that produce new creatures end to end: design, a 3D model through Meshy, attack animations in Blender and marketing videos in Remotion.',
    ],
    technologies: ['React', 'Three.js', 'Rapier', 'Node.js', 'WebSocket', 'MongoDB', 'Meshy', 'Blender', 'Claude Code'],
    link: 'https://www.sidekix.world',
  },
  {
    name: 'Milhush',
    tagline: 'Daily Hebrew word-puzzle app',
    description:
      'Daily Hebrew word puzzles: a Wordle-style game, a word-trail grid and a honeycomb word game (Hive), with daily puzzles, a campaign and streaks.',
    highlights: [
      'Flutter app for Android and the web (PWA) on a FastAPI and PostgreSQL backend.',
      'Works offline: the dictionary ships as a compressed Trie that syncs with ETags, and progress made offline is queued and sent later.',
      'A backtracking generator builds word-trail boards that use every tile on the board.',
      'The dictionary is built from Hspell, filtered to base forms, with difficulty from wordfreq frequencies.',
      'Guests can play right away, and their progress carries over when they sign up.',
    ],
    technologies: ['Flutter', 'FastAPI', 'PostgreSQL', 'JWT', 'React (admin dashboard)', 'Railway'],
    link: 'https://milhush.world',
  },
  {
    name: 'JobSeekerTG',
    tagline: 'Job-search bot and web app',
    description:
      'A Telegram bot and web app that scrape job boards and push new matches, on demand or on a schedule.',
    highlights: [
      'Scrapes LinkedIn, Indeed, Glassdoor and an Israeli job board, and only sends jobs the user has not seen.',
      'Gemini tailors the CV to each job with a skill-match score, strips personal details before the call, and flags any skill the CV never mentioned.',
      'Web app with Telegram login, a job list, an application tracker board and live search progress.',
    ],
    technologies: ['Python', 'python-telegram-bot', 'FastAPI', 'HTMX', 'MongoDB', 'Gemini', 'Railway'],
  },
  {
    name: 'Stock AI Analysis',
    tagline: 'Multi-agent market analysis',
    description:
      'Three CrewAI agents (researcher → analyst → strategist) on local Ollama models turn live market data into a BUY / SELL / HOLD report.',
    highlights: [
      'Agents work only from tool outputs (prices, news, fundamentals, indicators), with checks against invented numbers.',
      'Risk metrics such as Sharpe, Sortino and VaR are computed deterministically in pandas, not by the model.',
      'FastAPI backend with PostgreSQL and a Telegram bot for deep analysis, quick signals and a watchlist.',
    ],
    technologies: ['Python', 'CrewAI', 'LangChain', 'Ollama', 'FastAPI', 'PostgreSQL', 'Telegram'],
  },
  {
    name: 'YY-shifts',
    tagline: 'Shift scheduling system',
    description:
      'A scheduling system for businesses to manage employee shifts based on availability and priorities. It automates shift assignments and supports flexible work cycles for teams like bars, call centers and restaurants.',
    technologies: ['NodeJS', 'TypeScript', 'Express', 'Postgres'],
    link: 'https://github.com/yarinTag/YY-shifts',
    linkLabel: 'Code',
  },
];

export const education = {
  degree: 'B.Sc. in Computer Science',
  school: 'College of Management Academic Studies',
  period: '2018 – 2021',
};

export const military = {
  role: 'Ground Control Coordinator',
  unit: 'Israeli Air Force',
  period: '2013 – 2016',
};
