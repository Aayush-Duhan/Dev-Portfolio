import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaAws,
  FaLinkedin,
  FaTwitter,
  FaDatabase,
  FaServer,
  FaMobile,
  FaGlobe
} from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { HiOutlineMail, HiChip, HiCode } from 'react-icons/hi';
import { SiTypescript, SiRedux, SiTailwindcss, SiNextdotjs, SiFirebase } from 'react-icons/si';
import { DiMongodb, DiJavascript1, DiPostgresql } from 'react-icons/di';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    { id: 'all', name: 'All', icon: <HiCode /> },
    { id: 'frontend', name: 'Frontend', icon: <FaGlobe /> },
    { id: 'backend', name: 'Backend', icon: <FaServer /> },
    { id: 'mobile', name: 'Mobile', icon: <FaMobile /> },
    { id: 'database', name: 'Database', icon: <FaDatabase /> },
    { id: 'devops', name: 'DevOps', icon: <HiChip /> }
  ];

  const skills = [
    {
      name: "React",
      icon: <FaReact className="text-[#61DAFB]" />,
      category: "frontend",
      level: 90,
      color: "#61DAFB"
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-[#3178C6]" />,
      category: "frontend",
      level: 85,
      color: "#3178C6"
    },
    {
      name: "JavaScript",
      icon: <DiJavascript1 className="text-[#F7DF1E]" />,
      category: "frontend",
      level: 95,
      color: "#F7DF1E"
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white" />,
      category: "frontend",
      level: 85,
      color: "#ffffff"
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-[#764ABC]" />,
      category: "frontend",
      level: 80,
      color: "#764ABC"
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
      category: "frontend",
      level: 92,
      color: "#06B6D4"
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-[#339933]" />,
      category: "backend",
      level: 88,
      color: "#339933"
    },
    {
      name: "Python",
      icon: <FaPython className="text-[#3776AB]" />,
      category: "backend",
      level: 80,
      color: "#3776AB"
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-[#FFCA28]" />,
      category: "backend",
      level: 75,
      color: "#FFCA28"
    },
    {
      name: "HTML",
      icon: <FaHtml5 className="text-[#E34F26]" />,
      category: "frontend",
      level: 95,
      color: "#E34F26"
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-[#1572B6]" />,
      category: "frontend",
      level: 90,
      color: "#1572B6"
    },
    {
      name: "Git",
      icon: <FaGit className="text-[#F05032]" />,
      category: "devops",
      level: 88,
      color: "#F05032"
    },
    {
      name: "MongoDB",
      icon: <DiMongodb className="text-[#47A248]" />,
      category: "database",
      level: 82,
      color: "#47A248"
    },
    {
      name: "PostgreSQL",
      icon: <DiPostgresql className="text-[#336791]" />,
      category: "database",
      level: 78,
      color: "#336791"
    },
    {
      name: "AWS",
      icon: <FaAws className="text-[#FF9900]" />,
      category: "devops",
      level: 75,
      color: "#FF9900"
    },
    {
      name: "Docker",
      icon: <FaDocker className="text-[#2496ED]" />,
      category: "devops",
      level: 80,
      color: "#2496ED"
    },
    {
      name: "React Native",
      icon: <FaReact className="text-[#61DAFB]" />,
      category: "mobile",
      level: 85,
      color: "#61DAFB"
    }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="space-y-8"
    >
      {/* Categories Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 mx-2 sm:mx-4 md:mx-8 lg:mx-12"
        variants={fadeInUp}
      >
        {skillCategories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full border transition-all duration-300 text-xs sm:text-sm
                      ${activeCategory === category.id
                        ? 'bg-secondary/20 border-secondary text-secondary'
                        : 'border-tertiary/50 bg-tertiary/20 text-textSecondary hover:border-secondary/50'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm sm:text-lg">{category.icon}</span>
            <span>{category.name}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 mx-2 sm:mx-4 md:mx-8 lg:mx-12"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.07 }
          }
        }}
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="relative bg-tertiary/50 backdrop-blur-sm rounded-lg overflow-hidden
                       border border-tertiary/30 hover:border-secondary/50 transition-all duration-300"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            whileHover={{ y: -5, boxShadow: `0 10px 30px -15px ${skill.color}33` }}
          >
            {/* Glow Effect */}
            <div className={`absolute inset-0 opacity-0 duration-300 transition-opacity ${hoveredSkill === skill.name ? 'opacity-30' : ''}`}
                 style={{
                  background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`,
                  filter: 'blur(20px)'
                 }} />

            {/* Content */}
            <div className="relative z-10 p-3 sm:p-5 text-center">
              <div className="flex justify-center items-center h-10 sm:h-16">
                <motion.div
                  className="text-2xl sm:text-4xl"
                  animate={{
                    scale: hoveredSkill === skill.name ? 1.3 : 1,
                    y: hoveredSkill === skill.name ? -2 : 0,
                    filter: hoveredSkill === skill.name ? 'drop-shadow(0 0 8px ' + skill.color + '50)' : 'none'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.icon}
                </motion.div>
              </div>

              <motion.h3
                className="text-xs sm:text-sm font-medium mt-2 sm:mt-3"
                animate={{
                  color: hoveredSkill === skill.name ? skill.color : '#ffffff'
                }}
                transition={{ duration: 0.3 }}
              >
                {skill.name}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "Project One",
      description: "A brief description of your first project. What technologies did you use? What problems did you solve?",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      title: "Project Two",
      description: "Description of your second project. Highlight the key features and your role in development.",
      tech: ["Python", "Django", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      title: "Project Three",
      description: "Your third project details. What makes this project special? What did you learn?",
      tech: ["React Native", "Firebase", "Redux"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          variants={fadeInUp}
          transition={{ delay: index * 0.1 }}
          className="bg-tertiary p-5 rounded-lg hover:transform hover:scale-105 transition-all group"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-secondary">{project.title}</h3>
            <div className="flex gap-3">
              <a href={project.github} className="text-textSecondary hover:text-secondary transition-colors">
                <FaGithub className="text-xl" />
              </a>
              <a href={project.link} className="text-textSecondary hover:text-secondary transition-colors">
                <BiLinkExternal className="text-xl" />
              </a>
            </div>
          </div>
          <p className="text-textSecondary mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map(tech => (
              <span key={tech} className="text-xs bg-primary px-2 py-1 rounded-sm">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="text-center"
    >
      <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
      <p className="text-textSecondary max-w-lg mx-auto mb-6">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
        I'll try my best to get back to you!
      </p>
      <motion.a
        href="mailto:your.email@example.com"
        className="btn-primary inline-flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <HiOutlineMail className="text-xl" />
        Say Hello
      </motion.a>
      <div className="mt-8 flex justify-center space-x-6">
        <a href="#" className="text-textSecondary hover:text-secondary transition-colors text-2xl">
          <FaGithub />
        </a>
        <a href="#" className="text-textSecondary hover:text-secondary transition-colors text-2xl">
          <FaLinkedin />
        </a>
        <a href="#" className="text-textSecondary hover:text-secondary transition-colors text-2xl">
          <FaTwitter />
        </a>
      </div>
    </motion.div>
  );
};

const Resume = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Tech Company Name",
      duration: "2022 - Present",
      description: [
        "Led development of key features resulting in 40% increase in user engagement",
        "Architected and implemented scalable microservices using Node.js and Docker",
        "Mentored junior developers and conducted code reviews to maintain code quality"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Another Company",
      duration: "2020 - 2022",
      description: [
        "Developed responsive web applications using React and TypeScript",
        "Improved application performance by 60% through code optimization",
        "Collaborated with UX team to implement modern design systems"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      duration: "2016 - 2020",
      description: "Graduated with Honors. Specialized in Software Engineering."
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      year: "2022"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Experience Section */}
      <div>
        <h3 className="text-2xl font-bold text-secondary mb-6">Experience</h3>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-xl font-bold group-hover:text-secondary transition-colors">
                  {exp.title} @ {exp.company}
                </h4>
                <span className="text-textSecondary font-mono">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside text-textSecondary space-y-2 ml-4">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h3 className="text-2xl font-bold text-secondary mb-6">Education</h3>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-xl font-bold">{edu.degree}</h4>
                <span className="text-textSecondary font-mono">{edu.duration}</span>
              </div>
              <p className="text-textSecondary">{edu.school}</p>
              <p className="text-textSecondary mt-2">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <h3 className="text-2xl font-bold text-secondary mb-6">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-tertiary p-4 rounded-lg hover:transform hover:scale-105 transition-all"
            >
              <h4 className="font-bold mb-1">{cert.name}</h4>
              <p className="text-textSecondary text-sm">{cert.issuer} • {cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="flex justify-center mt-12">
        <motion.a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-secondary text-secondary hover:bg-secondary/10 transition-colors rounded-sm font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Resume
        </motion.a>
      </div>
    </div>
  );
};

const Sections = () => {
  return (
    <div className="w-full">
      {/* About Section */}
      <section id="about" className="py-20 bg-primary">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="prose prose-invert w-full">
              <p className="text-textSecondary mb-4">
                Hello! I'm [Your Name], a passionate software developer with a keen interest in building
                digital experiences that make a difference. My journey in web development started back in
                [year], and I've been hooked ever since.
              </p>
              <p className="text-textSecondary">
                Fast-forward to today, I've had the privilege of working at [companies/projects].
                My main focus these days is building accessible, inclusive products and digital
                experiences for a variety of clients.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-primary relative">
        {/* Background Effects - Similar to Hero */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-400/10 rounded-full filter blur-3xl" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

          {/* Particle effects */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-secondary/50 rounded-full"
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

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <div className="inline-block">
                <div className="flex items-center gap-2 text-secondary font-mono text-sm mb-3
                        backdrop-blur-md bg-primary/60 w-fit mx-auto px-3 py-1.5 rounded-full
                        border border-secondary/30 shadow-lg shadow-secondary/5">
                  <span className="animate-pulse">&lt;</span>
                  <span>Skills</span>
                  <span className="animate-pulse">/&gt;</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold relative">
                  My Technical Toolkit
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </h2>
                <p className="text-textSecondary mt-4 max-w-2xl mx-auto">
                  Here are the technologies and tools I've been working with recently.
                </p>
              </div>
            </motion.div>
            <Skills />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 bg-primary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Some Things I've Built</h2>
            <Projects />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
};

export { Skills };
export default Sections;
