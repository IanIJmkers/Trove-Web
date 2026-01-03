import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUsers, FiTool, FiHeart } from 'react-icons/fi';

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <FiUsers />,
      title: 'For Collectors',
      features: [
        'Stay ahead with real-time market trends',
        'Boost profits with smart insights',
        'Track raw, graded items from multiple companies',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FiTool />,
      title: 'For Sellers',
      features: [
        'Optimize pricing with market data',
        'Track inventory across platforms',
        'Maximize profit margins',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FiHeart />,
      title: 'For Enthusiasts',
      features: [
        'Discover new cards and sets',
        'Share your collection proudly',
        'Learn from market experts',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-20" id="benefits" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for <span className="text-gradient">Everyone</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Whether you're collecting, selling, or just passionate about TCGs, Trove has you covered
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl p-8 border border-dark-700 hover:border-primary-500/50 transition-all"
            >
              <div className={`bg-gradient-to-br ${benefit.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white text-3xl`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">{benefit.title}</h3>
              <ul className="space-y-4">
                {benefit.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;