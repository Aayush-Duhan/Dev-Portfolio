import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX, HiArrowRight } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const location = useLocation();

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const heroHeight = window.innerHeight; // Assuming hero is full viewport height

      // Check if scrolled past navbar threshold
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check if scrolled past hero section
      if (offset > heroHeight - 100) { // Subtract navbar height
        setPastHero(true);
      } else {
        setPastHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if section is active
  const isActive = (section) => {
    if (location.hash === section) return true;
    // If no hash, first section is active
    if (location.hash === '' && section === '#about') return true;
    return false;
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'py-2 bg-primary/90 backdrop-blur-md shadow-lg shadow-secondary/5'
        : 'py-4 bg-primary/70 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between h-12 relative">
          {/* Empty div for layout balance */}
          <div className="w-[100px]"></div>
          {/* Centered Name - Only visible after scrolling past hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={pastHero ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.5
            }}
            className={`absolute left-0 right-0 mx-auto w-fit transition-all duration-500 ${pastHero ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <Link
              to="/"
              className="text-xl sm:text-2xl font-bold relative"
            >
              <span className="bg-gradient-to-r from-secondary via-secondary/80 to-blue-400
                          text-transparent bg-clip-text animate-gradient">
                Aayush Duhan
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-secondary to-blue-400"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </Link>
          </motion.div>

          {/* Navigation Links - Only visible before scrolling past hero */}
          <div className={`hidden md:flex items-center space-x-2 lg:space-x-8 transition-all duration-500 absolute left-1/2 transform -translate-x-1/2 ${pastHero ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            {['#about', '#skills', '#work', '#contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <a
                  href={item}
                  className={`group relative px-3 py-2 ${isActive(item) ? 'text-secondary' : 'nav-link text-textSecondary'}`}
                >
                  <span className="relative z-10">
                    {item.substring(1).charAt(0).toUpperCase() + item.substring(2)}
                    {isActive(item) && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary"
                      />
                    )}
                  </span>
                  {!isActive(item) && (
                    <span className="absolute bottom-0 left-0 w-full h-full bg-secondary/5
                                  scale-0 group-hover:scale-100 rounded transition-transform
                                  duration-300 origin-bottom" />
                  )}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Resume Button - Always visible */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="hidden md:block transition-all duration-500 ml-auto"
          >
            <Link
              to="/resume"
              className="relative inline-flex items-center justify-center px-4 py-2 text-sm
                       lg:px-6 lg:py-3 lg:text-base overflow-hidden group
                       bg-primary/50 border border-secondary/30 rounded-md"
            >
              {/* Text and Icon */}
              <span className="relative z-10 text-textPrimary group-hover:text-secondary
                             transition-colors duration-300 flex items-center gap-2">
                Resume
                <motion.span
                  initial={{ x: -5, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <HiArrowRight className="w-4 h-4" />
                </motion.span>
              </span>

              {/* Sliding Background */}
              <motion.div
                className="absolute inset-0 bg-secondary/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />

              {/* Animated Borders */}
              <div className="absolute inset-0 overflow-hidden rounded-md">
                <motion.div
                  className="absolute inset-x-0 h-[1px] w-full bg-gradient-to-r from-transparent via-secondary to-transparent top-0"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute inset-y-0 w-[1px] h-full bg-gradient-to-b from-transparent via-secondary to-transparent right-0"
                  animate={{
                    y: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5
                  }}
                />
                <motion.div
                  className="absolute inset-x-0 h-[1px] w-full bg-gradient-to-r from-transparent via-secondary to-transparent bottom-0"
                  animate={{
                    x: ['100%', '-100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                  }}
                />
                <motion.div
                  className="absolute inset-y-0 w-[1px] h-full bg-gradient-to-b from-transparent via-secondary to-transparent left-0"
                  animate={{
                    y: ['100%', '-100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1.5
                  }}
                />
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-70 duration-300
                           bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0
                           blur-sm -z-10 rounded-lg" />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-textSecondary hover:text-secondary relative z-50 transition-all duration-500 ml-auto"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiX className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMenuAlt3 className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-primary/95 backdrop-blur-lg border-t border-secondary/10 mt-4 rounded-b-xl"
          >
            <motion.div
              className="flex flex-col py-4"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {['#about', '#skills', '#work', '#contact'].map((item) => (
                <motion.a
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 }
                  }}
                  href={item}
                  className={`relative overflow-hidden px-4 py-2 ${
                    isActive(item) ? 'text-secondary' : 'mobile-nav-link'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">
                    {item.substring(1).charAt(0).toUpperCase() + item.substring(2)}
                  </span>
                  {isActive(item) && (
                    <motion.span
                      layoutId="activeMobileSection"
                      className="absolute left-0 top-0 h-full w-1 bg-secondary"
                    />
                  )}
                  {!isActive(item) && (
                    <span className="absolute inset-0 bg-secondary/5
                                  scale-0 hover:scale-100 transition-transform
                                  duration-300 origin-left" />
                  )}
                </motion.a>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
                className="px-4 pt-4"
              >
                <Link
                  to="/resume"
                  className="relative w-full inline-flex items-center justify-center px-4 py-3
                           overflow-hidden group bg-primary/50 border border-secondary/30 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10 text-textPrimary group-hover:text-secondary
                                 transition-colors duration-300 flex items-center gap-2">
                    Resume
                    <motion.span
                      animate={{
                        x: [0, 4, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <HiArrowRight className="w-4 h-4" />
                    </motion.span>
                  </span>

                  {/* Subtle Animated Background */}
                  <motion.div
                    className="absolute inset-0 rounded-md overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/10 to-secondary/0"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
