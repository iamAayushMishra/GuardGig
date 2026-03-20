import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export default function Hero() {
  // Ring 1: 1 avatar | Ring 2: 2 avatars | Ring 3: 6 avatars | Ring 4: 10 avatars
  const orbitRadii = [90, 130, 170, 210];

  const deliveryAvatars = [
    // RING 1: 1 avatar (Elected First)
    { face: '🧔🏽', color: 'from-amber-300 to-orange-500', ring: 'ring-amber-300/80', orbit: 0, speed: 12, start: 0, size: 48, clockwise: true },

    // RING 2: 2 avatars (180° apart)
    { face: '👨🏻', color: 'from-cyan-300 to-blue-500', ring: 'ring-cyan-300/80', orbit: 1, speed: 14, start: 0, size: 44, clockwise: false },
    { face: '👳🏽', color: 'from-emerald-300 to-green-500', ring: 'ring-emerald-300/80', orbit: 1, speed: 14, start: 180, size: 44, clockwise: false },

    // RING 3: 6 avatars (60° apart)
    { face: '👨🏾', color: 'from-violet-300 to-fuchsia-500', ring: 'ring-fuchsia-300/80', orbit: 2, speed: 16, start: 0, size: 42, clockwise: true },
    { face: '👦🏽', color: 'from-rose-300 to-pink-500', ring: 'ring-rose-300/80', orbit: 2, speed: 16, start: 60, size: 42, clockwise: true },
    { face: '👩🏻', color: 'from-indigo-300 to-purple-500', ring: 'ring-indigo-300/80', orbit: 2, speed: 16, start: 120, size: 42, clockwise: true },
    { face: '👱🏿', color: 'from-lime-300 to-emerald-500', ring: 'ring-lime-300/80', orbit: 2, speed: 16, start: 180, size: 42, clockwise: true },
    { face: '👴🏽', color: 'from-orange-300 to-amber-500', ring: 'ring-orange-300/80', orbit: 2, speed: 16, start: 240, size: 42, clockwise: true },
    { face: '👵🏾', color: 'from-pink-300 to-rose-500', ring: 'ring-pink-300/80', orbit: 2, speed: 16, start: 300, size: 42, clockwise: true },

    // RING 4: 10 avatars (36° apart)
    { face: '🧑🏽', color: 'from-blue-300 to-cyan-500', ring: 'ring-blue-300/80', orbit: 3, speed: 18, start: 0, size: 40, clockwise: false },
    { face: '🧔🏻', color: 'from-teal-300 to-cyan-500', ring: 'ring-teal-300/80', orbit: 3, speed: 18, start: 36, size: 40, clockwise: false },
    { face: '👨🏼', color: 'from-cyan-300 to-blue-500', ring: 'ring-cyan-300/80', orbit: 3, speed: 18, start: 72, size: 40, clockwise: false },
    { face: '👯', color: 'from-purple-300 to-pink-500', ring: 'ring-purple-300/80', orbit: 3, speed: 18, start: 108, size: 40, clockwise: false },
    { face: '🧒🏽', color: 'from-fuchsia-300 to-pink-500', ring: 'ring-fuchsia-300/80', orbit: 3, speed: 18, start: 144, size: 40, clockwise: false },
    { face: '👶🏾', color: 'from-pink-300 to-rose-500', ring: 'ring-pink-300/80', orbit: 3, speed: 18, start: 180, size: 40, clockwise: false },
    { face: '👨🏿', color: 'from-orange-300 to-yellow-500', ring: 'ring-orange-300/80', orbit: 3, speed: 18, start: 216, size: 40, clockwise: false },
    { face: '👩🏼', color: 'from-yellow-300 to-orange-500', ring: 'ring-yellow-300/80', orbit: 3, speed: 18, start: 252, size: 40, clockwise: false },
    { face: '🧓🏿', color: 'from-amber-300 to-orange-500', ring: 'ring-amber-300/80', orbit: 3, speed: 18, start: 288, size: 40, clockwise: false },
    { face: '👴🏿', color: 'from-rose-300 to-pink-500', ring: 'ring-rose-300/80', orbit: 3, speed: 18, start: 324, size: 40, clockwise: false },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-10 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-block"
            >
              <div className="px-4 py-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 backdrop-blur-sm">
                <span className="text-cyan-300 font-semibold text-sm">AI-Powered Insurance for Gig Workers</span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            >
              <span className="text-white">Protect Income.</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
                Trigger Payouts Instantly.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              GuardGig monitors weather, outage, and disruption events in real time and sends automatic payouts to workers in under 24 hours.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg"
              >
                Start Protection
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, borderColor: '#67e8f9' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection('how-it-works')}
                className="px-8 py-4 rounded-full border-2 border-cyan-300/50 text-cyan-100 font-bold text-lg hover:bg-cyan-500/10"
              >
                See How It Works
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { number: '15M+', label: 'Workers' },
                { number: 'T+1', label: 'Payout' },
                { number: '95%', label: 'Fraud Defense' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-sm"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-slate-300 text-xs md:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative h-[420px] md:h-[500px] flex items-center justify-center"
          >
            <motion.div
              className="absolute -top-3 right-5 px-4 py-2 rounded-full bg-fuchsia-400/20 border border-fuchsia-300/40 text-fuchsia-100 text-sm font-semibold"
              animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Auto Claims
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-6 md:left-10 px-4 py-2 rounded-full bg-cyan-400/20 border border-cyan-300/40 text-cyan-100 text-sm font-semibold"
              animate={{ y: [0, 8, 0], rotate: [2, -2, 2] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              UPI Payouts
            </motion.div>

            {orbitRadii.map((radius, idx) => (
              <div
                key={`guide-${radius}`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                  borderColor: idx % 2 === 0 ? 'rgba(103, 232, 249, 0.22)' : 'rgba(232, 121, 249, 0.2)',
                }}
              />
            ))}

            {deliveryAvatars.map((avatar) => (
              <motion.div
                key={`${avatar.face}-${avatar.start}`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ rotate: avatar.start }}
                animate={{ rotate: avatar.start + (avatar.clockwise ? 360 : -360) }}
                transition={{ duration: avatar.speed, repeat: Infinity, ease: 'linear' }}
              >
                <div
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    top: `-${orbitRadii[avatar.orbit]}px`,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    className={`rounded-full bg-gradient-to-br ${avatar.color} p-[2px] shadow-[0_0_18px_rgba(34,211,238,0.42)] ring-2 ${avatar.ring}`}
                    style={{ width: avatar.size, height: avatar.size }}
                  >
                    <div className="w-full h-full rounded-full bg-slate-950/95 flex items-center justify-center text-2xl">
                      {avatar.face}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500/30 to-fuchsia-500/30 border border-white/30 backdrop-blur-md flex flex-col items-center justify-center"
            >
              <div className="text-5xl font-black text-white">20k+</div>
              <div className="text-slate-200">Protected Workers</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollToSection('problem')}
            className="p-3 rounded-full border border-cyan-500/50 bg-cyan-500/5 backdrop-blur-sm cursor-pointer"
          >
            <FiChevronDown className="text-cyan-400 text-xl" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
