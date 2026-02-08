import { 
  Code2, Brain, Cpu, Globe, Award, BookOpen, Gamepad2, Database 
} from 'lucide-react';

export const profile = {
  name: "Charanjit Singh",
  role: "AI/ML Engineer",
  location: "Mohali, Punjab",
  email: "charanjit.singh1604@gmail.com",
  phone: "8146096272",
  linkedin: "https://www.linkedin.com/in/charanjitsinghw/", 
  // Note: Add your GitHub URL here if you have one, otherwise it will stay blank
  github: "https://github.com/Charan-124", 
  objective: "To pursue a career as an AI-ML Engineer applying skills in data analysis, predictive modeling, and intelligent system design. Aiming to drive innovation in Deep Learning and NLP.",
};

export const skills = [
  { 
    category: "Languages", 
    items: ["Python", "C", "C++ (DSA)", "R", "SQL"] 
  },
  { 
    category: "AI & Data Science", 
    items: ["Machine Learning", "Deep Learning", "NLP", "Data Analysis", "Predictive Modeling"] 
  },
  { 
    category: "Frontend", 
    items: ["HTML", "CSS", "JavaScript", "React"] 
  },
  { 
    category: "Tools & Concepts", 
    items: ["Generative AI", "Structured Query Language", "Time Management", "Adaptability"] 
  },
];

export const education = [
  {
    degree: "B.E. CSE (AI & ML)",
    school: "Chandigarh University",
    year: "Expected 2027",
    desc: "Focusing on Deep Learning, NLP, and Intelligent System Design.",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    degree: "Intermediate (CBSE)",
    school: "Guru Gobind Singh Vidiya Mandir Sr. Sec. School",
    year: "2022 - 2023",
    desc: "Completed Higher Secondary Education.",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    degree: "Matriculation (CBSE)",
    school: "Guru Gobind Singh Vidiya Mandir Sr. Sec. School",
    year: "2020 - 2021",
    desc: "Completed Matriculation Education.",
    icon: <BookOpen className="w-6 h-6" />,
  },
];

export const projects = [
  {
    title: "Medical Image Classification",
    role: "Deep Learning",
    desc: "Developed a CNN-based system to analyze X-ray/MRI scans for detecting medical conditions with high accuracy.",
    tech: ["Python", "CNN", "Computer Vision"],
  },
  {
    title: "Speech Emotion Recognition",
    role: "ML Engineer",
    desc: "Built a system using MFCCs to classify emotions (happy, sad, angry) from audio data.",
    tech: ["Python", "Machine Learning", "Audio Processing"],
  },
  {
    title: "Stock Market Prediction",
    role: "Data Analyst",
    desc: "Created a model to predict stock trends based on historical data using predictive algorithms.",
    tech: ["Python", "Predictive Modeling", "Data Analysis"],
  },
];

export const achievements = [
  {
    title: "Research Paper Presentation",
    desc: "Presented research paper at ICDAM 2025.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Hackathon Runner-up",
    desc: "Secured Runner-up position in the Algo Arena Hackathon.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Certifications",
    desc: "Generative AI (LinkedIn), Machine Learning (Coursera), SQL (Coursera), Python Expert.",
    icon: <Award className="w-6 h-6" />,
  },
];

export const interests = [
  { name: "Reading Books", icon: <BookOpen className="w-5 h-5" /> },
  { name: "Gaming", icon: <Gamepad2 className="w-5 h-5" /> },
];