import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

const DivineValuePage: React.FC = () => {
  const [selectedType, setSelectedType] = useState('normal');

  // Divine pet images
  const divinePetImages: { [key: string]: string } = {
    'Horror Monster': 'https://i.imgur.com/WifPwFE.png',
    'BIG-EYE Dominus': 'https://i.imgur.com/DvGcIYm.png',
    'The Hero Overlord': 'https://i.imgur.com/txw3KPN.png',
    'Frontman': 'https://i.imgur.com/YX0zwZr.png'
  };

  const petTypes = [
    { id: 'normal', name: 'Normal', color: 'text-gray-400', bgColor: 'bg-gray-600/20' },
    { id: 'gold', name: 'Gold', color: 'text-yellow-400', bgColor: 'bg-yellow-600/20' },
    { id: 'rainbow', name: 'Rainbow', color: 'text-pink-400', bgColor: 'bg-pink-600/20' },
    { id: 'dark-matter', name: 'Dark Matter', color: 'text-purple-400', bgColor: 'bg-purple-600/20' },
    { id: 'shiny', name: 'Shiny', color: 'text-blue-400', bgColor: 'bg-blue-600/20' },
    { id: 'golden-shiny', name: 'Golden Shiny', color: 'text-orange-400', bgColor: 'bg-orange-600/20' },
    { id: 'rainbow-shiny', name: 'Rainbow Shiny', color: 'text-emerald-400', bgColor: 'bg-emerald-600/20' },
    { id: 'dark-matter-shiny', name: 'Dark Matter Shiny', color: 'text-red-400', bgColor: 'bg-red-600/20' }
  ];

  const divinePets = [
    'Horror Monster',
    'BIG-EYE Dominus',
    'The Hero Overlord',
    'Frontman'
  ];

  // Easy to modify prices - all set to 100 tk$ for now
  const getPetValue = (petName: string, type: string) => {
    // Individual divine pet values - easy to modify manually
    const petValues: { [key: string]: { [key: string]: number } } = {
      'Horror Monster':     { 'normal':  700, 'gold': 1400, 'rainbow': 3200, 'dark-matter': 5000, 'shiny': 1400, 'golden-shiny': 3200, 'rainbow-shiny': 5000, 'dark-matter-shiny': 6000 }
      'BIG-EYE Dominus':    { 'normal':  900, 'gold': 1800, 'rainbow': 3600, 'dark-matter': 5400, 'shiny': 1800, 'golden-shiny': 3600, 'rainbow-shiny': 5400, 'dark-matter-shiny': 7000 }
      'The Hero Overlord':  { 'normal':  800, 'gold': 1600, 'rainbow': 3400, 'dark-matter': 5200, 'shiny': 1600, 'golden-shiny': 3400, 'rainbow-shiny': 5200, 'dark-matter-shiny': 6500 }
      'Frontman':           { 'normal': 1000, 'gold': 2000, 'rainbow': 4000, 'dark-matter': 6000, 'shiny': 2000, 'golden-shiny': 4000, 'rainbow-shiny': 6000, 'dark-matter-shiny': 7500 }
    };
    
    return petValues[petName]?.[type] || 100;
  };

  const getRarity = (type: string) => {
    const rarities: { [key: string]: string } = {
      'normal': 'Divine',
      'gold': 'Divine',
      'rainbow': 'Divine',
      'dark-matter': 'Divine',
      'shiny': 'Divine',
      'golden-shiny': 'Divine',
      'rainbow-shiny': 'Divine',
      'dark-matter-shiny': 'Divine'
    };
    return rarities[type] || 'Divine';
  };

  const getRarityBadge = (rarity: string) => {
    return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
  };

  const selectedTypeData = petTypes.find(type => type.id === selectedType);

  return (
    <div className="relative min-h-screen pt-20">
      <ParticleBackground />
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                ⚡ Divine Pet Values
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The most powerful and valuable divine pets in Motorcycle Racing
            </p>
          </motion.div>

          {/* Pet Type Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Select Pet Type</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {petTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 border ${
                    selectedType === type.id
                      ? `${type.bgColor} ${type.color} border-current shadow-lg`
                      : 'bg-gray-800/50 text-gray-400 border-gray-600/50 hover:bg-gray-700/50'
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Current Type Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-8"
          >
            <div className={`inline-flex items-center px-6 py-3 rounded-lg ${selectedTypeData?.bgColor} border border-current`}>
              <span className={`text-2xl font-bold ${selectedTypeData?.color}`}>
                {selectedTypeData?.name} Divine Pets
              </span>
            </div>
          </motion.div>

          {/* Pet Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {divinePets.map((petName, index) => {
              const value = getPetValue(petName, selectedType);
              const rarity = getRarity(selectedType);
              const petImage = divinePetImages[petName];
              
              return (
                <motion.div
                  key={`${petName}-${selectedType}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-yellow-500/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-700/50 flex items-center justify-center">
                        {petImage ? (
                          <img 
                            src={petImage} 
                            alt={petName}
                            className="w-14 h-14 object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="w-14 h-14 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                            <span className="text-yellow-400 text-xs">⚡</span>
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                        {petName}
                      </h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm border ${getRarityBadge(rarity)}`}>
                      {rarity}
                    </span>
                  </div>
                  
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">
                      {value.toLocaleString()} tk$
                    </div>
                    <div className="text-sm text-gray-400">Current Market Value</div>
                  </div>

                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700/50">
                    <button className="px-4 py-2 bg-yellow-600/20 text-yellow-400 rounded-lg hover:bg-yellow-600/30 transition-colors">
                      Trade
                    </button>
                    <button className="px-4 py-2 bg-gray-600/20 text-gray-400 rounded-lg hover:bg-gray-600/30 transition-colors">
                      Details
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 backdrop-blur-sm rounded-lg p-6 border border-yellow-500/20">
              <h3 className="text-2xl font-bold mb-4 text-white">🏆 Divine Pet Guide</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-gray-300">
                  <strong className="text-yellow-400">Rarity:</strong> Divine pets are the ultimate tier
                </div>
                <div className="text-gray-300">
                  <strong className="text-orange-400">Power:</strong> Provide maximum performance boosts
                </div>
                <div className="text-gray-300">
                  <strong className="text-red-400">Investment:</strong> Extremely valuable long-term assets
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DivineValuePage;
