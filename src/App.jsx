import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Mail, Linkedin, Github, Download, 
  ChevronDown, ExternalLink, Phone 
} from 'lucide-react';
import Cursor from './components/Cursor'; 
// We import the data from your new data.jsx file
import { profile, skills, education, projects, achievements, interests } from './Data.jsx';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden cursor-none">
      <Cursor />
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-blob" />

        <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="flex-1 text-center md:text-left"
          >
            <motion.div variants={fadeInUp} className="inline-block px-3 py-1 mb-4 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-md">
              <span className="text-blue-400 text-sm font-medium tracking-wide">OPEN TO WORK</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{profile.name}</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
              {profile.objective}
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center md:justify-start">
              {/* BUTTON 1: Download Resume */}
              {/* Ensure 'resume.pdf' is inside your 'public' folder */}
              <a 
                href="/resume.pdf" 
                download="Charanjit_Singh_Resume.pdf"
                className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 cursor-pointer"
              >
                Download Resume <Download className="w-4 h-4" />
              </a>
              
              {/* BUTTON 2: Contact Me (Email) */}
              <a 
                href={`mailto:${profile.email}`}
                className="px-8 py-3 border border-gray-700 rounded-full hover:border-white transition-colors text-white cursor-pointer"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-6 justify-center md:justify-start text-gray-500">
              <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors cursor-pointer"><Mail className="w-6 h-6" /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors cursor-pointer"><Linkedin className="w-6 h-6" /></a>
              <a href={`tel:${profile.phone}`} className="hover:text-white transition-colors cursor-pointer"><Phone className="w-6 h-6" /></a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-64 h-64 md:w-96 md:h-96"
          >
            <div className="absolute inset-0 border-2 border-dashed border-gray-800 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-gray-700 rounded-full" />
            <div className="absolute inset-0 rounded-full overflow-hidden bg-gray-900">
              {/* Points to public/profile.jpeg */}
              <img 
                src="/profile.jpeg" 
                alt={profile.name} 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* --- TECHNICAL SKILLS SECTION --- */}
      <section className="py-24 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16 text-center"
          >
            Technical Proficiency
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors hover:shadow-lg hover:shadow-blue-500/10"
              >
                <h3 className="text-blue-400 font-semibold mb-4 text-lg border-b border-zinc-800 pb-2">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="px-3 py-1 text-sm bg-zinc-800 rounded-md text-zinc-300 border border-zinc-700/50">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS (Bento Grid) --- */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-3xl bg-zinc-900 border border-zinc-800 group relative overflow-hidden flex flex-col justify-between hover:border-blue-500/30 transition-all ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">
                  <ExternalLink className="w-6 h-6" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4 block">{project.role}</span>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono text-blue-300 bg-blue-900/20 px-2 py-1 rounded border border-blue-900/30">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EDUCATION & ACHIEVEMENTS --- */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-blue-500 rounded-full"/> Education
            </h3>
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="pl-6 border-l-2 border-zinc-800 ml-3 mb-8 relative"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-blue-500" />
                <div className="mb-1 text-gray-500 text-sm font-mono">{edu.year}</div>
                <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                <div className="text-blue-400 mb-2">{edu.school}</div>
                <p className="text-gray-400 text-sm">{edu.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Achievements Column */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-purple-500 rounded-full"/> Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((ach, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.03)" }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 cursor-default"
                >
                  <div className="p-3 bg-zinc-800 rounded-full text-blue-400 shrink-0">
                    {ach.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{ach.title}</h4>
                    <p className="text-sm text-gray-400 mt-1 leading-relaxed">{ach.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-zinc-900 bg-black text-center">
        <h2 className="text-2xl font-bold mb-8">Let's Build Something Extraordinary.</h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
           {interests.map((int, i) => (
             <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-gray-400 text-sm">
               {int.icon} <span>{int.name}</span>
             </div>
           ))}
        </div>
        
        <div className="text-gray-600 text-sm">
          <p>© 2026 {profile.name}. All Rights Reserved.</p>
          <p className="mt-2 text-xs text-gray-700">Built with React, Tailwind & Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;