import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SecretValuePage from './pages/SecretValuePage';
import DivineValuePage from './pages/DivineValuePage';
import CharmsValuePage from './pages/CharmsValuePage';
import AboutGame from './pages/AboutGame';
import AboutWebsite from './pages/AboutWebsite';
import GameUpdates from './pages/GameUpdates';
import NewFeatures from './pages/NewFeatures';
import BackToTop from './components/BackToTop';
import Notification from './components/Notification';
import SEOHead from './components/SEOHead';

function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <Router>
          <div className="min-h-screen bg-gray-900 text-white transition-colors duration-300 pb-8">
            <SEOHead />
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/secret-values" element={<SecretValuePage />} />
                <Route path="/divine-values" element={<DivineValuePage />} />
                <Route path="/charms-values" element={<CharmsValuePage />} />
                <Route path="/about-game" element={<AboutGame />} />
                <Route path="/about-website" element={<AboutWebsite />} />
                <Route path="/game-updates" element={<GameUpdates />} />
                <Route path="/new-features" element={<NewFeatures />} />
              </Routes>
            </main>
            <BackToTop />
            <Notification />
          </div>
        </Router>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;