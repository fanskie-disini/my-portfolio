import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaCode, FaUser, FaBriefcase, FaRocket } from "react-icons/fa";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { id: 'home', icon: FaUser, label: 'Home' },
    { id: 'about', icon: FaCode, label: 'About' },
    { id: 'projects', icon: FaBriefcase, label: 'Projects' },
    { id: 'contact', icon: FaRocket, label: 'Contact' }
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Dynamic cursor effect */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: isHovered ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glassmorphism navigation */}
      <motion.nav 
        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="flex space-x-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.nav>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 pt-20">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div
              key="home"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center max-w-4xl"
            >
              <motion.div
                variants={itemVariants}
                animate={floatingAnimation}
                className="relative mb-8"
              >
                <div className="w-40 h-40 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-75"></div>
                  <motion.img
                    src="/api/placeholder/200/200"
                    alt="Fanskie Profile"
                    className="w-32 h-32 rounded-full absolute top-4 left-4 border-4 border-white shadow-2xl object-cover"
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                  />
                </div>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-7xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4"
              >
                Fanskie
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-2xl text-white/80 mb-8 font-light"
              >
                Junior Frontend Developer | UI/UX Enthusiast
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 border border-white/20"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex justify-center space-x-6"
              >
                {[
                  { Icon: FaGithub, href: "https://github.com/fanskie-disini/", label: "GitHub" },
                  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/mfandhil-fanskie/", label: "LinkedIn" },
                  { Icon: FaEnvelope, href: "mailto:mhmmdfandhilah17@gmail.com", label: "Email" }
                ].map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 text-white hover:from-cyan-400 hover:to-purple-500 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}

          {activeSection === 'about' && (
            <motion.div
              key="about"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, x: -100 }}
              className="max-w-4xl grid md:grid-cols-2 gap-8"
            >
              <motion.div variants={itemVariants}>
                <Card className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                      <FaUser className="mr-3 text-cyan-400" />
                      About Me
                    </h2>
                    <p className="text-white/80 leading-relaxed">
                      Passionate frontend developer with a keen eye for modern design and user experience. 
                      I love creating interactive web applications that not only look great but also provide 
                      seamless user interactions. Always eager to learn new technologies and push the boundaries 
                      of what's possible on the web.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                      <FaCode className="mr-3 text-purple-400" />
                      Skills
                    </h2>
                    <div className="space-y-4">
                      {[
                        { skill: 'React/Next.js', level: 90 },
                        { skill: 'JavaScript/TypeScript', level: 85 },
                        { skill: 'CSS/Tailwind', level: 95 },
                        { skill: 'UI/UX Design', level: 80 }
                      ].map(({ skill, level }) => (
                        <div key={skill}>
                          <div className="flex justify-between text-white/80 mb-1">
                            <span>{skill}</span>
                            <span>{level}%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <motion.div
                              className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${level}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}

          {activeSection === 'projects' && (
            <motion.div
              key="projects"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, x: 100 }}
              className="max-w-6xl"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-5xl font-bold text-center text-white mb-12"
              >
                Featured Projects
              </motion.h2>

              <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Main project - Zonetix */}
                <motion.div
                  className="md:col-span-2 lg:col-span-2"
                  whileHover={{ y: -10 }}
                >
                  <Card className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden group">
                    <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-500/20 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 2, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl font-bold text-white/30 group-hover:text-white/50 transition-all duration-300">
                          ZONETIX
                        </div>
                      </div>
                      <motion.div
                        className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaExternalLinkAlt className="text-white w-5 h-5" />
                      </motion.div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-3">Zonetix</h3>
                      <p className="text-white/70 mb-4 leading-relaxed">
                        A modern web application showcasing advanced frontend development techniques 
                        with interactive UI components and responsive design.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full text-xs text-white/80 border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white border-0"
                      >
                        <a 
                          href="https://zonetix.vercel.app" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <span>View Project</span>
                          <FaExternalLinkAlt />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Placeholder projects */}
                {[
                  { title: "Coming Soon", desc: "More amazing projects on the way!" },
                  { title: "Portfolio V2", desc: "Next iteration of my portfolio" }
                ].map((project, index) => (
                  <motion.div
                    key={project.title}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                      <div className="aspect-video bg-gradient-to-br from-slate-600/20 to-slate-800/20 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <FaRocket className="text-4xl text-white/20" />
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-white/60 text-sm">{project.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {activeSection === 'contact' && (
            <motion.div
              key="contact"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: 100 }}
              className="max-w-2xl text-center"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-5xl font-bold text-white mb-8"
              >
                Let's Connect
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-white/80 mb-12"
              >
                Ready to bring your ideas to life? Let's work together!
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="grid md:grid-cols-3 gap-6"
              >
                {[
                  { 
                    Icon: FaGithub, 
                    href: "https://github.com/fanskie-disini/", 
                    label: "GitHub",
                    desc: "Check out my code"
                  },
                  { 
                    Icon: FaLinkedin, 
                    href: "https://www.linkedin.com/in/mfandhil-fanskie/", 
                    label: "LinkedIn",
                    desc: "Professional network"
                  },
                  { 
                    Icon: FaEnvelope, 
                    href: "mailto:mhmmdfandhilah17@gmail.com", 
                    label: "Email",
                    desc: "Direct contact"
                  }
                ].map(({ Icon, href, label, desc }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-semibold mb-2">{label}</h3>
                    <p className="text-white/60 text-sm">{desc}</p>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}