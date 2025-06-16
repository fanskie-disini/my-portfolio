import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Linkedin, Mail, ExternalLink, Instagram, Code, Palette, Smartphone, Globe } from "lucide-react";

export default function Portfolio() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);

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

  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: { 
      scale: 1.02, 
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const skillProgressVariants = {
    initial: { width: 0 },
    animate: (level) => ({
      width: `${level}%`,
      transition: { 
        duration: 1.2, 
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  const iconVariants = {
    hover: { 
      scale: 1.1, 
      y: -3,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { scale: 0.95 }
  };

  const teamMembers = [
    {
      name: "Fanskie",
      role: "Frontend Developer",
      description: "Passionate about creating beautiful, responsive web interfaces with modern frameworks and clean code practices.",
      image: "/api/placeholder/300/300",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      bgColor: "bg-gradient-to-br from-blue-100 to-purple-100"
    },
    {
      name: "Creative Designer",
      role: "UI/UX Designer", 
      description: "Focused on user-centered design principles and creating intuitive digital experiences that delight users.",
      image: "/api/placeholder/300/300",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      bgColor: "bg-gradient-to-br from-pink-100 to-orange-100"
    }
  ];

  const projects = [
    {
      title: "Zonetix",
      description: "A modern web application showcasing clean design principles and smooth user interactions. Built with React and styled with attention to detail.",
      image: "/api/placeholder/400/300",
      tech: ["React", "Next.js", "Tailwind CSS"],
      link: "https://zonetix.vercel.app",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website featuring modern animations and clean design. Perfect showcase of frontend development skills.",
      image: "/api/placeholder/400/300", 
      tech: ["React", "Framer Motion", "CSS3"],
      link: "#",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8 px-4 sm:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="mb-6 sm:mb-8" variants={fadeInUp}>
            <motion.div 
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 relative group cursor-pointer"
              onClick={() => setShowImageModal(true)}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.img
                src="/api/placeholder/200/200"
                alt="Fanskie Profile"
                className="w-full h-full rounded-full object-cover shadow-xl border-4 border-white transition-all duration-300"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              />
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent flex items-center justify-center"
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight"
            variants={fadeInUp}
          >
            Fanskie
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 font-medium"
            variants={fadeInUp}
          >
            Junior Frontend Developer
          </motion.p>

          <motion.div 
            className="flex justify-center space-x-4 sm:space-x-6"
            variants={fadeInUp}
          >
            {[
              { Icon: Github, href: "https://github.com/fanskie-disini/", label: "GitHub", color: "text-gray-700 hover:text-gray-900" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/mfandhil-fanskie/", label: "LinkedIn", color: "text-blue-600 hover:text-blue-800" },
              { Icon: Mail, href: "mailto:mhmmdfandhilah17@gmail.com", label: "Email", color: "text-red-500 hover:text-red-700" },
              { Icon: Instagram, href: "https://www.instagram.com/programmerturu/", label: "Instagram", color: "text-pink-500 hover:text-pink-700" }
            ].map(({ Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 ${color} transition-all duration-200 rounded-xl hover:bg-white hover:shadow-lg`}
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Our Team Section - Matching the UI design */}
        <motion.div 
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our Team
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our team consists only of the best talents
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <div className={`sm:w-40 h-48 sm:h-auto ${member.bgColor} flex items-center justify-center p-6`}>
                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-lg"
                        />
                      </motion.div>
                    </div>
                    
                    <CardContent className="flex-1 p-6 sm:p-8">
                      <motion.h3 
                        className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        {member.name}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-blue-600 font-semibold mb-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      >
                        {member.role}
                      </motion.p>
                      
                      <motion.p 
                        className="text-gray-600 text-sm leading-relaxed mb-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      >
                        {member.description}
                      </motion.p>
                      
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      >
                        {member.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 1 + index * 0.1 + skillIndex * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </motion.div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Skills & Expertise
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: 'Frontend Development', icon: Code, level: 85, color: 'from-blue-400 to-blue-600' },
              { skill: 'UI/UX Design', icon: Palette, level: 75, color: 'from-purple-400 to-purple-600' },
              { skill: 'Responsive Design', icon: Smartphone, level: 90, color: 'from-green-400 to-green-600' },
              { skill: 'Web Development', icon: Globe, level: 80, color: 'from-orange-400 to-orange-600' }
            ].map(({ skill, icon: Icon, level, color }, index) => (
              <motion.div
                key={skill}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="text-white" size={28} />
                </motion.div>
                <h3 className="font-bold text-gray-900 mb-2">{skill}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                  />
                </div>
                <span className="text-sm text-gray-600">{level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div 
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Featured Work
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.02, y: -8 }}
              >
                <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-3xl">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center p-8`}>
                    <motion.div 
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{project.title.charAt(0)}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </motion.div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                          whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${project.gradient} hover:shadow-lg text-white border-0 rounded-xl py-3 transition-all duration-200`}
                    >
                      <motion.a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>View Project</span>
                        <ExternalLink size={16} />
                      </motion.a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Always interested in new opportunities and collaborations. Let's create something amazing together!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-lg border-0"
            >
              <motion.a 
                href="mailto:mhmmdfandhilah17@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
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
                src="/api/placeholder/400/400"
                alt="Fanskie Profile - Full Size"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}