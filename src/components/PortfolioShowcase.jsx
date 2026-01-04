import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTrendingUp } from 'react-icons/fi';

const PortfolioShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20" id="portfolio" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Collection, <span className="text-gradient">Visualized</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See your portfolio value in real-time with our intuitive interface
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* App Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-sm mx-auto"
          >
            <div className="relative z-10 bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-1 shadow-2xl">
              <div className="bg-dark-950 rounded-3xl overflow-hidden">
                <img 
                  src="/app-preview-2.png" 
                  alt="Portfolio View" 
                  className="w-full h-auto "
                />
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 blur-3xl -z-10"></div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <FeatureItem
                title="Real-Time Portfolio Tracking"
                description="Monitor your collection's value with live market data and instant updates"
                delay={0.2}
              />
              <FeatureItem
                title="Detailed Analytics"
                description="Get insights into your portfolio performance with comprehensive reports"
                delay={0.3}
              />
          <FeatureItem
  title="Card Analysis & Valuation"
  description="Calculate and analyze your Chase cards with confidence, clarity, and data-backed assurance"
  delay={0.4}
/>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex gap-4 group"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
        <FiTrendingUp className="text-white text-xl" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gradient transition-all">
          {title}
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioShowcase;