export const featuredProject = {
  id: "deepfake-sentinel",
  title: "Deepfake Sentinel",
  subtitle: "AI-Powered Visual Authenticity & Deepfake Detection Platform",
  category: "AI / Computer Vision / Full Stack",
  featured: true,
  status: "Featured Project",
  description: "Deepfake Sentinel is an end-to-end AI system designed to analyze visual content for facial manipulation and synthetic media. Built with a Java Spring Boot backend and React frontend, it leverages OpenCV for face detection and ONNX Runtime for lightweight deep neural network model inference.",
  techStack: ["OpenCV", "ONNX Runtime", "Spring Boot", "React", "Java", "MySQL", "Tailwind CSS"],
  highlights: [
    "OpenCV Haar Cascade Face Detection & Region Cropping",
    "ImageNet Preprocessing & Tensor Normalization",
    "ONNX Model Inference (`model_q4.onnx`) for deepfake classification",
    "Spring Boot RESTful Backend & Security API",
    "React Visual Detection Studio Dashboard",
    "MySQL Database for audit logs and user authentication"
  ],
  pipelineSteps: [
    {
      step: "01",
      title: "Input & Capture",
      desc: "Video frame or image upload ingested by client interface."
    },
    {
      step: "02",
      title: "Face Detection",
      desc: "OpenCV Haar Cascade isolates facial bounding boxes."
    },
    {
      step: "03",
      title: "Preprocessing",
      desc: "Resize to 224x224, ImageNet mean/std tensor normalization."
    },
    {
      step: "04",
      title: "ONNX Inference",
      desc: "Quantized deep model (`model_q4.onnx`) computes authenticity score."
    },
    {
      step: "05",
      title: "Spring Boot API",
      desc: "Backend validates request, signs JWT, stores log in MySQL."
    },
    {
      step: "06",
      title: "Detection Studio",
      desc: "Real-time React dashboard renders heatmap & confidence report."
    }
  ],
  benchmark: "Achieved ~80% accuracy on internal validation test benchmarks.",
  github: "https://github.com/vaibhav8772866-stack",
  demo: null,
  details: "Full stack AI pipeline combining computer vision with modern microservice architecture."
};

export const projects = [
  {
    id: "historian",
    title: "Historian",
    subtitle: "Enterprise Memory Intelligence Platform",
    category: "AI / Enterprise Knowledge / Full Stack",
    featured: true,
    status: "Flagship Project",
    description: "Historian is an enterprise-focused memory intelligence platform designed to organize, retrieve, and interact with organizational knowledge through an AI-powered assistant called Harvey.",
    techStack: ["React.js", "JavaScript", "Vite", "Tailwind CSS", "REST APIs", "Authentication"],
    features: [
      "Harvey AI Assistant",
      "Enterprise knowledge management",
      "Intelligent search and information retrieval",
      "AI-powered memory/context",
      "Authentication and secure access",
      "Enterprise dashboard",
      "User management",
      "Admin controls",
      "Modern enterprise UI",
      "Responsive design",
      "₹-based interface where applicable"
    ],
    github: null,
    demo: null,
    caseStudy: null,
    aiAssistant: "Harvey",
    details: "A premium enterprise knowledge layer built to make organizational information easier to find, retrieve, and use through conversation-driven assistance."
  },
  {
    id: "deepfake-sentinel",
    title: "Deepfake Sentinel",
    category: "AI / Computer Vision / Full Stack",
    featured: true,
    description: "Deepfake Sentinel is an end-to-end AI system designed to analyze visual content for facial manipulation and synthetic media. Built with a Java Spring Boot backend and React frontend, it leverages OpenCV for face detection and ONNX Runtime for lightweight deep neural network model inference.",
    techStack: ["OpenCV", "ONNX Runtime", "Spring Boot", "React", "Java", "MySQL", "Tailwind CSS"],
    features: [
      "OpenCV Haar Cascade face detection",
      "Image preprocessing and normalization",
      "ONNX model inference",
      "Secure backend API workflow",
      "Detection dashboard",
      "MySQL-backed audit logging"
    ],
    github: "https://github.com/vaibhav8772866-stack",
    demo: null
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot for Student Support",
    category: "AI / NLP / Full Stack",
    featured: false,
    description: "Conversational AI agent trained to answer common college administration and student support queries, using natural language processing techniques and semantic similarity search.",
    techStack: ["React", "Python", "Flask", "Sentence Transformers", "Scikit-learn", "NLTK"],
    features: [
      "Semantic similarity query matching",
      "Intent classification and entity extraction",
      "Interactive chat interface with typing indicators",
      "Flask REST API backend"
    ],
    github: "https://github.com/vaibhav8772866-stack",
    demo: null
  },
  {
    id: "atm-management",
    title: "ATM Management System",
    category: "Java / Desktop Application",
    featured: false,
    description: "Core Java desktop application simulating real-world banking and ATM transactions. Demonstrates object-oriented software design, secure PIN handling, and account operations.",
    techStack: ["Core Java", "Java Swing", "OOP", "File I/O"],
    features: [
      "PIN authentication and session handling",
      "Deposit, withdrawal, and balance inquiry workflows",
      "Transaction history logging",
      "Clean Swing graphical user interface"
    ],
    github: "https://github.com/vaibhav8772866-stack/ATM-Application-JAVA.git",
    demo: null
  },
  {
    id: "shopease",
    title: "ShopEase E-Commerce Frontend",
    category: "Frontend / E-Commerce",
    featured: false,
    description: "Modern, high-performance e-commerce frontend interface built with React, Vite, and Tailwind CSS. Features dynamic cart management and responsive product catalogs.",
    techStack: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    features: [
      "Dynamic product grid and detail modal views",
      "Client-side shopping cart state management",
      "Responsive layout for mobile and desktop screens",
      "Fast Vite build pipeline"
    ],
    github: "https://github.com/vaibhav8772866-stack",
    demo: null
  }
];
