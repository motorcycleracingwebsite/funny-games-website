import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

const AboutWebsite: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-20">
      <ParticleBackground />
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                🌐 About This Website
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Your ultimate resource for Motorcycle Racing
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                We created this website to provide the Motorcycle Racing community with the most comprehensive, up-to-date information about item values, game updates, and trading opportunities. Our goal is to enhance your gaming experience with accurate data and helpful tools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-400">📊 Value Tracking</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Real-time item values</li>
                    <li>• Market trend analysis</li>
                    <li>• Price history charts</li>
                    <li>• Trading recommendations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-purple-400">🎮 Game Information</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Latest updates</li>
                    <li>• Upcoming features</li>
                    <li>• Community stats</li>
                    <li>• Developer insights</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Technology Stack</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                  <div className="text-2xl mb-2">⚛️</div>
                  <div className="text-white font-semibold">React</div>
                  <div className="text-sm text-gray-400">Frontend Framework</div>
                </div>
                <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="text-white font-semibold">Tailwind CSS</div>
                  <div className="text-sm text-gray-400">Styling</div>
                </div>
                <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="text-white font-semibold">Framer Motion</div>
                  <div className="text-sm text-gray-400">Animations</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Contact & Support</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-400">Get in Touch</h3>
                  <div className="space-y-2 text-gray-300">
                    <div>💬 Discord: Join our community server</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-yellow-400">Report Issues</h3>
                  <div className="space-y-2 text-gray-300">
                    <div>🐛 Bug Reports</div>
                    <div>💡 Feature Requests</div>
                    <div>📊 Data Corrections</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-lg p-8 border border-blue-500/20 text-center"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Join Our Community</h2>
              <p className="text-gray-300 mb-6">
                Stay updated with the latest news, participate in discussions, and connect with fellow racers!
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://discord.gg/funnygames" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Join Discord
                </a>
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                  Follow Updates
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWebsite;