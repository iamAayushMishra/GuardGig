import React from 'react';
import { motion } from 'framer-motion';
import { FiCloud, FiAlertTriangle, FiWifi, FiAlertCircle } from 'react-icons/fi';

export default function Problem() {
  const problems = [
    {
      icon: FiCloud,
      title: 'Weather Disruptions',
      description: 'Heavy rain, floods, and extreme heat force workers offline, causing 20-30% income loss per month.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiAlertTriangle,
      title: 'Pollution & AQI',
      description: 'Air quality spikes force workers to stay home. No delivery = no income, with zero compensation.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FiWifi,
      title: 'App Downtime',
      description: 'Platform outages leave workers unable to accept orders. Lost hours. Lost wages. No safety net.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiAlertCircle,
      title: 'Social Disruptions',
      description: 'Curfews, strikes, and market closures cut off access to pickup/drop zones instantly.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="problem" className="py-20 px-4 relative overflow-hidden">
      <motion.div
        className="absolute -left-20 top-20 h-48 w-48 rounded-full border border-cyan-300/20"
        animate={{ rotate: [0, 360], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute -right-10 bottom-12 h-40 w-40 rounded-3xl border border-rose-300/20"
        animate={{ rotate: [12, -12, 12], y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              The Problem
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            15 million gig workers in India lose 20-30% of their monthly earnings to uncontrollable disruptions. Currently, they have zero protection.
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            {['Monsoon Shock', 'AQI Spike', 'Outage Risk'].map((chip, idx) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-white/5 border border-white/15 text-cyan-100"
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Problem Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -12, rotate: idx % 2 === 0 ? -1.2 : 1.2, boxShadow: '0 20px 40px rgba(0, 217, 255, 0.2)' }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/65 to-slate-900/70 border border-gray-700/50 backdrop-blur-sm hover:border-gray-500/80 transition duration-300 group cursor-pointer overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0, transparent 35%), radial-gradient(circle at 85% 12%, rgba(34,211,238,0.2) 0 28px, transparent 30px)',
                  }}
                />
                <div className="absolute right-4 top-4 text-[10px] uppercase tracking-[0.2em] text-slate-300/70">Risk</div>
                <div className={`inline-block p-4 rounded-lg bg-gradient-to-br ${problem.color} mb-6 group-hover:scale-110 transition duration-300`}>
                  <Icon className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{problem.title}</h3>
                <p className="text-gray-300 relative z-10">{problem.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-6">The Impact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">₹6,000-8,000</div>
              <p className="text-gray-300">Average monthly income loss per worker</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">2-3x/month</div>
              <p className="text-gray-300">Frequency of major disruptions</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">0 Solutions</div>
              <p className="text-gray-300">Current insurance products available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
