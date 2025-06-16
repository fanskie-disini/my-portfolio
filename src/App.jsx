import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaInstagram } from "react-icons/fa";

export default function Portfolio() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <motion.a
              href="https://www.instagram.com/programmerturu/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-32 h-32 mx-auto mb-6 relative group">
                <img
                  src="/api/placeholder/200/200"
                  alt="Fanskie Profile"
                  className="w-full h-full rounded-full object-cover shadow-lg border-4 border-white group-hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
            </motion.a>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl font-light text-gray-800 mb-4 tracking-wide"
          >
            Fanskie
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 mb-8 font-light"
          >
            Junior Frontend Developer
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex justify-center space-x-6"
          >
            {[
              { Icon: FaGithub, href: "https://github.com/fanskie-disini/", label: "GitHub" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/mfandhil-fanskie/", label: "LinkedIn" },
              { Icon: FaEnvelope, href: "mailto:mhmmdfandhilah17@gmail.com", label: "Email" },
              { Icon: FaInstagram, href: "https://www.instagram.com/programmerturu/", label: "Instagram" }
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* About Card */}
          <motion.div variants={fadeInUp}>
            <Card 
              className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredCard('about')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-8">
                <h2 className="text-2xl font-light text-gray-800 mb-6">About</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Passionate about creating beautiful, functional web experiences. 
                  I focus on clean code, user-centered design, and modern development practices.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Frontend Development</span>
                    <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gray-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: hoveredCard === 'about' ? '85%' : '0%' }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">UI/UX Design</span>
                    <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gray-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: hoveredCard === 'about' ? '75%' : '0%' }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">React/Next.js</span>
                    <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gray-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: hoveredCard === 'about' ? '80%' : '0%' }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Card */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-2xl font-light text-gray-800 mb-6">Skills</h2>
                <div className="space-y-4">
                  {[
                    'React & Next.js',
                    'JavaScript & TypeScript', 
                    'Tailwind CSS',
                    'Framer Motion',
                    'UI/UX Design',
                    'Responsive Design'
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Featured Project */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-800 text-center mb-8">Featured Work</h2>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-gray-100 to-gray-200 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-light text-gray-600">Z</span>
                  </div>
                  <h3 className="text-xl font-light text-gray-700">Zonetix</h3>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-light text-gray-800 mb-4">Zonetix</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    A modern web application showcasing clean design principles and 
                    smooth user interactions. Built with React and styled with attention to detail.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['React', 'Next.js', 'Tailwind CSS'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <a 
                      href="https://zonetix.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <span>View Project</span>
                      <FaExternalLinkAlt size={14} />
                    </a>
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <h2 className="text-3xl font-light text-gray-800 mb-6">Let's Connect</h2>
          <p className="text-gray-600 mb-8 font-light">
            Always interested in new opportunities and collaborations.
          </p>
          
          <Button
            asChild
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full transition-colors duration-200"
          >
            <a href="mailto:mhmmdfandhilah17@gmail.com">
              Get In Touch
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}