import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Anchor, Briefcase } from 'lucide-react';

export function ModeSwitcher() {
  const { isAnime, isDark, toggleStyle, toggleBrightness } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {/* Style Toggle - Anime / Corporate */}
      <motion.button
        onClick={toggleStyle}
        className="relative flex items-center gap-2 px-3 py-2 rounded-full glass border border-border/50 transition-colors duration-300 hover:border-primary/50"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label={isAnime ? 'Switch to Corporate mode' : 'Switch to Anime mode'}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={isAnime ? 'anime' : 'corporate'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 text-sm font-medium"
          >
            {isAnime ? (
              <>
                <Anchor className="w-4 h-4 text-primary" />
                <span className="hidden sm:inline text-foreground/80">Pirate</span>
              </>
            ) : (
              <>
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="hidden sm:inline text-foreground/80">Pro</span>
              </>
            )}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* Brightness Toggle - Dark / Light */}
      <motion.button
        onClick={toggleBrightness}
        className="relative p-2 rounded-full glass border border-border/50 transition-colors duration-300 hover:border-primary/50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isDark ? 'dark' : 'light'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? (
              <Moon className="w-4 h-4 text-primary" />
            ) : (
              <Sun className="w-4 h-4 text-primary" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
