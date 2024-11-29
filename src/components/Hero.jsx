import { motion } from 'framer-motion';
import { FiTerminal, FiGithub, FiLinkedin, FiMail, FiArrowRight, FiTwitter, FiChevronDown } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { Suspense } from 'react';
import NameInitial from './3d/NameInitial';

const CanvasLoader = () => {
  return (
    <Html center>
      <div className="flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-secondary border-t-transparent rounded-full animate-spin" />
      </div>
    </Html>
  );
};

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      href: 'https://github.com/yourusername'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      href: 'https://linkedin.com/in/yourusername'
    },
    {
      name: 'Twitter',
      icon: FiTwitter,
      href: 'https://twitter.com/yourusername'
    },
    {
      name: 'Email',
      icon: FiMail,
      href: 'mailto:your.email@example.com'
    }
  ];

  return (
    <section className="section-container">
      {/* Enhanced Background Effects */}
      <div className="section-background">
        {/* Decorative Elements */}
        <motion.div 
          className="absolute top-20 left-0 w-56 h-56 bg-secondary/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-0 w-56 h-56 bg-secondary/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-gradient-radial from-secondary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_50%,#64ffda1a,transparent)] animate-pulse" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="section-content">
        <div className="max-w-6xl mx-auto px-6 sm:px-16 min-h-[calc(100vh-6rem)] flex items-center relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {/* Left Column - Enhanced Text Content */}
            <div className="z-10 relative">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 text-secondary font-mono text-sm mb-0
                        backdrop-blur-sm bg-primary/30 w-fit px-3 py-1.5 rounded-full
                        border border-secondary/20 shadow-lg shadow-secondary/10"
              >
                <FiTerminal className="text-base animate-pulse" />
                <span>Hello World!</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-0 h-[60px] sm:h-[80px] md:h-[120px] lg:h-[140px] flex items-center"
              >
                <TypeAnimation
                  sequence={[
                    'I\'m Aayush',
                    1000,
                    'I Build Web Apps',
                    1000,
                    'I Create Solutions',
                    1000,
                    'I Love Coding',
                    1000,
                  ]}
                  wrapper="h1"
                  speed={50}
                  repeat={Infinity}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text whitespace-nowrap"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl text-textSecondary mb-4"
              >
                Turning Ideas into Digital Reality
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-sm sm:text-base text-textSecondary max-w-lg mb-6 leading-relaxed"
              >
                I'm a passionate full-stack developer specializing in building exceptional 
                digital experiences. Currently focused on creating accessible, 
                human-centered products at VIT Chennai.
              </motion.p>

              {/* Enhanced Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-3 mb-6"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-textSecondary hover:text-secondary 
                             backdrop-blur-sm bg-primary/30 p-2 rounded-lg
                             transition-all duration-300 hover:-translate-y-1
                             border border-secondary/20 shadow-lg shadow-secondary/10
                             hover:shadow-xl hover:shadow-secondary/20"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <link.icon />
                  </motion.a>
                ))}
              </motion.div>

              {/* Enhanced Call-to-Action Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <motion.a
                  href="#work"
                  className="neon-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="btn-glow" />
                  <span className="btn-text">
                    <span>View My Projects</span>
                    <FiArrowRight className="transition-transform duration-500" />
                  </span>
                </motion.a>
                <motion.a
                  href="#contact"
                  className="btn-secondary group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="relative z-10 flex items-center gap-2 transition-transform duration-500">
                    <span className="group-hover:translate-x-[-2px]">Let's Connect</span>
                    <FiMail className="group-hover:rotate-12 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-all duration-500" />
                  </span>
                </motion.a>
              </motion.div>
            </div>

            {/* Right Column - 3D Model with Enhanced Lighting */}
            <div className="hidden lg:block h-[500px] relative">
              <Canvas
                camera={{ 
                  position: [0, 0, 12],
                  fov: 25,
                  near: 0.1,
                  far: 1000
                }}
                style={{ 
                  background: 'transparent',
                }}
              >
                <Suspense fallback={<CanvasLoader />}>
                  <ambientLight intensity={0.6} />
                  <directionalLight position={[1, 1, 1]} intensity={0.9} />
                  <pointLight position={[-1, -1, -1]} intensity={0.4} />
                  <NameInitial />
                  <OrbitControls 
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={4}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiChevronDown className="text-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
