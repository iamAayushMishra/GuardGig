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

function SectionPatternDivider({ tone = 'cyan', flip = false, variant = 'wave' }) {
  const palette = dividerPalettes[tone] || dividerPalettes.cyan;
  const direction = flip ? -1 : 1;

  return (
    <div className="relative h-20 md:h-24 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle at 14% 50%, ${palette.dot} 0 2px, transparent 2px), radial-gradient(circle at 86% 50%, ${palette.dot} 0 2px, transparent 2px)`,
          backgroundSize: '40px 40px',
        }}
      />
      {variant === 'wave' && (
        <motion.svg
          viewBox="0 0 1200 120"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          animate={{ x: [0, 20 * direction, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.path
            d="M0,68 C180,8 260,108 420,62 C560,18 720,114 900,56 C1030,20 1120,78 1200,42"
            fill="none"
            stroke={palette.line}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeDasharray="8 10"
            animate={{ pathLength: [0.2, 1, 0.2] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.svg>
      )}

      {variant === 'zigzag' && (
        <motion.svg
          viewBox="0 0 1200 120"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          animate={{ x: [0, -22 * direction, 0] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.path
            d="M0,88 L100,34 L200,88 L300,34 L400,88 L500,34 L600,88 L700,34 L800,88 L900,34 L1000,88 L1100,34 L1200,88"
            fill="none"
            stroke={palette.line}
            strokeWidth="2.2"
            strokeLinecap="round"
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.svg>
      )}

      {variant === 'orbits' && (
        <>
          {[24, 46, 68].map((size, idx) => (
            <motion.div
              key={`orbit-${size}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{
                width: `${size * 2}px`,
                height: `${size * 2}px`,
                borderColor: idx % 2 === 0 ? palette.line : palette.glow,
              }}
              animate={{ rotate: direction * (idx % 2 === 0 ? 360 : -360) }}
              transition={{ duration: 8 + idx * 3, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </>
      )}

      {variant === 'mesh' && (
        <>
          <motion.div
            className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2"
            style={{ background: `linear-gradient(90deg, transparent, ${palette.line}, transparent)` }}
            animate={{ scaleX: [0.85, 1.05, 0.85] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent 0 10px, ${palette.dot} 10px 12px), repeating-linear-gradient(-45deg, transparent 0 10px, ${palette.dot} 10px 12px)`,
            }}
            animate={{ backgroundPosition: ['0px 0px, 0px 0px', '30px 0px, -30px 0px', '0px 0px, 0px 0px'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      {variant === 'ribbons' && (
        <motion.svg
          viewBox="0 0 1200 120"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,86 C120,14 290,104 460,46 C620,0 790,90 960,44 C1080,12 1140,48 1200,24"
            fill="none"
            stroke={palette.line}
            strokeWidth="2.8"
            strokeLinecap="round"
            animate={{ y: [0, -7, 0], x: [0, 14 * direction, 0] }}
            transition={{ duration: 6.6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M0,32 C200,94 360,24 520,74 C680,116 840,20 1040,76 C1110,96 1160,88 1200,82"
            fill="none"
            stroke={palette.glow}
            strokeWidth="2"
            strokeDasharray="6 9"
            animate={{ y: [0, 7, 0], x: [0, -12 * direction, 0] }}
            transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.svg>
      )}

      {variant === 'constellation' && (
        <>
          <motion.svg
            viewBox="0 0 1200 120"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <motion.polyline
              points="80,76 210,34 340,60 470,26 620,72 760,40 910,70 1060,30"
              fill="none"
              stroke={palette.line}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.svg>
          {[12, 22, 32, 44, 52, 64, 76, 86].map((left, idx) => (
            <motion.span
              key={`star-${left}`}
              className="absolute h-1.5 w-1.5 rounded-full"
              style={{ left: `${left}%`, top: `${idx % 2 === 0 ? 42 : 62}%`, background: palette.line }}
              animate={{ scale: [1, 1.8, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2 + idx * 0.15, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </>
      )}

      {variant === 'chevrons' && (
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(135deg, transparent 0 22px, ${palette.line} 22px 24px, transparent 24px 44px), repeating-linear-gradient(45deg, transparent 0 22px, ${palette.glow} 22px 24px, transparent 24px 44px)`,
          }}
          animate={{ backgroundPosition: ['0px 0px, 0px 0px', `${36 * direction}px 0px, ${-36 * direction}px 0px`, '0px 0px, 0px 0px'] }}
          transition={{ duration: 7.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {variant === 'strands' && (
        <>
          <motion.div
            className="absolute left-0 right-0 top-[38%] h-[2px]"
            style={{ background: `linear-gradient(90deg, transparent, ${palette.line}, transparent)` }}
            animate={{ x: [0, 18 * direction, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute left-0 right-0 top-[62%] h-[2px]"
            style={{ background: `linear-gradient(90deg, transparent, ${palette.glow}, transparent)` }}
            animate={{ x: [0, -22 * direction, 0] }}
            transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          {[16, 28, 42, 55, 68, 82].map((left, idx) => (
            <motion.div
              key={`strand-dot-${left}`}
              className="absolute h-2 w-2 rounded-full"
              style={{ left: `${left}%`, top: idx % 2 === 0 ? '35%' : '59%', background: palette.line }}
              animate={{ y: [0, idx % 2 === 0 ? 14 : -14, 0], scale: [0.9, 1.3, 0.9] }}
              transition={{ duration: 3 + idx * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </>
      )}

      <motion.div
        className="absolute h-4 w-4 rounded-full"
        style={{
          top: '50%',
          left: flip ? '12%' : '84%',
          background: palette.line,
          boxShadow: `0 0 18px ${palette.glow}`,
        }}
        animate={{ y: [-8, 8, -8], scale: [0.95, 1.35, 0.95] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
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
          <SectionPatternDivider tone="cyan" variant="wave" />
          <Problem />
          <SectionPatternDivider tone="rose" variant="zigzag" flip />
          <Solution />
          <SectionPatternDivider tone="lime" variant="orbits" />
          <Features />
          <SectionPatternDivider tone="cyan" variant="mesh" flip />
          <HowItWorks />
          <SectionPatternDivider tone="rose" variant="ribbons" />
          <Metrics />
          <SectionPatternDivider tone="lime" variant="constellation" flip />
          <TechStack />
          <SectionPatternDivider tone="cyan" variant="chevrons" />
          <Roadmap />
          <SectionPatternDivider tone="rose" variant="strands" flip />
          <CTA />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
