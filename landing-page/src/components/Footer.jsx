import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: '#', label: 'GitHub' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:hello@guardigig.com', label: 'Email' },
  ];

  const footerLinks = [
    { category: 'Product', links: ['Features', 'Pricing', 'Security', 'Roadmap'] },
    { category: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
    { category: 'Legal', links: ['Privacy', 'Terms', 'Compliance', 'Licensing'] },
  ];

  return (
    <footer className="bg-slate-950/50 border-t border-slate-800/50 backdrop-blur-sm mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                GuardGig
              </span>
            </h3>
            <p className="text-gray-400 text-sm">AI-powered income protection for gig workers.</p>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/50 text-cyan-400 hover:text-cyan-300 transition duration-300"
                    title={social.label}
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((category, cidx) => (
            <motion.div
              key={cidx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: cidx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold mb-4">{category.category}</h4>
              <ul className="space-y-2">
                {category.links.map((link, lidx) => (
                  <motion.li
                    key={lidx}
                    whileHover={{ x: 5 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent origin-left mb-8"
        />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} GuardGig. All rights reserved. Protecting gig worker livelihoods.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <motion.a
              whileHover={{ color: '#00d9ff' }}
              href="#"
              className="transition duration-300"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              whileHover={{ color: '#00d9ff' }}
              href="#"
              className="transition duration-300"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-400"
            />
            <span className="text-green-400 text-sm font-semibold">Platform Status: All Systems Operational</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
