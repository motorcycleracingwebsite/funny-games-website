import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

const NewFeatures: React.FC = () => {
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
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                🚀 New Features Coming Soon
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Exciting updates are on the horizon for both the game and this website
              <div className="mt-4">
                <a 
                  href="https://discord.gg/g6gqYHdBRt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors text-white"
                >
                  <span className="mr-2">💬</span>
                  Contact Us
                </a>
              </div>
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-3xl mr-3">🎮</span>
                Game Updates
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The developers are constantly working on new content and improvements for Motorcycle Racing. 
                Stay tuned for exciting new features, motorcycles, tracks, and gameplay mechanics that will 
                enhance your racing experience!
              </p>
              <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-300 text-sm">
                  💡 <strong>Tip:</strong> Follow the official game channels and community updates to be the first to know about new releases!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-3xl mr-3">🌐</span>
                Website Improvements
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                This website is continuously being improved to provide you with the best experience. 
                We're working on new features, better data accuracy, and enhanced user interface elements 
                to make your visit more enjoyable and informative.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                  <h3 className="text-blue-300 font-semibold mb-2">📊 Data Updates</h3>
                  <p className="text-gray-300 text-sm">More accurate and up-to-date pet values and game information</p>
                </div>
                <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
                  <h3 className="text-purple-300 font-semibold mb-2">✨ New Features</h3>
                  <p className="text-gray-300 text-sm">Enhanced tools and utilities for the community</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="text-3xl mr-3">📅</span>
                Stay Updated
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Want to be notified when new features are released? Here are the best ways to stay in the loop:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="text-green-400">✓</span>
                  <span>Check back regularly for website updates and new content</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="text-green-400">✓</span>
                  <span>Follow official Roblox game updates and announcements</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="text-green-400">✓</span>
                  <span>Join the community discussions and forums</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="text-green-400">✓</span>
                  <span>Enable browser notifications for important updates</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 backdrop-blur-sm rounded-lg p-8 border border-yellow-500/20 text-center"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">🔔 Coming Soon</h2>
              <p className="text-gray-300 mb-6">
                Exciting new features and improvements are in development. Stay tuned for announcements!
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-yellow-600/20 text-yellow-300 rounded-lg border border-yellow-500/30">
                <span className="animate-pulse mr-2">⏳</span>
                <span className="font-semibold">Updates in Progress...</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="text-center"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold mb-4 text-white">💡 Have Suggestions?</h3>
                <p className="text-gray-300 mb-4">
                  We'd love to hear your ideas for improving this website and making it more useful for the community!
                </p>
                <p className="text-gray-400 text-sm">
                  💡 Want to share ideas? Contact us and we'll set up a way for you to send suggestions directly!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFeatures;