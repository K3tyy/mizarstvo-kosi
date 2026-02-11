
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  onNavigate: (page: string) => void;
  activePage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(page);
  };

  // LOGIC:
  // 1. Mobile Menu Open: White background, Dark text (to match the white dropdown).
  // 2. Scrolled Down: Dark Glass background (defined here with Tailwind), White text.
  // 3. At Top: Transparent background, White text.
  
  const getHeaderClass = () => {
    if (isOpen) return 'bg-white border-wood-200 py-3 shadow-md'; // Mobile open
    // Using bg-wood-900/80 (80% opacity dark wood) and backdrop-blur-xl for strong blur effect directly here
    if (isScrolled) return 'bg-wood-900/80 backdrop-blur-xl border-white/10 py-3 shadow-lg'; // Scrolled
    return 'bg-transparent border-transparent py-6'; // Top
  };

  const isDarkText = isOpen; // Only use dark text if mobile menu is open (white bg)

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${getHeaderClass()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#" 
              onClick={(e) => handleLinkClick(e, 'domov')}
              className={`font-serif text-2xl font-bold tracking-tighter flex items-center gap-2 group`}
            >
              <span className={`text-3xl transition-colors duration-300 ${isDarkText ? 'text-wood-900' : 'text-white'}`}>
                MK Mizarstvo Kosi
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 relative group ${
                  isDarkText ? 'text-wood-800' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  activePage === link.href 
                    ? (isDarkText ? 'w-full bg-wood-600' : 'w-full bg-wood-300') // Use Gold accent for active link on dark bg
                    : (isDarkText ? 'bg-wood-600' : 'bg-white')
                }`}></span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${isDarkText ? 'text-wood-900' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-wood-100 transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-6 pt-4 pb-8 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block text-2xl font-serif font-medium transition-colors ${activePage === link.href ? 'text-wood-600' : 'text-wood-900 hover:text-wood-600'}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
