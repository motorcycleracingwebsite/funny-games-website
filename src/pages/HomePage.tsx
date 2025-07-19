import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import StatsPanel from '../components/StatsPanel';
import ImageGallery from '../components/ImageGallery';
import CountdownTimer from '../components/CountdownTimer';
import { useNotification } from '../contexts/NotificationContext';

const HomePage: React.FC = () => {
  const { showNotification } = useNotification();

  useEffect(() => {
    // Show welcome notification
    const timer = setTimeout(() => {
      showNotification('⚡ New Codes released! Check them out!', 'info');
    }, 2000);

    return () => clearTimeout(timer);
  }, [showNotification]);

  const valuePages = [
    {
      title: 'Secret Values',
      path: '/secret-values',
      description: 'Discover rare and hidden items',
      gradient: 'from-purple-600 to-purple-800',
      icon: '🔮'
    },
    {
      title: 'Divine Values',
      path: '/divine-values',
      description: 'Ultimate legendary items',
      gradient: 'from-yellow-600 to-orange-600',
      icon: '⚡'
    },
    {
      title: 'Charms Values',
      path: '/charms-values',
      description: 'Enhance your racing experience',
      gradient: 'from-green-600 to-emerald-600',
      icon: '✨'
    }
  ];

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://i.imgur.com/mAWyVxR.png)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Motorcycle
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Racing
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 mb-8"
          >
            Experience the ultimate racing adventure with stunning visuals and intense gameplay
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {valuePages.map((page, index) => (
              <Link
                key={page.path}
                to={page.path}
                className={`px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl bg-gradient-to-r ${page.gradient} hover:shadow-purple-500/25`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-xl">{page.icon}</span>
                  <span>{page.title}</span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats & Content Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 pb-32 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <StatsPanel />
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Game Gallery</h2>
              <ImageGallery />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Updates Coming</h2>
              <CountdownTimer />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {valuePages.map((page, index) => (
              <motion.div
                key={page.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group mb-8"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {page.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{page.title}</h3>
                <p className="text-gray-400 mb-4">{page.description}</p>
                <Link
                  to={page.path}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Explore Values →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;