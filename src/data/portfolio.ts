export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'web';
  type: string;
  span: string; // Tailwind grid span e.g. "col-span-12" or "col-span-12 md:col-span-6"
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  machineLearning?: string;
  architectureDetails?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  university?: string;
  board?: string;
  period: string;
  status: string;
  details: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
  skills: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface ExplorationCard {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  speed: number;
}

export const portfolio = {
  name: "Joyal Jobai",
  title: "AI/ML & Full-Stack Developer",
  roles: [
    "AI/ML & Full-Stack Developer",
    "FastAPI & React Engineer",
    "Machine Learning Researcher",
    "MCA Scholar & Systems Integrator"
  ],
  location: "Ernakulam, Kerala, India",
  summary: "Technical professional with expertise in artificial intelligence, machine learning, modern web development, and enterprise backend architectures. Experienced in building end-to-end data pipelines with XGBoost and SHAP explainability visuals alongside high-speed React and FastAPI applications.",
  editorialStatement: "Bridging complex machine learning models with sleek, high-performance web architecture.",
  
  skills: {
    languages: [
      { name: "Python" },
      { name: "Java" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "C" },
      { name: "C++" },
      { name: "PHP" }
    ],
    frontend: [
      { name: "React" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "GSAP" },
      { name: "Framer Motion" },
      { name: "HTML5 / CSS3" }
    ],
    backend: [
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "REST APIs" },
      { name: "Java Servlet / JSP" }
    ],
    aiMl: [
      { name: "XGBoost" },
      { name: "Scikit-learn" },
      { name: "SHAP Explainability" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Data Pipelines" }
    ],
    databases: [
      { name: "MySQL" },
      { name: "Relational SQL" },
      { name: "Database Design" }
    ],
    networkingSystems: [
      { name: "TCP/IP & OSI Model" },
      { name: "Routing & Switching" },
      { name: "DNS & DHCP" },
      { name: "Linux Administration" },
      { name: "Subnetting & IPv4/v6" },
      { name: "Wireless LAN (802.11)" }
    ]
  },

  projects: [
    {
      id: "ai-decision-platform",
      title: "Enterprise AI Decision Platform",
      subtitle: "Machine Learning & Business Health Engine",
      category: "ai",
      type: "AI / ML & Full-Stack Platform",
      span: "col-span-12",
      description: "A unified AI decision system executing machine learning inference models with automated Business Health Scores and SHAP explainability visualizers inside a React dashboard.",
      longDescription: "Modern enterprise leaders struggle with siloed operational data. This platform ingests relational feeds into FastAPI, runs XGBoost/Scikit-learn predictive models for customer churn and revenue forecasting, and presents transparent SHAP explainability graphs.",
      problem: "Siloed enterprise operational data hampers real-time churn prediction and accurate revenue forecasting.",
      solution: "Engineered a high-performance decision framework combining XGBoost predictive engines, FastAPI REST pipelines, and interactive SHAP explainability graphics.",
      machineLearning: "Leverages XGBoost classifiers for churn prediction, time-series forecasting for sales growth, and K-Means clustering for customer segmentation. SHAP values calculate exact feature impact per prediction.",
      architectureDetails: "Data streams seamlessly from MySQL into a Python pipeline, where FastAPI orchestrates feature generation, model inference, heuristic scoring, and real-time JSON responses to the React frontend.",
      techStack: ["FastAPI", "React", "Python", "XGBoost", "Scikit-learn", "SHAP", "MySQL", "Tailwind CSS"],
      features: [
        "Real-time Business Health Score calculation",
        "XGBoost churn prediction & time-series forecasting",
        "Interactive SHAP explainability feature impact visualizer",
        "FastAPI high-speed REST service architecture",
        "What-if operational scenario parameters"
      ],
      githubUrl: "https://github.com/joyal77",
      liveUrl: "https://joyal-jobai.vercel.app/"
    },
    {
      id: "logistics-management",
      title: "Logistics Management System",
      subtitle: "Web & Android Freight Tracking Platform",
      category: "web",
      type: "Web & Mobile Platform",
      span: "col-span-12 md:col-span-6",
      description: "Comprehensive cargo booking and live delivery tracking system with multi-role access control for web and Android clients.",
      longDescription: "Developed to streamline freight operations, cargo dispatching, and parcel tracking across four user tiers: Admin, Staff, Delivery Personnel, and Customers.",
      problem: "Fragmented logistics communication causes package delays, poor route tracking, and unauthorized access.",
      solution: "Built a centralized Python Flask and MySQL system with Google Maps API location services and dedicated Android mobile interfaces.",
      techStack: ["Python", "Flask", "MySQL", "Android", "Google Maps API", "Bootstrap"],
      features: [
        "Cargo booking & automated dispatching",
        "Real-time delivery tracking with Google Maps",
        "Four-tier Role-Based Access Control (RBAC)",
        "Secure customer payment gateway integration",
        "Delivery staff route optimization"
      ],
      githubUrl: "https://github.com/joyal77"
    },
    {
      id: "bakery-warehouse",
      title: "Bakery Warehouse Management System",
      subtitle: "Inventory & Production Scheduling",
      category: "web",
      type: "Web Application",
      span: "col-span-12 md:col-span-6",
      description: "Automated warehouse system managing ingredient inventory, production workflows, and retail distribution for commercial bakeries.",
      longDescription: "Streamlines daily production scheduling, raw material stock alerts, batch tracking, and distribution dispatch for bakery enterprise operations.",
      problem: "Perishable stock waste and inefficient manual recipe/batch inventory planning.",
      solution: "Designed a responsive management portal with automated minimum-stock triggers and distribution tracking.",
      techStack: ["PHP", "Python", "JavaScript", "MySQL", "HTML5/CSS3"],
      features: [
        "Real-time raw material stock monitoring",
        "Batch production scheduling & recipe calculation",
        "Automated reorder threshold alerts",
        "Multi-branch distribution management",
        "Daily operational summary reports"
      ],
      githubUrl: "https://github.com/joyal77"
    }
  ] as Project[],

  education: [
    {
      id: "mca",
      degree: "Master of Computer Applications (MCA)",
      institution: "Adi Shankara Institute of Engineering and Technology, Kalady",
      university: "KTU University",
      period: "2025 – 2027",
      status: "Enrolled",
      details: "Advanced software engineering, artificial intelligence, machine learning algorithms, cloud databases, and modern enterprise system architecture."
    },
    {
      id: "bca",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "DePaul Institute of Science and Technology, Angamaly",
      university: "MG University",
      period: "2022 – 2025",
      status: "Completed",
      details: "Core computer science foundation including data structures, web application development, object-oriented programming, database management, and network security."
    },
    {
      id: "hss",
      degree: "Higher Secondary Education (Computer Science)",
      institution: "St. Thomas Higher Secondary School, Malayattoor",
      board: "Kerala State Board",
      period: "2020 – 2022",
      status: "Completed",
      details: "Focused on Computer Science, Advanced Mathematics, and Physics."
    },
    {
      id: "sslc",
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "St. Thomas Higher Secondary School, Malayattoor",
      board: "Kerala State Board",
      period: "2019 – 2020",
      status: "Completed",
      details: "General secondary education completed with high distinction."
    }
  ] as EducationItem[],

  certifications: [
    {
      id: "cert-python-ai",
      title: "Python and AI Basics",
      issuer: "Cozmek Pvt Ltd",
      period: "2023 – 2024",
      skills: ["Python", "Artificial Intelligence", "Data Handling", "Machine Learning Basics"]
    },
    {
      id: "cert-java-fullstack",
      title: "Full Stack Java Basics",
      issuer: "Archon Solutions",
      period: "2023 – 2024",
      skills: ["Java", "OOP Concepts", "Web Fundamentals", "SQL Integration"]
    }
  ] as CertificationItem[],

  explorations: [
    {
      id: "exp-1",
      title: "Neural Model Architecture",
      category: "Deep Learning",
      description: "Visualizing high-dimensional feature embeddings and SHAP explainability matrices for tabular dataset predictions.",
      image: "",
      speed: 0.1
    },
    {
      id: "exp-2",
      title: "XGBoost + SHAP Explainability",
      category: "AI & Machine Learning",
      description: "Feature explainability & predictive pipelines executing real-time churn predictions and feature impact scores.",
      image: "",
      speed: 0.2
    },
    {
      id: "exp-3",
      title: "FastAPI + React Ecosystem",
      category: "Full-Stack Architecture",
      description: "Modern REST services & dynamic responsive UIs backed by high-speed Python FastAPI microservices.",
      image: "",
      speed: 0.15
    },
    {
      id: "exp-4",
      title: "TCP/IP & Linux Administration",
      category: "Networking & Systems",
      description: "Enterprise infrastructure, network routing, packet analysis, DNS/DHCP configuration, and Linux server management.",
      image: "",
      speed: 0.25
    },
    {
      id: "exp-5",
      title: "Predictive Analytics Engines",
      category: "Data Science",
      description: "Time-series forecasting, trend decomposition, and automated feature engineering with Pandas and NumPy.",
      image: "",
      speed: 0.12
    },
    {
      id: "exp-6",
      title: "Cybersecurity & Socket Labs",
      category: "Systems Security",
      description: "Linux daemon management, iptables firewall configuration, socket monitoring utilities, and network hardening.",
      image: "",
      speed: 0.18
    }
  ] as ExplorationCard[],

  stats: [
    {
      id: "stat-ai",
      label: "AI & Machine Learning",
      value: "XGBoost + SHAP",
      detail: "Feature explainability & predictive pipelines"
    },
    {
      id: "stat-stack",
      label: "Full-Stack Ecosystem",
      value: "FastAPI + React",
      detail: "Modern REST services & dynamic responsive UIs"
    },
    {
      id: "stat-systems",
      label: "Networking & Systems",
      value: "TCP/IP & Linux",
      detail: "Enterprise infrastructure & network routing"
    }
  ],

  social: {
    github: "https://github.com/joyal77",
    linkedin: "https://linkedin.com/in/joyal-jobai",
    email: "joyaljobai369@gmail.com",
    phones: ["+91 7994336498", "+91 6282617173"]
  }
};
