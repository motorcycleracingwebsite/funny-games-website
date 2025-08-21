import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer: React.FC = () => {
  const [visitData, setVisitData] = useState({
    current: 0,
    target: 30000000,
    percentage: 0,
    loading: true,
    error: false
  });

  const fetchVisitCount = async () => {
    try {
      setVisitData(prev => ({ ...prev, loading: true, error: false }));

      const response = await fetch("https://visites-99m6ews6i-rayens-projects-703f69cb.vercel.app/api/visits", {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      console.log("API response:", data);

      if (!data.visits || typeof data.visits !== 'number') {
        throw new Error('Invalid data format');
      }

      const visits = data.visits;
      const target = 30000000;
      const percentage = Math.min(Math.round((visits / target) * 100), 100);

      setVisitData({
        current: visits,
        target: target,
        percentage: percentage,
        loading: false,
        error: false
      });

    } catch (error) {
      console.error('Error fetching visit count:', error);

      setVisitData(prev => ({
        ...prev,
        loading: false,
        error: true
      }));
    }
  };

  useEffect(() => {
    fetchVisitCount();

    const interval = setInterval(fetchVisitCount, 30000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    return num.toLocaleString();
  };

  const visitsRemaining = visitData.target - visitData.current;

  return (
    <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
      <h3 className="text-xl font-bold text-center mb-4 text-white">
        🎯 Next Update Progress
      </h3>

      {visitData.error && (
        <div className="text-center mb-4">
          <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-3">
            <p className="text-yellow-300 text-sm">
              ⚠️ <strong>Note:</strong> Live counter temporarily unavailable. Showing last known data.
            </p>
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <div className="text-3xl font-bold text-yellow-400 mb-2">
          {visitData.loading ? (
            <span className="animate-pulse">Loading...</span>
          ) : (
            `${formatNumber(visitData.current)} / ${formatNumber(visitData.target)}`
          )}
        </div>
        <div className="text-sm text-gray-400 mb-4">
          Roblox Game Visits {!visitData.error && !visitData.loading && '(Live)'}
        </div>

        <div className="w-full bg-gray-700 rounded-full h-4 mb-3">
          <motion.div 
            className="bg-gradient-to-r from-green-500 to-blue-500 h-4 rounded-full transition-all duration-1000"
            style={{ width: `${visitData.percentage}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${visitData.percentage}%` }}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-purple-400 font-bold">{visitData.percentage}%</div>
            <div className="text-gray-400">Complete</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-pink-400 font-bold">{formatNumber(visitsRemaining)}</div>
            <div className="text-gray-400">Visits Left</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-300 text-sm mb-4">
          Help reach 30M visits for the next major update!
        </p>
        <a 
          href="https://www.roblox.com/games/106425431775947/Motorcycle-Racing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors text-sm"
        >
          <span className="mr-2">🎮</span>
          Play Now
        </a>
      </div>

      <div className="text-center mt-4">
        <div className="text-xs text-gray-500">
          {visitData.loading ? 'Fetching live data...' : 
           visitData.error ? 'API temporarily unavailable - using last known data' : 
           'Live counter • Updates every 30 seconds'}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
