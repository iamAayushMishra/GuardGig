import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import './App.css';

// Lazy load components
const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/Hero'));
const Problem = React.lazy(() => import('./components/Problem'));
const Solution = React.lazy(() => import('./components/Solution'));
const Features = React.lazy(() => import('./components/Features'));
const HowItWorks = React.lazy(() => import('./components/HowItWorks'));
const TechStack = React.lazy(() => import('./components/TechStack'));
const Metrics = React.lazy(() => import('./components/Metrics'));
const Roadmap = React.lazy(() => import('./components/Roadmap'));
const CTA = React.lazy(() => import('./components/CTA'));
const Footer = React.lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
    <div className="text-cyan-400 text-xl">Loading...</div>
  </div>
);

const dividerPalettes = {
  cyan: {
    line: 'rgba(34, 211, 238, 0.45)',
    dot: 'rgba(103, 232, 249, 0.2)',
    glow: 'rgba(14, 116, 144, 0.35)',
  },
  rose: {
    line: 'rgba(251, 113, 133, 0.4)',
    dot: 'rgba(253, 164, 175, 0.18)',
    glow: 'rgba(190, 24, 93, 0.3)',
  },
  lime: {
    line: 'rgba(163, 230, 53, 0.35)',
    dot: 'rgba(190, 242, 100, 0.18)',
    glow: 'rgba(63, 98, 18, 0.35)',
  },
};

function SectionPatternDivider({ tone = 'cyan', flip = false }) {
  const palette = dividerPalettes[tone] || dividerPalettes.cyan;

  return (
    <div className="relative h-20 md:h-24 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, ${palette.dot} 0 2px, transparent 2px), radial-gradient(circle at 80% 50%, ${palette.dot} 0 2px, transparent 2px)`,
          backgroundSize: '34px 34px',
        }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[2px] w-[110%] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${palette.line} 30%, ${palette.line} 70%, transparent 100%)`,
          transform: `translate(-50%, -50%) ${flip ? 'rotate(-5deg)' : 'rotate(5deg)'}`,
          boxShadow: `0 0 30px ${palette.glow}`,
        }}
        animate={{ x: flip ? [30, -30, 30] : [-30, 30, -30] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full"
        style={{
          left: flip ? '18%' : '82%',
          background: palette.line,
          boxShadow: `0 0 16px ${palette.glow}`,
        }}
        animate={{ scale: [1, 1.4, 1], y: [0, -6, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 min-h-screen text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '30%', right: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ bottom: '10%', left: '50%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Suspense fallback={<LoadingFallback />}>
          <Navbar />
          <Hero />
          <SectionPatternDivider tone="cyan" />
          <Problem />
          <SectionPatternDivider tone="rose" flip />
          <Solution />
          <SectionPatternDivider tone="lime" />
          <Features />
          <SectionPatternDivider tone="cyan" flip />
          <HowItWorks />
          <SectionPatternDivider tone="rose" />
          <Metrics />
          <SectionPatternDivider tone="lime" flip />
          <TechStack />
          <SectionPatternDivider tone="cyan" />
          <Roadmap />
          <SectionPatternDivider tone="rose" flip />
          <CTA />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
