import { useState, useEffect } from 'react';
import styles from './CookieNotice.module.css';

const CookieNotice = () => {
  const [visible, setVisible] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.4) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAccept = () => {
    setHide(true);
    setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  return (
    <div className={`${styles.cookieNotice} ${visible ? styles.visible : ''} ${hide ? styles.hidden : ''}`}>
      <p className={styles.cookieNoticeText}>
        We use cookies to provide the services and features offered by our website and to improve your experience.
      </p>
      <button className={styles.cookieNoticeButton} onClick={handleAccept}>
        ACCEPT
      </button>
    </div>
  );
};

export default CookieNotice;
