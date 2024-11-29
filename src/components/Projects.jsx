import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiGitBranch } from 'react-icons/fi';
import {
  SiJavascript, SiTypescript, SiPython, SiOpenjdk, SiCplusplus,
  SiHtml5, SiCss3, SiReact, SiVuedotjs, SiAngular,
  SiNodedotjs, SiExpress, SiDjango, SiFlask, SiSpringboot,
  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiFirebase,
  SiDocker, SiKubernetes, SiAwslambda, SiGooglecloud,
  SiTailwindcss, SiBootstrap, SiMui, SiChakraui,
  SiGit, SiGithub, SiLinux, SiWindows, SiAndroid,
  SiPhp, SiLaravel, SiRuby, SiRubyonrails, SiSwift,
  SiKotlin, SiDart, SiFlutter, SiUnity, SiUnrealengine
} from 'react-icons/si';
import useGithubRepos from '../hooks/useGithubRepos';

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
  Windows: { icon: SiWindows, color: "text-blue-500" },
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

const Projects = () => {
  const { repos, isLoading, error } = useGithubRepos('Aayush-Duhan');

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 sm:px-16">
          <div className="text-center">
            <h2 className="section-heading">Projects</h2>
            <p className="text-textSecondary animate-pulse">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-primary">
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
    <section id="projects" className="section-container">
      <div className="section-background" />
      
      <div className="section-content">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Featured Projects
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subheading"
        >
          Here are some of my notable projects that showcase my skills and experience
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group hover:transform hover:scale-[1.01] transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-secondary group-hover:text-secondary/90 transition-colors">
                  {repo.name}
                </h3>
                <div className="flex gap-4">
                  {repo.html_url && (
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textSecondary hover:text-secondary transition-colors"
                    >
                      <FiGithub className="text-xl" />
                    </a>
                  )}
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textSecondary hover:text-secondary transition-colors"
                    >
                      <FiExternalLink className="text-xl" />
                    </a>
                  )}
                </div>
              </div>

              {/* Tech Stack Icons */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-3">
                  {repo.languages.map((lang) => {
                    const techData = getTechIcon(lang);
                    if (!techData) return null;
                    
                    const { icon: Icon, color } = techData;
                    return (
                      <div
                        key={lang}
                        className="group relative"
                        title={lang}
                      >
                        <Icon 
                          className={`text-2xl ${color} transition-transform group-hover:scale-110`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Project Stats */}
              <div className="flex items-center gap-4 text-sm text-textSecondary">
                <div className="flex items-center gap-1">
                  <FiStar className="text-secondary" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiGitBranch className="text-secondary" />
                  <span>{repo.forks_count}</span>
                </div>
                <span className="text-xs">
                  Updated: {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Aayush-Duhan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <span>View More Projects</span>
            <FiExternalLink />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
