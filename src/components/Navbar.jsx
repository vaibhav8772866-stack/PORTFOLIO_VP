import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = ({ visible = true }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to detect active section while scrolling
  useEffect(() => {
    const sectionElements = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (sectionElements.length === 0) return;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(id);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home', 'home')}
            className="text-2xl font-display font-bold tracking-tighter text-white hover:opacity-90 transition-opacity"
            aria-label="Vaibhav Pandey Portfolio Home"
          >
            {profile.brandName.slice(0, -1)}
            <span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map(({ label, href, id }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleNavClick(e, href, id)}
                  className={`text-xs font-mono uppercase tracking-wider transition-colors relative py-1 ${
                    isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Social & Resume CTAs */}
          <div className="hidden lg:flex items-center space-x-3.5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 rounded-lg transition-all text-xs font-mono font-medium border border-white/15 hover:border-white/30"
              aria-label="Download resume"
            >
              <Download size={14} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-3">
              {navLinks.map(({ label, href, id }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleNavClick(e, href, id)}
                  className={`text-sm font-mono py-2 transition-colors border-b border-white/5 flex items-center justify-between ${
                    activeSection === id ? 'text-primary font-semibold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span>{label}</span>
                  {activeSection === id && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center space-x-4">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
                <a
                  href={profile.resumeUrl}
                  download
                  className="flex items-center space-x-2 bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-lg text-xs font-mono font-medium"
                  aria-label="Download resume"
                >
                  <Download size={15} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
