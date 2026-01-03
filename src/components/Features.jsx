import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiSearch,
  FiBarChart2,
  FiZap,
  FiDatabase,
  FiTrendingUp,
  FiPercent,
} from 'react-icons/fi';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <FiPercent />,
      title: 'Accurate Card Calculations',
      description:
        'Calculate card values, percentages, and performance metrics with precision and confidence',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FiSearch />,
      title: 'Powerful Search',
      description: 'Find any card across 25+ English Pokemon sets with ease',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FiBarChart2 />,
      title: 'Market Analytics',
      description:
        'Analyze trends, price movements, and historical performance using real market data',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FiDatabase />,
      title: 'Market Traceability',
      description:
        'Trace back market data, calculations, and assumptions behind every valuation you make',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <FiZap />,
      title: 'Lightning Fast',
      description:
        'Optimized performance for instant calculations and real-time insights',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Confidence-Driven Insights',
      description:
        'Make smarter decisions with transparent analysis and data-backed assurance',
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="py-20 bg-dark-900/50" id='features' ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to calculate, analyze, and grow your trading card portfolio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700 hover:border-primary-500/50 transition-all group"
            >
              <div
                className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white text-3xl group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gradient transition-all">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
