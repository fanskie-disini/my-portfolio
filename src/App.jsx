import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Linkedin, Mail, ExternalLink, Instagram, Code, Palette, Smartphone, Globe, Moon, Sun } from "lucide-react";
import fanskieProfile from './assets/profile/fanskie.jpg';
import zonetix from './assets/project/zonetix.jpg';

export default function Portfolio() {
  const [showImageModal, setShowImageModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(savedTheme === 'dark' || (!savedTheme && systemDark));
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const iconVariants = {
    hover: { 
      scale: 1.1, 
      y: -3,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { scale: 0.95 }
  };

  const projects = [
    {
      title: "Zonetix",
      description: "A modern web application showcasing clean design principles and smooth user interactions. Built with React and styled with attention to detail.",
      image: zonetix,
      tech: ["Next.js", "Tailwind CSS", "Supabase"],
      link: "https://zonetix.vercel.app",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website featuring modern animations and clean design. Perfect showcase of frontend development skills.",
      image: "/api/placeholder/400/300", 
      tech: ["React", "Vite", "Tailwind CSS"],
      link: "fanskie-site.vercel.app",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "EasyPresensi",
      description: "COMING SOON.",
      image: "/api/placeholder/400/300",
      tech: ["...", "...", "..."],
      link: "#",
      gradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <motion.div 
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
      } py-8 px-4 sm:py-12`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <motion.nav 
          className={`flex justify-between items-center mb-16 ${
            isDarkMode 
              ? 'bg-gray-800/80 backdrop-blur-md border border-gray-700/50' 
              : 'bg-white/80 backdrop-blur-md'
          } rounded-2xl px-6 py-4 shadow-sm transition-colors duration-300`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className={`font-bold text-lg transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Fanskie</span>
          </motion.div>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>About</a>
              <a href="#skills" className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Skills</a>
              <a href="#projects" className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Projects</a>
              <a href="#contact" className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}>Contact</a>
            </div>
            
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className={`p-3 rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDarkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          id="about"
        >
          <motion.div className="mb-8" variants={fadeInUp}>
            <motion.div 
              className="w-32 h-32 mx-auto mb-6 relative group cursor-pointer"
              onClick={() => setShowImageModal(true)}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.img
                src={fanskieProfile}
                alt="Fanskie Profile"
                className="w-full h-full rounded-3xl object-cover shadow-2xl border-4 border-white transition-all duration-300"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              />
              <motion.div 
                className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-600/20 to-transparent flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className="text-white text-sm font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  Click to view
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.h1 
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
            variants={fadeInUp}
          >
            Fanskie
          </motion.h1>
          
          <motion.p 
            className={`text-xl sm:text-2xl mb-4 font-medium transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            variants={fadeInUp}
          >
            Junior Frontend Developer
          </motion.p>

          <motion.p 
            className={`text-lg mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
            variants={fadeInUp}
          >
            Passionate about creating beautiful, responsive web interfaces with modern frameworks and clean code practices. Always eager to learn new technologies and improve user experiences.
          </motion.p>

          <motion.div 
            className="flex justify-center space-x-6"
            variants={fadeInUp}
          >
            {[
              { Icon: Github, href: "https://github.com/fanskie-disini/", label: "GitHub", color: isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/mfandhil-fanskie/", label: "LinkedIn", color: "text-blue-600 hover:text-blue-800" },
              { Icon: Mail, href: "mailto:mhmmdfandhilah17@gmail.com", label: "Email", color: "text-red-500 hover:text-red-700" },
              { Icon: Instagram, href: "https://www.instagram.com/programmerturu/", label: "Instagram", color: "text-pink-500 hover:text-pink-700" }
            ].map(({ Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 ${color} transition-all duration-200 rounded-2xl ${
                  isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-white'
                } hover:shadow-lg`}
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          id="skills"
        >
          <div className="text-center mb-16">
            <motion.h2 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Skills & Expertise
            </motion.h2>
            <motion.p 
              className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Technologies and tools I work with to bring ideas to life
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { skill: 'Frontend Development', icon: Code, level: 85, color: 'from-blue-400 to-blue-600', description: 'React, Next.js, TypeScript' },
              { skill: 'UI/UX Design', icon: Palette, level: 75, color: 'from-purple-400 to-purple-600', description: 'Figma, Adobe XD, Prototyping' },
              { skill: 'Responsive Design', icon: Smartphone, level: 90, color: 'from-green-400 to-green-600', description: 'Mobile-first, CSS Grid, Flexbox' },
              { skill: 'Web Development', icon: Globe, level: 80, color: 'from-orange-400 to-orange-600', description: 'JavaScript, HTML5, CSS3' }
            ].map(({ skill, icon: Icon, level, color, description }, index) => (
              <motion.div
                key={skill}
                className={`text-center p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border group ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                    : 'bg-white border-gray-100'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${color} rounded-3xl flex items-center justify-center relative`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="text-white" size={32} />
                  
                  {/* Percentage Tooltip */}
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    {level}%
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </motion.div>
                </motion.div>
                <h3 className={`font-bold mb-2 text-lg transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{skill}</h3>
                <p className={`text-sm mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{description}</p>
                <div className={`w-full rounded-full h-3 overflow-hidden ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div 
                    className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-700 ease-out`}
                    style={{ 
                      width: '0%',
                      transition: 'width 0.7s ease-out'
                    }}
                    ref={(el) => {
                      if (el) {
                        const parent = el.closest('.group');
                        if (parent) {
                          const handleMouseEnter = () => {
                            el.style.width = `${level}%`;
                          };
                          const handleMouseLeave = () => {
                            el.style.width = '0%';
                          };
                          parent.addEventListener('mouseenter', handleMouseEnter);
                          parent.addEventListener('mouseleave', handleMouseLeave);
                        }
                      }
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects - Fixed Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          id="projects"
        >
          <div className="text-center mb-16">
            <motion.h2 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Featured Work
            </motion.h2>
            <motion.p 
              className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Some of my recent projects that showcase my skills and creativity
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.2 }}
                whileHover={{ scale: 1.02, y: -12 }}
                className="h-full flex flex-col"
              >
                <Card className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-3xl h-full flex flex-col ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <div className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center p-8 relative overflow-hidden`}>
                    <motion.div 
                      className="text-center relative z-10"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">{project.title.charAt(0)}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </motion.div>
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-grow mb-4">
                      <p className={`leading-relaxed text-justify transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>{project.description}</p>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <motion.span
                            key={tech}
                            className={`px-3 py-1 text-xs rounded-full font-medium transition-colors duration-300 ${
                              isDarkMode 
                                ? 'bg-gray-700 text-gray-300' 
                                : 'bg-gray-100 text-gray-700'
                            }`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <Button
                        asChild
                        className={`w-full bg-gradient-to-r ${project.gradient} flex items-center hover:shadow-lg text-white border-0 rounded-xl py-3 transition-all duration-200`}
                      >
                        <motion.a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 w-full"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="font-semibold">View Project</span>
                          <ExternalLink size={16} />
                        </motion.a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className={`text-center rounded-3xl p-16 transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-gray-800 to-gray-700' 
              : 'bg-gradient-to-r from-blue-50 to-purple-50'
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          id="contact"
        >
          <motion.h2 
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className={`mb-12 text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            Always interested in new opportunities and collaborations. Let's create something amazing together!
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 rounded-2xl text-lg transition-all duration-200 shadow-lg border-0"
            >
              <motion.a 
                href="mailto:mhmmdfandhilah17@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2"
              >
                <Mail size={20} />
                <span className="font-semibold">Get In Touch</span>
              </motion.a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className={`border-2 px-12 py-6 rounded-2xl text-lg transition-all duration-200 ${
                isDarkMode 
                  ? 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700' 
                  : 'border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50'
              }`}
            >
              <motion.a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2"
              >
                <span className="font-semibold">Download CV</span>
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowImageModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative max-w-2xl max-h-[80vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                onClick={() => setShowImageModal(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={32} />
              </motion.button>
              <img
                src={fanskieProfile}
                alt="Fanskie Profile - Full Size"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}