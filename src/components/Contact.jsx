import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: FiMail,
      href: 'mailto:aayushduhan82@gmail.com',
      text: 'aayushduhan82@gmail.com'
    },
    {
      name: 'GitHub',
      icon: FiGithub,
      href: 'https://github.com/Aayush-Duhan',
      text: 'github.com/Aayush-Duhan'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      href: 'https://www.linkedin.com/in/aayush-duhan-245167253/',
      text: 'linkedin.com/in/aayush-duhan'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-primary/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading max-w-xl mx-auto text-base">
            Currently looking for new opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-3 max-w-md mx-auto"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group flex items-center gap-4 p-4 rounded-lg
                       bg-tertiary/5 backdrop-blur-sm border border-secondary/5
                       hover:bg-tertiary/10 hover:border-secondary/20
                       transition-all duration-300"
            >
              <span className="p-2.5 rounded-lg bg-secondary/5 text-secondary 
                           group-hover:bg-secondary/10 transition-colors">
                <link.icon className="text-xl" />
              </span>
              <div className="flex flex-col">
                <span className="text-base font-medium text-textPrimary
                             group-hover:text-secondary transition-colors">
                  {link.name}
                </span>
                <span className="text-sm text-textSecondary group-hover:text-secondary/80 
                             transition-colors truncate">
                  {link.text}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
