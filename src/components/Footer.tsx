import { useTheme } from '@/contexts/ThemeContext';
import { Heart, Anchor } from 'lucide-react';

export function Footer() {
  const { isAnime } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center gap-4 text-muted-foreground">
          <div className="flex flex-col items-center gap-3 group">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src="/v1_logo.svg"
                alt="Logo"
                className="w-full h-full object-contain relative z-10 p-1"
              />
            </div>
            <span className="font-black text-2xl tracking-tighter text-foreground">
              Arpit Namdeo
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-border" />
              Built by ARPIT NAMDEO © {currentYear}
            </span>
            <div className="hidden md:block w-[1px] h-4 bg-white/5" />
            <a
              href="https://logicgrid.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 flex items-center gap-3 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="group-hover:text-foreground transition-colors">Founder @ LogicGrid Labs</span>
            </a>
          </div>
        </div>
        <p className="mt-8 text-[9px] text-muted-foreground/30 uppercase tracking-[0.3em] font-medium italic">
          {isAnime
            ? '⚓ Navigating the Autonomous Grand Line'
            : 'Autonomous Future • AI-First Architecture • Next-Gen Infrastructure'
          }
        </p>
      </div>
    </footer>
  );
}
