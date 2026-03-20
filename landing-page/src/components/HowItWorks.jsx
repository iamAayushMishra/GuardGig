import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function HowItWorks() {
  const steps = [
    {
      icon: '👤',
      title: 'Sign Up',
      description: 'OTP-based registration in 2 minutes. Provide work zone and earnings info.',
      details: ['• Mobile-first onboarding', '• No documentation required', '• Instant account activation'],
    },
    {
      icon: '🧮',
      title: 'Get Premium',
      description: 'AI calculates your weekly premium based on your zone risk factors.',
      details: ['• ₹45-60/week pricing', '• Dynamic adjustment weekly', '• Transparent breakdown'],
    },
    {
      icon: '🛡️',
      title: 'Stay Protected',
      description: 'System monitors disruptions in your zone 24/7 automatically.',
      details: ['• 5 parametric triggers', '• Real-time monitoring', '• Smart fraud detection'],
    },
    {
      icon: '💸',
      title: 'Get Paid',
      description: 'Claims auto-trigger. Money reaches your UPI in <24 hours.',
      details: ['• No manual claim filing', '• T+1 payouts', '• Track in real-time'],
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
    <section id="how-it-works" className="py-20 px-4">
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
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Simple 4-step process to get protected. No complexity. No waiting.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {steps.map((step, idx) => {
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Icon Section */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0"
                  >
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center shadow-lg">
                      <div className="absolute inset-1 rounded-full bg-slate-950 flex items-center justify-center text-3xl">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center text-white font-bold shadow-lg">
                        {idx + 1}
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, didx) => (
                        <motion.li
                          key={didx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: didx * 0.1 }}
                          viewport={{ once: true }}
                          className="text-cyan-400 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow */}
                  {idx < steps.length - 1 && (
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="hidden md:block text-3xl text-cyan-500"
                    >
                      <FiArrowRight className="rotate-90" />
                    </motion.div>
                  )}
                </div>

                {/* Divider */}
                {idx < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent origin-left"
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline Alternative View (for smaller screens) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 5 }}
                className="p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/20 hover:border-cyan-500/50 transition duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center font-bold text-white">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{step.title}</h4>
                    <p className="text-sm text-gray-300 mt-1">{step.description}</p>
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
