import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiGitBranch, FiFolder, FiArrowUpRight } from 'react-icons/fi';
import {
  SiJavascript, SiTypescript, SiPython, SiOpenjdk, SiCplusplus,
  SiHtml5, SiCss3, SiReact, SiVuedotjs, SiAngular,
  SiNodedotjs, SiExpress, SiDjango, SiFlask, SiSpringboot,
  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiFirebase,
  SiDocker, SiKubernetes, SiAwslambda, SiGooglecloud,
  SiTailwindcss, SiBootstrap, SiMui, SiChakraui,
  SiGit, SiGithub, SiLinux, SiAndroid,
  SiPhp, SiLaravel, SiRuby, SiRubyonrails, SiSwift,
  SiKotlin, SiDart, SiFlutter, SiUnity, SiUnrealengine
} from 'react-icons/si';
import useGithubRepos from '../hooks/useGithubRepos';
import { useState, useRef, useEffect, useMemo } from 'react';

const techStackIcons = {
  // Programming Languages
  JavaScript: { icon: SiJavascript, color: "text-yellow-400" },
  TypeScript: { icon: SiTypescript, color: "text-blue-400" },
  Python: { icon: SiPython, color: "text-blue-500" },
  Java: { icon: SiOpenjdk, color: "text-red-500" },
  "C++": { icon: SiCplusplus, color: "text-blue-600" },
  HTML: { icon: SiHtml5, color: "text-orange-500" },
  CSS: { icon: SiCss3, color: "text-blue-400" },
  PHP: { icon: SiPhp, color: "text-purple-500" },
  Ruby: { icon: SiRuby, color: "text-red-600" },
  Swift: { icon: SiSwift, color: "text-orange-500" },
  Kotlin: { icon: SiKotlin, color: "text-purple-600" },
  Dart: { icon: SiDart, color: "text-blue-500" },

  // Frameworks & Libraries
  React: { icon: SiReact, color: "text-cyan-400" },
  Vue: { icon: SiVuedotjs, color: "text-green-500" },
  Angular: { icon: SiAngular, color: "text-red-600" },
  Node: { icon: SiNodedotjs, color: "text-green-600" },
  Express: { icon: SiExpress, color: "text-gray-400" },
  Django: { icon: SiDjango, color: "text-green-700" },
  Flask: { icon: SiFlask, color: "text-gray-600" },
  Spring: { icon: SiSpringboot, color: "text-green-500" },
  Laravel: { icon: SiLaravel, color: "text-red-500" },
  "Ruby on Rails": { icon: SiRubyonrails, color: "text-red-600" },
  Flutter: { icon: SiFlutter, color: "text-blue-400" },

  // Databases & Cloud
  MongoDB: { icon: SiMongodb, color: "text-green-500" },
  PostgreSQL: { icon: SiPostgresql, color: "text-blue-400" },
  MySQL: { icon: SiMysql, color: "text-blue-500" },
  Redis: { icon: SiRedis, color: "text-red-500" },
  Firebase: { icon: SiFirebase, color: "text-yellow-500" },

  // DevOps & Tools
  Docker: { icon: SiDocker, color: "text-blue-400" },
  Kubernetes: { icon: SiKubernetes, color: "text-blue-600" },
  AWS: { icon: SiAwslambda, color: "text-yellow-500" },
  "Google Cloud": { icon: SiGooglecloud, color: "text-red-400" },

  // UI Frameworks
  Tailwind: { icon: SiTailwindcss, color: "text-cyan-400" },
  Bootstrap: { icon: SiBootstrap, color: "text-purple-500" },
  "Material-UI": { icon: SiMui, color: "text-blue-500" },
  "Chakra UI": { icon: SiChakraui, color: "text-teal-500" },

  // Game Development
  Unity: { icon: SiUnity, color: "text-gray-400" },
  "Unreal Engine": { icon: SiUnrealengine, color: "text-gray-500" },

  // Other
  Git: { icon: SiGit, color: "text-orange-500" },
  GitHub: { icon: SiGithub, color: "text-gray-400" },
  Linux: { icon: SiLinux, color: "text-yellow-600" },
  // Windows: { icon: SiWindows, color: "text-blue-500" },
  Android: { icon: SiAndroid, color: "text-green-500" }
};

const getTechIcon = (techName) => {
  // Normalize the tech name for comparison
  const normalizedName = techName.toLowerCase();

  // Find the matching tech stack entry
  const matchedTech = Object.entries(techStackIcons).find(([key]) =>
    normalizedName.includes(key.toLowerCase()) ||
    key.toLowerCase().includes(normalizedName)
  );

  return matchedTech ? matchedTech[1] : null;
};

const ProjectCard = ({ repo, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current || !isHovered) return;

      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const percentX = (e.clientX - centerX) / (rect.width / 2);
      const percentY = (e.clientY - centerY) / (rect.height / 2);

      rotateY.set(percentX * 5); // Max rotation of 5 degrees
      rotateX.set(percentY * -5); // Invert Y for natural feeling
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered, rotateX, rotateY]);

  const background = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      rgba(100, 255, 218, 0.1),
      transparent 80%
    )
  `;

  // Determine the tech stack color for the card accent
  const determineDominantColor = (languages) => {
    if (!languages || languages.length === 0) return "rgba(100, 255, 218, 0.5)";

    const firstLang = languages[0];
    const techData = getTechIcon(firstLang);
    if (!techData) return "rgba(100, 255, 218, 0.5)";

    // Extract color from the tech data, defaulting to secondary color
    let color = "rgba(100, 255, 218, 0.5)";
    if (techData.color.includes("yellow")) color = "rgba(234, 179, 8, 0.5)";
    if (techData.color.includes("red")) color = "rgba(239, 68, 68, 0.5)";
    if (techData.color.includes("blue")) color = "rgba(59, 130, 246, 0.5)";
    if (techData.color.includes("green")) color = "rgba(34, 197, 94, 0.5)";
    if (techData.color.includes("purple")) color = "rgba(168, 85, 247, 0.5)";
    if (techData.color.includes("orange")) color = "rgba(249, 115, 22, 0.5)";
    if (techData.color.includes("cyan")) color = "rgba(6, 182, 212, 0.5)";
    if (techData.color.includes("teal")) color = "rgba(20, 184, 166, 0.5)";

    return color;
  };

  const accentColor = determineDominantColor(repo.languages);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowDetails(false);
      }}
      onClick={() => setShowDetails(prev => !prev)}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.03 }}
      className="relative backdrop-blur-sm rounded-xl overflow-hidden h-full
               transition-all duration-300 group cursor-pointer"
    >
      {/* Card border gradient with animated glow */}
      <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-b from-tertiary/50 to-transparent">
        <motion.div
          className="absolute inset-0 rounded-xl bg-tertiary/70"
          animate={{
            boxShadow: isHovered
              ? [
                  "0 0 0px rgba(100, 255, 218, 0)",
                  "0 0 15px rgba(100, 255, 218, 0.3)",
                  "0 0 5px rgba(100, 255, 218, 0.2)",
                ]
              : "0 0 0px rgba(100, 255, 218, 0)"
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Card content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Card pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background }}
        />

        {/* Color accent at top of card with animated pulse */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2"
          style={{ backgroundColor: accentColor }}
          animate={isHovered ? {
            opacity: [0.7, 1, 0.7],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Folder icon and external links */}
        <div className="flex justify-between items-center mb-6">
          <motion.div
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/10 text-secondary"
            whileHover={{ rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(20px)",
            }}
          >
            <FiFolder className="text-2xl" />
          </motion.div>
          <div className="flex gap-4">
            {repo.html_url && (
              <motion.a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors"
                whileHover={{ y: -3, rotate: 5, scale: 1.2 }}
                whileTap={{ scale: 0.92 }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(20px)",
                }}
              >
                <FiGithub className="text-xl" />
              </motion.a>
            )}
            {repo.homepage && (
              <motion.a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors"
                whileHover={{ y: -3, rotate: -5, scale: 1.2 }}
                whileTap={{ scale: 0.92 }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(20px)",
                }}
              >
                <FiExternalLink className="text-xl" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Project name and description */}
        <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-secondary transition-colors line-clamp-1"
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(10px)",
            }}
        >
          {repo.name.split('-').join(' ').split('_').join(' ')}
        </h3>

        <motion.div
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(5px)",
          }}
          animate={showDetails ? { height: "auto", marginBottom: "1.5rem" } : {}}
        >
          <p className={`text-textSecondary text-sm ${showDetails ? "" : "line-clamp-3 h-[4.5rem]"}`}>
            {repo.description || "A project showcasing my development skills and expertise."}
          </p>

          {showDetails && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 text-sm text-textSecondary/80"
            >
              <div className="flex flex-col gap-1.5">
                {repo.language && (
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-secondary">Main language:</span>
                    <span>{repo.language}</span>
                  </div>
                )}
                {repo.size && (
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-secondary">Size:</span>
                    <span>{repo.size > 1000 ? `${(repo.size/1000).toFixed(1)} MB` : `${repo.size} KB`}</span>
                  </div>
                )}
                {repo.created_at && (
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-secondary">Created:</span>
                    <span>{new Date(repo.created_at).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Tech Stack Icons */}
        <div className="mb-6 mt-auto">
          <div className="flex flex-wrap gap-3"
               style={{
                 transformStyle: "preserve-3d",
                 transform: "translateZ(15px)",
               }}
          >
            {repo.languages.map((lang) => {
              const techData = getTechIcon(lang);
              if (!techData) return null;

              const { icon: Icon, color } = techData;
              return (
                <motion.div
                  key={lang}
                  className="group relative"
                  title={lang}
                  whileHover={{ y: -4, scale: 1.2, rotate: 5 }}
                  initial={{ y: 0 }}
                >
                  <Icon
                    className={`text-xl ${color} transition-transform drop-shadow-md`}
                  />
                  <motion.span
                    className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs bg-tertiary/90 text-white px-2 py-1 rounded opacity-0 pointer-events-none"
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 5 }}
                    initial={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {lang}
                  </motion.span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Project Stats */}
        <div className="flex items-center gap-4 text-xs text-textSecondary/80 pt-4 border-t border-tertiary/50"
             style={{
               transformStyle: "preserve-3d",
               transform: "translateZ(5px)",
             }}
        >
          <motion.div
            className="flex items-center gap-1"
            whileHover={{ scale: 1.1, color: "#f0c538" }}
          >
            <FiStar className="text-secondary" />
            <span>{repo.stargazers_count}</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-1"
            whileHover={{ scale: 1.1, color: "#64ffda" }}
          >
            <FiGitBranch className="text-secondary" />
            <span>{repo.forks_count}</span>
          </motion.div>
          <span className="ml-auto text-xs">
            {new Date(repo.updated_at).toLocaleDateString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { repos, isLoading, error } = useGithubRepos('Aayush-Duhan');
  const containerRef = useRef(null);

  const [activeTab, setActiveTab] = useState('all');

  // Filtered repos based on active tab
  const filteredRepos = useMemo(() => {
    if (activeTab === 'all') return repos;

    return repos.filter(repo => {
      const languages = repo.languages || [];
      if (activeTab === 'web') {
        return languages.some(lang =>
          ['javascript', 'typescript', 'react', 'vue', 'angular', 'html', 'css', 'node'].some(
            webTech => lang.toLowerCase().includes(webTech)
          )
        );
      }
      if (activeTab === 'mobile') {
        return languages.some(lang =>
          ['react native', 'flutter', 'android', 'ios', 'swift', 'kotlin'].some(
            mobileTech => lang.toLowerCase().includes(mobileTech)
          )
        );
      }
      if (activeTab === 'backend') {
        return languages.some(lang =>
          ['python', 'java', 'c#', 'node', 'express', 'django', 'spring', 'php'].some(
            backendTech => lang.toLowerCase().includes(backendTech)
          )
        );
      }
      return true;
    });
  }, [repos, activeTab]);

  const tabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'backend', label: 'Backend' },
  ];

  if (isLoading) {
    return (
      <section id="work" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 sm:px-16">
          <div className="text-center">
            <h2 className="section-heading">Projects</h2>
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin h-12 w-12 border-4 border-secondary border-t-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="work" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 sm:px-16">
          <div className="text-center">
            <h2 className="section-heading">Projects</h2>
            <p className="text-red-500">Error loading projects: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="work" ref={containerRef} className="section-container relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 left-20 w-48 h-48 bg-secondary/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

        {/* Particle effects */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
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
                y: [0, Math.random() > 0.5 ? 20 : -20],
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

      {/* Section content */}
      <div className="section-content max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >

            <motion.h2
              className="text-3xl md:text-4xl font-bold relative"
            >
              Featured Projects
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-secondary"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-textSecondary mt-4 max-w-2xl mx-auto"
            >
              Explore my recent work and personal projects
            </motion.p>
          </motion.div>
        </div>

        {/* Filter tabs */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-10 md:mb-12 flex-wrap gap-1.5 sm:gap-2 md:gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              className={`
                px-2 py-1 sm:px-3 md:px-4 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300
                ${activeTab === tab.id
                  ? 'bg-secondary/20 text-secondary border-secondary'
                  : 'bg-tertiary/20 text-textSecondary hover:bg-tertiary/40 border-transparent'}
                border backdrop-blur-sm
              `}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xs sm:text-sm">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Project grid with empty state */}
        {filteredRepos.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredRepos.map((repo, index) => (
              <ProjectCard key={repo.id} repo={repo} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="flex flex-col items-center justify-center py-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 mb-6 flex items-center justify-center rounded-full bg-tertiary/20">
              <FiFolder className="text-4xl text-secondary/70" />
            </div>
            <h3 className="text-xl font-medium text-textPrimary mb-2">No projects found</h3>
            <p className="text-textSecondary max-w-md">
              There are no projects matching your current filter. Try selecting a different category.
            </p>
          </motion.div>
        )}

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Aayush-Duhan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn inline-flex items-center gap-1 sm:gap-2 !px-4 !py-2 sm:!px-5 md:!px-6 sm:!py-2.5 md:!py-3 text-xs sm:text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="btn-glow" />
            <span className="btn-text">
              <span>View More Projects</span>
              <FiArrowUpRight className="text-sm sm:text-base md:text-lg" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
