import React, { useState } from 'react';
import styles from './WorldMap.module.css';
import Navigation from '../../components/Navigation/Navigation';

const WorldMap = () => {
    const [currentMap, setCurrentMap] = useState('kingdom');

    const maps = {
        kingdom: '/images/Maps/KingdomMap.webp',
        light: '/images/Maps/LightMap.webp',
        shadow: '/images/Maps/ShadowMap.webp',
    };

    return (
        <div className={styles.mapPage}>
            <div className="figure-overlay"></div>
            <Navigation className={styles.customNav} /> {/* Pass the custom class here */}
            <div className={`${styles.mapOverlay} ${styles.mapOverlayLeft}`}></div>
            <div className={`${styles.mapOverlay} ${styles.mapOverlayRight}`}></div>
            <div className={`${styles.mapOverlay} ${styles.mapOverlayBottom}`}></div>
            <div className={`${styles.mapOverlay} ${styles.mapOverlayTop}`}></div>
            <div
                className={styles.mapImage}
                style={{ backgroundImage: `url(${maps[currentMap]})` }}
            />
            <div className={styles.mapNavigationButtons}>
                <button
                    onClick={() => setCurrentMap('shadow')}
                    className={`${styles.navButton} ${currentMap === 'shadow' ? styles.active : ''}`}
                >
                    <img src="/icons/Moon.svg" alt="Shadow Icon" />
                    Shadow Land
                </button>
                <button
                    onClick={() => setCurrentMap('kingdom')}
                    className={`${styles.navButton} ${currentMap === 'kingdom' ? styles.active : ''}`}
                >
                    <img src="/icons/Crown.svg" alt="Kingdom Icon" />
                    The Kingdom
                </button>
                <button
                    onClick={() => setCurrentMap('light')}
                    className={`${styles.navButton} ${currentMap === 'light' ? styles.active : ''}`}
                >
                    <img src="/icons/Sun.svg" alt="Light Icon" />
                    Light Realm
                </button>
            </div>
        </div>
    );
};

export default WorldMap;
