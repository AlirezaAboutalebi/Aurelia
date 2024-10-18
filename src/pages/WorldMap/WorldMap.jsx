import React, { useState } from 'react';
import './WorldMap.css';
import Navigation from '../../components/Navigation/Navigation'; // Assuming this is your navigation component

const WorldMap = () => {
    const [currentMap, setCurrentMap] = useState('kingdom'); // Default to Kingdom map

    const maps = {
        kingdom: '/images/Maps/KingdomMap.webp',
        light: '/images/Maps/LightMap.webp',
        shadow: '/images/Maps/ShadowMap.webp',
    };

    return (
        <div className="map-page">
            <div className="figure-overlay"></div>
            <Navigation /> {/* Navigation Component */}
            <div className="map__overlay map__overlay--left"></div>
            <div className="map__overlay map__overlay--right"></div>
            <div className="map__overlay map__overlay--bottom"></div>
            <div className="map__overlay map__overlay--top"></div>
            <div
                className="map-image"
                style={{ backgroundImage: `url(${maps[currentMap]})` }}
            />
            <div className="map-navigation-buttons">
                <button
                    onClick={() => setCurrentMap('shadow')}
                    className={`nav-button ${currentMap === 'shadow' ? 'active' : ''}`}
                >
                    <img src="/icons/Moon.svg" alt="Shadow Icon" />
                    Shadow Land
                </button>
                <button
                    onClick={() => setCurrentMap('kingdom')}
                    className={`nav-button ${currentMap === 'kingdom' ? 'active' : ''}`}
                >
                    <img src="/icons/Crown.svg" alt="Kingdom Icon" />
                    The Kingdom
                </button>
                <button
                    onClick={() => setCurrentMap('light')}
                    className={`nav-button ${currentMap === 'light' ? 'active' : ''}`}
                >
                    <img src="/icons/Sun.svg" alt="Light Icon" />
                    Light Realm
                </button>

            </div>
        </div>
    );
};

export default WorldMap;
