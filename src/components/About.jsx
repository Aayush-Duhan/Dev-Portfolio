import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';

import profileImage from '../assets/1732640177516.jpeg';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');
  // Timeline data
  const experienceTimeline = [
    {
      id: 1,
      year: 'May 2024 - July 2024',
      position: 'Technical Intern / Web Developer',
      company: 'Defence Aspirants Leadership Academy, Rohtak, Haryana',
      description: 'Developed and maintained the academy\'s website using Wix Framework. Collaborated with students to integrate feedback and enhance user experience. Addressed technical issues and provided ongoing support to ensure optimal website performance.'
    }
  ];

  // Education timeline
  const educationTimeline = [
    {
      id: 1,
      year: '2022 - 2026',
      degree: 'BTech. Computer Science',
      institution: 'Vellore Institute of Technology, Chennai',
      field: 'Computer Science',
      description: 'CGPA: 8.80'
    },
    {
      id: 2,
      year: '2022',
      degree: 'Senior Secondary',
      institution: 'R.E.D, Chhuchhakwas',
      field: 'Science & Mathematics',
      description: 'Percentage: 94.80% (CBSE)'
    },
    {
      id: 3,
      year: '2020',
      degree: 'Secondary',
      institution: 'R.E.D, Chhuchhakwas',
      field: 'Science & Mathematics',
      description: 'Percentage: 97.6% (CBSE)'
    }
  ];

  // Interests
  const interests = [
    { label: 'Web Development', bgColor: 'bg-blue-500/10' },
    { label: 'Mobile App Development', bgColor: 'bg-purple-500/10' },
    { label: 'UI/UX Design', bgColor: 'bg-pink-500/10' },
    { label: 'Machine Learning', bgColor: 'bg-green-500/10' },
    { label: 'Blockchain', bgColor: 'bg-yellow-500/10' },
    { label: 'Open Source', bgColor: 'bg-red-500/10' },
    { label: 'Cloud Computing', bgColor: 'bg-indigo-500/10' },
    { label: 'DevOps', bgColor: 'bg-orange-500/10' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-24 bg-primary/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

        {/* Particle effects */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-secondary/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block">

            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
              My Story
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-secondary"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </h2>
            <p className="section-subheading max-w-xl mx-auto text-base mt-4">
              Get to know me, my journey, and what drives me as a developer.
            </p>
          </div>
        </motion.div>

        {/* Tabs for Different Sections */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {['overview', 'experience', 'education', 'interests'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all capitalize whitespace-nowrap
                          ${activeTab === tab
                            ? 'bg-secondary/20 text-secondary border border-secondary/30'
                            : 'bg-tertiary/20 text-textSecondary border border-tertiary/30 hover:border-secondary/20 hover:text-textPrimary'
                          }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-tertiary/10 backdrop-blur-sm rounded-xl border border-tertiary/30 p-6 md:p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <motion.div variants={itemVariants} className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-textPrimary">
                    Who <span className="text-secondary">I Am</span>
                  </h3>
                  <div className="space-y-4 text-textSecondary">
                    <p>
                      I'm a passionate full-stack developer with expertise in building
                      modern web and mobile applications. My journey in software development
                      began during my college years and has evolved into a professional career.
                    </p>
                    <p>
                      I specialize in JavaScript frameworks like React, Next.js, and Node.js,
                      and I'm constantly exploring new technologies to enhance my skill set.
                    </p>
                    <p>
                      My approach combines technical expertise with creative problem-solving,
                      allowing me to build applications that are not only functional but also
                      user-friendly and visually appealing.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <motion.a
                      href="/src/assets/Resume.pdf"
                      download="Aayush_Duhan_Resume.pdf"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="neon-btn"
                    >
                      <div className="btn-glow" />
                      <span className="btn-text">
                        <span>Download CV</span>
                        <FiDownload className="text-lg" />
                      </span>
                    </motion.a>

                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="order-1 md:order-2 flex justify-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/20 to-purple-500/30 blur-lg" />
                    <div className="absolute inset-4 rounded-full border-2 border-dashed border-secondary/30 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-primary"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/300?text=Profile+Photo';
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="relative"
              >
                <div className="absolute top-0 bottom-0 left-[22px] w-0.5 bg-tertiary/50" />

                {experienceTimeline.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="relative pl-12 pb-10 last:pb-0"
                  >
                    <div className="absolute left-0 top-0 w-10 h-10 bg-tertiary/20 rounded-full border-2 border-secondary flex items-center justify-center">
                      <div className="w-3 h-3 bg-secondary rounded-full" />
                    </div>

                    <div className="font-mono text-sm text-secondary mb-1">{item.year}</div>
                    <h3 className="text-xl font-bold text-textPrimary">{item.position}</h3>
                    <h4 className="text-lg text-textSecondary mb-2">{item.company}</h4>
                    <p className="text-textSecondary">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="relative"
              >
                <div className="absolute top-0 bottom-0 left-[22px] w-0.5 bg-tertiary/50" />

                {educationTimeline.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="relative pl-12 pb-10 last:pb-0"
                  >
                    <div className="absolute left-0 top-0 w-10 h-10 bg-tertiary/20 rounded-full border-2 border-secondary flex items-center justify-center">
                      <div className="w-3 h-3 bg-secondary rounded-full" />
                    </div>

                    <div className="font-mono text-sm text-secondary mb-1">{item.year}</div>
                    <h3 className="text-xl font-bold text-textPrimary">{item.degree}</h3>
                    <h4 className="text-lg text-textSecondary">{item.institution}</h4>
                    <p className="text-sm text-secondary italic mb-2">{item.field}</p>
                    <p className="text-textSecondary">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Interests Tab */}
            {activeTab === 'interests' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.p variants={itemVariants} className="text-textSecondary mb-6">
                  Beyond coding, I'm passionate about these areas in tech:
                </motion.p>

                <div className="flex flex-wrap gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className={`px-4 py-2 rounded-lg ${interest.bgColor} backdrop-blur-sm text-textPrimary
                               border border-tertiary/30 hover:border-secondary/30 transition-all duration-300`}
                    >
                      {interest.label}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
