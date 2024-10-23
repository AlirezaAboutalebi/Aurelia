import React from 'react';
import styles from './Tabs.module.css'; // Import the modular CSS for styling

const Tabs = ({ activeTab, onTabChange, onHideAllCards }) => {
    return (
        <div className={styles.tabsContainer}>
            <button
                className={`${styles.tabButton} ${activeTab === 'packs' ? styles.active : ''}`}
                onClick={() => onTabChange('packs')}
            >
                <img
                    src={activeTab === 'packs' ? '/icons/HeadingActive.webp' : '/icons/HeadingDeactive.webp'}
                    alt="Packs Tab"
                    className={styles.tabImage}
                />
                <span className={styles.tabText}>PACKS</span>
            </button>

            <button
                className={`${styles.tabButton} ${activeTab === 'mycards' ? styles.active : ''}`}
                onClick={() => onTabChange('mycards')}
            >
                <img
                    src={activeTab === 'mycards' ? '/icons/HeadingActive.webp' : '/icons/HeadingDeactive.webp'}
                    alt="My Cards Tab"
                    className={styles.tabImage}
                />
                <span className={styles.tabText}>MY CARDS</span>
            </button>

            <button
                className={`${styles.tabButton} ${activeTab === 'lostcards' ? styles.active : ''}`}
                onClick={() => onTabChange('lostcards')}
            >
                <img
                    src={activeTab === 'lostcards' ? '/icons/HeadingActive.webp' : '/icons/HeadingDeactive.webp'}
                    alt="Lost Cards Tab"
                    className={styles.tabImage}
                />
                <span className={styles.tabText}>LOST CARDS</span>
            </button>

            <div className={styles.rightSideTabs}>
                <button
                    className={styles.hideAllButton}
                    onClick={onHideAllCards}
                >
                    Hide All Cards
                </button>
            </div>
        </div>
    );
};

export default Tabs;
