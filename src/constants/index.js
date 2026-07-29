import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
  title: "SIEM & Log Integration Engineer",
  icon: web,
},
{
  title: "SOAR Playbook Developer",
  icon: mobile,
},
{
  title: "Security API Integrations",
  icon: backend,
},
{
  title: "Python Security Automation",
  icon: creator,
},
];

const technologies = [
  {
    name: "SIEM",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cyber Security Engineer",
    company_name: "Nakshathra Softech",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - August 2025 ",
    points: [
      "Developing and maintaining SOAR automation playbooks using Cortex XSOAR and Anlyz SOAR to streamline incident response workflows.",
      "Integrating multiple security tools such as VirusTotal, MS Sentinel, Cortex XDR, McAfee, Qualys, and Tenable with SOAR platforms.",
      "Creating custom Sigma detection rules and regex-based detections to identify and respond to security threats.",
      "Building threat intelligence automation and microservices to collect, analyze, and enrich security threat feeds.",
    ],
  },
    {
    title: "SOAR Engineer",
    company_name: "Tecplix",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2025 - July 2026",
    points: [
      "Built advanced security automation and custom integrations on Google SecOps (Chronicle SIEM & SOAR) and CrowdStrike NG-SIEM using Python to streamline SOC operations.",
      "Designed scalable log ingestion pipelines and API-driven integrations to enrich alerts, automate incident response, and improve threat detection accuracy across cloud and SaaS platforms.",
      "Developed custom log ingestion frameworks to parse and normalize high-volume security logs from multiple SaaS and cloud platforms, enabling efficient threat monitoring and investigation.",
      "Engineered automated alert enrichment and response workflows that reduced manual SOC effort and accelerated incident investigation and remediation processes.",
    ],
  },
  {
    title: "Senior Security Integration Developer",
    company_name: "Tecplix",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2026 - Present",
    points: [
      "Owned the end-to-end engineering lifecycle of enterprise security solutions on Google SecOps (Chronicle SIEM & SOAR) and CrowdStrike NG-SIEM, from log source onboarding, parser development, normalization, and enrichment to detection engineering, dashboards, SOAR automation, and incident response.",
      "Architected and developed scalable Python-based custom integrations, log connectors, API orchestration, and automation frameworks with secure authentication, secrets management, encryption, observability, and fault-tolerant design for enterprise SOC environments."
      "Designed and implemented detection rules, correlation logic, threat hunting queries, security dashboards, alert enrichment workflows, and automated response playbooks to improve detection fidelity, reduce MTTR, and enhance SOC operational efficiency."
      "Provided technical leadership by defining integration standards, mentoring engineers, conducting architecture and code reviews, collaborating with SOC, Detection Engineering, Threat Intelligence, and Incident Response teams, and driving the delivery of secure, production-ready security solutions."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Portfolio showcasing my expertise in web development, featuring a diverse range of visually striking projects with seamless functionality and intuitive user experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Lakkireddygarisai/portfolio/",
  },
  {
    name: "Nxt Trendz",
    description:
      "Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart whereusers can login and can see list of products with search, filters, sort by, etc.. .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Lakkireddygarisai/Full-Eecommerce-app",
  },
  {
    name: "Nxt Watch",
    description:
      "Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also can search videos and view specific video details, and users can toggle the theme .",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Lakkireddygarisai/react_Nxt_watch",
  },
];

export { services, technologies, experiences, testimonials, projects };
