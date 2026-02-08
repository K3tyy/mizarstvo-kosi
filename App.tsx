
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AboutPage from './components/AboutPage';
import Services from './components/Services';
import ServicesPage from './components/ServicesPage';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Define valid page types
type PageType = 'domov' | 'o-nas' | 'storitve' | 'galerija' | 'kontakt';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('domov');

  // Handle browser back/forward buttons (basic implementation)
  useEffect(() => {
    const handlePopState = () => {
      // Remove hash
      const hash = window.location.hash.replace('#', '');
      if (hash && ['domov', 'o-nas', 'storitve', 'galerija', 'kontakt'].includes(hash)) {
        setCurrentPage(hash as PageType);
      } else {
        setCurrentPage('domov');
      }
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState(); // Check on load

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: string) => {
    const validPage = page as PageType;
    setCurrentPage(validPage);
    window.location.hash = page;
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-wood-50 flex flex-col">
      <Header onNavigate={navigateTo} activePage={currentPage} />
      
      <main className="flex-grow">
        {currentPage === 'domov' && (
          <>
            <Hero onContactClick={() => navigateTo('kontakt')} />
            {/* Home shows previews of other sections */}
            <About />
            <Services /> {/* This is the summary version from original design */}
            {/* Gallery Preview removed as requested */}
          </>
        )}

        {currentPage === 'o-nas' && (
          <AboutPage />
        )}

        {currentPage === 'storitve' && (
          <ServicesPage />
        )}

        {currentPage === 'galerija' && (
          <div className="pt-20">
             <Gallery isPreview={false} />
          </div>
        )}

        {currentPage === 'kontakt' && (
          <div className="pt-20">
             <Contact />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
