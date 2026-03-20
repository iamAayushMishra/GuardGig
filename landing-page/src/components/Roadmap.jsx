import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiArrowRight } from 'react-icons/fi';

export default function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Foundation & Discovery',
      timeline: 'March 4-20 (Week 1-2)',
      status: 'Completed',
      icon: FiCheckCircle,
      color: 'from-green-500 to-emerald-500',
      deliverables: [
        'Problem research & validation',
        'Database schema finalized',
        'UI/UX wireframes',
        '2-minute video',
        'GitHub repository setup',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Core Features - Automation',
      timeline: 'March 21 - April 4 (Week 3-4)',
      status: 'In Progress',
      icon: FiClock,
      color: 'from-blue-500 to-cyan-500',
      deliverables: [
        'User registration & KYC',
        'ML premium calculation',
        '5 parametric triggers',
        'Auto-claim system',
        'Mock payout system',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Advanced Features - Scale',
      timeline: 'April 5-17 (Week 5-6)',
      status: 'Upcoming',
      icon: FiArrowRight,
      color: 'from-purple-500 to-pink-500',
      deliverables: [
        'Advanced fraud detection',
        'Instant payout system',
        'Analytics dashboards',
        'Admin panel',
        '5-minute demo video',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Optimization & Scaling',
      timeline: 'Post-Submission',
      status: 'Planned',
      icon: FiArrowRight,
      color: 'from-indigo-500 to-purple-500',
      deliverables: [
        'Performance optimization',
        'Security hardening',
        'Multi-persona expansion',
        'Production deployment',
        'Monitoring & alerts',
      ],
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="roadmap" className="py-20 px-4">
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
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Development Roadmap
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            6-week journey to build a complete AI-powered insurance platform
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {phases.map((phase, idx) => {
            const StatusIcon = phase.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="group relative"
              >
                <div className={`p-6 rounded-xl bg-gradient-to-r ${phase.color} bg-opacity-10 border border-opacity-30 backdrop-blur-sm hover:border-opacity-50 transition duration-300`}>
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}>
                      <StatusIcon className="text-2xl text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                          <p className="text-gray-300 text-sm mt-1">{phase.phase}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className={`px-4 py-1 rounded-full text-sm font-semibold inline-block w-fit ${
                            phase.status === 'Completed'
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                              : phase.status === 'In Progress'
                              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                              : 'bg-slate-700/50 text-gray-300 border border-slate-600/50'
                          }`}>
                            {phase.status}
                          </span>
                          <span className="text-gray-400 text-xs">{phase.timeline}</span>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="mt-4">
                        <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">Key Deliverables</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                          {phase.deliverables.map((deliverable, didx) => (
                            <motion.div
                              key={didx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: didx * 0.05 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-2 text-sm text-gray-300 group/item hover:text-white transition duration-300"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover/item:scale-150 transition duration-300" />
                              {deliverable}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Connector */}
                {idx < phases.length - 1 && (
                  <motion.div
                    animate={{ scaleY: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -bottom-6 left-8 w-0.5 h-6 bg-gradient-to-b from-white to-transparent"
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-indigo-500/20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Key Milestones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                milestone: 'MVP Ready',
                date: 'March 20, 2026',
                description: 'Full project plan & GitHub repo',
              },
              {
                milestone: 'Beta Launch',
                date: 'April 4, 2026',
                description: 'Core features live with test users',
              },
              {
                milestone: 'Production Ready',
                date: 'April 17, 2026',
                description: 'Advanced features & full submission',
              },
              {
                milestone: 'Public Launch',
                date: 'Q2 2026',
                description: 'Multi-persona scaling begins',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg bg-slate-800/50 border border-indigo-500/20 hover:border-indigo-500/50 transition duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.milestone}</h4>
                    <p className="text-xs text-gray-400 mb-2">{item.date}</p>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
