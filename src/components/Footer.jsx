import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'Email',
      icon: <HiOutlineMail className="text-lg" />,
      href: 'mailto:aayushduhan@gmail.com',
    },
    {
      name: 'GitHub',
      icon: <SiGithub className="text-lg" />,
      href: 'https://github.com/Aayush-Duhan',
    },
    {
      name: 'LinkedIn',
      icon: <SiLinkedin className="text-lg" />,
      href: 'https://www.linkedin.com/in/aayush-duhan-3201aa1ab/',
    }
  ];

  return (
    <footer className="relative py-12 px-6 overflow-hidden bg-primary/60 backdrop-blur-md border-t border-tertiary/30">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 bottom-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute right-1/4 bottom-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        {/* Particle effects */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-secondary/40 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-tertiary/20 pb-10 mb-8">
          {/* Brand */}
          <div className="flex flex-col">
            <motion.a 
              href="#home"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="logo font-bold text-2xl mb-3 text-white inline-block"
            >
              Aayush<span className="text-secondary">.</span>
            </motion.a>
            <p className="text-textSecondary text-sm max-w-xs">
              Crafting exceptional digital experiences with creativity, precision, and cutting-edge technologies.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-secondary mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="text-textSecondary hover:text-secondary transition-colors duration-300 text-sm flex items-center gap-1.5"
                    whileHover={{ x: 5 }}
                  >
                    <span className="opacity-0 group-hover:opacity-100">→</span>
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-secondary mb-4 font-semibold">Connect</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-tertiary/50 text-textSecondary
                           hover:bg-secondary/20 hover:text-secondary transition-all duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-textSecondary text-sm">
              Available for freelance work and full-time positions.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-textSecondary text-sm mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © {currentYear} Aayush Duhan. All rights reserved.
          </motion.p>
          
          <motion.p 
            className="text-textSecondary text-sm flex items-center gap-1.5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Designed & Built with <FiHeart className="text-red-400 animate-pulse" /> by Aayush Duhan
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 