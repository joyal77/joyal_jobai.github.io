export const personalData = {
  name: "JOYAL JOBAI",
  title: "AI/ML & Full-Stack Developer",
  supportingText: "MCA Student • AI/ML • Full-Stack Development • Networking",
  website: "joyal_jobai.github.io",
  websiteUrl: "https://joyal_jobai.github.io/",
  email: "joyaljobai369@gmail.com",
  phones: [
    { display: "+91 7994336498", raw: "+917994336498" },
    { display: "+91 6282617173", raw: "+916282617173" }
  ],
  location: "Ernakulam, Kerala, India",
  githubUrl: "https://github.com/YOUR_USERNAME", // Replace with your actual GitHub URL
  linkedinUrl: "https://linkedin.com/in/YOUR_PROFILE", // Replace with your actual LinkedIn URL
  resumeUrl: "/Joyal_Jobai_Resume.pdf",
  bio: "Technical professional with a solid understanding of networking concepts, including TCP/IP, routing, switching, DNS, DHCP and network troubleshooting. Proficient in Python, Java, SQL, Linux and database management, with experience in software and web application development. Strong analytical and problem-solving skills with a keen interest in network administration, IT infrastructure, system support, cybersecurity and AI-driven applications.",
  intro: "Building intelligent, data-driven applications with machine learning, modern web technologies, backend systems and databases."
};

export const heroBadges = [
  "AI/ML",
  "Full-Stack",
  "Python",
  "React",
  "FastAPI"
];

export const aboutCards = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Designing data pipelines, predictive models with XGBoost/Scikit-Learn, and model explainability frameworks with SHAP for real-world enterprise applications.",
    icon: "Brain"
  },
  {
    id: "full-stack",
    title: "Full-Stack Development",
    description: "Building responsive, modern user interfaces with React and robust, high-performance REST APIs using FastAPI, Flask, and Python.",
    icon: "Code"
  },
  {
    id: "networking",
    title: "Networking & Infrastructure",
    description: "Deep foundation in TCP/IP, routing, switching, subnetting, DNS/DHCP, and system troubleshooting for secure network environments.",
    icon: "Network"
  },
  {
    id: "database",
    title: "Database Management",
    description: "Architecting structured relational databases with MySQL and SQL, optimizing query performance and maintaining data integrity.",
    icon: "Database"
  }
];

export const flagshipProject = {
  id: "flagship-enterprise-ai",
  title: "AI-DRIVEN ENTERPRISE DECISION SUPPORT PLATFORM",
  subtitle: "Flagship AI Project",
  description: "An AI-powered enterprise decision support platform that combines machine learning, business analytics, explainability and automated recommendations to support data-driven business decisions.",
  architecture: ["DATABASE", "FASTAPI BACKEND", "MACHINE LEARNING", "DECISION ENGINE", "REACT DASHBOARD", "BUSINESS INSIGHTS"],
  features: [
    "Sales Forecasting",
    "Customer Churn Prediction",
    "Customer Segmentation",
    "KPI Dashboard",
    "Business Health Score",
    "Root Cause Analysis",
    "SHAP Explainability",
    "Recommendation Engine",
    "What-if Analysis",
    "Automated Business Insights"
  ],
  techStack: ["Python", "React", "FastAPI", "MySQL", "XGBoost", "SHAP", "Pandas", "Scikit-learn"],
  caseStudy: {
    problem: "Modern enterprise leaders struggle with siloed operational data, making it difficult to detect emerging customer churn trends, accurately forecast revenue, or isolate root causes of performance dips in real time.",
    solution: "A unified AI decision platform that ingests relational database feeds into FastAPI, executes machine learning inference models (XGBoost/Scikit-learn), calculates automated Business Health Scores, and renders interactive SHAP explainability visuals inside a high-speed React dashboard.",
    architectureDetails: "Data flows seamlessly from MySQL into a Python pipeline, where FastAPI orchestrates feature generation, ML inference, decision engine scoring, and real-time JSON responses to the frontend.",
    machineLearning: "Leverages XGBoost classifiers for churn prediction, time-series forecasting models for sales, and K-Means/RFM analysis for customer segmentation. SHAP values explain individual feature impacts on predictions.",
    decisionEngine: "Rules-driven heuristic framework that transforms model probability scores into clear operational actions, risk alerts, and what-if simulation scenarios.",
    businessInsights: "Provides interactive KPI widgets, dynamic root-cause breakdown charts, automated executive summaries, and what-if parameter sliders."
  }
};

export const secondaryProjects = [
  {
    id: "logistics-management",
    title: "Logistics Management System",
    type: "Web & Android Platform",
    description: "Developed a Logistics Management System for web and Android platforms using Python Flask and MySQL, enabling cargo booking, delivery tracking and secure role-based access control.",
    roles: ["Admin", "Staff", "Delivery Boy", "Customer"],
    features: [
      "Cargo Booking",
      "Delivery Tracking",
      "Role-Based Access Control",
      "Google Maps API Integration",
      "Payment Processing"
    ],
    techStack: ["Python", "Flask", "MySQL", "Android", "Google Maps API"]
  },
  {
    id: "bakery-warehouse",
    title: "Bakery Warehouse Management System",
    type: "Web Application",
    description: "Developed a web-based system to streamline inventory, production and distribution operations for the bakery industry.",
    features: [
      "Inventory Management",
      "Stock Tracking",
      "Production Scheduling",
      "Order Management",
      "Distribution Management",
      "Real-Time Stock Monitoring"
    ],
    techStack: ["PHP / Python", "JavaScript", "HTML/CSS", "MySQL"]
  }
];

export const skillCategories = [
  {
    id: "programming",
    name: "Programming",
    skills: ["Python", "Java", "C", "C++", "PHP"]
  },
  {
    id: "frontend",
    name: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Vite"]
  },
  {
    id: "backend",
    name: "Backend",
    skills: ["FastAPI", "Flask", "REST APIs"]
  },
  {
    id: "ml",
    name: "Machine Learning",
    skills: ["XGBoost", "Scikit-learn", "Pandas", "NumPy", "SHAP"]
  },
  {
    id: "database",
    name: "Database",
    skills: ["MySQL", "SQL", "Database Management"]
  },
  {
    id: "networking",
    name: "Networking",
    skills: [
      "TCP/IP",
      "OSI Model",
      "IPv4",
      "IPv6",
      "Subnetting",
      "Routing",
      "Switching",
      "DNS",
      "DHCP",
      "ARP",
      "Wireless LAN / IEEE 802.11"
    ]
  },
  {
    id: "systems",
    name: "Systems",
    skills: ["Linux Fundamentals"]
  }
];

export const networkingTopics = [
  {
    title: "TCP/IP",
    desc: "The core suite of networking protocols (Transmission Control Protocol / Internet Protocol) enabling reliable, ordered data delivery across interconnected networks."
  },
  {
    title: "Routing",
    desc: "The process of selecting path routes in a network to forward unicast and multicast IP packets across interconnected routers and networks."
  },
  {
    title: "Switching",
    desc: "Layer 2 data link frame forwarding using MAC address tables, VLAN isolation, and Spanning Tree Protocol within local area networks."
  },
  {
    title: "DNS",
    desc: "Domain Name System resolving human-friendly domain names to numeric IP addresses via hierarchical recursive and authoritative resolvers."
  },
  {
    title: "DHCP",
    desc: "Dynamic Host Configuration Protocol automatically provisioning IP addresses, subnet masks, default gateways, and DNS servers to client devices."
  },
  {
    title: "ARP",
    desc: "Address Resolution Protocol mapping 32-bit IPv4 addresses to 48-bit physical Ethernet MAC addresses for local subnet frame transmission."
  },
  {
    title: "IPv4 / IPv6",
    desc: "Essential Internet Protocol addressing schemes defining host identification, packet formatting, and global Internet routing boundaries."
  },
  {
    title: "Subnetting",
    desc: "Logical partition of IP networks into smaller subnetworks to optimize bandwidth allocation, simplify routing, and enhance network security."
  },
  {
    title: "Wireless LAN",
    desc: "IEEE 802.11 standards regulating radio frequency wireless networking, SSIDs, access point authentication, and WPA2/WPA3 encryption."
  },
  {
    title: "Linux",
    desc: "Core operating system shell environment, permissions, network utility commands (netstat, ip, ping, dig, traceroute, iptables), and daemon management."
  }
];

export const networkDiagramNodes = [
  { id: "client", label: "CLIENT", desc: "User endpoints requesting web & API resources" },
  { id: "switch", label: "SWITCH", desc: "Layer 2 frame switching & local VLAN traffic management" },
  { id: "router", label: "ROUTER", desc: "Layer 3 packet routing & WAN boundary NAT/Firewalling" },
  { id: "services", label: "DNS / DHCP", desc: "Automatic IP allocation & domain name resolution" },
  { id: "server", label: "SERVER", desc: "Backend FastAPI / MySQL application server cluster" }
];

export const educationList = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Adi Shankara Institute of Engineering and Technology, Kalady",
    university: "KTU University",
    period: "2025 – 2027",
    status: "Enrolled",
    details: "Advanced software engineering, artificial intelligence, machine learning algorithms, network architecture, and modern cloud database systems."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "DePaul Institute of Science and Technology, Angamaly",
    university: "MG University",
    period: "2022 – 2025",
    status: "Completed",
    details: "Core computer science foundation including data structures, web development, object-oriented programming, database management systems, and networking concepts."
  },
  {
    degree: "Higher Secondary Education",
    institution: "St. Thomas Higher Secondary School, Malayattoor",
    board: "State Board",
    period: "2020 – 2022",
    status: "Completed",
    details: "Focus on Computer Science, Mathematics, and Physics."
  },
  {
    degree: "S.S.L.C",
    institution: "St. Thomas Higher Secondary School, Malayattoor",
    board: "State Board",
    period: "2019 – 2020",
    status: "Completed",
    details: "General Secondary Education with distinction."
  }
];

export const certificationsList = [
  {
    title: "Python and AI Basics",
    issuer: "Cozmek Pvt Ltd",
    period: "2023 – 2024",
    skills: ["Python", "Artificial Intelligence", "Data Handling", "Machine Learning Basics"]
  },
  {
    title: "Full Stack Java Basics",
    issuer: "Archon Solutions",
    period: "2023 – 2024",
    skills: ["Java", "OOP Concepts", "Web Fundamentals", "SQL Integration"]
  }
];

export const softSkillsList = [
  "Project Management",
  "Teamwork",
  "Time Management",
  "Leadership",
  "Critical Thinking",
  "Effective Communication"
];

export const currentFocusData = {
  building: [
    "AI-powered enterprise applications",
    "Machine learning prediction systems",
    "Data-driven decision-support systems",
    "Full-stack applications"
  ],
  exploring: [
    "Advanced Machine Learning",
    "AI Engineering",
    "Backend Development",
    "System & Network Technologies"
  ]
};
