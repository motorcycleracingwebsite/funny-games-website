import React from 'react';
import { useLocation } from 'react-router-dom';

const SEOHead: React.FC = () => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Motorcycle Racing - Ultimate Gaming Experience';
      case '/secret-values':
        return 'Secret Values - Motorcycle Racing';
      case '/divine-values':
        return 'Divine Values - Motorcycle Racing';
      case '/charms-values':
        return 'Charms Values - Motorcycle Racing';
      case '/about-game':
        return 'About Game - Motorcycle Racing';
      case '/about-website':
        return 'About Website - Motorcycle Racing';
      case '/game-updates':
        return 'Game Updates - Motorcycle Racing';
      case '/new-features':
        return 'New Features - Motorcycle Racing';
      default:
        return 'Motorcycle Racing';
    }
  };

  const getPageDescription = () => {
    switch (location.pathname) {
      case '/':
        return 'Experience the ultimate motorcycle racing game with stunning graphics and intense gameplay. Check out values, updates, and more!';
      case '/secret-values':
        return 'Discover secret item values in Motorcycle Racing. Get the latest pricing and rarity information.';
      case '/divine-values':
        return 'Divine item values and trading information for Motorcycle Racing enthusiasts.';
      case '/charms-values':
        return 'Complete guide to charm values and their effects in Motorcycle Racing.';
      default:
        return 'The ultimate destination for Motorcycle Racing game information, values, and updates.';
    }
  };

  React.useEffect(() => {
    document.title = getPageTitle();
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', getPageDescription());
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = getPageDescription();
      document.head.appendChild(meta);
    }

    // Add Open Graph meta tags
    const updateMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    updateMetaTag('og:title', getPageTitle());
    updateMetaTag('og:description', getPageDescription());
    updateMetaTag('og:image', '/motorcycle-racing-preview.jpg');
    updateMetaTag('og:url', window.location.href);
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:site_name', 'Motorcycle Racing');
  }, [location]);

  return null;
};

export default SEOHead;