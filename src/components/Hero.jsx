import { motion } from 'framer-motion';
import { FaTerminal, FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaXTwitter, FaChevronDown } from 'react-icons/fa6';
import { HiOutlineCode, HiOutlineDeviceMobile, HiOutlineDesktopComputer } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Float, Sparkles } from '@react-three/drei';
import { Suspense, useState } from 'react';
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
  const [hoverTech, setHoverTech] = useState(null);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/Aayush-Duhan',
      color: '#6e5494'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/aayush-duhan-245167253/',
      color: '#0077b5'
    },
    {
      name: 'X',
      icon: FaXTwitter,
      href: 'https://x.com/aayush_duhan_01',
      color: '#1DA1F2'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:aayushduhan82@gmail.com',
      color: '#64ffda'
    }
  ];

  const techStack = [
    { name: 'Web', icon: HiOutlineCode, color: '#64ffda' },
    { name: 'Mobile', icon: HiOutlineDeviceMobile, color: '#9580ff' },
    { name: 'Desktop', icon: HiOutlineDesktopComputer, color: '#ff80bf' }
  ];

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  };

  return (
    <section className="section-container pt-16">
      {/* Background Effects - reduced size */}
      <div className="section-background">
        {/* Animated Gradient Blobs - reduced size */}
        <motion.div
          className="absolute top-20 left-0 w-48 h-48 bg-secondary/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, 20, 0],
            y: [0, 10, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-0 w-48 h-48 bg-blue-400/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#64ffda10,transparent)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

        {/* Reduced particle effects */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
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

      <div className="section-content">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-10 h-screen flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full">
            {/* Left Column - Enhanced Text Content - Takes 3/5 of width on large screens */}
            <div className="z-10 relative lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-2 text-secondary font-mono text-xs sm:text-sm mb-3
                        backdrop-blur-md bg-primary/40 w-fit px-3 py-1.5 rounded-full
                        border border-secondary/30 shadow-lg shadow-secondary/5"
              >
                <FaTerminal className="text-sm animate-pulse" />
                <span>Hello, World!</span>
              </motion.div>

              <div className="mb-2">
                <motion.h1
                  custom={1}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-1 text-textPrimary"
                >
                  I'm <span className="gradient-text">Aayush</span>
                </motion.h1>

                <motion.div
                  custom={2}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="h-[30px] sm:h-[36px] md:h-[40px] flex items-center mb-3"
                >
                  <TypeAnimation
                    sequence={[
                      'Web Developer',
                      1500,
                      'UI/UX Designer',
                      1500,
                      'Problem Solver',
                      1500,
                      'Creative Coder',
                      1500,
                    ]}
                    wrapper="h2"
                    speed={40}
                    repeat={Infinity}
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-secondary"
                  />
                </motion.div>
              </div>

              <motion.p
                custom={3}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-base md:text-lg text-textSecondary/80 mb-4 max-w-lg leading-relaxed"
              >
                I build exceptional and accessible digital experiences
                for all Platforms. Focused on creating intuitive, user-centered
                products that solve real-world problems.
              </motion.p>

              {/* Tech Stack Pills - more compact */}
              <motion.div
                custom={4}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-2 mb-5"
              >
                {techStack.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setHoverTech(tech.name)}
                    onHoverEnd={() => setHoverTech(null)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                              border border-secondary/20 bg-primary/50 backdrop-blur-sm
                              transition-all duration-300"
                    style={{
                      boxShadow: hoverTech === tech.name ? `0 0 8px ${tech.color}40` : 'none',
                      borderColor: hoverTech === tech.name ? tech.color : 'rgba(100, 255, 218, 0.2)'
                    }}
                  >
                    <tech.icon
                      className="text-sm"
                      style={{ color: tech.color }}
                    />
                    <span className="text-xs font-medium text-textPrimary">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links - more compact */}
              <motion.div
                custom={5}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="flex gap-3 mb-5"
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-textSecondary hover:text-white
                             backdrop-blur-md bg-primary/40 p-2.5 rounded-full
                             transition-all duration-300
                             border border-secondary/20 shadow-md"
                    whileHover={{
                      y: -3,
                      boxShadow: `0 4px 12px ${link.color}30`,
                      borderColor: link.color,
                      scale: 1.05
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    <link.icon />
                  </motion.a>
                ))}
              </motion.div>

              {/* Call-to-Action Buttons - more compact */}
              <motion.div
                custom={6}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row gap-3"
              >
                <motion.a
                  href="#work"
                  className="neon-btn !px-4 !py-2 text-sm md:text-base"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="btn-glow" />
                  <span className="btn-text">
                    <span>Explore My Work</span>
                    <FaArrowRight className="transition-transform duration-300" />
                  </span>
                </motion.a>

              </motion.div>
            </div>

            {/* Right Column - 3D Model - Takes 2/5 of width on large screens */}
            <div className="hidden lg:block lg:col-span-2 h-[450px] relative mt-4">
              {/* Container with frame styling */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/5 z-0 rounded-xl"></div>

              {/* 3D Canvas Container */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 z-10 rounded-xl overflow-hidden backdrop-blur-sm bg-primary/10"
                style={{ borderRadius: '0.75rem' }} // Fixed border radius to match outside
              >
                {/* Canvas now fills the entire container */}
                <Canvas
                  camera={{
                    position: [0, 0, 10],
                    fov: 25,
                    near: 0.1,
                    far: 1000
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '0.75rem'
                  }}
                  shadows
                >
                  <color attach="background" args={['#020a13']} />
                  <fog attach="fog" args={['#020a13', 5, 20]} />
                  <Suspense fallback={<CanvasLoader />}>
                    {/* Enhanced lighting - adjusted for centered model */}
                    <ambientLight intensity={0.3} />
                    <directionalLight
                      position={[5, 5, 5]}
                      intensity={0.6}
                      color="#64ffda"
                      castShadow
                      shadow-mapSize-width={1024}
                      shadow-mapSize-height={1024}
                    />
                    <pointLight position={[-5, -5, -5]} intensity={0.2} color="#9580ff" />
                    <pointLight position={[0, 3, 5]} intensity={0.3} color="#ff80bf" />
                    <spotLight
                      position={[0, 5, 0]}
                      angle={0.3}
                      penumbra={1}
                      intensity={0.4}
                      color="white"
                      castShadow
                    />

                    {/* Centered model setup */}
                    <group position={[0, -0.5, 0]}>
                      {/* Environment reflection positioned relative to model */}
                      <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                        <planeGeometry args={[50, 50]} />
                        <meshStandardMaterial
                          color="#020a13"
                          metalness={0.8}
                          roughness={0.5}
                          envMapIntensity={0.5}
                        />
                      </mesh>

                      {/* Perfectly centered floating animation */}
                      <Float
                        speed={1.5}
                        rotationIntensity={0.4}
                        floatIntensity={0.5}
                      >
                        <group
                          position={[0, 0.5, 0]}
                          rotation={[0, 0, 0]}
                          scale={1.1}
                        >
                          <NameInitial castShadow receiveShadow />
                        </group>
                      </Float>
                    </group>

                    {/* Enhanced particle effects positioned for balanced look */}
                    <Sparkles
                      count={80}
                      scale={10}
                      size={0.8}
                      speed={0.2}
                      color="#64ffda"
                    />
                    <Sparkles
                      count={40}
                      scale={8}
                      size={0.6}
                      speed={0.1}
                      color="#9580ff"
                      position={[2, 0, -2]}
                    />
                    <Sparkles
                      count={30}
                      scale={6}
                      size={0.5}
                      speed={0.3}
                      color="#ff80bf"
                      position={[-2, 0, 2]}
                    />

                    {/* Improved camera controls with better positioning */}
                    <OrbitControls
                      enableZoom={false}
                      autoRotate
                      autoRotateSpeed={1.2}
                      enablePan={false}
                      minPolarAngle={Math.PI / 2.2}
                      maxPolarAngle={Math.PI / 1.8}
                      enableDamping
                      dampingFactor={0.05}
                    />
                  </Suspense>
                </Canvas>

                {/* Tech indicators */}
                <motion.div
                  className="absolute top-3 right-3 flex items-center gap-1.5 text-xs text-secondary font-mono px-2 py-1 rounded-md bg-primary/60 backdrop-blur-md border border-secondary/20"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
                  <span>three.js</span>
                </motion.div>
              </motion.div>

              {/* Frame decorations - now overlaid on top for better consistency */}
              <div className="absolute inset-0 border border-secondary/10 rounded-xl z-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-secondary/5 to-transparent"></div>
                <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-secondary/5 to-transparent"></div>
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-secondary"></div>
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-secondary"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-secondary"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-secondary"></div>
              </div>

              {/* Edge glow effect - moved outside the canvas container */}
              <div className="absolute inset-0 rounded-xl pointer-events-none z-10">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0 rounded-xl opacity-30 blur-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - moved up slightly */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1.2, duration: 0.5 }
          }}
        >
          <span className="text-textSecondary text-xs font-mono mb-1">Scroll</span>
          <motion.div
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaChevronDown className="text-secondary text-lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
