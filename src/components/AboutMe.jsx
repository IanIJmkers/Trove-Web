import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Shield, Sparkles, Heart } from 'lucide-react';

const AboutMe = () => {


  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower collectors with the most advanced tools to track, manage, and grow their TCG collections with confidence and clarity.',
      gradient: 'from-primary-500 to-primary-700',
    },
    {
      icon: Heart,
      title: 'Our Passion',
      description: 'We are collectors too. We understand the thrill of opening packs, the joy of completing sets, and the importance of protecting your investment.',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: Sparkles,
      title: 'Our Innovation',
      description: 'Cutting-edge technology meets collectible culture. Real-time pricing, AI-powered scanning, and comprehensive analytics at your fingertips.',
      gradient: 'from-purple-500 to-indigo-600',
    },
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-900/50 via-dark-900 to-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/80 to-dark-900"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Trove</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Built by collectors, for collectors. We're on a mission to revolutionize
            how you manage and grow your TCG collection.
          </p>
        </motion.div>


        {/* Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all group"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-2xl p-8 md:p-12 mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Trove began with a simple frustration: tracking a growing TCG collection
                shouldn't be complicated. As passionate collectors ourselves, we spent
                countless hours managing spreadsheets, researching prices, and trying to
                keep our collections organized.
              </p>
              <p>
                We knew there had to be a better way. So we built it. Trove combines
                powerful portfolio management tools with real-time market data, making it
                easier than ever to track your collection's value, discover trending cards,
                and make informed decisions about your investments.
              </p>
              <p>
                Today, Trove serves tens of thousands of collectors worldwide, from casual
                players to serious investors. We're constantly innovating, adding new
                features, and listening to our community to build the ultimate collection
                management platform.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;