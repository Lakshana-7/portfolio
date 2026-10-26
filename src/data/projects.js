export const projects = [
  {
    id: 1,
    slug: "hypefiltr-ai",
    title: "HypeFiltr.ai",
    tagline: "Cut through digital noise, bias, and fabricated urgency in real time.",
    summary: "Chrome extension that detects cognitive biases, logical fallacies, corporate jargon and fake urgency using Manifest V3 and LLM APIs.",
    tags: ["Manifest V3", "Shadow DOM", "Node.js", "Express", "LLM APIs"],
    cornerTag: "FEATURED",
    cover: "/images/projects/hypefiltr-ai/screenshot-1.jpg",
    role: "Lead Full-Stack & Extension Developer",
    timeline: "2025 – 2026",
    stack: ["Manifest V3", "Shadow DOM", "Node.js", "Express", "LLM APIs", "JavaScript"],
    status: "Live & Active",
    overview: "HypeFiltr.ai is a privacy-first browser companion engineered to restore clarity to reading online. By scanning digital copy directly inside the viewport using isolated Shadow DOM elements, it flags manipulative copywriting, artificial urgency countdowns, and deceptive logical fallacies without altering underlying website layouts.",
    problem: "Modern web copy relies heavily on psychological dark patterns, cognitive fallacies, and synthetic urgency to force impulsive user decisions before critical thinking can evaluate the message.",
    features: [
      {
        icon: "ShieldAlert",
        title: "Bias & Fallacy Detector",
        text: "Scans editorial text in real-time to flag strawman arguments, slippery slopes, and emotional manipulation."
      },
      {
        icon: "Clock",
        title: "Urgency Stripper",
        text: "Identifies artificial countdowns, simulated stock limits, and deceptive FOMO hooks."
      },
      {
        icon: "Layers",
        title: "Jargon Translator",
        text: "Converts hyper-inflated corporate buzzwords into clear, straightforward English directly in place."
      },
      {
        icon: "Eye",
        title: "Zero-Shift Shadow DOM",
        text: "Renders non-intrusive highlighter tags through an isolated shadow root without breaking target CSS."
      }
    ],
    flow: [
      "User navigates to any web page; content script initializes in an isolated Shadow DOM",
      "Readable text blocks are parsed and sent through an Express API proxy",
      "LLM inference evaluates sentence semantics against fallacy and bias taxonomy",
      "Interactive visual chips overlay text with severity scores and concise counter-explanations"
    ],
    techStack: [
      "Chrome Extension Manifest V3",
      "Shadow DOM API",
      "Node.js",
      "Express.js",
      "OpenAI / Anthropic LLM APIs",
      "Tailwind CSS",
      "Netlify"
    ],
    screenshots: [
      "/images/projects/hypefiltr-ai/screenshot-1.jpg",
      "/images/projects/hypefiltr-ai/screenshot-2.jpg"
    ],
    outcome: "Built and deployed a responsive landing page on Netlify, tested across hundreds of technical articles and e-commerce stores with exceptional response times.",
    liveUrl: "https://hypefilter-ai.netlify.app",
    repoUrl: "https://github.com/Lakshana-7/hypefilter-ai"
  },
  {
    id: 2,
    slug: "constellia",
    title: "Constellia",
    tagline: "Turn study spaces into living celestial constellations via gesture control.",
    summary: "Constellation-themed, gesture-controlled study tool inspired by childhood celestial fascination, built with Vanilla JavaScript and MediaPipe.",
    tags: ["MediaPipe", "Computer Vision", "Vanilla JS", "Canvas API"],
    cornerTag: "CREATIVE TECH",
    cover: "/images/projects/constellia/screenshot-1.jpg",
    role: "Sole Creator & Frontend Developer",
    timeline: "2025",
    stack: ["Vanilla JavaScript", "MediaPipe Hands", "HTML5 Canvas", "Web Audio API"],
    status: "Completed Prototype",
    overview: "Constellia transforms study notes into an interactive galaxy. Inspired by childhood fascination with astronomy, students navigate celestial maps of knowledge using touchless webcam hand tracking—pinching stars to open cards and drawing constellation links across ideas.",
    problem: "Standard flashcards and linear note apps fail to stimulate spatial memory and tactile engagement, causing revision fatigue during long study sessions.",
    features: [
      {
        icon: "Sparkles",
        title: "Touchless Gesture Control",
        text: "Uses MediaPipe to track 21 hand landmarks in real time through ordinary webcams with zero external hardware."
      },
      {
        icon: "Orbit",
        title: "Celestial Knowledge Graph",
        text: "Maps study topics into radiant stars and connected constellations with dynamic spring physics."
      },
      {
        icon: "Compass",
        title: "Spatial Zoom & Focus",
        text: "Perform smooth camera zooms across clusters to drill down from broad themes to granular study cards."
      },
      {
        icon: "Music",
        title: "Cosmic Audio Feedback",
        text: "Generates soothing binaural tones and celestial harmonic chimes on star selection."
      }
    ],
    flow: [
      "Webcam stream feeds video frames into MediaPipe Hands model",
      "Pinch and swipe gestures compute cursor vectors on the 2D canvas",
      "Proximity collision tests highlight celestial node clusters",
      "Dragging across stars weaves conceptual memory lines into persistent constellation maps"
    ],
    techStack: [
      "Vanilla JavaScript (ES6+)",
      "MediaPipe Hands",
      "HTML5 Canvas 2D Context",
      "Web Audio API",
      "CSS3 Animations"
    ],
    screenshots: [
      "/images/projects/constellia/screenshot-1.jpg",
      "/images/projects/constellia/screenshot-2.jpg"
    ],
    outcome: "Created a zero-dependency, high-fps interactive web app running smoothly on standard laptops; received high acclaim at university tech exhibitions.",
    liveUrl: "https://constellia.netlify.app/",
    repoUrl: "https://github.com/Lakshana-7/Constellia"
  },
  {
    id: 3,
    slug: "water-borne-disease-platform",
    title: "IoT-Based Water-Borne Disease Detection Platform",
    tagline: "Early warning telemetry and AI pathogen risk forecasting for public water sources.",
    summary: "ESP32 sensors, cloud telemetry, and a real-time AI dashboard built with Team Elementrix for Smart India Hackathon 2025 (Selected for Round 2).",
    tags: ["IoT", "ESP32", "AI / ML", "MQTT", "Cloud Dashboard"],
    cornerTag: "SIH 2025 · ROUND 2",
    cover: "/images/projects/water-borne-disease-platform/cover.jpg",
    role: "IoT Firmware & Backend Lead (Team Elementrix)",
    timeline: "2024 – 2025",
    stack: ["ESP32", "C++ / Arduino", "Python", "MQTT", "Cloud Analytics", "React"],
    status: "Selected for SIH 2025 Round 2",
    overview: "An integrated hardware and software solution engineered to curb water-borne epidemics before outbreaks spread. Submersible ESP32 sensor arrays capture physical and chemical parameters in rural water bodies, feeding cloud anomaly models that alert municipal health teams.",
    problem: "Rural communities often discover contaminated water supplies only after clinics report gastrointestinal disease spikes, losing critical days where preventive intervention could save lives.",
    features: [
      {
        icon: "Cpu",
        title: "Submersible Multi-Sensor Pod",
        text: "Continuous telemetry monitoring pH, turbidity, Total Dissolved Solids (TDS), and water temperature."
      },
      {
        icon: "Activity",
        title: "Telemetry Edge Pipeline",
        text: "Low-power micro-controllers package and transmit telemetry via lightweight MQTT protocols."
      },
      {
        icon: "AlertTriangle",
        title: "Pathogen Risk Estimator",
        text: "Machine learning classifier flags biological contamination risk when sensor combinations drift."
      },
      {
        icon: "MapPin",
        title: "Geo-Spatial Heatmap",
        text: "Real-time dashboard provides municipal officers with colour-coded regional risk zones and alerts."
      }
    ],
    flow: [
      "Submersible sensors measure physical & chemical characteristics",
      "ESP32 edge unit verifies sample integrity and broadcasts payload over Wi-Fi / GSM",
      "Cloud backend parses time-series stream and executes risk scoring algorithms",
      "Interactive map highlights high-risk water reservoirs and triggers emergency alerts"
    ],
    techStack: [
      "ESP32 Microcontroller",
      "C++ / Arduino Framework",
      "Python Backend",
      "MQTT Protocol",
      "PostgreSQL Time-Series DB",
      "React & Leaflet Maps"
    ],
    screenshots: [
      "/images/projects/water-borne-disease-platform/cover.jpg"
    ],
    outcome: "Built with Team Elementrix for Smart India Hackathon (SIH) 2025. Selected from college internal round to represent Rajalakshmi Institute of Technology in Round 2 (external).",
    liveUrl: "https://elementrixx-sih-showcase.vercel.app/",
    repoUrl: ""
  },
  {
    id: 4,
    slug: "plant-disease-prediction",
    title: "Plant Disease Prediction",
    tagline: "Deep learning agricultural computer vision for rapid crop infection diagnostics.",
    summary: "Convolutional neural network pipeline for instant crop leaf disease identification and eco-friendly remediation guidance.",
    tags: ["Computer Vision", "Deep Learning", "PyTorch", "FastAPI", "Python"],
    cornerTag: "AGRITECH",
    cover: "/images/projects/plant-disease-prediction/cover.jpg",
    role: "ML Engineer & Developer",
    timeline: "2025",
    stack: ["Python", "PyTorch", "OpenCV", "FastAPI", "Tailwind CSS"],
    status: "Active Development",
    overview: "A lightweight, accessible computer vision web application designed to help farmers identify crop diseases simply by snapping a photo of an affected leaf on their phone. Delivers immediate diagnosis along with organic and chemical treatment recommendations.",
    problem: "Late and inaccurate diagnosis of crop foliar infections causes up to 40% yield loss for farmers and frequently leads to misuse of expensive chemical sprays.",
    features: [
      {
        icon: "Scan",
        title: "Multi-Crop Leaf Diagnostic",
        text: "Recognizes dozens of foliar pathogens across common vegetables, fruits, and staple grains."
      },
      {
        icon: "CheckCircle",
        title: "Confidence & Heatmaps",
        text: "Outputs top-3 predicted classifications accompanied by Grad-CAM attention heatmaps."
      },
      {
        icon: "FileText",
        title: "Actionable Remediation",
        text: "Suggests immediate organic remedies and calibrated chemical interventions to minimize damage."
      },
      {
        icon: "Smartphone",
        title: "Offline-Ready Architecture",
        text: "Optimized model quantization allowing efficient inference even over patchy rural cellular links."
      }
    ],
    flow: [
      "Farmer captures or uploads a leaf photograph via browser interface",
      "Preprocessing pipeline crops, resizes, and normalizes image channels",
      "CNN classifier extracts visual features and returns softmax probability scores",
      "Application renders diagnosis, disease overview, and step-by-step remedy guidelines"
    ],
    techStack: [
      "Python 3.11",
      "PyTorch / Torchvision",
      "OpenCV",
      "FastAPI",
      "Docker",
      "Tailwind CSS"
    ],
    screenshots: [
      "/images/projects/plant-disease-prediction/cover.jpg",
      "/images/projects/plant-disease-prediction/screenshot-2.jpg",
      "/images/projects/plant-disease-prediction/screenshot-3.jpg",
      "/images/projects/plant-disease-prediction/screenshot-4.jpg"
    ],
    outcome: "Achieved strong validation accuracy across benchmark agricultural datasets and structured the backend for low-latency REST API delivery.",
    liveUrl: "",
    repoUrl: ""
  }
];
