import { Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const Footer = () => {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/50 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-display font-bold text-white mb-1 tracking-tighter">VAIBHAV.</h2>
            <p className="text-sm font-mono text-primary/80">B.Tech CSE • Java • Full Stack • AI/ML</p>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-6 text-gray-400">
            <a href="https://github.com/vaibhav8772866-stack" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub profile">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-pandey-6761a938/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn profile">
              <Linkedin size={20} />
            </a>
            <a href="mailto:vaibhav8772866@gmail.com" className="hover:text-white transition-colors" aria-label="Email Vaibhav">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Vaibhav Pandey. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed &amp; built with <span className="text-primary">React</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
