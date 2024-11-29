import { motion } from 'framer-motion';

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
    <div className="min-h-screen bg-primary pt-20">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Resume
          </motion.h1>
          
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
        </div>
      </div>
    </div>
  );
};

export default Resume;
