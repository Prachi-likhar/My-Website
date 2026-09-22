export const profile = {
  name: 'Prachi Likhar',
  role: 'B.Tech CSE Student · Aspiring Developer',
  tagline: 'First-year Computer Science student passionate about building things that live on the web.',
  bio: "I'm a first-year B.Tech Computer Science & Engineering student with a deep curiosity for how things work under the hood. From writing my first 'Hello World' in Python to deploying full-stack web apps, I've been on a constant journey of learning. I enjoy problem-solving, competitive programming, and contributing to open-source communities. When I'm not coding, you'll find me sketching UI concepts or volunteering with NSS.",
  location: 'Indore, Madhya Pradesh, India',
  email: 'prachi.likhar@example.com',
  university: 'IET DAVV, Indore',
  avatarInitials: 'PL',
};

export const socials = {
  github: 'https://github.com/prachilikhar',
  linkedin: 'https://linkedin.com/in/prachilikhar',
  instagram: 'https://instagram.com/prachi.likhar',
};

export const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Institute of Engineering & Technology, DAVV, Indore',
    duration: '2025 — 2029 (Expected)',
    description: 'Currently in my first year (1st semester). Coursework includes Data Structures, Object-Oriented Programming, Discrete Mathematics, and Digital Logic Design. Active member of the Coding Club and Google Developer Student Club.',
    gpa: 'CGPA: 8.7 / 10 (Semester 1)',
  },
  {
    degree: 'Higher Secondary (Class XII) — PCM + CS',
    institution: 'Delhi Public School, Indore',
    duration: '2023 — 2025',
    description: 'Specialized in Physics, Chemistry, Mathematics, and Computer Science. Scored 95.2% in CBSE board examinations. Participated in inter-school coding competitions and robotics fairs.',
    gpa: 'Percentage: 95.2%',
  },
  {
    degree: 'Secondary School (Class X)',
    institution: 'Delhi Public School, Indore',
    duration: '2021 — 2023',
    description: 'Completed CBSE Class X with a perfect score in Mathematics and Information Technology. Received the Principal\'s Honor Roll for academic excellence.',
    gpa: 'Percentage: 96.8%',
  },
];

export const skillCategories = [
  {
    title: 'Languages',
    icon: 'Code2',
    skills: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'Java (Basics)'],
  },
  {
    title: 'Web Development',
    icon: 'Globe',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'React', 'Node.js (Basics)', 'Express (Basics)'],
  },
  {
    title: 'Tools & Platforms',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Figma', 'Postman'],
  },
  {
    title: 'Core CS',
    icon: 'Brain',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'OS (Learning)'],
  },
];

export const projects = [
  {
    title: 'StudyBuddy — Collaborative Notes Platform',
    description: 'A real-time note-sharing platform built for college students. Features markdown support, live collaboration, and a searchable repository of class notes organized by subject.',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    github: 'https://github.com/prachilikhar/studybuddy',
    live: '#',
    featured: true,
  },
  {
    title: 'CodeTracker — Competitive Programming Dashboard',
    description: 'Aggregates solved problems from LeetCode, Codeforces, and HackerRank into a unified dashboard with progress charts, streak tracking, and daily challenge recommendations.',
    tags: ['React', 'Chart.js', 'REST APIs'],
    github: 'https://github.com/prachilikhar/codetracker',
    live: '#',
    featured: true,
  },
  {
    title: 'EcoRoute — Carbon-Aware Route Planner',
    description: 'A route planner that suggests the most environmentally friendly travel path by estimating carbon emissions across different transport modes. Built at a 24-hour hackathon.',
    tags: ['Python', 'Flask', 'Google Maps API'],
    github: 'https://github.com/prachilikhar/ecoroute',
    live: '#',
    featured: false,
  },
  {
    title: 'DevNotes — CLI Snippet Manager',
    description: 'A lightweight command-line tool for storing, tagging, and searching code snippets. Supports syntax highlighting and fuzzy search. Published on npm.',
    tags: ['Node.js', 'CLI', 'npm'],
    github: 'https://github.com/prachilikhar/devnotes',
    live: '#',
    featured: false,
  },
  {
    title: 'Portfolio Website (This One!)',
    description: 'My personal portfolio built with React, TypeScript, and Tailwind CSS. Features dark/light mode, scroll animations, and a fully responsive design.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    github: 'https://github.com/prachilikhar/portfolio',
    live: '#',
    featured: false,
  },
  {
    title: 'WeatherNow — Minimal Weather App',
    description: 'A clean, minimal weather application with geolocation support, 5-day forecasts, and beautiful weather-based dynamic backgrounds.',
    tags: ['JavaScript', 'OpenWeather API', 'CSS'],
    github: 'https://github.com/prachilikhar/weathernow',
    live: '#',
    featured: false,
  },
];

export const achievements = [
  {
    title: 'HackNIT 2025 — 2nd Place',
    description: 'Secured second place among 40+ teams at the inter-NIT hackathon for building EcoRoute, a carbon-aware route planner, in 24 hours.',
    date: 'March 2025',
    icon: 'Trophy',
  },
  {
    title: 'Codeforces Pupil (Max Rating 1234)',
    description: 'Achieved Pupil rank on Codeforces with a max rating of 1234. Solved 180+ problems across contests and practice.',
    date: 'Ongoing',
    icon: 'Code',
  },
  {
    title: 'NPTEL — Programming in Java (Elite)',
    description: 'Completed the 12-week NPTEL certification course with Elite status (scored 87%).',
    date: 'Nov 2025',
    icon: 'Award',
  },
  {
    title: 'Inter-School Coding Competition — Gold',
    description: 'Won first place at the DPS Inter-School Coding Challenge for solving all three algorithmic problems in record time.',
    date: 'Aug 2024',
    icon: 'Medal',
  },
  {
    title: 'Google Kick Start — Round A Qualifier',
    description: 'Qualified for Google Kick Start Round A 2025, solving 2 out of 4 problems and ranking in the top 30%.',
    date: 'April 2025',
    icon: 'Star',
  },
  {
    title: 'Best First-Year Project Award',
    description: 'Received the Best First-Year Project award at the IET DAVV CSE Department Tech Fest for StudyBuddy.',
    date: 'May 2025',
    icon: 'Sparkles',
  },
  {
    title: 'Google Cloud AI Workshop — Attended',
    description: 'Recently attended the Google Cloud AI Workshop, gaining hands-on experience with Vertex AI, Gemini API, and deploying machine learning models on Google Cloud Platform.',
    date: 'Sep 2026',
    icon: 'Cloud',
  },
  {
    title: 'Smart India Hackathon (SIH) — Internal Round Participant',
    description: 'Participated in the Smart India Hackathon internal round at IET DAVV, collaborating with a team of four to build a prototype solution for a government-listed problem statement within 36 hours.',
    date: 'Sep 2026',
    icon: 'Lightbulb',
  },
];

export const volunteering = [
  {
    title: 'NSS Volunteer',
    organization: 'National Service Scheme, IET DAVV',
    duration: 'Aug 2025 — Present',
    description: 'Active NSS volunteer participating in community cleanliness drives, tree plantation campaigns, and digital literacy workshops for rural school students. Completed 40+ hours of community service in the first semester.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Teaching Assistant — CodeClub',
    organization: 'Google Developer Student Club, IET DAVV',
    duration: 'Sep 2025 — Present',
    description: 'Volunteer teaching assistant for the CodeClub initiative, helping school students from underprivileged backgrounds learn the basics of Python and web development through weekend sessions.',
    icon: 'GraduationCap',
  },
  {
    title: 'Open Source Contributor',
    organization: 'Various GitHub Projects',
    duration: '2024 — Present',
    description: 'Active open-source contributor with merged PRs to projects including a popular React UI library and a beginner-friendly CLI tool. Maintainer of two personal npm packages.',
    icon: 'GitBranch',
  },
  {
    title: 'Blood Donation Camp Coordinator',
    organization: 'NSS & IET DAVV Medical Center',
    duration: 'Oct 2025',
    description: 'Coordinated the annual blood donation camp at IET DAVV, managing registrations and logistics. The camp collected 120+ units of blood in a single day.',
    icon: 'Droplet',
  },
];

export const certificates = [
  {
    title: 'Programming in Java (NPTEL Elite)',
    issuer: 'NPTEL / IIT Kharagpur',
    date: 'Nov 2025',
    credentialId: 'NP25JA4312092',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Sep 2025',
    credentialId: 'fcc-rwd-2025-8871',
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: 'Oct 2025',
    credentialId: 'fcc-jsads-2025-4412',
  },
  {
    title: 'Python for Data Science',
    issuer: 'Coursera (University of Michigan)',
    date: 'Jul 2025',
    credentialId: 'CY-PMDS-2025-3390',
  },
  {
    title: 'Git & GitHub Essentials',
    issuer: 'Coursera (Google)',
    date: 'Jun 2025',
    credentialId: 'CY-GGE-2025-7712',
  },
  {
    title: 'C for Everyone: Programming Fundamentals',
    issuer: 'edX (UC Santa Cruz)',
    date: 'May 2025',
    credentialId: 'edX-CFE-2025-5523',
  },
  {
    title: 'Introduction to Computer Science (CS50x)',
    issuer: 'Harvard / edX',
    date: 'Aug 2025',
    credentialId: 'edX-CS50x-2025-9981',
  },
  {
    title: 'Google Cloud Computing Foundations',
    issuer: 'Google Cloud Skills Boost',
    date: 'Nov 2025',
    credentialId: 'GCCF-2025-2206',
  },
];
