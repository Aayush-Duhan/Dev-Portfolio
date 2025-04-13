import { motion } from 'framer-motion';
import { FiDownload, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ResumePage = () => { // Renamed component to ResumePage
  const handleDownload = () => {
    // Use the actual resume file path from assets folder
    const resumeUrl = '/src/assets/Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Aayush_Duhan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen pt-20 bg-primary/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 py-16">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-textSecondary hover:text-secondary transition-colors mb-8"
        >
          <FiArrowLeft className="text-xl" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-textPrimary mb-4">
            Aayush
          </h1>
          <p className="text-textSecondary text-lg">
            +91-7404814048
          </p>
          <p className="text-textSecondary text-lg">
            Bachelor of Technology in Computer Science
          </p>
          <p className="text-textSecondary text-lg">
            Vellore Institute of Technology, Chennai, Tamil Nadu, India
          </p>
        </motion.div>

        {/* Download button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <button
            onClick={handleDownload}
            className="group inline-flex items-center justify-center px-6 py-3 text-secondary
                     overflow-hidden rounded font-medium whitespace-nowrap
                     border border-secondary/50 bg-transparent
                     transition-all duration-300 ease-in-out
                     hover:border-secondary/80
                     focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary
                     gap-2 relative"
          >
            {/* Background slide effect */}
            <span className="absolute inset-0 w-full h-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            {/* Content */}
            <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
              <FiDownload className="text-xl" />
              Download Resume
            </span>
          </button>
        </motion.div>

        {/* Resume preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-tertiary/30 rounded-lg p-8 backdrop-blur-xs"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Education Section */}
            <div>
              <h2 className="text-2xl font-bold text-textPrimary mb-6">Education</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="text-xl font-semibold text-textPrimary">BTech. Computer Science</h3>
                  <p className="text-secondary">Vellore Institute of Technology, Chennai • 2022-2026</p>
                  <p className="text-textSecondary">CGPA: 8.80</p>
                </div>
                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="text-xl font-semibold text-textPrimary">Senior Secondary</h3>
                  <p className="text-secondary">R.E.D, Chhuchhakwas • 2022</p>
                  <p className="text-textSecondary">Percentage: 94.80% (CBSE)</p>
                </div>
                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="text-xl font-semibold text-textPrimary">Secondary</h3>
                  <p className="text-secondary">R.E.D, Chhuchhakwas • 2020</p>
                  <p className="text-textSecondary">Percentage: 97.6% (CBSE)</p>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="text-2xl font-bold text-textPrimary mb-6">Experience</h2>
              <div className="border-l-2 border-secondary pl-4">
                <h3 className="text-xl font-semibold text-textPrimary">Technical Intern / Web Developer</h3>
                <p className="text-secondary">Defence Aspirants Leadership Academy, Rohtak, Haryana • May 2024 - July 2024</p>
                <ul className="list-disc list-inside text-textSecondary mt-2 space-y-1">
                  <li>Developed and maintained the academy's website using Wix Framework</li>
                  <li>Collaborated with students to integrate feedback and enhance user experience</li>
                  <li>Addressed technical issues and provided ongoing support to ensure optimal website performance</li>
                </ul>
              </div>
            </div>

            {/* Projects Section */}
            <div>
              <h2 className="text-2xl font-bold text-textPrimary mb-6">Projects</h2>
              <div className="border-l-2 border-secondary pl-4">
                <h3 className="text-xl font-semibold text-textPrimary">MySheher</h3>
                <p className="text-secondary">Google Developer Solution Challenge Project Website • Jan 2024 - March 2024</p>
                <ul className="list-disc list-inside text-textSecondary mt-2 space-y-1">
                  <li>Features include campaign tracking, blood donor locator, and event management with separate dashboards for clients and volunteers</li>
                  <li>Technologies: HTML, CSS, JavaScript, Firebase</li>
                </ul>
              </div>
            </div>

            {/* Technical Skills Section */}
            <div>
              <h2 className="text-2xl font-bold text-textPrimary mb-6">Technical Skills</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="text-lg font-semibold text-textPrimary">Programming Languages</h3>
                  <p className="text-textSecondary">Expertise: Python3, C/C++, HTML, CSS, JavaScript</p>
                  <p className="text-textSecondary">Familiar with: PL-SQL, Core Java, MongoDB, ExpressJS, React, NodeJS</p>
                </div>
                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="text-lg font-semibold text-textPrimary">Tools and Frameworks</h3>
                  <p className="text-textSecondary">Jupyter, Visual Studio Code, Android Studio, MongoDB Compass, Bootstrap, Tailwind CSS, MySQL, AWS, Firebase</p>
                </div>
                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="text-lg font-semibold text-textPrimary">Operating Systems</h3>
                  <p className="text-textSecondary">Windows, Linux</p>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <h2 className="text-2xl font-bold text-textPrimary mb-6">Certifications</h2>
              <ul className="list-disc list-inside text-textSecondary space-y-2 border-l-2 border-secondary pl-4">
                <li>Python for Everybody Specialization: Coursera, University of Michigan</li>
                <li>Python 3 Programming Specialization: Coursera, University of Michigan</li>
                <li>The Web Developer Bootcamp 2024: Udemy</li>
                <li>Wildlife Ecology: NPTEL, IIT Bombay</li>
              </ul>
            </div>

            {/* Position of Responsibility Section */}
            <div>
              <h2 className="text-2xl font-bold text-textPrimary mb-6">Position of Responsibility</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="text-xl font-semibold text-textPrimary">Team Representative</h3>
                  <p className="text-secondary">Google Developer Solution Challenge, Chennai, Tamil Nadu • Jan 2024 - March 2024</p>
                  <p className="text-textSecondary">Facilitated communication among team members, addressed logical concerns, and demonstrated strong leadership throughout the project</p>
                </div>
                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="text-xl font-semibold text-textPrimary">Coordinator</h3>
                  <p className="text-secondary">Soft Skills Programme under Beti Bachao Beti Padhao Yojna, Rohtak, Haryana • Dec 2023</p>
                  <p className="text-textSecondary">Organized seating arrangements for over 200 attendees, including PhD scholars, Master's students, undergraduates, and dignitaries</p>
                </div>
              </div>
            </div>

            {/* Hobbies Section */}
            <div>
              <h2 className="text-2xl font-bold text-textPrimary mb-6">Hobbies and Interests</h2>
              <div className="border-l-2 border-secondary pl-4">
                <p className="text-textSecondary">Coding, Listening to Music, Gaming</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumePage; // Export the renamed component