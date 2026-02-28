import { useTheme, useSectionTitle } from '@/contexts/ThemeContext';
import { RevealSection } from '@/components/AnimationWrappers';
import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Users } from 'lucide-react';

export function AboutSection() {
  const { isAnime } = useTheme();
  const title = useSectionTitle('about');

  const highlights = [
    {
      icon: Brain,
      title: isAnime ? 'AI Navigator' : 'AI Specialist',
      description: isAnime
        ? 'Charting courses through the seas of Machine Learning and NLP'
        : 'Expertise in RAG systems, LangChain, and vector databases',
    },
    {
      icon: Code2,
      title: isAnime ? 'Code Shipwright' : 'Full-Stack Developer',
      description: isAnime
        ? 'Crafting sturdy vessels with React, Angular, and Python'
        : 'Building scalable applications with modern frameworks',
    },
    {
      icon: Rocket,
      title: isAnime ? 'Innovation Helmsman' : 'Problem Solver',
      description: isAnime
        ? 'Steering projects from ideation to grand adventures'
        : 'Delivering end-to-end solutions with focus on performance',
    },
    {
      icon: Users,
      title: isAnime ? 'Crew Leader' : 'Team Player',
      description: isAnime
        ? 'United crews to conquer the mightiest challenges'
        : 'Experienced in leading teams and managing projects',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass border border-border/30 text-sm text-primary mb-4">
              {isAnime ? '🧭' : '01'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isAnime
                ? 'Every great pirate has an origin story. Here begins the tale of a developer who set sail to conquer the digital seas.'
                : 'A passionate computer science engineer with a focus on AI/ML solutions and full-stack development.'
              }
            </p>
          </div>
        </RevealSection>

        {/* About content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <RevealSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-xl font-medium text-foreground/90 leading-relaxed border-l-4 border-primary pl-6">
                {isAnime
                  ? "Ahoy, fellow adventurer! I'm Arpit, a B.Tech Computer Science student who discovered the legendary power of AI and set sail to master it. My journey through the Grand Line of technology has equipped me with powerful Devil Fruit abilities in RAG systems, NLP, and full-stack development."
                  : "I'm Arpit Namdeo, a Computer Science student passionate about building intelligent systems that solve real-world problems. With expertise in AI/ML and full-stack development, I specialize in creating RAG-based solutions and scalable web applications."
                }
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {isAnime
                  ? "From the calm waters of East Blue (React & Angular) to the treacherous seas of the New World (AI & ML), I've gathered a formidable crew of skills. My bounty increases with every successful project, and I'm always hunting for the next great adventure!"
                  : "My experience spans from leading development teams to building enterprise-grade applications. I combine technical expertise with leadership skills to deliver impactful solutions that drive business value."
                }
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="p-6 rounded-3xl bg-card/60 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-primary/40 group relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <item.icon className="w-10 h-10 text-primary mb-4 transition-transform duration-500 group-hover:scale-110" />
                    <h3 className="font-black text-lg text-foreground mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                  {!isAnime && (
                    <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors" />
                  )}
                </motion.div>
              ))}
            </div>
          </RevealSection>
        </div>

        {/* Stats */}
        <RevealSection delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '2+', label: isAnime ? 'Years at Sea' : 'Years Experience' },
              { value: '10+', label: isAnime ? 'Battles Won' : 'Projects Completed' },
              { value: '3+', label: isAnime ? 'Allied Crews' : 'Teams Led' },
              { value: '5+', label: isAnime ? 'Devil Fruits' : 'Technologies Mastered' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl glass border border-border/30 hover:border-primary/40 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="text-4xl sm:text-5xl font-black text-gradient mb-3 relative z-10 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold relative z-10">{stat.label}</div>
                {!isAnime && (
                  <motion.div
                    className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                    animate={{ scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
