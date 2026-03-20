import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiZap, FiCheckCircle } from 'react-icons/fi';

export default function Solution() {
  const solutions = [
    {
      icon: FiCheckCircle,
      title: 'Zero-Touch Claims',
      description: 'No paperwork. No manual filing. Claims are auto-triggered when disruptions occur.',
    },
    {
      icon: FiZap,
      title: 'Weekly Pricing',
      description: 'Premiums aligned with worker payouts (₹45-60/week), not misaligned monthly cycles.',
    },
    {
      icon: FiTrendingUp,
      title: 'AI-Powered Fraud Detection',
      description: 'XGBoost models validate GPS, weather, claim frequency to prevent abuse.',
    },
  ];

  const benefits = [
    'T+1 Payouts via UPI',
    'Dynamic Risk Pricing',
    '5 Parametric Triggers',
    'Real-Time Dashboard',
    'Transparent Algorithms',
    'No Documentation Required',
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
    <section id="solution" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Our Solution
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            GuardGig replaces traditional insurance with an event-driven payout system that actually works for gig workers.
          </p>
        </motion.div>

        {/* Core Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="p-8 rounded-xl bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/20 backdrop-blur-sm hover:border-green-500/50 transition duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block p-4 rounded-lg bg-gradient-to-br from-green-500 to-cyan-500 mb-6"
                >
                  <Icon className="text-3xl text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* How It Differs */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Why We're Different</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-red-400 mb-4">❌ Traditional Insurance</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• 15-30 day claim cycles</li>
                <li>• Monthly premium misalignment</li>
                <li>• Manual documentation required</li>
                <li>• Limited to health/accidents</li>
                <li>• High rejection rates</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-green-400 mb-4">✅ GuardGig</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• T+1 automatic payouts</li>
                <li>• Weekly premium cycles</li>
                <li>• Zero-touch claims (auto-triggered)</li>
                <li>• Income loss protection</li>
                <li>• 5-layer fraud detection</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Key Benefits</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition duration-300 flex items-center gap-4"
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex-shrink-0" />
                <span className="text-white font-semibold">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
