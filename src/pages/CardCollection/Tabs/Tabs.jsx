import React from 'react';
import './Tabs.css'; // Import the CSS for styling

const Tabs = ({ activeTab, onTabChange, onHideAllCards }) => {
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

            <div className='rightSideTabs'>
                {/* Hide All Cards Button */}
                <button
                    className="hide-all-button"
                    onClick={onHideAllCards}
                >
                    Hide All Cards
                </button>
            </div>
        </div>
    );
};

export default Tabs;
