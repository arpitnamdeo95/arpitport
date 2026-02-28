import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
    const [show, setShow] = useState(true);
    const [statusIndex, setStatusIndex] = useState(0);
    const statuses = [
        "BOOTING_CORE_V1.0",
        "SYNCING_NEURAL_NODES",
        "ESTABLISHING_PULSE_LINK",
        "READY_FOR_INTERFACE"
    ];

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 1500);
        const interval = setInterval(() => {
            setStatusIndex(prev => (prev + 1) % statuses.length);
        }, 500);
        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617] overflow-hidden"
                    exit={{
                        opacity: 0,
                        clipPath: 'polygon(0 45%, 100% 45%, 100% 55%, 0 55%)',
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                >
                    {/* Visual Energy Layers */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_100%)]" />
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                        <motion.div
                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-150"
                        />
                    </div>

                    <div className="relative text-center z-10">
                        {/* Premium Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className="mb-8"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[9px] font-black tracking-[0.4em] text-primary uppercase">
                                <motion.div
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="w-1.5 h-1.5 rounded-full bg-primary"
                                />
                                SYSTEM_ACTIVE
                            </div>
                        </motion.div>

                        <div className="overflow-hidden flex flex-col items-center justify-center -space-y-4 md:-space-y-8 mb-12">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase"
                            >
                                LOGICGRID
                            </motion.h1>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                            />
                            <motion.h1
                                initial={{ y: "-100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="text-primary text-6xl md:text-9xl font-black tracking-tighter uppercase relative"
                            >
                                LABS
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.1, repeat: 10, repeatDelay: 0.5 }}
                                    className="absolute -right-4 top-0 text-xl font-thin text-white/20"
                                >
                                    TM
                                </motion.span>
                            </motion.h1>
                        </div>

                        {/* Status Console Style */}
                        <div className="mt-12 space-y-4">
                            <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden mx-auto relative">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_15px_rgba(59,130,246,1)]"
                                    initial={{ left: "-100%" }}
                                    animate={{ left: "100%" }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                            <div className="h-4 flex items-center justify-center gap-1">
                                <span className="text-[10px] font-mono text-white/40 tracking-[0.2em]">
                                    {statuses[statusIndex]}
                                </span>
                                <motion.span
                                    animate={{ opacity: [0, 1] }}
                                    transition={{ duration: 0.1, repeat: Infinity }}
                                    className="w-1 h-3 bg-primary/60"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Scanning Line */}
                    <motion.div
                        initial={{ top: "-100%" }}
                        animate={{ top: "100%" }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-x-0 h-[20vh] bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
