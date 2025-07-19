import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const ImageGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const images = [
    {
      src: 'https://staticg.sportskeeda.com/editor/2025/05/d3c5a-17472918916197-1920.jpg? auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: ''
    },
    {
      src: 'https://rocodes.gg/_ipx/f_webp&s_585x329/https://images.rocodes.gg/featured/7332812970.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Speed Racing'
    },
    {
      src: 'https://resource.supercheats.com/library/supercheats/740w/2024/1704830579motorcycleraceheader.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Racing Track'
    },
    {
      src: 'https://i.ytimg.com/vi/X8b3hpaYVOE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBUN-loCfB6KiRKU9FrGIiPYJq6Jw?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Motorcycle Collection'
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  const nextImage = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden bg-gray-800">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-purple-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      <button
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        className="absolute top-4 right-4 px-3 py-1 bg-black/50 rounded-full text-sm text-white hover:bg-black/70 transition-colors"
      >
        {isAutoPlay ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default ImageGallery;