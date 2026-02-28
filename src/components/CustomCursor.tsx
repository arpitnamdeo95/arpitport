import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

export function CustomCursor() {
    const { isAnime } = useTheme();
    const [isHovering, setIsHovering] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:block"
            style={{
                x: cursorX,
                y: cursorY,
            }}
        >
            <motion.div
                className="w-full h-full rounded-full border-2 border-primary mix-blend-difference"
                animate={{
                    scale: isHovering ? 2 : 1,
                    backgroundColor: isHovering ? 'hsl(var(--primary))' : 'transparent',
                    opacity: isHovering ? 0.3 : 1,
                }}
                transition={{ duration: 0.3 }}
            />
            {!isAnime && (
                <motion.div
                    className="absolute inset-0 rounded-full bg-primary/20 blur-sm"
                    animate={{
                        scale: isHovering ? 1.5 : 0,
                    }}
                />
            )}
        </motion.div>
    );
}
