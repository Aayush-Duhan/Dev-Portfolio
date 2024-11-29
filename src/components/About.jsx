import { motion } from 'framer-motion';
import { 
  SiPython, SiCplusplus, SiHtml5, SiCss3, SiJavascript, 
  SiOracle, SiOpenjdk, SiReact, SiNodedotjs, SiExpress, 
  SiMongodb, SiFirebase, SiBootstrap, SiTailwindcss,
  SiGit, SiVisualstudiocode, SiAndroidstudio, SiJupyter,
  SiWindows, SiLinux, SiAmazonwebservices
} from 'react-icons/si';
import profileImage from '../assets/1732640177516.jpeg';

const About = () => {
  const skills = [
    {
      category: "Programming",
      items: [
        { name: "Python3", icon: SiPython, color: "text-blue-500" },
        { name: "C/C++", icon: SiCplusplus, color: "text-blue-600" },
        { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS", icon: SiCss3, color: "text-blue-400" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "PL-SQL", icon: SiOracle, color: "text-red-500" },
        { name: "Core Java", icon: SiOpenjdk, color: "text-red-600" }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "NodeJS", icon: SiNodedotjs, color: "text-green-500" },
        { name: "ExpressJS", icon: SiExpress, color: "text-gray-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
        { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" }
      ]
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "VS Code", icon: SiVisualstudiocode, color: "text-blue-500" },
        { name: "Android Studio", icon: SiAndroidstudio, color: "text-green-500" },
        { name: "Jupyter", icon: SiJupyter, color: "text-orange-500" },
        { name: "AWS", icon: SiAmazonwebservices, color: "text-yellow-500" },
        { name: "Windows", icon: SiWindows, color: "text-blue-400" },
        { name: "Linux", icon: SiLinux, color: "text-yellow-600" }
      ]
    }
  ];

  return (
    <section id="about" className="section-container">
      <div className="section-background" />
      
      <div className="section-content">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-textSecondary leading-relaxed">
              Hello! I'm Aayush, a passionate full-stack developer with a keen interest in building
              exceptional digital experiences. My journey in web development started back in 2020
              when I decided to try customizing a WordPress theme — turns out hacking together a
              custom theme taught me a lot about HTML & CSS!
            </p>

            <p className="text-textSecondary leading-relaxed">
              Fast-forward to today, and I've had the privilege of working at a start-up,
              a huge corporation, and a student-led design studio. My main focus these days
              is building accessible, inclusive products and digital experiences.
            </p>

            <p className="text-textSecondary leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 text-textSecondary">
              {[
                'JavaScript (ES6+)',
                'TypeScript',
                'React',
                'Node.js',
                'Python',
                'MongoDB',
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-secondary">▹</span> {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-md mx-auto"
          >
            <motion.div 
              className="relative aspect-square"
              whileHover="hover"
            >
              {/* Background accent */}
              <motion.div
                className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
                variants={{
                  hover: {
                    scale: 1.1,
                    rotate: -2,
                  }
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Main image container */}
              <motion.div
                className="relative rounded-lg overflow-hidden"
                variants={{
                  hover: {
                    scale: 1.05,
                  }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <motion.img
                  src={profileImage}
                  alt="Aayush"
                  className="w-full h-full object-cover"
                  variants={{
                    hover: {
                      scale: 1.1,
                    }
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* Subtle overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent"
                  variants={{
                    hover: {
                      opacity: 0,
                    }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Decorative frame */}
              <motion.div
                className="absolute -inset-0.5 rounded-lg border-2 border-secondary/30"
                variants={{
                  hover: {
                    x: 8,
                    y: 8,
                    borderColor: "rgba(var(--color-secondary), 0.5)",
                  }
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
