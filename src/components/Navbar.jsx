import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-primary/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl sm:text-2xl font-bold text-textPrimary hover:text-secondary transition-colors"
          >
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#contact" className="nav-link">Contact</a>
            <Link 
              to="/resume" 
              className="btn-primary px-4 py-2 text-sm lg:px-6 lg:py-3 lg:text-base"
            >
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-textSecondary hover:text-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-primary/95 backdrop-blur-sm"
            >
              <div className="flex flex-col space-y-4 py-4">
                <a 
                  href="#about" 
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#skills" 
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  Skills
                </a>
                <a 
                  href="#work" 
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  Work
                </a>
                <a 
                  href="#contact" 
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
                <Link 
                  to="/resume" 
                  className="mobile-nav-link text-secondary border-2 border-secondary rounded-lg px-4 py-2 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Resume
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
