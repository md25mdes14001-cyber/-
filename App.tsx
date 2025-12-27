import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, BookOpen, Users, Activity, Heart, Home, Globe } from 'lucide-react';
import HomePage from './components/Home';
import Definition from './components/Definition';
import Scriptures from './components/Scriptures';
import Lifestyle from './components/Lifestyle';
import Research from './components/Research';
import Interventions from './components/Interventions';
import EcoDharma from './components/EcoDharma';
import Models from './components/Models';
import About from './components/About';
import Chatbot from './components/Chatbot';
import { LanguageProvider, useLanguage } from './LanguageContext';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();

  const closeMenu = () => setIsMenuOpen(false);

  const navContent = {
    hi: {
      home: 'मुख्य पृष्ठ (Home)',
      def: 'परिभाषा (Definition)',
      scrip: 'शास्त्र (Scriptures)',
      life: 'जीवनशैली (Lifestyle)',
      models: 'मॉडल (Models)',
      eco: 'अनुष्ठान (Rituals)',
      res: 'अनुसंधान (Research)',
      int: 'हस्तक्षेप (Interventions)',
      about: 'हमारे बारे में (About)',
      more: 'अधिक (More)',
      tagline: 'देव बनो, स्वर्ग रचो'
    },
    en: {
      home: 'Home',
      def: 'Definition',
      scrip: 'Scriptures',
      life: 'Lifestyle',
      models: 'Models',
      eco: 'Anushthan (Rituals)',
      res: 'Research',
      int: 'Interventions',
      about: 'About',
      more: 'More',
      tagline: 'Be Divine, Create Heaven'
    }
  };

  const t = language === 'hi' ? navContent.hi : navContent.en;

  const navLinks = [
    { path: '/', label: t.home, icon: <Home size={18} /> },
    { path: '/definition', label: t.def, icon: <BookOpen size={18} /> },
    { path: '/scriptures', label: t.scrip, icon: <BookOpen size={18} /> },
    { path: '/lifestyle', label: t.life, icon: <Activity size={18} /> },
    { path: '/models', label: t.models, icon: <Users size={18} /> },
    { path: '/eco-dharma', label: t.eco, icon: <Leaf size={18} /> },
    { path: '/research', label: t.res, icon: <Activity size={18} /> },
    { path: '/interventions', label: t.int, icon: <Heart size={18} /> },
    { path: '/about', label: t.about, icon: <Users size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8E7] text-[#2D2168] flex flex-col font-sans">
      
      {/* Header: Applied Saffron (#D98F2B) */}
      <header className="bg-[#D98F2B] text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            {/* Logo: The Dharma Bloom */}
            <div className="w-12 h-12 bg-white text-[#D98F2B] rounded-full flex items-center justify-center border-2 border-[#FFF8E7] shadow-sm p-2 overflow-hidden hover:scale-105 transition-transform duration-300">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                 <title>The Dharma Bloom</title>
                 <circle cx="12" cy="12" r="2.5" />
                 <path d="M12 2C13.5 4.5 16 8 18 12C16 16 13.5 19.5 12 22C10.5 19.5 8 16 6 12C8 8 10.5 4.5 12 2Z" fillOpacity="0.6" />
                 <path d="M2 12C4.5 10.5 8 8 12 6C16 8 19.5 10.5 22 12C19.5 13.5 16 16 12 18C8 16 4.5 13.5 2 12Z" fillOpacity="0.6" />
               </svg>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold leading-none font-sanskrit">अहं ब्रह्मास्मि</h1>
              <p className="text-xs text-[#FFF8E7] font-medium tracking-wide">{t.tagline}</p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-xs font-bold transition-all border border-white/40"
            >
              <Globe size={14} />
              {language === 'hi' ? 'EN' : 'HI'}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 hover:bg-[#b0721f] rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6">
            {navLinks.slice(0, 5).map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`hover:text-[#FFF8E7] transition-colors text-sm font-bold ${location.pathname === link.path ? 'text-white underline underline-offset-4' : 'text-orange-50'}`}
              >
                {link.label.split(' (')[0]}
              </Link>
            ))}
             <div className="relative group">
                <button className="hover:text-[#FFF8E7] transition-colors text-sm font-bold text-orange-50 flex items-center">
                  {t.more}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl py-2 hidden group-hover:block text-[#2D2168]">
                  {navLinks.slice(5).map((link) => (
                    <Link 
                      key={link.path}
                      to={link.path} 
                      className="block px-4 py-2 hover:bg-orange-50 text-sm font-medium"
                    >
                      {link.label.split(' (')[0]}
                    </Link>
                  ))}
                </div>
             </div>
          </nav>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="lg:hidden bg-[#c27f24] p-4 absolute w-full shadow-xl z-50">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={`flex items-center space-x-3 p-2 rounded hover:bg-[#a66a1b] ${location.pathname === link.path ? 'bg-[#a66a1b]' : ''}`}
                    onClick={closeMenu}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/definition" element={<Definition />} />
          <Route path="/scriptures" element={<Scriptures />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/research" element={<Research />} />
          <Route path="/interventions" element={<Interventions />} />
          <Route path="/eco-dharma" element={<EcoDharma />} />
          <Route path="/models" element={<Models />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-[#2D2168] text-[#FFF8E7] py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2 font-sanskrit">अहं ब्रह्मास्मि</h2>
            <p className="italic text-orange-200">"You Are Divine. So Act Divine."</p>
          </div>
          <div className="border-t border-indigo-800 my-4 pt-4">
             <p className="text-sm opacity-80">© {new Date().getFullYear()} Aham Brahmasmi Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <Chatbot />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <NavBar />
    </LanguageProvider>
  );
};

export default () => (
  <HashRouter>
    <App />
  </HashRouter>
);