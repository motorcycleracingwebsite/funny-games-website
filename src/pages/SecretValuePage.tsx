import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

const SecretValuePage: React.FC = () => {
  const [selectedType, setSelectedType] = useState('normal');

  // Secret pet images
  const secretPetImages: { [key: string]: string } = {
    'Darkwing Overlord': 'https://i.imgur.com/TKjwHI5.png',
    'Mini Pilot': 'https://i.imgur.com/sEH95MN.png',
    'Speedy Lion': 'https://i.imgur.com/bbPOxnC.png',
    'Cursed Monster': 'https://i.imgur.com/2poR8YB.png',
    'Divine Blade': 'https://i.imgur.com/sVOeUxc.png',
    'Infernal Tyrant': 'https://i.imgur.com/gLMJGhU.png',
    'Starlight Shark': 'https://i.imgur.com/piQVdEF.png',
    'Venom': 'https://i.imgur.com/rRTmzBE.png',
    'Officer Fox': 'https://i.imgur.com/YPPiHls.png',
    'Penny Pop': 'https://i.imgur.com/23kHSm1.png',
    'Funny Clown': 'https://i.imgur.com/UD6fUjT.png',
    'Punky Boss': 'https://i.imgur.com/IkzwE8Z.png',
    'Alpha Phoenix': 'https://i.imgur.com/XwsOFh7.png',
    'Ice Titan': 'https://i.imgur.com/h9w4VD9.png',
    'Squid VIP': 'https://i.imgur.com/G79JTbp.png',
    'Paramedic Parrot': 'https://i.imgur.com/9ITZdkL.png',
    'Nautyros': 'https://i.imgur.com/Pjvupab.png',
    'Pixel Tyrant': 'https://i.imgur.com/BBJECv0.png'
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

  const secretPets = [
    'Darkwing Overlord',
    'Mini Pilot',
    'Speedy Lion',
    'Cursed Monster',
    'Divine Blade',
    'Infernal Tyrant',
    'Starlight Shark',
    'Venom',
    'Officer Fox',
    'Penny Pop',
    'Funny Clown',
    'Punky Boss',
    'Alpha Phoenix',
    'Ice Titan',
    'Squid VIP',
    'Paramedic Parrot',
    'Nautyros',
    'Pixel Tyrant'
  ];

  // Easy to modify prices - all set to 100 tk$ for now
  const getPetValue = (petName: string, type: string) => {
    // Individual pet values - easy to modify manually
  const petValues: { [key: string]: { [key: string]: number } } = {
      'Darkwing Overlord': { 'normal': 50, 'gold': 80, 'rainbow': 180, 'dark-matter': 230, 'shiny': 180, 'golden-shiny': 240, 'rainbow-shiny': 360, 'dark-matter-shiny': 500 },
      'Mini Pilot':        { 'normal': 50, 'gold': 80, 'rainbow': 180, 'dark-matter': 230, 'shiny': 180, 'golden-shiny': 240, 'rainbow-shiny': 360, 'dark-matter-shiny': 500 },
      'Speedy Lion':       { 'normal': 50, 'gold': 80, 'rainbow': 180, 'dark-matter': 230, 'shiny': 180, 'golden-shiny': 240, 'rainbow-shiny': 360, 'dark-matter-shiny': 500 },
      'Cursed Monster':    { 'normal': 55, 'gold': 85, 'rainbow': 190, 'dark-matter': 240, 'shiny': 190, 'golden-shiny': 250, 'rainbow-shiny': 370, 'dark-matter-shiny': 520 },
      'Divine Blade':      { 'normal': 300, 'gold': 600, 'rainbow': 1200, 'dark-matter': 1500, 'shiny': 1200, 'golden-shiny': 1500, 'rainbow-shiny': 1900, 'dark-matter-shiny': 2100 },
      'Infernal Tyrant':   { 'normal': 50, 'gold': 80, 'rainbow': 180, 'dark-matter': 230, 'shiny': 180, 'golden-shiny': 240, 'rainbow-shiny': 360, 'dark-matter-shiny': 500 },
      'Starlight Shark':   { 'normal': 50, 'gold': 80, 'rainbow': 180, 'dark-matter': 230, 'shiny': 180, 'golden-shiny': 240, 'rainbow-shiny': 360, 'dark-matter-shiny': 500 },
      'Venom':             { 'normal': 85, 'gold': 105, 'rainbow': 180, 'dark-matter': 230, 'shiny': 180, 'golden-shiny': 240, 'rainbow-shiny': 360, 'dark-matter-shiny': 500 },
      'Officer Fox':       { 'normal': 50, 'gold': 80, 'rainbow': 180, 'dark-matter': 230, 'shiny': 180, 'golden-shiny': 240, 'rainbow-shiny': 360, 'dark-matter-shiny': 500 },
      'Penny Pop':         { 'normal': 300, 'gold': 600, 'rainbow': 1200, 'dark-matter': 1500, 'shiny': 1200, 'golden-shiny': 1500, 'rainbow-shiny': 2000, 'dark-matter-shiny': 2250 },
      'Funny Clown':       { 'normal': 50, 'gold': 80, 'rainbow': 180, 'dark-matter': 230, 'shiny': 180, 'golden-shiny': 240, 'rainbow-shiny': 360, 'dark-matter-shiny': 500 }, 
      'Punky Boss':        { 'normal': 50, 'gold': 80, 'rainbow': 180, 'dark-matter': 230, 'shiny': 180, 'golden-shiny': 240, 'rainbow-shiny': 360, 'dark-matter-shiny': 500 },
      'Alpha Phoenix':     { 'normal': 300, 'gold': 600, 'rainbow': 1200, 'dark-matter': 1500, 'shiny': 600, 'golden-shiny': 1200, 'rainbow-shiny': 2100, 'dark-matter-shiny': 2350 },
      'Ice Titan':         { 'normal': 14500, 'gold': 15000, 'rainbow': 15500, 'dark-matter': 16500, 'shiny': Deos not exist, 'golden-shiny': Deos not exist, 'rainbow-shiny': Deos not exist, 'dark-matter-shiny': Deos not exist },
      'Squid VIP':         { 'normal': 50, 'gold': 100, 'rainbow': 200, 'dark-matter': 300, 'shiny': 200, 'golden-shiny': 300, 'rainbow-shiny': 400, 'dark-matter-shiny': 500 },
      'Paramedic Parrot':  { 'normal': 50, 'gold': 80, 'rainbow': 180, 'dark-matter': 230, 'shiny': 180, 'golden-shiny': 240, 'rainbow-shiny': 360, 'dark-matter-shiny': 500 },
      'Nautyros':          { 'normal': 50, 'gold': 80, 'rainbow': 180, 'dark-matter': 230, 'shiny': 180, 'golden-shiny': 240, 'rainbow-shiny': 360, 'dark-matter-shiny': 500 },
      'Pixel Tyrant':      { 'normal': 85, 'gold': 255, 'rainbow': 425, 'dark-matter': 500, 'shiny': 425, 'golden-shiny': 595, 'rainbow-shiny': 850, 'dark-matter-shiny': 1000 }
    };
    
    return petValues[petName]?.[type] || 100;
  };

  const getRarity = (type: string) => {
    const rarities: { [key: string]: string } = {
      'normal': 'Rare',
      'gold': 'Epic',
      'rainbow': 'Legendary',
      'dark-matter': 'Mythic',
      'shiny': 'Epic',
      'golden-shiny': 'Legendary',
      'rainbow-shiny': 'Mythic',
      'dark-matter-shiny': 'Divine'
    };
    return rarities[type] || 'Rare';
  };

  const getRarityBadge = (rarity: string) => {
    const colors = {
      'Divine': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Mythic': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Legendary': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'Epic': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Rare': 'bg-green-500/20 text-green-400 border-green-500/30'
    };
    return colors[rarity as keyof typeof colors] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                🔮 Secret Pet Values
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the hidden secret pets and their trading values in Motorcycle Racing
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
                {selectedTypeData?.name} Pets
              </span>
            </div>
          </motion.div>

          {/* Pet Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secretPets.map((petName, index) => {
              const value = getPetValue(petName, selectedType);
              const rarity = getRarity(selectedType);
              const petImage = secretPetImages[petName];
              
              return (
                <motion.div
                  key={`${petName}-${selectedType}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/10"
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
                          <div className="w-14 h-14 bg-purple-600/20 rounded-lg flex items-center justify-center">
                            <span className="text-purple-400 text-xs">🔮</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                          {petName}
                        </h3>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm border ${getRarityBadge(rarity)}`}>
                      {rarity}
                    </span>
                  </div>
                  
                  <div className="text-center py-4">
                    <div className="text-2xl font-bold text-yellow-400 mb-2">
                      {value.toLocaleString()} tk$
                    </div>
                    <div className="text-sm text-gray-400">Current Market Value</div>
                  </div>

                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700/50">
                    <button className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-colors">
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
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4 text-white">📊 Trading Tips</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-gray-300">
                  <strong className="text-purple-400">Market Trend:</strong> Secret pets are currently trending upward
                </div>
                <div className="text-gray-300">
                  <strong className="text-blue-400">Best Time:</strong> Trade during peak hours (6-10 PM)
                </div>
                <div className="text-gray-300">
                  <strong className="text-green-400">Pro Tip:</strong> Dark Matter Shiny variants are the most valuable
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SecretValuePage;
