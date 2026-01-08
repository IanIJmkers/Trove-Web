import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ContactModal from './ContactModal'; // Add this import

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // Add this state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Benefits', 'Features', 'About', 'Contact'];

  // Add this handler
  const handleNavClick = (item, e) => {
    if (item === 'Contact') {
      e.preventDefault();
      setIsContactModalOpen(true);
      setIsMobileMenuOpen(false); // Close mobile menu if open
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <button className="text-2xl font-bold text-gradient" onClick={() => window.location.href = '#hero'}>Trove</button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={item === 'Contact' ? '#' : `#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(item, e)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Download App
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-6"
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === 'Contact' ? '#' : `#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(item, e)}
                  className="block py-3 text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-lg font-semibold">
                Download App
              </button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;