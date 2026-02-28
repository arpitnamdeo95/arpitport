import { useTheme, useSectionTitle } from '@/contexts/ThemeContext';
import { RevealSection } from '@/components/AnimationWrappers';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export function EducationSection() {
  const { isAnime } = useTheme();
  const title = useSectionTitle('education');

  return (
    <section id="education" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass border border-border/30 text-sm text-primary mb-4">
              {isAnime ? '📚' : '03'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isAnime
                ? 'The dojo where I honed my skills and learned the ancient arts of computer science.'
                : 'Academic foundation and continuous learning journey.'
              }
            </p>
          </div>
        </RevealSection>

        <div className="max-w-3xl mx-auto">
          <RevealSection delay={0.1}>
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-white/10 card-glow shadow-2xl relative overflow-hidden">
                {!isAnime && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors pointer-events-none" />
                )}

                <div className="flex flex-col sm:flex-row items-start gap-8 relative z-10">
                  <div className="p-5 rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <GraduationCap className="w-10 h-10 fill-primary/20" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-black text-foreground tracking-tighter group-hover:text-primary transition-colors">
                        {isAnime ? '🎓 Bachelor of Technology' : 'B.Tech in Computer Science'}
                      </h3>
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
                        {isAnime ? 'In Training' : 'Ongoing'}
                      </span>
                    </div>
                    <p className="text-xl font-bold text-foreground/80 mb-6 tracking-tight">
                      Computer Science & Engineering
                    </p>
                    <div className="flex flex-wrap gap-6 text-xs font-black uppercase tracking-widest text-muted-foreground/60">
                      <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5 border border-primary/10">
                        <BookOpen className="w-4 h-4 text-primary" />
                        {isAnime ? 'AI & ML Arts' : 'Specialization: AI/ML'}
                      </span>
                      <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5 border border-primary/10">
                        <Award className="w-4 h-4 text-primary" />
                        {isAnime ? 'Elite Rank' : 'Strong Academic Record'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </RevealSection>

          {/* Coursework */}
          <RevealSection delay={0.2}>
            <div className="mt-8 p-6 rounded-2xl glass border border-border/30">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                {isAnime ? '🗺️ Key Training Modules' : 'Relevant Coursework'}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'Data Structures & Algorithms',
                  'Machine Learning',
                  'Natural Language Processing',
                  'Database Management',
                  'Software Engineering',
                  'Computer Networks',
                  'Operating Systems',
                  'Deep Learning',
                  'Cloud Computing',
                ].map((course, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 rounded-xl bg-card border border-border/30 text-sm text-foreground/80 text-center"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Certifications */}
          <RevealSection delay={0.3}>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4 text-center">
                {isAnime ? '🏆 Earned Bounties' : 'Certifications & Achievements'}
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: isAnime ? 'AI Navigator Certificate' : 'AI/ML Certification',
                    org: 'Online Platforms',
                  },
                  {
                    title: isAnime ? 'Full-Stack Shipwright Badge' : 'Full-Stack Development',
                    org: 'Professional Training',
                  },
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <Award className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{cert.title}</p>
                      <p className="text-sm text-muted-foreground">{cert.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
