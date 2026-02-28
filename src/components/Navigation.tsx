import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ModeSwitcher } from './ModeSwitcher';
import { useTheme, sectionTitles } from '@/contexts/ThemeContext';
import { MagneticButton } from './AnimationWrappers';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: sectionTitles.hero },
  { id: 'about', label: sectionTitles.about },
  { id: 'skills', label: sectionTitles.skills },
  { id: 'education', label: sectionTitles.education },
  { id: 'experience', label: sectionTitles.experience },
  { id: 'projects', label: sectionTitles.projects },
  { id: 'blog', label: sectionTitles.blog },
  { id: 'contact', label: sectionTitles.contact },
];

export function Navigation() {
  const { isAnime } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 scroll-progress z-50"
        style={{ scaleX }}
      />

      {/* Navigation Bar */}
      <motion.nav
        className="fixed top-1 left-4 right-4 z-40 glass rounded-full border border-border/30 transition-colors duration-500"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="group flex items-center gap-3 relative z-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src="/v1_logo.svg"
                  alt="Logo"
                  className="w-full h-full object-contain relative z-10 p-1"
                />
              </div>
              <div className="flex flex-col items-start leading-none -space-y-0.5">
                <span className="font-black text-xl tracking-tighter text-foreground group-hover:text-primary transition-colors">
                  Arpit
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60">
                  Namdeo
                </span>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.slice(1).map((item) => (
                <MagneticButton
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 relative group overflow-hidden ${activeSection === item.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  <span className="relative z-10">{isAnime ? item.label.anime : item.label.corporate}</span>
                  {activeSection !== item.id && (
                    <motion.div
                      className="absolute inset-0 bg-muted/50 -z-10"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                    />
                  )}
                </MagneticButton>
              ))}
            </div>

            {/* Right side - Mode Switcher & Mobile Menu */}
            <div className="flex items-center gap-3">
              <ModeSwitcher />

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-muted/50 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] md:hidden flex flex-col items-center justify-center bg-background/95 backdrop-blur-2xl"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Close Button Inside Menu */}
            <motion.button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-4 rounded-full bg-white/5 border border-white/10"
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <div className="flex flex-col gap-4 w-full px-12">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative px-6 py-4 rounded-2xl transition-all duration-300 flex items-center justify-between ${activeSection === item.id
                    ? 'bg-primary/10 text-primary border border-primary/20'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-2xl font-black uppercase tracking-widest italic flex items-center gap-4">
                    <span className="text-xs opacity-20 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                    {isAnime ? item.label.anime : item.label.corporate}
                  </span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="active-indicator"
                      className="w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.div
              className="mt-20 flex flex-col items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="h-px w-12 bg-border/50" />
              <span className="text-[10px] font-black tracking-[0.4em] text-muted-foreground/30 uppercase">
                LOGICGRID LABS CORE_LINK
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
