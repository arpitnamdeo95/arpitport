import { useTheme, useSectionTitle } from '@/contexts/ThemeContext';
import { RevealSection } from '@/components/AnimationWrappers';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';

const projects = [
  {
    title: {
      anime: '⚡ Velosify: The Speed-Force Engine',
      corporate: 'Velosify',
    },
    description: {
      anime: 'A performance-focused digital platform built for speed and efficiency. Like having a Kizaru-speed engine powering your digital vessel!',
      corporate: 'A high-performance digital infrastructure platform engineered for maximum speed, efficiency, and scalable user experiences on the modern web.',
    },
    tech: ['Next.js 14', 'TypeScript', 'Performance Opt', 'Tailwind CSS'],
    category: 'Infrastructure',
    featured: true,
    link: 'https://velosify.netlify.app/'
  },
  {
    title: {
      anime: '🛰️ Outreach AI: The Den Den Mushi Overlord',
      corporate: 'Outreach AI',
    },
    description: {
      anime: 'An autonomous AI-powered scout that finds every potential ally in the Grand Line. Automates your fleet\'s communication perfectly.',
      corporate: 'An autonomous, AI-driven lead generation and outreach platform designed for high-velocity growth teams to automate complex communication workflows.',
    },
    tech: ['Python', 'OpenAI', 'LangChain', 'Automation'],
    category: 'AI/SaaS',
    featured: true,
    link: 'https://outreachsales.vercel.app/'
  },
  {
    title: {
      anime: '🛒 CampusKart: The Straw Hat Market',
      corporate: 'CampusKart',
    },
    description: {
      anime: 'A smart localized marketplace for campus trainees. Leveraging predictive Observation Haki to match buyers and sellers instantly.',
      corporate: 'A smart, localized campus marketplace platform built for seamless student commerce, utilizing predictive AI for intelligent buyer-seller matching.',
    },
    tech: ['React', 'Node.js', 'Predictive AI', 'Firebase'],
    category: 'Marketplace',
    featured: true,
    link: 'https://logicgrid.netlify.app/'
  },
];

export function ProjectsSection() {
  const { isAnime } = useTheme();
  const title = useSectionTitle('projects');

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass border border-border/30 text-sm text-primary mb-4">
              {isAnime ? '⚔️' : '05'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isAnime
                ? 'The legendary battles I\'ve fought and the treasures I\'ve claimed along the way.'
                : 'Featured projects showcasing expertise in AI, full-stack development, and system design.'
              }
            </p>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <RevealSection key={index} delay={index * 0.1}>
              <motion.div
                className="h-full group relative"
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="h-full p-10 rounded-[2.5rem] bg-card/40 backdrop-blur-2xl border border-white/5 flex flex-col relative overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]">
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

                  {!isAnime && (
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-1000 pointer-events-none" />
                  )}

                  {/* Header */}
                  <div className="flex items-start justify-between mb-10 relative z-10">
                    <div className="p-5 rounded-2xl bg-white/5 text-primary border border-white/10 shadow-inner group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                      <Zap className="w-7 h-7 fill-current" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-5 py-1.5 text-[9px] font-black tracking-[0.3em] uppercase rounded-full bg-primary/10 text-primary border border-primary/20 animate-pulse">
                        ACTIVE_NODE
                      </span>
                      <span className="text-[10px] font-black tracking-[0.2em] uppercase text-muted-foreground/40">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-black text-foreground mb-4 relative z-10 tracking-tighter group-hover:text-primary transition-colors">
                    {isAnime ? project.title.anime : project.title.corporate}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground/90 text-sm mb-8 flex-grow leading-relaxed relative z-10">
                    {isAnime ? project.description.anime : project.description.corporate}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2.5 mb-10 relative z-10">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3.5 py-1.5 text-[9px] font-black tracking-widest uppercase rounded-lg glass-dark border border-white/5 text-foreground/60 group-hover:text-foreground group-hover:border-primary/30 transition-all shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-6 pt-8 border-t border-white/5 relative z-10">
                    <a
                      href="https://github.com/arpitnamdeo95"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all group/btn"
                    >
                      <Github className="w-5 h-5 transition-transform group-hover/btn:-translate-y-1" />
                      <span>{isAnime ? 'View Log' : 'Source'}</span>
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary hover:text-primary/80 transition-all group/btn"
                    >
                      <ExternalLink className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                      <span>{isAnime ? 'Set Sail' : 'Live Demo'}</span>
                    </a>
                  </div>

                  {/* Highlight bar */}
                  <motion.div
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-primary/50"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>
            </RevealSection>
          ))}
        </div>

        {/* More projects CTA */}
        <RevealSection delay={0.4}>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/arpitnamdeo95"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-border/50 text-foreground hover:border-primary/50 transition-all"
            >
              <Github className="w-5 h-5" />
              {isAnime ? 'View Full Treasure Chest' : 'View All Projects on GitHub'}
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
