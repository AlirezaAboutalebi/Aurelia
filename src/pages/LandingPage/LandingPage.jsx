import Navigation from '../../components/Navigation/Navigation';
import CookieNotice from './Cookie/CookieNotice.jsx';
import HeroSection from './HeroSection/HeroSection'; // Import HeroSection
import Ready from './Ready/Ready';
import Rules from './Rules/Rules';

const LandingPage = () => {
  return (
    <>
     <div className="figure-overlay"></div>
      <Navigation />
      <HeroSection />
      <Rules/>
      <Ready/>
      <CookieNotice/>
    </>
  );
};

export default LandingPage;
