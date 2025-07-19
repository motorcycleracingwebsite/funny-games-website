import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

const AboutGame: React.FC = () => {
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ✅ About Game
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              The ultimate Roblox racing simulator experience
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50"
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                Motorcycle Racing is a thrilling Roblox simulator where you race high-speed motorcycles to earn Wins, unlock powerful new bikes, and train your energy to go even faster. Hatch rare pets that boost your stats, challenge other players, and climb the leaderboards to become the ultimate racing champion! The game receives updates every Friday at 16:00 UTC, with special Hero Events from 18:00 to 19:00 UTC.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mt-4">
                With millions of visits and an active community, Motorcycle Racing is one of the fastest-growing racing games on Roblox.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">✅ Key Features</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span className="text-gray-300">High-speed motorcycle racing on fast tracks and circuits</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span className="text-gray-300">Earn Wins to unlock stronger, faster bikes</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span className="text-gray-300">Training system to increase your energy and boost your speed</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span className="text-gray-300">Hatch and equip pets that give powerful energy bonuses</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span className="text-gray-300">Weekly events with special rewards and challenges</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span className="text-gray-300">Compete in multiplayer leaderboards and prove your racing skills</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">✅ System Requirements</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-gray-300">Runs on the Roblox platform</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-gray-300">Compatible with PC, Mac, iOS, Android, and Xbox</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-gray-300">Stable internet connection required</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-gray-300">Recommended: a device with good graphics performance for smooth 60 FPS gameplay</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">✅ Awards & Recognition</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">👥</div>
                    <div>
                      <div className="text-yellow-400 font-semibold">23+ Million Visits</div>
                      <div className="text-sm text-gray-400">1.4k Concurrent Players</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">⭐</div>
                    <div>
                      <div className="text-yellow-400 font-semibold">98.7% Positive Votes</div>
                      <div className="text-sm text-gray-400">Highly Rated</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">👍</div>
                    <div>
                      <div className="text-yellow-400 font-semibold">143k+ Likes</div>
                      <div className="text-sm text-gray-400">Community Approved</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">❤️</div>
                    <div>
                      <div className="text-yellow-400 font-semibold">1M+ Favorites</div>
                      <div className="text-sm text-gray-400">Player Favorite</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mt-4 text-center">
                Loved for frequent updates, smooth controls, and an active racing community
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">✅ Rewards & Codes</h2>
              <p className="text-gray-300 leading-relaxed">
                Motorcycle Racing regularly releases special promo codes that grant potions (like Wins, Energy, or Luck) and rare eggs. To redeem a code, open the in-game shop, enter the code, and claim your rewards. Stay tuned to official channels or fan sites for the latest active codes!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-lg p-8 border border-blue-500/20 text-center"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">🎮 See It In Action</h2>
              <p className="text-gray-300 mb-6">
                Check out the fast-paced gameplay here:
              </p>
              <a 
                href="https://www.roblox.com/games/106425431775947/Motorcycle-Racing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors text-white"
              >
                <span className="mr-2">🎮</span>
                Play Motorcycle Racing on Roblox
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGame;