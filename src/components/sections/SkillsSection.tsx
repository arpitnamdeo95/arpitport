import { useTheme, useSectionTitle } from '@/contexts/ThemeContext';
import { RevealSection } from '@/components/AnimationWrappers';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: { anime: '🗡️ AI & ML Weapons', corporate: 'AI & Machine Learning' },
    skills: [
      { name: 'RAG Systems', level: 95 },
      { name: 'LangChain', level: 90 },
      { name: 'LangGraph', level: 85 },
      { name: 'NLP', level: 88 },
      { name: 'Vector Databases', level: 90 },
      { name: 'Embeddings', level: 85 },
    ],
  },
  {
    title: { anime: '⚓ Frontend Arsenal', corporate: 'Frontend Technologies' },
    skills: [
      { name: 'React', level: 92 },
      { name: 'Angular', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: { anime: '🏴‍☠️ Backend Cannons', corporate: 'Backend & DevOps' },
    skills: [
      { name: 'FastAPI', level: 88 },
      { name: 'Django', level: 82 },
      { name: 'Python', level: 92 },
      { name: 'AWS', level: 78 },
      { name: 'Docker', level: 80 },
    ],
  },
];

export function SkillsSection() {
  const { isAnime } = useTheme();
  const title = useSectionTitle('skills');

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass border border-border/30 text-sm text-primary mb-4">
              {isAnime ? '⚔️' : '02'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isAnime
                ? 'Every great pirate needs their weapons. These are the powers I wield in battle!'
                : 'A comprehensive toolkit of modern technologies for building intelligent systems.'
              }
            </p>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <RevealSection key={categoryIndex} delay={categoryIndex * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full group relative"
              >
                <div className="h-full p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-white/10 card-glow transition-all duration-500 hover:border-primary/40 flex flex-col relative overflow-hidden">
                  <h3 className="text-2xl font-black mb-8 text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {isAnime ? category.title.anime : category.title.corporate}
                  </h3>
                  <div className="space-y-6 flex-grow">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-3">
                        <div className="flex justify-between items-end">
                          <span className="text-xs font-black uppercase tracking-widest text-foreground/70">
                            {skill.name}
                          </span>
                          <span className="text-xs font-black text-primary">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-primary/5 rounded-full overflow-hidden relative border border-white/5">
                          <motion.div
                            className="h-full rounded-full relative"
                            style={{
                              background: 'var(--text-gradient)',
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.5,
                              delay: skillIndex * 0.1,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          >
                            {!isAnime && (
                              <motion.div
                                className="absolute inset-0 bg-white/20"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                              />
                            )}
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {!isAnime && (
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors pointer-events-none" />
                  )}
                </div>
              </motion.div>
            </RevealSection>
          ))}
        </div>

        {/* Additional skills tags */}
        <RevealSection delay={0.4}>
          <div className="mt-12 text-center">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              {isAnime ? 'Other Treasures' : 'Other Skills'}
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {['Git', 'REST APIs', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis', 'CI/CD', 'Agile', 'Figma'].map(
                (skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 rounded-full glass border border-border/30 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
