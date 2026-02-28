import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ParallaxBackground } from '@/components/ParallaxBackground';
import { LoadingScreen } from '@/components/LoadingScreen';
import { CustomCursor } from '@/components/CustomCursor';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';

// Lazy load sections below the fold for better performance
const AboutSection = lazy(() => import('@/components/sections/AboutSection').then(m => ({ default: m.AboutSection })));
const SkillsSection = lazy(() => import('@/components/sections/SkillsSection').then(m => ({ default: m.SkillsSection })));
const EducationSection = lazy(() => import('@/components/sections/EducationSection').then(m => ({ default: m.EducationSection })));
const ExperienceSection = lazy(() => import('@/components/sections/ExperienceSection').then(m => ({ default: m.ExperienceSection })));
const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const BlogSection = lazy(() => import('@/components/sections/BlogSection').then(m => ({ default: m.BlogSection })));
const ContactSection = lazy(() => import('@/components/sections/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));

const Index = () => {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <CustomCursor />
      <div className="relative min-h-screen overflow-x-hidden">
        <ParallaxBackground />
        <Navigation />

        <main className="relative z-10">
          <HeroSection />
          <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" /></div>}>
            <AboutSection />
            <SkillsSection />
            <EducationSection />
            <ExperienceSection />
            <ProjectsSection />
            <BlogSection />
            <ContactSection />
            <Footer />
          </Suspense>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
