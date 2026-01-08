import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiStar } from 'react-icons/fi';
import ContactModal from './ContactModal'; // Add this import

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // Add this state

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id='hero'>
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-2 mb-6"
              >
                <FiStar className="text-primary-400" />
                <span className="text-sm text-primary-300 font-medium">Track Your Collection Like Never Before</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Master Your{' '}
                <span className="text-gradient">Trading Card</span>{' '}
                Portfolio
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-400 mb-8 leading-relaxed"
              >
                The most advanced portfolio tracking app for collectible trading cards. 
                Monitor values, track trends, and maximize your investment in real-time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <FiTrendingUp />
                  Get Started Free
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsContactModalOpen(true)} // Add this onClick handler
                  className="border-2 border-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-500/10 transition-all"
                >
                  Get In Touch
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-12 flex items-center gap-8"
              >
                <div>
                  <div className="text-3xl font-bold text-gradient">Live Markets</div>
                  <div className="text-gray-400 text-sm">Real-Time Data</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">20+</div>
                  <div className="text-gray-400 text-sm">Market Sources</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">1K+</div>
                  <div className="text-gray-400 text-sm">Cards Analyzed</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - App Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative scale-[0.92]"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 max-w-sm mx-auto"
              >
                {/* Add your app screenshot here */}
                <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-1 shadow-2xl glow-effect">
                  <div className="bg-dark-900 rounded-3xl overflow-hidden">
                    <img 
                      src="/app-preview-1.png" 
                      alt="Trove App Preview" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards Effect */}
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-64 h-40 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl blur-xl"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default Hero;