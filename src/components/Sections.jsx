import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
  FaTwitter
} from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
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

  const skills = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "JavaScript", icon: <DiJavascript1 className="text-[#F7DF1E]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "Git", icon: <FaGit className="text-[#F05032]" /> },
    { name: "MongoDB", icon: <DiMongodb className="text-[#47A248]" /> },
    { name: "PostgreSQL", icon: <DiPostgresql className="text-[#336791]" /> },
    { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
    { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> }
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          variants={fadeInUp}
          transition={{ delay: index * 0.1 }}
          className="bg-tertiary p-4 rounded-lg text-center hover:text-secondary transition-all hover:scale-105 group"
        >
          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </div>
          <span className="text-sm">{skill.name}</span>
        </motion.div>
      ))}
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
              <span key={tech} className="text-xs bg-primary px-2 py-1 rounded">
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
          href="/path-to-your-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-secondary text-secondary hover:bg-secondary/10 transition-colors rounded font-medium"
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
      <section id="skills" className="py-20 bg-primary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
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

export default Sections;
