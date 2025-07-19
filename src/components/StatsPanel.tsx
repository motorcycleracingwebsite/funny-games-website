import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserGroupIcon, ArrowPathIcon, FireIcon, TrophyIcon } from '@heroicons/react/24/outline';

const StatsPanel: React.FC = () => {
  const [stats, setStats] = useState({
    totalPlayers: 0,
    totalTrades: 0,
    onlineNow: 0,
    dailyActive: 0
  });

  useEffect(() => {
    // Simulate real-time stats updates
    const interval = setInterval(() => {
      setStats(prev => ({
        totalPlayers: prev.totalPlayers + Math.floor(Math.random() * 10) + 1,
        totalTrades: prev.totalTrades + Math.floor(Math.random() * 25) + 5,
        onlineNow: Math.floor(Math.random() * 1000) + 500,
        dailyActive: Math.floor(Math.random() * 5000) + 2000
      }));
    }, 3000);

    // Initial values
    setStats({
      totalPlayers: 125430,
      totalTrades: 892150,
      onlineNow: 743,
      dailyActive: 3892
    });

    return () => clearInterval(interval);
  }, []);

  const statsItems = [
    {
      icon: UserGroupIcon,
      label: 'Total Players',
      value: stats.totalPlayers.toLocaleString(),
      color: 'text-blue-400'
    },
    {
      icon: ArrowPathIcon,
      label: 'Total Trades',
      value: stats.totalTrades.toLocaleString(),
      color: 'text-green-400'
    },
    {
      icon: FireIcon,
      label: 'Online Now',
      value: stats.onlineNow.toLocaleString(),
      color: 'text-orange-400'
    },
    {
      icon: TrophyIcon,
      label: 'Daily Active',
      value: stats.dailyActive.toLocaleString(),
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statsItems.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-purple-500/50 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <stat.icon className={`w-8 h-8 ${stat.color}`} />
            <div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsPanel;