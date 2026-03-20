import React from 'react';
import { motion } from 'framer-motion';

export default function TechStack() {
  const techLayers = [
    {
      category: 'Frontend',
      emoji: '⚛️',
      techs: [
        { name: 'React 18', emoji: '⚛️', color: 'text-blue-400' },
        { name: 'TypeScript', emoji: '🔷', color: 'text-blue-500' },
        { name: 'Tailwind CSS', emoji: '🎨', color: 'text-cyan-400' },
      ],
      description: 'Modern, interactive UI with real-time updates',
    },
    {
      category: 'Backend',
      emoji: '🖥️',
      techs: [
        { name: 'Node.js', emoji: '🟢', color: 'text-green-500' },
        { name: 'Express', emoji: '⚙️', color: 'text-gray-400' },
        { name: 'MongoDB', emoji: '🍃', color: 'text-green-600' },
      ],
      description: 'Scalable APIs with real-time trigger monitoring',
    },
    {
      category: 'ML/AI',
      emoji: '🤖',
      techs: [
        { name: 'Python', emoji: '🐍', color: 'text-yellow-500' },
        { name: 'XGBoost', emoji: '📈', color: 'text-orange-500' },
        { name: 'Scikit-learn', emoji: '📊', color: 'text-purple-400' },
      ],
      description: 'Fraud detection & premium calculation models',
    },
    {
      category: 'DevOps',
      emoji: '🐳',
      techs: [
        { name: 'Docker', emoji: '🐳', color: 'text-cyan-500' },
        { name: 'GitHub Actions', emoji: '🔄', color: 'text-gray-400' },
        { name: 'AWS/Railway', emoji: '☁️', color: 'text-orange-600' },
      ],
      description: 'Containerized, automated deployment pipeline',
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
    <section id="tech-stack" className="py-20 px-4">
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
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Modern, scalable, and production-ready architecture
          </p>
        </motion.div>

        {/* Tech Layers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {techLayers.map((layer, idx) => {
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="p-8 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 backdrop-blur-sm hover:border-indigo-500/50 transition duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-2xl">
                    {layer.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{layer.category}</h3>
                </div>

                <p className="text-gray-300 mb-6">{layer.description}</p>

                <div className="flex flex-wrap gap-3">
                  {layer.techs.map((tech, tidx) => {
                    const TechIcon = tech.icon;
                    return (
                      <motion.div
                        key={tidx}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-indigo-500/20 hover:border-indigo-500/50 transition duration-300"
                      >
                        {TechIcon ? (
                          <TechIcon className={`text-lg ${tech.color}`} />
                        ) : (
                          <span className="text-lg">{tech.emoji}</span>
                        )}
                        <span className="text-sm font-semibold text-white">{tech.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-indigo-500/20 backdrop-blur-sm overflow-x-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-8">System Architecture</h3>

          <div className="min-w-max">
            <div className="flex items-center gap-4 justify-center flex-wrap md:justify-between">
              {/* Frontend */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 min-w-fit"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <div className="font-bold text-white">React App</div>
                  <div className="text-xs text-gray-400 mt-1">TypeScript + Tailwind</div>
                </div>
              </motion.div>

              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>→</motion.div>

              {/* API Gateway */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 min-w-fit"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">🔌</div>
                  <div className="font-bold text-white">REST APIs</div>
                  <div className="text-xs text-gray-400 mt-1">Express + Node.js</div>
                </div>
              </motion.div>

              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>→</motion.div>

              {/* Backend Services */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 min-w-fit"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">⚙️</div>
                  <div className="font-bold text-white">Services</div>
                  <div className="text-xs text-gray-400 mt-1">Triggers, Claims, Payouts</div>
                </div>
              </motion.div>

              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>→</motion.div>

              {/* Database & ML */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 min-w-fit"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">🗄️</div>
                  <div className="font-bold text-white">Data + AI</div>
                  <div className="text-xs text-gray-400 mt-1">MongoDB, XGBoost</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* External Integrations */}
          <div className="mt-8 pt-8 border-t border-indigo-500/20">
            <p className="text-sm text-gray-400 mb-4 font-semibold">External Integrations:</p>
            <div className="flex flex-wrap gap-3">
              {[
                '🌤️ OpenWeather API',
                '📍 Google Maps',
                '💳 Razorpay',
                '🔔 Firebase',
                '🌐 AWS/Railway',
              ].map((integration, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 rounded-full bg-slate-800/50 border border-indigo-500/20 text-sm text-gray-300 hover:border-indigo-500/50 transition duration-300"
                >
                  {integration}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
