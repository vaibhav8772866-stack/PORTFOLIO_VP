import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const lineVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('vaibhav8772866@gmail.com');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = 'mailto:vaibhav8772866@gmail.com';
    }
  };

  return (
    <section id="contact" className="py-24 scroll-mt-20">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-xs font-mono tracking-[0.3em] text-primary/70 uppercase mb-8">
        07 — Contact
      </motion.div>

      <div className="mb-16 overflow-hidden">
        {["LET'S BUILD", 'SOMETHING', 'TOGETHER.'].map((line, i) => (
          <motion.div
            key={line}
            custom={i}
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`block font-display font-bold leading-[0.9] tracking-tighter ${
              i === 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary' : 'text-white'
            } text-[clamp(2.8rem,8vw,7rem)]`}
          >
            {line}
          </motion.div>
        ))}

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-6 text-gray-400 text-lg max-w-xl">
          Have a project idea, internship opportunity, collaboration, or simply want to connect? Feel free to reach out.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.3 }} className="space-y-4">
          <a href="mailto:vaibhav8772866@gmail.com" className="flex items-center space-x-4 p-5 bg-white/[0.03] rounded-2xl border border-white/10 hover:border-primary/40 transition-all group">
            <div className="p-3.5 bg-primary/10 text-primary rounded-xl group-hover:scale-110 transition-transform">
              <Mail size={22} />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-0.5">Email Me</h4>
              <p className="text-gray-500 text-xs font-mono">vaibhav8772866@gmail.com</p>
            </div>
          </a>

          <div className="flex gap-4">
            <a href="https://github.com/vaibhav8772866-stack" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center p-5 bg-white/[0.03] rounded-2xl border border-white/10 hover:border-white/30 transition-all text-gray-400 hover:text-white">
              <Github size={26} className="mb-2.5" />
              <span className="text-xs font-mono">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-pandey-6761a938/" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center p-5 bg-white/[0.03] rounded-2xl border border-white/10 hover:border-[#0A66C2]/50 hover:text-[#0A66C2] transition-all text-gray-400">
              <Linkedin size={26} className="mb-2.5" />
              <span className="text-xs font-mono">LinkedIn</span>
            </a>
          </div>

          <div className="mt-4 pt-6 border-t border-white/10">
            <p className="text-xs font-mono text-gray-600 mb-3">Have an idea worth building?</p>
            <a href="mailto:vaibhav8772866@gmail.com" className="inline-block text-2xl font-display font-bold text-white hover:text-primary transition-colors">
              Let&apos;s Talk →
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.4 }}>
          <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/10">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">Direct contact</p>
                <p className="text-sm text-gray-300 mt-2">vaibhav8772866@gmail.com</p>
              </div>
              <button type="button" onClick={handleCopyEmail} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white transition-all hover:border-primary/40 hover:text-primary" aria-live="polite">
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Email copied' : 'Copy Email'}</span>
              </button>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Name</label>
                <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors placeholder:text-gray-600" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Email</label>
                <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors placeholder:text-gray-600" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors resize-none placeholder:text-gray-600" placeholder="What's on your mind?" />
              </div>
              <button type="button" onClick={() => (window.location.href = 'mailto:vaibhav8772866@gmail.com')} className="w-full bg-primary text-black font-semibold rounded-xl px-4 py-3 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors text-sm">
                <span>Send via Email</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
