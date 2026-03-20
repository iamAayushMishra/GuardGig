import React from 'react';
import { motion } from 'framer-motion';
import { FiCloud, FiWind, FiThermometer, FiServer, FiMapPin, FiTrendingUp } from 'react-icons/fi';

export default function Features() {
  const triggers = [
    {
      icon: FiCloud,
      title: 'Rainfall Trigger',
      threshold: '>50mm',
      description: 'Heavy rainfall paralyzes deliveries',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiWind,
      title: 'AQI Trigger',
      threshold: '>300',
      description: 'Hazardous air quality forces workers offline',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FiThermometer,
      title: 'Temperature Trigger',
      threshold: '<5°C or >45°C',
      description: 'Extreme temperatures make work impossible',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: FiServer,
      title: 'App Downtime',
      threshold: '>30 min',
      description: 'Platform unavailability cuts worker access',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiMapPin,
      title: 'Zone Closure',
      threshold: 'Unplanned',
      description: 'Market/area closure blocks deliveries',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiTrendingUp,
      title: 'AI Risk Scoring',
      threshold: 'Dynamic',
      description: 'ML adjusts premiums based on risk',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="py-20 px-4">
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Parametric Triggers
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            GuardGig monitors real-time environmental data and automatically triggers payouts when conditions affect worker income.
          </p>

          <div className="mt-5 flex justify-center gap-3 flex-wrap">
            <motion.span
              animate={{ y: [0, -6, 0], rotate: [-4, 3, -4] }}
              transition={{ duration: 3.2, repeat: Infinity }}
              className="px-4 py-1 rounded-full bg-fuchsia-400/20 border border-fuchsia-300/50 text-fuchsia-100 text-sm font-semibold"
            >
              Smart Triggers
            </motion.span>
            <motion.span
              animate={{ y: [0, 6, 0], rotate: [4, -3, 4] }}
              transition={{ duration: 3.6, repeat: Infinity }}
              className="px-4 py-1 rounded-full bg-cyan-400/20 border border-cyan-300/50 text-cyan-100 text-sm font-semibold"
            >
              Zero Paperwork
            </motion.span>
          </div>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {triggers.map((trigger, idx) => {
            const Icon = trigger.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, rotate: idx % 2 === 0 ? -1.5 : 1.5, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.28)' }}
                className="group relative overflow-hidden rounded-[1.4rem] p-6 bg-gradient-to-br from-slate-800/65 to-slate-900/65 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/60 transition duration-300"
              >
                {/* Gradient Hover Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${trigger.color} transition duration-300`} />

                <motion.div
                  animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.45, 0.25] }}
                  transition={{ duration: 2.8 + idx * 0.2, repeat: Infinity }}
                  className="absolute -right-8 -top-8 w-24 h-24 rounded-full border border-white/20"
                />

                <div className="relative z-10">
                  <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${trigger.color} mb-4 group-hover:scale-110 transition duration-300`}>
                    <Icon className="text-2xl text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{trigger.title}</h3>

                  <div className="mb-3 inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
                    <span className="text-sm font-semibold text-purple-300">{trigger.threshold}</span>
                  </div>

                  <p className="text-gray-300 text-sm">{trigger.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* How Triggers Work */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-8">How Triggers Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Monitor', desc: 'APIs track weather, app status, zone status 24/7' },
              { step: '2', title: 'Detect', desc: 'System identifies trigger conditions in real-time' },
              { step: '3', title: 'Validate', desc: 'Fraud engine verifies worker eligibility' },
              { step: '4', title: 'Pay', desc: 'Funds instantly transferred to UPI' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-slate-800/50 border border-purple-500/20 text-center hover:border-purple-500/50 transition duration-300"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">{item.step}</div>
                <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
