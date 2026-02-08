import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-black text-white relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 z-10"
      >
        Charanjit Singh
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl z-10"
      >
        AI/ML Engineer & Full Stack Developer. <br />
        Crafting intelligent systems with <span className="text-blue-400">Deep Learning</span> & <span className="text-cyan-400">React</span>.
      </motion.p>
    </section>
  );
};

export default Hero;