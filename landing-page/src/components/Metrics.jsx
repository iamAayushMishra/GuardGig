import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Custom Counter Component
function Counter({ end, duration = 2500, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(end * progress));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [end, duration]);

  return (
    <>
      {prefix && <span>{prefix}</span>}
      {count.toLocaleString()}
      {suffix && <span>{suffix}</span>}
    </>
  );
}

export default function Metrics() {
  const [isVisible, setIsVisible] = useState(false);

  const metrics = [
    { label: 'Gig Workers Protected', value: 50000, suffix: '+', color: 'from-blue-500 to-cyan-500' },
    { label: 'Claims Processed', value: 125000, suffix: '+', color: 'from-green-500 to-emerald-500' },
    { label: 'Income Protected', value: 2500, prefix: '₹', suffix: 'Cr+', color: 'from-purple-500 to-pink-500' },
    { label: 'Avg Payout Time', value: 1, suffix: ' day', color: 'from-orange-500 to-red-500' },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="metrics" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setIsVisible(true)}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">
              By The Numbers
            </span>
          </h2>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto">
            GuardGig's impact across India's gig economy
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => setIsVisible(true)}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 217, 255, 0.3)' }}
              className="p-8 rounded-xl bg-slate-900/70 border border-cyan-300/30 backdrop-blur-sm hover:border-cyan-300/70 transition duration-300 text-center group"
            >
              <div className="mb-4">
                <div className={`text-5xl font-black bg-gradient-to-r ${metric.color} bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]`}>
                  {isVisible ? (
                    <Counter
                      end={metric.value}
                      duration={2500}
                      prefix={metric.prefix || ''}
                      suffix={metric.suffix || ''}
                    />
                  ) : (
                    '0'
                  )}
                </div>
              </div>
              <p className="text-white font-semibold text-lg">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Workers Trust GuardGig</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🛡️',
                stat: '95%',
                title: 'Fraud Detection',
                desc: 'XGBoost ML catches anomalies',
              },
              {
                icon: '⚡',
                stat: '<1s',
                title: 'Claim Speed',
                desc: 'From trigger to approval',
              },
              {
                icon: '✅',
                stat: '100%',
                title: 'Transparency',
                desc: 'See exactly why you\'re paid',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg bg-slate-800/50 border border-blue-500/20 hover:border-blue-500/50 text-center transition duration-300"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{item.stat}</div>
                <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
