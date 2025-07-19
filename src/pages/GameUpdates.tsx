import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

const GameUpdates: React.FC = () => {
  const updates = [
    {
      version: 'Update 1',
      title: 'Steampunk Expansion',
      features: [
        '🥚 New Steampunk World + brand-new egg',
        '🐾 +25 new pets',
        '🛵 3 new bikes + 2 new trainers',
        '💬 Leaderboard players get special chat tags',
        '🧲 New Nitro + speed limit increased',
        '✨ Pet Enchantment system improvements',
        '🍀 Charms now work on exotic pets',
        '🗺️ Dynamic map changes',
        '📜 Invite board & new loading screen',
        '🎯 Secret pet chances boosted (1 in 60M → 1 in 20M)',
        '⚖️ Balance mode adjustments'
      ],
      status: 'Live',
      icon: '🔹'
    },
    {
      version: 'Update 2',
      title: 'Moon Map Release',
      features: [
        '🌙 New Moon World',
        '🐾 +116 new pets + new egg',
        '🏍️ 2 new motorcycles + 2 new trainers',
        '💠 New Pet Existence system',
        '🥚 Exclusive egg & better bag system',
        '🎯 Daily streak, free chests, open upgrade',
        '📈 Achievement gap increased',
        '⚖️ Balance mode tweaks'
      ],
      status: 'Live',
      icon: '🌕'
    },
    {
      version: 'Update 3',
      title: 'Swamp Adventure',
      features: [
        '🐸 New Swamp Map',
        '🏍️ 2 new motorcycles + 2 new trainers',
        '💫 3 new auras',
        '🧩 Free Craft All feature',
        '💥 Speed limit removed',
        '🛠️ Future bike parts introduced',
        '🥚 Egg prices reduced',
        '⚖️ More balance changes'
      ],
      status: 'Live',
      icon: '🐊'
    },
    {
      version: 'Update 4',
      title: 'Kingdom Rise',
      features: [
        '🏰 New Kingdom Map',
        '💨 Speed limit removed again',
        '🔮 ORB System for all worlds',
        '🎡 Daily Fortune Wheel',
        '🆕 Rebirth buttons + 2x Motorcycle XP Potion',
        '🥚 New egg, pets & Dark Matter Machine',
        '🏍️ 1 new motorcycle + 1 new trainer',
        '💰 Egg price rework',
        '⚖️ Balance mode refinements'
      ],
      status: 'Live',
      icon: '👑'
    },
    {
      version: 'Update 5',
      title: 'Farm Frenzy',
      features: [
        '🚜 New Farm Map',
        '🏍️ 1 new motorcycle',
        '💎 New chest + new pets & egg',
        '🎟️ Season Pass launched',
        '🎯 Hero Events buffed',
        '🛠️ Major UI overhaul',
        '⚙️ Wins system rebalance',
        '🏆 Competitive Season system added',
        '⚖️ Balance system updates'
      ],
      status: 'Live',
      icon: '🌾'
    },
    {
      version: 'Update 6',
      title: 'Atlantis Awaits',
      features: [
        '🌊 New Atlantis Map',
        '🏍️ 1 new motorcycle + new trainer',
        '🐚 New egg + pets + chest',
        '👥 Team System introduced',
        '🔁 Rebirth upgrades & limits increased',
        '📊 Bonus luck display in stats',
        '⚙️ Micro bug fixes & balance tuning'
      ],
      status: 'Live',
      icon: '🌊'
    },
    {
      version: 'Update 7',
      title: 'Pixel World',
      features: [
        '🟩 New Pixel World',
        '🏍️ 1 new motorcycle + new trainer',
        '🐾 New pets + chest + egg',
        '🎟️ Season Pass 2',
        '💎 Keep Shiny option (mass delete safety)',
        '🔄 Huge trading system improvements',
        '🪙 Potions, charms & bike parts now tradable',
        '🌟 1 new aura',
        '⚙️ Performance & balance updates'
      ],
      status: 'Live',
      icon: '🟪'
    },
    {
      version: 'Update 8',
      title: 'Squid Game Event',
      features: [
        '🦑 New Squid Game World',
        '🐙 12 squid pets + new squid currency',
        '🛒 Mysterious Squid Merchant added',
        '📉 Competitive Season ended',
        '🔧 Server boost system + merchant updates',
        '🧩 Micro event temporarily removed',
        '⚙️ Minor performance enhancements'
      ],
      status: 'Live',
      icon: '🦑'
    },
    {
      version: 'Update 9',
      title: 'Coming Soon...',
      features: [
        '🗺️ A brand-new mysterious world awaits...',
        '🐾 Expect new pets, new challenges, and powerful motorcycles',
        '💎 Rumors say a new mechanic system might be introduced...',
        '⏳ Stay tuned for exclusive rewards and limited-time features!',
        '📈 Will you be ready to dominate the next leaderboard?'
      ],
      status: 'Coming Soon',
      icon: '🔮'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Coming Soon':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Beta':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

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
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                🛠️ New Game Updates
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Complete history of Motorcycle Racing updates and what's coming next
            </p>
          </motion.div>

          <div className="space-y-6">
            {updates.map((update, index) => (
              <motion.div
                key={update.version}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                      <span className="text-3xl mr-3">{update.icon}</span>
                      {update.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="font-mono">{update.version}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(update.status)}`}>
                    {update.status}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-gray-300">Features & Changes:</h4>
                  <ul className="space-y-1">
                    {update.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-300">
                        <span className="text-green-400 mr-2 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-gradient-to-r from-green-900/50 to-blue-900/50 backdrop-blur-sm rounded-lg p-8 border border-green-500/20"
          >
            <h2 className="text-2xl font-bold mb-4 text-white text-center">🎯 Next Update Progress</h2>
            <div className="text-center">
              <p className="text-gray-300 mb-6">
                The next major update will be released when the game reaches 30 million visits!
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                <div className="text-2xl font-bold text-yellow-400 mb-2">
                  Current: ~23M+ visits
                </div>
                <div className="text-sm text-gray-400">Target: 30M visits for next update</div>
                <div className="w-full bg-gray-700 rounded-full h-3 mt-3">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full" style={{width: '77%'}}></div>
                </div>
                <div className="text-sm text-gray-400 mt-2">~77% to next update</div>
              </div>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.roblox.com/games/106425431775947/Motorcycle-Racing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
                >
                  Play Now & Help Reach 30M!
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GameUpdates;