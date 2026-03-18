import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const APP_STORE_URL = 'https://apps.apple.com/nl/app/trove-tcg/id6757101192?l=en-GB';
const QR_CODE_URL = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https%3A%2F%2Fapps.apple.com%2Fnl%2Fapp%2Ftrove-tcg%2Fid6757101192%3Fl%3Den-GB';

const DownloadModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-dark-800 rounded-2xl shadow-2xl w-full max-w-md border border-dark-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-dark-700">
                <div>
                  <h2 className="text-2xl font-bold text-white">Download Trove</h2>
                  <p className="text-gray-400 text-sm mt-1">
                    Scan the QR code or tap the badge to get Trove on the App Store.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-dark-700 rounded-lg"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col items-center">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white p-3 rounded-xl">
                    <img
                      src={QR_CODE_URL}
                      alt="QR code to Trove on the App Store"
                      className="w-48 h-48 rounded-lg"
                    />
                  </div>
                </a>

                <motion.a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6"
                >
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                    alt="Download on the App Store"
                    className="h-12"
                  />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DownloadModal;
