import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall page scroll progress
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = scrollTop / scrollHeight;
      
      setScrollProgress(scrollPercentage);
    };
    
    // Initial call to set progress on component mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden lg:block fixed left-8 top-1/2 transform -translate-y-1/2 w-1.5 h-80 bg-tertiary/30 rounded-full z-50">
      <motion.div 
        className="w-full bg-secondary rounded-full"
        style={{ height: `${scrollProgress * 100}%` }}
        initial={{ height: '0%' }}
        animate={{ height: `${scrollProgress * 100}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

export default ScrollProgress;
