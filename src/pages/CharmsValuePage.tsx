import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

const CharmsValuePage: React.FC = () => {
  const [selectedType, setSelectedType] = useState('I');

  const charmTypes = [
    { id: 'I', name: 'Type I', color: 'text-gray-400', bgColor: 'bg-gray-600/20' },
    { id: 'II', name: 'Type II', color: 'text-green-400', bgColor: 'bg-green-600/20' },
    { id: 'III', name: 'Type III', color: 'text-blue-400', bgColor: 'bg-blue-600/20' },
    { id: 'IV', name: 'Type IV', color: 'text-purple-400', bgColor: 'bg-purple-600/20' },
    { id: 'V', name: 'Type V', color: 'text-yellow-400', bgColor: 'bg-yellow-600/20' }
  ];

  const charmData = {
    'Speed': {
      'I': 'https://i.imgur.com/rUUSMrJ.png',
      'II': 'https://i.imgur.com/Q2MzidW.png',
      'III': 'https://imgur.com/a/uJzgdJF.png',
      'IV': 'https://imgur.com/a/uJzgdJF.png',
      'V': 'https://i.imgur.com/KwGXmmT.png'
    },
    'Win': {
      'I': 'https://i.imgur.com/ZwB3fet.png',
      'II': 'https://i.imgur.com/mQVHqim.png',
      'III': 'https://i.imgur.com/bmmhxI2.png',
      'IV': 'https://i.imgur.com/xa73zOv.png',
      'V': 'https://i.imgur.com/51jeaT8.png'
    },
    'Shards': {
      'I': 'https://i.imgur.com/CbZSCT9.png',
      'II': 'https://i.imgur.com/3kgZERW.png',
      'III': 'https://i.imgur.com/fv3wAks.png',
      'IV': 'https://i.imgur.com/JcYoIWv.png',
      'V': 'https://i.imgur.com/stDq7IR.png'
    },
    'Energy': {
      'I': 'https://i.imgur.com/wL1B4vY.png',
      'II': 'https://i.imgur.com/Et6sQ9x.png',
      'III': 'https://i.imgur.com/6pvbAiX.png',
      'IV': 'https://i.imgur.com/CV1dlyq.png',
      'V': 'https://i.imgur.com/styHMh0.png'
    },
    'Luck': {
      'I': 'https://i.imgur.com/Sifh10C.png',
      'II': 'https://i.imgur.com/PEZJht0.png',
      'III': 'https://i.imgur.com/Hn7dde7.png',
      'IV': 'https://i.imgur.com/UNTGcWM.png',
      'V': 'https://i.imgur.com/9PASBlC.png'
    },
    'Hatch Speed': {
      'I': 'https://i.imgur.com/lbdpNkq.png',
      'II': 'https://i.imgur.com/X20tHxh.png',
      'III': 'https://i.imgur.com/QsmzZYB.png',
      'IV': 'https://i.imgur.com/8yXiaZy.png',
      'V': 'https://i.imgur.com/jkUI8sZ.png'
    }
  };

  const charmNames = ['Speed', 'Win', 'Shards', 'Energy', 'Luck', 'Hatch Speed'];

  // Easy to modify prices - all set to 100 tk$ for now
  const getCharmValue = (charmName: string, type: string) => {
    // Individual charm values - easy to modify manually
    const charmValues: { [key: string]: { [key: string]: number } } = {
      'Speed I': 100, 'Speed II': 100, 'Speed III': 100, 'Speed IV': 100, 'Speed V': 100,
      'Win I': 100, 'Win II': 100, 'Win III': 100, 'Win IV': 100, 'Win V': 100,
      'Shards I': 100, 'Shards II': 100, 'Shards III': 100, 'Shards IV': 100, 'Shards V': 100,
      'Energy I': 100, 'Energy II': 100, 'Energy III': 100, 'Energy IV': 100, 'Energy V': 100,
      'Luck I': 100, 'Luck II': 100, 'Luck III': 100, 'Luck IV': 100, 'Luck V': 100,
      'Hatch Speed I': 100, 'Hatch Speed II': 100, 'Hatch Speed III': 100, 'Hatch Speed IV': 100, 'Hatch Speed V': 100
    };
    
    const charmKey = `${charmName} ${type}`;
    return charmValues[charmKey] || 100;
  };

  const getRarity = (type: string) => {
    const rarities: { [key: string]: string } = {
      'I': 'Common',
      'II': 'Rare',
      'III': 'Epic',
      'IV': 'Legendary',
      'V': 'Mythic'
    };
    return rarities[type] || 'Common';
  };

  const getRarityBadge = (rarity: string) => {
    const colors = {
      'Mythic': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Legendary': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Epic': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Rare': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Common': 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    };
    return colors[rarity as keyof typeof colors] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const getCharmEffect = (charmName: string, type: string) => {
    // Real charm effects from the game
    const effects: { [key: string]: { [key: string]: string } } = {
      'Speed': {
        'I': '+3% Speed Boost',
        'II': '+5% Speed Boost',
        'III': '+8% Speed Boost',
        'IV': '+12% Speed Boost',
        'V': '+15% Speed Boost'
      },
      'Win': {
        'I': '+3% Win Rate',
        'II': '+5% Win Rate',
        'III': '+8% Win Rate',
        'IV': '+12% Win Rate',
        'V': '+15% Win Rate'
      },
      'Energy': {
        'I': '+3% Energy Boost',
        'II': '+5% Energy Boost',
        'III': '+8% Energy Boost',
        'IV': '+12% Energy Boost',
        'V': '+15% Energy Boost'
      },
      'Luck': {
        'I': '+1% Luck Bonus',
        'II': '+2% Luck Bonus',
        'III': '+3% Luck Bonus',
        'IV': '+4% Luck Bonus',
        'V': '+5% Luck Bonus'
      },
      'Shards': {
        'I': '+3% Shard Drop',
        'II': '+5% Shard Drop',
        'III': '+8% Shard Drop',
        'IV': '+12% Shard Drop',
        'V': '+15% Shard Drop'
      },
      'Hatch Speed': {
        'I': '+0.5% Hatch Speed',
        'II': '+1% Hatch Speed',
        'III': '+2% Hatch Speed',
        'IV': '+3% Hatch Speed',
        'V': '+4% Hatch Speed'
      }
    };
    
    return effects[charmName]?.[type] || '+0% Bonus';
  };

  const selectedTypeData = charmTypes.find(type => type.id === selectedType);

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
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                ✨ Charms Values
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enhance your racing experience with powerful charm effects
            </p>
          </motion.div>

          {/* Charm Type Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Select Charm Type</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {charmTypes.map((type) => (
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
                {selectedTypeData?.name} Charms
              </span>
            </div>
          </motion.div>

          {/* Charms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {charmNames.map((charmName, index) => {
              const value = getCharmValue(charmName, selectedType);
              const rarity = getRarity(selectedType);
              const effect = getCharmEffect(charmName, selectedType);
              const imageUrl = charmData[charmName as keyof typeof charmData][selectedType as keyof typeof charmData['Speed']];
              
              return (
                <motion.div
                  key={`${charmName}-${selectedType}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-700/50 flex items-center justify-center">
                        <img 
                          src={imageUrl} 
                          alt={`${charmName} ${selectedType}`}
                          className="w-14 h-14 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-green-300 transition-colors">
                          {charmName} {selectedType}
                        </h3>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm border ${getRarityBadge(rarity)}`}>
                      {rarity}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Effect:</div>
                    <div className="text-emerald-400 font-semibold">{effect}</div>
                  </div>
                  
                  <div className="text-center py-4">
                    <div className="text-2xl font-bold text-yellow-400 mb-2">
                      {value.toLocaleString()} tk$
                    </div>
                    <div className="text-sm text-gray-400">Current Market Value</div>
                  </div>

                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700/50">
                    <button className="px-4 py-2 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/30 transition-colors">
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
            <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20">
              <h3 className="text-2xl font-bold mb-4 text-white">🎯 Charm Strategy</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-gray-300">
                  <strong className="text-green-400">Progression:</strong> Type I → V for maximum power
                </div>
                <div className="text-gray-300">
                  <strong className="text-emerald-400">Stacking:</strong> Combine different charm types
                </div>
                <div className="text-gray-300">
                  <strong className="text-teal-400">Investment:</strong> Type V charms offer best value
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CharmsValuePage;