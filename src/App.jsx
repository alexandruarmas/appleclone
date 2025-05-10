import React, { useState, useEffect } from "react";

import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import Troubleshoot from "./components/Troubleshoot";

const App = () => {
  const [showTroubleshoot, setShowTroubleshoot] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add a keyboard shortcut to show/hide troubleshooter
    const handleKeyDown = (e) => {
      if (e.key === 't' && e.ctrlKey) {
        setShowTroubleshoot(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Set loading false after a delay to ensure components have time to mount
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="bg-black">
      {loading ? (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          color: 'white',
          fontSize: '24px'
        }}>
          Loading Apple Clone...
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <Highlights />
          <Model />
          <Features />
          <HowItWorks />
          <Footer />
        </>
      )}
      
      {showTroubleshoot && <div data-troubleshoot="true"><Troubleshoot /></div>}
      
      <div style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        padding: '5px 10px',
        background: 'rgba(0,0,0,0.5)',
        color: 'white',
        fontSize: '12px',
        borderRadius: '5px',
        zIndex: 1000
      }}>
        Press Ctrl+T for troubleshooter
      </div>
    </main>
  );
};

export default App;
