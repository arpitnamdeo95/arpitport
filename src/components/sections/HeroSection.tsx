import { motion } from 'framer-motion';
import { useTheme, useSectionTitle } from '@/contexts/ThemeContext';
import { MagneticButton } from '@/components/AnimationWrappers';
import { Download, Github, Mail, MapPin } from 'lucide-react';

export function HeroSection() {
  const { isAnime, isDark } = useTheme();
  const title = useSectionTitle('hero');

  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Arpit_Namdeo_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Name Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-block"
        >
          <div className="relative px-6 py-2 rounded-2xl glass border border-white/10 shadow-2xl overflow-hidden group">
            <span className="text-[14px] font-black uppercase tracking-[0.4em] text-primary">
              ARPIT NAMDEO
            </span>
          </div>
        </motion.div>

        {/* Main Brand Typography - Founder Title */}
        <div className="relative mb-12">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 w-[140%] -z-10"
          />
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-4 flex flex-col items-center break-words px-2"
          >
            <span className="text-white block scale-90 opacity-80 mb-2">
              {isAnime ? 'CAPTAIN_OF' : 'FOUNDER_AT'}
            </span>
            <span className="text-gradient drop-shadow-[0_0_50px_rgba(59,130,246,0.3)] block">
              LOGICGRID LABS
            </span>
          </motion.h1>
        </div>

        {/* Cinematic Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-3xl mx-auto mb-16 px-4"
        >
          <p className="text-xl md:text-3xl font-black text-white/90 mb-4 tracking-tight">
            {isAnime
              ? '⚓ NAVIGATING THE FRONTIER OF AUTONOMOUS SYSTEMS'
              : 'SCALING INTELLIGENCE THROUGH EXPERT SYSTEMS'
            }
          </p>
          <p className="text-lg text-muted-foreground/60 leading-relaxed font-medium uppercase tracking-[0.1em]">
            {isAnime
              ? 'Architecting specialized digital infrastructure and AI fleets. Setting sail towards the next era of digital conquest.'
              : 'I engineer specialized digital infrastructure and autonomous AI systems. Leading innovation through architecting high-velocity platforms.'
            }
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            onClick={handleDownloadResume}
            className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
            {isAnime ? 'Grab the Treasure Map' : 'Download Resume'}
          </MagneticButton>

          <MagneticButton
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-3 px-8 py-4 glass border border-border/50 rounded-full font-medium text-lg transition-all duration-300 hover:border-primary/50"
          >
            <Mail className="w-5 h-5" />
            {isAnime ? 'Send a Message Bottle' : 'Get in Touch'}
          </MagneticButton>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/arpitnamdeo95"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass border border-border/30 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:arpitnamdeo04@gmail.com"
            className="p-3 rounded-full glass border border-border/30 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-widest">
              {isAnime ? 'Set Sail' : 'Scroll'}
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-3 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
