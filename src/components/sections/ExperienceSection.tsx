import { useTheme, useSectionTitle } from '@/contexts/ThemeContext';
import { RevealSection } from '@/components/AnimationWrappers';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: {
      anime: '🏴‍☠️ Business Navigator',
      corporate: 'Business Associate',
    },
    company: 'LawSikho / SkillArbitrage',
    duration: 'Dec 2025 – Present',
    location: 'Remote',
    description: {
      anime: 'Charting new territories alongside cross-functional crews, mastering the art of customer onboarding and navigating workflow optimization seas with precision.',
      corporate: 'Worked closely with cross-functional teams to support business operations, customer onboarding, and workflow optimization.',
    },
    highlights: [
      { anime: 'Decoded client treasure maps', corporate: 'Understood client requirements' },
      { anime: 'Strengthened crew communication channels', corporate: 'Improved communication flow' },
      { anime: 'Contributed to structured voyage planning', corporate: 'Process-driven growth initiatives' },
    ],
  },
  {
    role: {
      anime: '⚓ Operational Captain',
      corporate: 'Operational Lead',
    },
    company: 'AlgoZenith',
    duration: 'Apr 2025 – Sept 2025',
    location: 'Remote',
    description: {
      anime: 'Led a crew of talented developers through the treacherous waters of algorithm challenges. Charted courses for operational efficiency and made sure every crew member reached their destination safely.',
      corporate: 'Leading operational initiatives and coordinating development efforts. Managing project timelines, ensuring deliverable quality, and facilitating cross-team collaboration.',
    },
    highlights: [
      { anime: 'Navigated complex operational challenges', corporate: 'Streamlined operational workflows' },
      { anime: 'Trained new crew members', corporate: 'Onboarded and mentored team members' },
      { anime: 'Forged alliances across departments', corporate: 'Cross-functional team collaboration' },
    ],
  },
  {
    role: {
      anime: '🗺️ Alliance Coordinator',
      corporate: 'Associate Project Manager',
    },
    company: 'Hamari Pahchan',
    duration: 'Oct 2024 – Feb 2025',
    location: 'Remote',
    description: {
      anime: 'Commanded the project fleet with precision, ensuring all vessels reached port on time. Coordinated between multiple allied crews and kept the log book in perfect order.',
      corporate: 'Managed project lifecycles and coordinated stakeholder communications. Ensured timely delivery of milestones while maintaining quality standards.',
    },
    highlights: [
      { anime: 'Successfully completed multiple voyages', corporate: 'Delivered projects on schedule' },
      { anime: 'Managed resources like a true captain', corporate: 'Resource allocation and optimization' },
      { anime: 'Built strong alliances with stakeholders', corporate: 'Stakeholder relationship management' },
    ],
  },
];

export function ExperienceSection() {
  const { isAnime } = useTheme();
  const title = useSectionTitle('experience');

  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass border border-border/30 text-sm text-primary mb-4">
              {isAnime ? '🏴‍☠️' : '04'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isAnime
                ? 'The crews I\'ve sailed with and the adventures we conquered together.'
                : 'Professional experience and leadership roles that shaped my career.'
              }
            </p>
          </div>
        </RevealSection>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto px-4 md:px-0">
          {/* Animated Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-border/30 md:-translate-x-1/2 overflow-hidden rounded-full">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-primary/40"
              style={{ height: '100%', originY: 0, scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          {experiences.map((exp, index) => (
            <RevealSection key={index} delay={index * 0.15}>
              <div className={`relative flex flex-col md:flex-row gap-8 mb-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-background border-2 border-primary md:-translate-x-1/2 z-10 flex items-center justify-center">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {!isAnime && (
                    <div className="absolute inset-0 bg-primary/20 blur-md rounded-full -z-10 animate-pulse" />
                  )}
                </div>

                {/* Content */}
                <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16 text-left'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group h-full relative"
                  >
                    <div className="p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-white/10 card-glow transition-all duration-500 hover:border-primary/40 relative overflow-hidden h-full flex flex-col shadow-2xl">
                      {/* Subtle Background pattern */}
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                      {!isAnime && (
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors pointer-events-none" />
                      )}

                      <div className={`flex flex-col mb-8 relative z-10 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                        <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-6 border border-primary/20 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <Briefcase className="w-6 h-6 fill-primary/20" />
                        </div>
                        <h3 className="text-3xl font-black text-foreground tracking-tighter group-hover:text-primary transition-colors mb-2">
                          {isAnime ? exp.role.anime : exp.role.corporate}
                        </h3>
                        <p className="text-xl text-primary font-black tracking-tight underline decoration-primary/30 underline-offset-8 decoration-2">{exp.company}</p>
                      </div>

                      <div className={`flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground/60 mb-8 relative z-10 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-muted-foreground/90 text-sm mb-8 leading-relaxed relative z-10 flex-grow">
                        {isAnime ? exp.description.anime : exp.description.corporate}
                      </p>

                      <ul className={`space-y-4 relative z-10 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className={`flex items-start gap-4 text-sm text-foreground/80 leading-relaxed group/item ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2 transition-all group-hover/item:scale-150 group-hover/item:shadow-[0_0_10px_var(--primary)]" />
                            <span className="transition-all group-hover/item:text-foreground">{isAnime ? highlight.anime : highlight.corporate}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
