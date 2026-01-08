import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Construction, Clock } from "lucide-react";

const HelpCenterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl shadow-2xl w-full max-w-md border border-dark-700"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="p-8 text-center">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                    <Construction className="text-primary-400" size={40} />
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -top-1 -right-1"
                  >
                    <Clock className="text-primary-500" size={24} />
                  </motion.div>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-white mb-3">
                Help Center
              </h2>

              {/* Message */}
              <div className="space-y-4 mb-6">
                <p className="text-gray-300 text-lg font-medium">
                  We're Building Something Great!
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Our comprehensive help center is currently under construction.
                  We're working hard to bring you detailed guides, FAQs, and
                  support resources.
                </p>
                <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 mt-4">
                  <p className="text-primary-300 text-sm">
                    <strong>Coming Soon:</strong> Video tutorials,
                    troubleshooting guides, and step-by-step walkthroughs to
                    help you master Trove.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
              >
                Got It
              </motion.button>

              {/* Additional Info */}
              <p className="text-gray-500 text-sm mt-4">
                Need immediate assistance? Use our Contact Us form.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default HelpCenterModal;
