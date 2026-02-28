import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useRef, useEffect, useState } from 'react';

export function ParallaxBackground() {
  const { isAnime, isDark } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll();

  const skyY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const oceanY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const fogY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const fogOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.2]);

  const smoothMouseX = useSpring(mousePosition.x, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mousePosition.y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (isAnime && !isMobile) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isAnime, isMobile]);

  if (!isAnime) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
        {/* Deep Gradient layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(139,92,246,0.08),transparent_50%)]" />

        {/* Neural Network / Grid animation */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.2]">
          <pattern
            id="logic-grid-pattern"
            width={isMobile ? "40" : "80"}
            height={isMobile ? "40" : "80"}
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" className="fill-primary/40" />
            {!isMobile && (
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="rgba(59,130,246,0.1)"
                strokeWidth="0.5"
              />
            )}
          </pattern>
          <rect width="100%" height="100%" fill="url(#logic-grid-pattern)" />
        </svg>

        {/* Dynamic Nodes and Connecting Lines */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(isMobile ? 8 : 20)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={!isMobile ? {
                x: [0, Math.random() * 40 - 20, 0],
                y: [0, Math.random() * 40 - 20, 0],
                opacity: [0.2, 0.5, 0.2],
              } : { opacity: [0.2, 0.5, 0.2] }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 bg-primary/40 blur-sm rounded-full animate-pulse" />
            </motion.div>
          ))}
        </div>

        {/* Large sweeping light beams */}
        <motion.div
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[140px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        {!isMobile && (
          <motion.div
            className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[140px]"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, delay: 2 }}
          />
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-hero-gradient transition-colors duration-700" />

      {/* Sky layer - slowest */}
      <motion.div
        className="parallax-layer"
        style={{ y: skyY, x: smoothMouseX }}
      >
        <div
          className="absolute inset-0 transition-colors duration-700"
          style={{ background: 'var(--sky-layer)' }}
        />
        {/* Stars for dark mode */}
        {isDark && (
          <div className="absolute inset-0">
            {[...Array(isMobile ? 15 : 50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white/40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 60}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        )}

        {/* Sun/Moon */}
        <motion.div
          className="absolute"
          style={{
            right: '15%',
            top: '10%',
            width: isDark ? '60px' : '100px',
            height: isDark ? '60px' : '100px',
            borderRadius: '50%',
            background: isDark
              ? 'radial-gradient(circle, hsl(45 100% 90%) 0%, hsl(45 100% 70%) 100%)'
              : 'radial-gradient(circle, hsl(40 100% 70%) 0%, hsl(30 100% 50%) 100%)',
            boxShadow: isDark
              ? '0 0 60px hsla(45 100% 90% / 0.4)'
              : '0 0 100px hsla(40 100% 70% / 0.6)',
          }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Ocean layer - medium speed */}
      <motion.div
        className="parallax-layer"
        style={{
          y: oceanY,
          top: '55%',
        }}
      >
        {/* Ocean gradient */}
        <div
          className="absolute inset-0 transition-colors duration-700"
          style={{
            background: isDark
              ? 'linear-gradient(180deg, transparent 0%, hsl(210 60% 12%) 20%, hsl(210 70% 8%) 100%)'
              : 'linear-gradient(180deg, transparent 0%, hsl(199 89% 70%) 20%, hsl(199 80% 55%) 100%)',
          }}
        />

        {/* Wave lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[200%] h-px"
            style={{
              top: `${20 + i * 8}%`,
              left: '-50%',
              background: isDark
                ? `linear-gradient(90deg, transparent, hsla(199 89% 48% / ${0.1 + i * 0.05}), transparent)`
                : `linear-gradient(90deg, transparent, hsla(0 0% 100% / ${0.2 + i * 0.1}), transparent)`,
            }}
            animate={{
              x: ['0%', '-25%', '0%'],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Fog layer - fastest with depth */}
      <motion.div
        className="parallax-layer"
        style={{
          y: fogY,
          opacity: fogOpacity,
          x: smoothMouseY,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse 100% 50% at 50% 80%, hsla(210 40% 30% / 0.4) 0%, transparent 70%)'
              : 'radial-gradient(ellipse 100% 50% at 50% 80%, hsla(0 0% 100% / 0.5) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${30 + Math.random() * 50}%`,
              background: isDark
                ? `hsla(37 100% 60% / ${0.2 + Math.random() * 0.3})`
                : `hsla(199 89% 48% / ${0.3 + Math.random() * 0.3})`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
}
