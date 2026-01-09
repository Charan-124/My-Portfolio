import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Linkedin, 
  Code, Brain, Trophy, Gamepad2, 
  BookOpen, GraduationCap, Briefcase, 
  FileText, ExternalLink 
} from 'lucide-react';

// --- DATA FROM PDF ---
const resumeData = {
  personal: {
    name: "Charanjit Singh", // [cite: 1]
    role: "AI-ML Engineer", // [cite: 28-29]
    email: "charanjit.singh1604@gmail.com", // [cite: 3]
    phone: "8146096272", // [cite: 4]
    location: "Chandigarh University, Mohali", // [cite: 5]
    linkedin: "https://www.linkedin.com/in/charanjit-singh-0793b3294/", // [cite: 6-7]
    objective: "To pursue a career as an AI-ML Engineer where I can apply my skills in data analysis, predictive modeling, and intelligent system design to solve real-world problems. I aim to contribute to organizational growth while continuously enhancing my expertise in Machine Learning, Deep Learning, and Natural Language Processing to drive innovation in Artificial Intelligence." // [cite: 28-30]
  },
  education: [
    {
      degree: "Bachelor of Eng. in Computer Science & Engineering (AI & ML)", // [cite: 32-33]
      school: "Chandigarh University", // [cite: 33]
      year: "Expected Graduation: 2027", // [cite: 34]
    },
    {
      degree: "Intermediate (CBSE)", // [cite: 35]
      school: "Guru Gobind Singh Vidiya Mandir Sr. Sec. School, Dirba", // [cite: 35-36]
      year: "Session: 2022-2023", // [cite: 36]
    },
    {
      degree: "Matriculation (CBSE)", // [cite: 37]
      school: "Guru Gobind Singh Vidiya Mandir Sr. Sec. School, Dirba", // [cite: 37]
      year: "Session: 2020-2021", // [cite: 37]
    }
  ],
  skills: {
    technical: ["C", "C++ with DSA", "Python", "R", "HTML", "CSS", "JavaScript", "SQL", "Machine Learning", "Deep Learning", "Generative AI"], // [cite: 8-10, 16-18, 30]
    interpersonal: ["Time Management", "Adaptability", "Assertiveness"] // [cite: 11-14]
  },
  projects: [
    {
      title: "Medical Image Classification", // [cite: 39]
      period: "Aug 2024 - Jan 2025", // [cite: 39]
      tech: "CNN, Python, Deep Learning", // [cite: 39]
      desc: "Developed a Medical Image Classification system using Convolutional Neural Networks (CNNs) in Python to analyze X-ray/MRI scans, improving accuracy in detecting medical conditions." // [cite: 39]
    },
    {
      title: "Speech Emotion Recognition", // [cite: 40]
      period: "Mar 2024 - Jun 2024", // [cite: 41]
      tech: "Python, MFCCs, ML", // [cite: 42-43]
      desc: "Developed a system using Python and Machine Learning to classify emotions such as happy, sad, angry, or neutral by extracting audio features like MFCCs." // [cite: 42-43]
    },
    {
      title: "Stock Market Prediction", // [cite: 44]
      period: "Nov 2023 - Jan 2024", // [cite: 45]
      tech: "ML Algorithms, Historical Data Analysis", // [cite: 46]
      desc: "Developed a machine learning model to predict stock market trends based on historical data, utilizing algorithms to identify patterns and make data-driven predictions." // [cite: 46]
    }
  ],
  certifications: [
    "Introduction to Generative AI - LinkedIn Learning (Feb 2025)", // [cite: 16-17]
    "Introduction to Machine Learning - Coursera (Feb 2025)", // [cite: 17]
    "The Structured Query Language (SQL) - Coursera (Sep 2024)", // [cite: 18-19]
    "Learning Python: From Beginner to Expert - LinkedIn Learning (Feb 2024)" // [cite: 20-21]
  ],
  achievements: [
    "Presented first research paper at ICDAM 2025", // [cite: 23]
    "Runner-up in the Algo Arena Hackathon" // [cite: 24]
  ],
  hobbies: ["Reading books", "Gaming"] // [cite: 25-27]
};

// --- STYLING COMPONENTS ---

const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
      <Icon size={24} />
    </div>
    <h2 className="text-2xl font-bold text-gray-100 uppercase tracking-wider">{title}</h2>
  </div>
);

const Card = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-blue-500/40 transition-all duration-300 shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);

const Badge = ({ text, type = "tech" }) => (
  <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${
    type === "tech" 
      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" 
      : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
  }`}>
    {text}
  </span>
);

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 relative overflow-x-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* HEADER SECTION */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse" />
            <div className="relative w-40 h-40 rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500">
              <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden border-2 border-slate-950">
                <img 
                  src="/profile.jpeg" 
                  alt="Charanjit Singh" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Charanjit+Singh&background=0D8ABC&color=fff"; }}
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
            {resumeData.personal.name.toUpperCase()}
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 font-medium mb-8 tracking-wide">
            {resumeData.personal.role}
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href={`mailto:${resumeData.personal.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
              <Mail size={16} className="text-blue-500" /> {resumeData.personal.email}
            </a>
            <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
              <Phone size={16} className="text-blue-500" /> {resumeData.personal.phone}
            </div>
            <a href={resumeData.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
              <Linkedin size={16} className="text-blue-500" /> LinkedIn
            </a>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* SIDEBAR (3 cols) */}
          <aside className="lg:col-span-4 space-y-10">
            
            <section>
              <SectionTitle icon={Brain} title="Career Objective" />
              <p className="text-sm leading-relaxed text-slate-400 text-justify italic">
                {resumeData.personal.objective}
              </p>
            </section>

            <section>
              <SectionTitle icon={Code} title="Technical Skills" />
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.technical.map((skill, i) => (
                  <Badge key={i} text={skill} type="tech" />
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={GraduationCap} title="Education" />
              <div className="space-y-6">
                {resumeData.education.map((edu, i) => (
                  <div key={i} className="relative pl-4 border-l-2 border-blue-500/30">
                    <div className="absolute top-0 left-[-5px] w-2 h-2 bg-blue-500 rounded-full" />
                    <h4 className="text-white font-bold text-sm">{edu.degree}</h4>
                    <p className="text-xs text-blue-400 mt-1">{edu.school}</p>
                    <p className="text-[10px] text-slate-500 uppercase mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={Gamepad2} title="Interests" />
              <div className="flex gap-4">
                {resumeData.hobbies.map((h, i) => (
                  <span key={i} className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                    {h}
                  </span>
                ))}
              </div>
            </section>

          </aside>

          {/* MAIN CONTENT (8 cols) */}
          <main className="lg:col-span-8 space-y-12">
            
            <section>
              <SectionTitle icon={Briefcase} title="Featured Projects" />
              <div className="grid gap-6">
                {resumeData.projects.map((project, i) => (
                  <Card key={i} className="group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-purple-400 mt-1 uppercase tracking-widest">{project.tech}</p>
                      </div>
                      <span className="text-[10px] py-1 px-2 bg-slate-950 text-slate-500 rounded border border-slate-800">
                        {project.period}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {project.desc}
                    </p>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={Trophy} title="Achievements" />
              <div className="grid md:grid-cols-2 gap-4">
                {resumeData.achievements.map((ach, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-slate-900/30 border border-slate-800 rounded-xl">
                    <div className="text-yellow-500 bg-yellow-500/10 p-2 rounded-lg">
                      <Trophy size={20} />
                    </div>
                    <p className="text-sm font-medium text-slate-200">{ach}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={FileText} title="Certifications" />
              <div className="space-y-3">
                {resumeData.certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 hover:bg-slate-900/50 rounded-lg transition-colors border border-transparent hover:border-slate-800">
                    <BookOpen size={16} className="text-blue-500" />
                    <span className="text-sm text-slate-300">{cert}</span>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>

        <footer className="mt-24 pt-8 border-t border-slate-900 text-center">
          <p className="text-slate-600 text-xs tracking-widest uppercase">
            Designed for Impact • {resumeData.personal.name} • 2026
          </p>
        </footer>
      </div>
    </div>
  );
}