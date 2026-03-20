import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function CTA() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl bg-gradient-to-br from-gradient-1 to-gradient-2 p-1 overflow-hidden"
        >
          {/* Animated Background */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 opacity-50"
            style={{
              background: 'linear-gradient(45deg, #3b82f6, #06b6d4, #10b981, #3b82f6)',
              backgroundSize: '200% 200%',
            }}
          />

          {/* Content */}
          <div className="relative bg-slate-950 rounded-xl p-12 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Ready to Protect Workers?
                </span>
              </h2>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join GuardGig in revolutionizing income protection for India's gig workers. Start your journey today.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('mailto:hello@guardgig.com?subject=GuardGig%20Pilot%20Interest', '_self')}
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition duration-300"
                >
                  Start Free Trial
                  <FiArrowRight className="text-sm" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('how-it-works')}
                  className="px-8 py-4 rounded-lg border-2 border-cyan-500 text-cyan-400 font-bold text-lg hover:bg-cyan-500/10 transition duration-300"
                >
                  Book a Demo
                </motion.button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 pt-8 border-t border-gray-700">
                {[
                  '✓ No credit card required',
                  '✓ 14-day free trial',
                  '✓ Cancel anytime',
                ].map((badge, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-300 text-sm flex items-center gap-2"
                  >
                    <span className="text-cyan-400 font-bold">{badge.split(' ')[0]}</span>
                    {badge.substring(2)}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">Frequently Asked Questions</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'How quick are payouts?',
                a: 'Claims are processed within 1 hour of trigger. Payouts reach your UPI within 24 hours.',
              },
              {
                q: 'What if my claim is rejected?',
                a: 'Our AI scores every claim with transparency. You can see exactly why (or why not) you were paid.',
              },
              {
                q: 'Can I claim multiple times?',
                a: 'Yes! Each disruption is a separate claim. Our fraud detection prevents abuse.',
              },
              {
                q: 'How is premium calculated?',
                a: 'ML model analyzes your zone\'s historical disruptions, weather patterns, and your earnings.',
              },
              {
                q: 'Works with Zomato/Swiggy?',
                a: 'Started with food delivery. Expanding to grocery, e-commerce soon.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes, no lock-in. Weekly policies mean you\'re only committed 7 days at a time.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 hover:border-cyan-500/50 transition duration-300"
              >
                <h4 className="text-lg font-bold text-white mb-3">{faq.q}</h4>
                <p className="text-gray-300 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
