import { motion, useMotionValue } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { FiArrowUpRight, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';
import { useState, useRef } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const formRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const resetTimeout = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    mouseX.set(x);
    mouseY.set(y);

    if (resetTimeout.current) {
      clearTimeout(resetTimeout.current);
    }
  };

  const handleMouseLeave = () => {
    resetTimeout.current = setTimeout(() => {
      mouseX.set(0.5);
      mouseY.set(0.5);
    }, 500);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');

    try {
      const subject = `Portfolio Contact from ${formState.name}`;
      const body = `Name: ${formState.name}\n\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
      const mailtoLink = `mailto:aayushduhan82@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.href = mailtoLink;
      setFormState({ name: '', email: '', message: '' });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 1000);
    } catch (error) {
      setFormError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <HiOutlineMail className="text-2xl" />,
      href: 'mailto:aayushduhan82@gmail.com',
      label: 'aayushduhan82@gmail.com',
      color: 'hover:text-red-400',
      hoverBg: 'group-hover:bg-red-400/10'
    },
    {
      name: 'GitHub',
      icon: <SiGithub className="text-2xl" />,
      href: 'https://github.com/Aayush-Duhan',
      label: '@Aayush-Duhan',
      color: 'hover:text-purple-400',
      hoverBg: 'group-hover:bg-purple-400/10'
    },
    {
      name: 'LinkedIn',
      icon: <SiLinkedin className="text-2xl" />,
      href: 'https://www.linkedin.com/in/aayush-duhan-245167253/',
      label: 'Aayush Duhan',
      color: 'hover:text-blue-400',
      hoverBg: 'group-hover:bg-blue-400/10'
    }
  ];

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section
      id="contact"
      className="section-container relative py-20 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"
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
          className="absolute bottom-40 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
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
              Get In Touch
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
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-tertiary/20 backdrop-blur-md rounded-2xl p-6 border border-tertiary/30">
              <h3 className="text-xl font-bold text-textPrimary mb-6 flex items-center">
                <span className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center mr-3">
                  <FiMail className="text-secondary" />
                </span>
                Connect With Me
              </h3>

              <div className="space-y-5">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    custom={i}
                    variants={staggerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group flex items-center gap-4 p-4 rounded-xl bg-tertiary/40 border border-tertiary/50
                                transition-all duration-300 hover:border-secondary/30 ${link.color}`}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-tertiary/70 flex items-center justify-center
                                    transition-colors duration-300 ${link.hoverBg}`}>
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-textPrimary group-hover:text-white transition-colors duration-300">
                        {link.name}
                      </div>
                      <div className="text-sm text-textSecondary">
                        {link.label}
                      </div>
                    </div>
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-tertiary/30">
                <p className="text-sm text-textSecondary">
                  Currently available for freelance work, collaborations, and full-time opportunities.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-3 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-tertiary/20 backdrop-blur-md rounded-2xl p-8 border border-tertiary/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-textPrimary mb-6 flex items-center">
                  <span className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center mr-3">
                    <FiMessageSquare className="text-secondary" />
                  </span>
                  Send me a message
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-textPrimary mb-2">Email Prepared!</h4>
                    <p className="text-textSecondary mb-6">
                      Your email has been prepared. If your email client didn't open automatically, please try again or contact me directly at aayushduhan82@gmail.com.
                    </p>
                    <motion.button
                      onClick={() => setSubmitted(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-secondary border border-secondary/30 px-4 py-2 rounded-lg text-sm hover:bg-secondary/10 transition-colors"
                    >
                      Send a new message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-textSecondary block">
                        Your Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 pl-10 rounded-lg border border-tertiary/50 bg-tertiary/30
                                  backdrop-blur-sm text-textPrimary outline-none focus:border-secondary
                                  focus:ring-1 focus:ring-secondary/50 transition-all duration-300"
                          placeholder="Name"
                        />
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-textSecondary block">
                        Your Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 pl-10 rounded-lg border border-tertiary/50 bg-tertiary/30
                                  backdrop-blur-sm text-textPrimary outline-none focus:border-secondary
                                  focus:ring-1 focus:ring-secondary/50 transition-all duration-300"
                          placeholder="Email"
                        />
                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-textSecondary block">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-tertiary/50 bg-tertiary/30
                                backdrop-blur-sm text-textPrimary outline-none focus:border-secondary
                                focus:ring-1 focus:ring-secondary/50 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project, opportunity or just say hi!"
                      />
                    </div>

                    {formError && (
                      <div className="text-red-500 text-sm bg-red-500/10 border border-red-500/30 p-3 rounded-lg">
                        {formError}
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="neon-btn w-full !justify-center !py-3.5"
                    >
                      <div className="btn-glow" />
                      <span className="btn-text">
                        {isSubmitting ? (
                          <span className="inline-flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="inline-flex items-center">
                            Send Message
                            <FiArrowUpRight className="ml-2" />
                          </span>
                        )}
                      </span>
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
            <div className="absolute -bottom-16 -right-16 w-32 h-32 border border-secondary/20 rounded-full opacity-20" />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border border-secondary/20 rounded-full opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;