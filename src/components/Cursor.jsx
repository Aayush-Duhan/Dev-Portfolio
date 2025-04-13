import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  // Simplified cursor that tracks mouse directly without velocity calculations
  useEffect(() => {
    const mouseMove = (e) => {
      // Update position immediately without any delay
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });

      // Simple edge detection
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const margin = 10;
      
      setIsHidden(
        e.clientX <= margin || 
        e.clientX >= viewportWidth - margin || 
        e.clientY <= margin || 
        e.clientY >= viewportHeight - margin
      );
    };

    const checkPointer = () => {
      const hoveredElement = document.elementFromPoint(mousePosition.x, mousePosition.y);
      const isClickable = hoveredElement?.closest('a, button, input, textarea, [role="button"]');
      setIsPointer(!!isClickable);
    };
    
    const handleMouseDown = () => {
      setIsClicking(true);
    };
    
    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    // Add event listeners
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', checkPointer);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', checkPointer);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mousePosition.x, mousePosition.y]);
  
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 10000 }}>
      {/* Cyberpunk targeting reticle - optimized for performance */}
      <motion.div 
        className="cursor-reticle"
        style={{ 
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          opacity: isHidden ? 0 : 1,
          scale: isClicking ? 0.9 : isPointer ? 1.1 : 1,
          zIndex: 10000
        }}
        initial={false}
        transition={{
          scale: { type: 'spring', stiffness: 1000, damping: 50 },
          opacity: { duration: 0.1 }
        }}
      >
        {/* Reticle elements */}
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer circle - simplified animation */}
          <circle 
            cx="20" cy="20" r="18" 
            stroke={isPointer ? "#64FFDA" : "#FFFFFF"} 
            strokeWidth={isPointer ? 1.5 : 1}
            strokeOpacity={0.6}
            strokeDasharray="4 2"
          />
          
          {/* Inner circle - simplified */}
          <circle 
            cx="20" cy="20" r="4" 
            stroke={isPointer ? "#64FFDA" : "#FFFFFF"} 
            strokeWidth="1.5"
            fill={isPointer ? "rgba(100, 255, 218, 0.1)" : "rgba(255, 255, 255, 0.05)"}
          />
          
          {/* Crosshair lines */}
          <line x1="20" y1="10" x2="20" y2="15" stroke={isPointer ? "#64FFDA" : "#FFFFFF"} strokeWidth="1" />
          <line x1="20" y1="25" x2="20" y2="30" stroke={isPointer ? "#64FFDA" : "#FFFFFF"} strokeWidth="1" />
          <line x1="10" y1="20" x2="15" y2="20" stroke={isPointer ? "#64FFDA" : "#FFFFFF"} strokeWidth="1" />
          <line x1="25" y1="20" x2="30" y2="20" stroke={isPointer ? "#64FFDA" : "#FFFFFF"} strokeWidth="1" />
          
          {/* Corner brackets - simplified */}
          <path 
            d="M8 12 L8 8 L12 8" 
            stroke={isPointer ? "#64FFDA" : "#FFFFFF"} 
            strokeWidth="1"
            strokeOpacity={isPointer ? 0.8 : 0.6}
          />
          <path 
            d="M32 12 L32 8 L28 8" 
            stroke={isPointer ? "#64FFDA" : "#FFFFFF"} 
            strokeWidth="1"
            strokeOpacity={isPointer ? 0.8 : 0.6}
          />
          <path 
            d="M8 28 L8 32 L12 32" 
            stroke={isPointer ? "#64FFDA" : "#FFFFFF"} 
            strokeWidth="1"
            strokeOpacity={isPointer ? 0.8 : 0.6}
          />
          <path 
            d="M32 28 L32 32 L28 32" 
            stroke={isPointer ? "#64FFDA" : "#FFFFFF"} 
            strokeWidth="1"
            strokeOpacity={isPointer ? 0.8 : 0.6}
          />
        </svg>
      </motion.div>
      
      {/* Click pulse effect - simplified */}
      <AnimatePresence>
        {isClicking && (
          <motion.div
            key="click-pulse"
            initial={{ 
              left: mousePosition.x - 15, 
              top: mousePosition.y - 15, 
              scale: 0.8,
              opacity: 0.8,
              width: 30,
              height: 30,
              borderRadius: '50%',
              position: 'absolute',
              boxShadow: `0 0 0 1px ${isPointer ? '#64FFDA' : '#FFFFFF'}`
            }}
            animate={{ 
              scale: 1.2,
              opacity: 0,
              boxShadow: `0 0 10px 1px ${isPointer ? '#64FFDA' : '#FFFFFF'}`
            }}
            exit={{ 
              scale: 0,
              opacity: 0 
            }}
            transition={{ 
              duration: 0.3
            }}
            style={{ zIndex: 9999 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cursor;
