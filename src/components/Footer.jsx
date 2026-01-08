import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsAndConditionsModal from "./TermsAndConditionsModal";
import ContactModal from "./ContactModal";
import HelpCenterModal from "./HelpCenterModal"; // Add this import

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isHelpCenterModalOpen, setIsHelpCenterModalOpen] = useState(false); // Add this state

  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Portfolio Tracking", href: "#portfolio" },
      ],
    },
    {
      title: "Company",
      links: [{ label: "About", href: "#about" }],
    },
    {
      title: "Support",
      links: [
        {
          label: "Help Center",
          href: "#",
          onClick: (e) => {
            e.preventDefault();
            setIsHelpCenterModalOpen(true);
          },
        }, // Updated this link
        {
          label: "Contact Us",
          href: "#contact",
          onClick: (e) => {
            e.preventDefault();
            setIsContactModalOpen(true);
          },
        },
      ],
    },
  ];

  return (
    <>
      <footer className="bg-dark-900 border-t border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-14 h-14 rounded-lg overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="Trove Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-3xl font-bold text-gradient">Trove</span>
              </div>

              <p className="text-gray-400 leading-relaxed max-w-md">
                The most advanced portfolio tracking app for collectible trading
                card games. Track, analyze, and grow your collection with
                confidence.
              </p>
            </div>

            {/* Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.onClick ? (
                        <button
                          onClick={link.onClick}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="border-t border-dark-700 pt-12 mb-12">
            <div className="max-w-lg">
              <h4 className="text-white font-semibold mb-2">
                Stay in the loop
              </h4>
              <p className="text-gray-400 text-sm mb-5">
                Join our mailing list for feature launches and updates.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="you@example.com"
                  aria-label="Email address"
                  className="flex-1 bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/40 transition-all flex items-center justify-center gap-2"
                >
                  <FiMail />
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-dark-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Trove. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setIsTermsModalOpen(true)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
      <TermsAndConditionsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <HelpCenterModal
        isOpen={isHelpCenterModalOpen}
        onClose={() => setIsHelpCenterModalOpen(false)}
      />
    </>
  );
};

export default Footer;
