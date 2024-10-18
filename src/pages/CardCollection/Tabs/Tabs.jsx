import React from 'react';
import './Tabs.css'; // Import the CSS for styling

const Tabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="tabs-container">
      <button 
        className={`tab-button ${activeTab === 'packs' ? 'active' : ''}`} 
        onClick={() => onTabChange('packs')}
      >
        <img 
          src={activeTab === 'packs' ? '/icons/HeadingActive.webp' : '/icons/HeadingDeactive.webp'} 
          alt="Packs Tab" 
          className="tab-image" 
        />
        <span className="tab-text">PACKS</span>
      </button>

      <button 
        className={`tab-button ${activeTab === 'catalogue' ? 'active' : ''}`} 
        onClick={() => onTabChange('catalogue')}
      >
        <img 
          src={activeTab === 'catalogue' ? '/icons/HeadingActive.webp' : '/icons/HeadingDeactive.webp'} 
          alt="Catalogue Tab" 
          className="tab-image" 
        />
        <span className="tab-text">CATALOGUE</span>
      </button>

      <button 
        className={`tab-button ${activeTab === 'mycards' ? 'active' : ''}`} 
        onClick={() => onTabChange('mycards')}
      >
        <img 
          src={activeTab === 'mycards' ? '/icons/HeadingActive.webp' : '/icons/HeadingDeactive.webp'} 
          alt="My Cards Tab" 
          className="tab-image" 
        />
        <span className="tab-text">MY CARDS</span>
      </button>

      <button 
        className={`tab-button ${activeTab === 'lostcards' ? 'active' : ''}`} 
        onClick={() => onTabChange('lostcards')}
      >
        <img 
          src={activeTab === 'lostcards' ? '/icons/HeadingActive.webp' : '/icons/HeadingDeactive.webp'} 
          alt="Lost Cards Tab" 
          className="tab-image" 
        />
        <span className="tab-text">LOST CARDS</span>
      </button>
    </div>
  );
};

export default Tabs;
