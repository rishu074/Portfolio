export interface Project {
  slug: string
  title: string
  description: string
  shortDescription: string
  category: string
  techStack: string[]
  frontend: string[]
  backend: string[]
  database: string[]
  devops: string[]
  features: string[]
  problem: string
  solution: string
  challenges: string[]
  learnings: string[]
  outcome: string
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    slug: "fullstack-saas-platform",
    title: "Full-Stack SaaS Platform",
    description:
      "A comprehensive SaaS platform built from the ground up with multi-tenant architecture, subscription billing, and a real-time dashboard for analytics. Designed to help small businesses manage their operations efficiently with an intuitive interface and robust backend.",
    shortDescription:
      "Multi-tenant SaaS platform with subscription billing and real-time analytics dashboard.",
    category: "Full-Stack",
    techStack: ["Next.js", "MongoDB", "Redis", "Tailwind CSS", "Stripe"],
    frontend: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express.js", "REST API"],
    database: ["MongoDB", "Redis"],
    devops: ["Docker", "Nginx", "GitHub Actions"],
    features: [
      "Multi-tenant architecture with role-based access",
      "Real-time analytics dashboard with live data streaming",
      "Subscription management with Stripe integration",
      "Email notification system with templates",
      "Comprehensive admin panel for system management",
    ],
    problem:
      "Small businesses lack affordable, all-in-one management tools. Existing solutions are either too expensive or too complex for teams without dedicated IT staff.",
    solution:
      "Built a modular SaaS platform that provides essential business tools — from invoicing to analytics — in a single, easy-to-use dashboard with transparent pricing.",
    challenges: [
      "Designing a scalable multi-tenant data model that keeps tenant data isolated while sharing infrastructure",
      "Implementing real-time data streaming for the analytics dashboard without compromising performance",
      "Building a flexible subscription system that handles plan upgrades, downgrades, and prorations",
    ],
    learnings: [
      "Deep understanding of multi-tenant architectures and their trade-offs",
      "Mastered Redis caching strategies for high-performance real-time features",
      "Learned effective Stripe API integration patterns for complex billing scenarios",
    ],
    outcome:
      "Successfully deployed and serving as a robust template for future SaaS projects. Demonstrated ability to architect and build production-grade applications end-to-end.",
    liveUrl: "#",
    githubUrl: "#",
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getCategories(): string[] {
  const cats = new Set(projects.map((p) => p.category))
  return ["All", ...Array.from(cats)]
}

  // {
  //   slug: "fullstack-saas-platform",
  //   title: "Full-Stack SaaS Platform",
  //   description:
  //     "A comprehensive SaaS platform built from the ground up with multi-tenant architecture, subscription billing, and a real-time dashboard for analytics. Designed to help small businesses manage their operations efficiently with an intuitive interface and robust backend.",
  //   shortDescription:
  //     "Multi-tenant SaaS platform with subscription billing and real-time analytics dashboard.",
  //   category: "Full-Stack",
  //   techStack: ["Next.js", "MongoDB", "Redis", "Tailwind CSS", "Stripe"],
  //   frontend: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  //   backend: ["Node.js", "Express.js", "REST API"],
  //   database: ["MongoDB", "Redis"],
  //   devops: ["Docker", "Nginx", "GitHub Actions"],
  //   features: [
  //     "Multi-tenant architecture with role-based access",
  //     "Real-time analytics dashboard with live data streaming",
  //     "Subscription management with Stripe integration",
  //     "Email notification system with templates",
  //     "Comprehensive admin panel for system management",
  //   ],
  //   problem:
  //     "Small businesses lack affordable, all-in-one management tools. Existing solutions are either too expensive or too complex for teams without dedicated IT staff.",
  //   solution:
  //     "Built a modular SaaS platform that provides essential business tools — from invoicing to analytics — in a single, easy-to-use dashboard with transparent pricing.",
  //   challenges: [
  //     "Designing a scalable multi-tenant data model that keeps tenant data isolated while sharing infrastructure",
  //     "Implementing real-time data streaming for the analytics dashboard without compromising performance",
  //     "Building a flexible subscription system that handles plan upgrades, downgrades, and prorations",
  //   ],
  //   learnings: [
  //     "Deep understanding of multi-tenant architectures and their trade-offs",
  //     "Mastered Redis caching strategies for high-performance real-time features",
  //     "Learned effective Stripe API integration patterns for complex billing scenarios",
  //   ],
  //   outcome:
  //     "Successfully deployed and serving as a robust template for future SaaS projects. Demonstrated ability to architect and build production-grade applications end-to-end.",
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   slug: "devops-automation-tool",
  //   title: "DevOps Automation Tool",
  //   description:
  //     "A command-line and web-based tool for automating server provisioning, deployment pipelines, and monitoring. Reduces manual DevOps tasks by 80% through intelligent scripts and a unified monitoring dashboard.",
  //   shortDescription:
  //     "CLI and web tool for automating server provisioning, deployments, and monitoring.",
  //   category: "DevOps",
  //   techStack: ["Python", "Docker", "Linux", "Bash", "Flask"],
  //   frontend: ["React", "Tailwind CSS", "Chart.js"],
  //   backend: ["Python", "Flask", "Celery"],
  //   database: ["PostgreSQL", "Redis"],
  //   devops: ["Docker", "Ansible", "Terraform", "Linux"],
  //   features: [
  //     "One-command server provisioning with customizable templates",
  //     "Automated CI/CD pipeline configuration for multiple platforms",
  //     "Real-time server monitoring with alerting system",
  //     "Centralized log management and search",
  //     "Rollback functionality for failed deployments",
  //   ],
  //   problem:
  //     "Manual server setup and deployment processes are time-consuming, error-prone, and inconsistent across environments.",
  //   solution:
  //     "Created an automation toolkit that standardizes provisioning and deployment workflows, providing both CLI and web interfaces for maximum flexibility.",
  //   challenges: [
  //     "Handling diverse server environments and OS versions with a single provisioning system",
  //     "Building a reliable rollback mechanism that works across different deployment strategies",
  //     "Designing an alerting system that minimizes false positives while catching real issues",
  //   ],
  //   learnings: [
  //     "Advanced Linux system administration and shell scripting patterns",
  //     "Infrastructure-as-Code best practices with Terraform and Ansible",
  //     "Designing resilient distributed systems with proper error handling and recovery",
  //   ],
  //   outcome:
  //     "Reduced deployment time from 2 hours to 15 minutes. Now used as the standard deployment tool for multiple projects.",
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   slug: "minecraft-hosting-platform",
  //   title: "Minecraft Hosting Platform",
  //   description:
  //     "Co-founded a free Minecraft server hosting platform that leveraged trial cloud machines to provide free hosting to the gaming community. Built the entire backend infrastructure, user management system, and automated server provisioning pipeline.",
  //   shortDescription:
  //     "Free Minecraft server hosting platform with automated provisioning and user management.",
  //   category: "Full-Stack",
  //   techStack: ["Node.js", "Express", "MySQL", "Docker", "Linux"],
  //   frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  //   backend: ["Node.js", "Express.js", "Socket.io"],
  //   database: ["MySQL"],
  //   devops: ["Docker", "Linux", "Nginx", "Bash Scripts"],
  //   features: [
  //     "One-click Minecraft server creation with custom configurations",
  //     "Real-time server console access via WebSocket",
  //     "Automated resource management and load balancing",
  //     "User dashboard with server statistics and controls",
  //     "Community forums and support ticketing system",
  //   ],
  //   problem:
  //     "Young gamers wanted to play Minecraft with friends but couldn't afford expensive server hosting services.",
  //   solution:
  //     "Built a platform that intelligently utilized trial cloud resources to provide free Minecraft hosting, monetized through the platform itself rather than charging users directly.",
  //   challenges: [
  //     "Managing limited cloud resources across many users while maintaining performance",
  //     "Automating server provisioning in a containerized environment with resource limits",
  //     "Building a real-time console system that streams server logs to users via WebSocket",
  //   ],
  //   learnings: [
  //     "First real programming project — learned Node.js, Linux administration, and databases from scratch",
  //     "Understanding of cloud infrastructure, containerization, and resource management",
  //     "Business fundamentals: user acquisition, monetization strategies, and community building",
  //   ],
  //   outcome:
  //     "Successfully served hundreds of users. This venture sparked a passion for programming and entrepreneurship, becoming the foundation for a career in tech.",
  //   githubUrl: "#",
  // },
  // {
  //   slug: "social-media-analytics-dashboard",
  //   title: "Social Media Analytics Dashboard",
  //   description:
  //     "A data-driven analytics dashboard that aggregates social media metrics across platforms, provides sentiment analysis, and generates actionable insights through interactive visualizations and automated reports.",
  //   shortDescription:
  //     "Cross-platform social media analytics with sentiment analysis and automated reporting.",
  //   category: "Web Apps",
  //   techStack: ["React", "Python", "FastAPI", "PostgreSQL"],
  //   frontend: ["React", "Tailwind CSS", "Recharts", "D3.js"],
  //   backend: ["Python", "FastAPI", "Celery"],
  //   database: ["PostgreSQL", "Redis"],
  //   devops: ["Docker", "GitHub Actions"],
  //   features: [
  //     "Multi-platform data aggregation (Twitter, Instagram, LinkedIn)",
  //     "Natural language processing for sentiment analysis",
  //     "Interactive charts and customizable dashboards",
  //     "Automated weekly and monthly report generation",
  //     "Competitor analysis and benchmarking tools",
  //   ],
  //   problem:
  //     "Social media managers spend hours manually collecting and analyzing data across multiple platforms with no unified view of performance.",
  //   solution:
  //     "Built an automated analytics platform that pulls data from multiple social media APIs, processes it with ML models, and presents unified insights in an intuitive dashboard.",
  //   challenges: [
  //     "Handling rate limits and authentication across multiple social media APIs",
  //     "Implementing accurate sentiment analysis with Natural Language Processing",
  //     "Designing performant visualizations for large datasets with millions of data points",
  //   ],
  //   learnings: [
  //     "Practical application of Python data science libraries and NLP techniques",
  //     "API integration patterns and handling third-party service limitations",
  //     "Data visualization best practices and performance optimization for large datasets",
  //   ],
  //   outcome:
  //     "Demonstrated proficiency in data science, ML integration, and building complex full-stack applications. Serves as a showcase for analytics and AI capabilities.",
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
