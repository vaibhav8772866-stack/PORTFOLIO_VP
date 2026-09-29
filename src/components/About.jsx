import { motion } from 'framer-motion';

const infoCards = [
  { label: 'Education', value: 'B.Tech CSE', sub: '2nd Year' },
  { label: 'Focus', value: 'Java + AI', sub: 'Full Stack' },
  { label: 'Building', value: 'Full Stack', sub: 'Systems' },
  { label: 'Location', value: 'India', sub: 'Uttar Pradesh' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.3 + i * 0.1, ease: 'easeOut' },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-24 scroll-mt-20">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-mono tracking-[0.3em] text-primary/70 uppercase mb-6"
      >
        01 — Introduction
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
        {/* Left: editorial large heading */}
        <div className="lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-[clamp(3rem,7vw,5.5rem)] font-display font-bold leading-[0.95] tracking-tighter text-white">
              WHO
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                I AM.
              </span>
            </h2>
            <div className="mt-6 h-[1px] w-16 bg-primary/50" />
          </motion.div>
        </div>

        {/* Right: body + cards */}
        <div className="space-y-10">
          {/* Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              I&apos;m{' '}
              <span className="text-white font-semibold">Vaibhav Pandey</span>, a
              B.Tech Computer Science student passionate about turning ideas into
              practical software solutions.
            </p>
            <p>
              My interests span Java development, full-stack web applications,
              artificial intelligence, machine learning and computer vision.
            </p>
            <p>
              I enjoy building projects that combine modern interfaces with
              meaningful backend and AI functionality — from Java desktop
              applications to AI-powered systems such as{' '}
              <span className="text-primary font-medium">Deepfake Sentinel</span>{' '}
              and student-support chatbots. I focus on learning through real-world
              development.
            </p>
            <p className="text-gray-500">
              Currently strengthening my skills in Java, Spring Boot, React,
              Python, AI/ML, and software engineering.
            </p>
          </motion.div>

          {/* Info cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, borderColor: 'rgba(14,165,233,0.4)' }}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 transition-colors cursor-default"
              >
                <p className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-2">
                  {card.label}
                </p>
                <p className="text-white font-display font-semibold text-base leading-tight">
                  {card.value}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">{card.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
