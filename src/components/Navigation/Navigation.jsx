import './Navigation.css'; // Import the new CSS file
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar">

      <div className="navbar__logo">
        <img src='./icons/Logo.svg' className='navbar__logo-img' alt="Logo"/>
      </div>

      <div className="navbar__links">
        <Link to="/" className="navbar__link">Home</Link> 
        <div className="navbar__divider"></div>
        <Link to="/card-collection" className="navbar__link">Card Collection</Link>
        <div className="navbar__divider"></div>
        <Link to="/world-map" className="navbar__link">World Map</Link>
        <div className="navbar__divider"></div>
        <Link to="/the-book" className="navbar__link">The Book</Link>
      </div>

      <div className="navbar__right">
        <Link to="/sign-in" className="navbar__link navbar__link--signin">
          Sign In 
          <img src='./icons/Knight.svg' className='navbar__icon' alt="Knight Icon"/>
        </Link>
        <button className="navbar__play-button">Play Game</button>
      </div>
    </nav>
  );
};

export default Navigation;
