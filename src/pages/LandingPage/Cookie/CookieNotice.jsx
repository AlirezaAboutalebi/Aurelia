import { useState, useEffect } from 'react';
import './CookieNotice.css'; // Updated the CSS import

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
    <div className={`cookie-notice ${visible ? 'cookie-notice--visible' : ''} ${hide ? 'cookie-notice--hidden' : ''}`}>
      <p className="cookie-notice__text">
        We use cookies to provide the services and features offered by our website and to improve your experience.
      </p>
      <button className="cookie-notice__button" onClick={handleAccept}>
        ACCEPT
      </button>
    </div>
  );
};

export default CookieNotice;
