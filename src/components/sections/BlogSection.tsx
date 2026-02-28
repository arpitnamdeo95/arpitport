import { useTheme, useSectionTitle } from '@/contexts/ThemeContext';
import { RevealSection } from '@/components/AnimationWrappers';
import { Clock, Tag, BookOpen, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Article {
  id: string;
  title: {
    anime: string;
    corporate: string;
  };
  description: {
    anime: string;
    corporate: string;
  };
  tags: string[];
  readTime: string;
  content: {
    anime: string;
    corporate: string;
  };
}

const articles: Article[] = [
  {
    id: 'rag-assistant',
    title: {
      anime: '🧭 Building a RAG-Based Website Assistant: Voyage Log',
      corporate: 'Building a RAG-Based Website Assistant: Lessons Learned',
    },
    description: {
      anime: 'A captain\'s guide to creating intelligent navigators that understand your ship\'s documents.',
      corporate: 'Key insights from building a production-ready RAG system for contextual website assistance.',
    },
    tags: ['AI', 'RAG', 'LangChain'],
    readTime: '8 min read',
    content: {
      anime: 'Every great navigator needs a reliable compass. In this voyage, I share how I built an AI assistant that understands context like a seasoned crew member...',
      corporate: 'This article covers the architecture decisions, embedding strategies, and retrieval optimizations that made our RAG system effective in production...',
    },
  },
  {
    id: 'problem-solving',
    title: {
      anime: '⚔️ How I Approach Problem Solving: A Pirate\'s Strategy',
      corporate: 'How I Approach Problem Solving as a CSE Student',
    },
    description: {
      anime: 'Breaking down enemy defenses and conquering challenges with strategic thinking.',
      corporate: 'A structured framework for tackling complex technical problems systematically.',
    },
    tags: ['Career', 'Problem Solving', 'Mindset'],
    readTime: '5 min read',
    content: {
      anime: 'Every battle requires strategy. Here\'s how I break down seemingly impossible challenges into conquerable territories...',
      corporate: 'Problem-solving is a skill that can be systematically improved. Here\'s my framework for approaching complex technical challenges...',
    },
  },
  {
    id: 'recruiter-insights',
    title: {
      anime: '🏴‍☠️ What Navy Admirals Look for in AI & Backend Crews',
      corporate: 'What Recruiters Look for in AI & Backend Roles',
    },
    description: {
      anime: 'Secrets from the Marines about what makes a worthy opponent... I mean, candidate.',
      corporate: 'Insights from industry conversations about standing out in AI and backend engineering roles.',
    },
    tags: ['Career', 'AI', 'Backend'],
    readTime: '6 min read',
    content: {
      anime: 'I\'ve gathered intelligence from various admirals (recruiters) about what makes a pirate worthy of their crew...',
      corporate: 'Based on conversations with hiring managers and my own interview experiences, here are the key differentiators for AI and backend roles...',
    },
  },
  {
    id: 'projects-to-products',
    title: {
      anime: '🚢 From Small Boats to Grand Ships: Thinking Like a Shipwright',
      corporate: 'From Projects to Products: Thinking Like an Engineer',
    },
    description: {
      anime: 'How to build vessels that can weather any storm in the Grand Line.',
      corporate: 'Transitioning from academic projects to production-ready software with an engineering mindset.',
    },
    tags: ['System Design', 'Engineering', 'Productivity'],
    readTime: '7 min read',
    content: {
      anime: 'Building a dinghy is one thing, but constructing a ship worthy of the Grand Line requires a different mindset entirely...',
      corporate: 'The gap between a working prototype and a production system is vast. Here\'s how to bridge it with proper engineering practices...',
    },
  },
];

function ArticleCard({ article, isAnime }: { article: Article; isAnime: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative h-full"
      layout
    >
      <div className="p-6 rounded-2xl bg-card border border-border/50 card-glow h-full flex flex-col transition-all duration-300 hover:border-primary/30">
        {/* Paper texture overlay for light modes */}
        <div className="absolute inset-0 rounded-2xl opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 100 100%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%272%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E')]" />

        {/* Tags */}
        <div className="flex flex-wrap gap-2.5 mb-6 relative z-10">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full bg-primary/10 text-primary border border-primary/20 shadow-sm"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-black text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2 tracking-tighter relative z-10 leading-tight">
          {isAnime ? article.title.anime : article.title.corporate}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground/90 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed relative z-10">
          {isAnime ? article.description.anime : article.description.corporate}
        </p>

        {/* Read time & CTA */}
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 relative z-10">
          <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary/80 transition-all group/btn"
          >
            <BookOpen className="w-4 h-4" />
            <span>{isExpanded ? 'Close Log' : 'Read Log'}</span>
            <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden relative z-10"
            >
              <div className="pt-6 mt-6 border-t border-white/5">
                <p className="text-sm text-foreground/80 leading-loose font-medium">
                  {isAnime ? article.content.anime : article.content.corporate}
                </p>
                <div className="mt-6 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <p className="text-[10px] uppercase font-black tracking-[0.2em] text-primary/60 italic leading-relaxed">
                    {isAnime
                      ? '📜 Full voyage log coming soon to the Captain\'s Log archive...'
                      : 'Full article session coming soon. Stay tuned for deeper insights.'
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function BlogSection() {
  const { isAnime } = useTheme();
  const title = useSectionTitle('blog');

  return (
    <section id="blog" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass border border-border/30 text-sm text-primary mb-4">
              {isAnime ? '📜' : '06'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isAnime
                ? 'Chronicles of adventures, discoveries, and lessons learned on the journey to become King of the Engineers.'
                : 'Thoughts on technology, career growth, and lessons learned in software engineering.'
              }
            </p>
          </div>
        </RevealSection>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <RevealSection key={article.id} delay={index * 0.1}>
              <ArticleCard article={article} isAnime={isAnime} />
            </RevealSection>
          ))}
        </div>

        {/* Coming Soon Note */}
        <RevealSection delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              {isAnime
                ? '🧭 More voyage logs are being written... The adventure never ends!'
                : 'More articles coming soon. Subscribe to stay updated.'
              }
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
