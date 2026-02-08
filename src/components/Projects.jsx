import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: "Deep-Audio",
    desc: "Hybrid CNN-Transformer Model for Real-Time Emergency Detection.",
    tags: ["Python", "TensorFlow", "Transformers"],
    colSpan: "col-span-1 md:col-span-2", // Large Box
  },
  {
    title: "Terminator Vision",
    desc: "Real-time weapon detection web app.",
    tags: ["React", "YOLO", "Flask"],
    colSpan: "col-span-1", // Small Box
  },
  {
    title: "Springer Nature Paper",
    desc: "Published research on AI-Enabled Accident Detection.",
    tags: ["Research", "Publication"],
    colSpan: "col-span-1", // Small Box
  },
  {
    title: "Portfolio V2",
    desc: "This website. Built with Framer Motion & React.",
    tags: ["React", "Framer Motion"],
    colSpan: "col-span-1 md:col-span-2", // Large Box
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className={`${project.colSpan} bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-zinc-700 transition-colors group relative overflow-hidden`}
          >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-6 h-6" />
            </div>
            
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-4">{project.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;