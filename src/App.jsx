import './App.css';
import LandingPage from './pages/LandingPage/LandingPage'; // Landing Page
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route for routing
import CardCollection from './pages/CardCollection/CardCollection'; // Card Collection Page
import WorldMap from './pages/WorldMap/WorldMap';
import FreePack from './pages/FreePack/FreePack';
import SinglePackPage from './pages/SinglePackPage/SinglePackPage';
import SingleCardPage from './pages/SingleCardPage/SingleCardPage';

function App() {
  return (
    <>
      {/* Define the routes inside App */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/card-collection" element={<CardCollection />} />
        <Route path="/world-map" element={<WorldMap />} />
        <Route path="/free-pack" element={<FreePack />} /> {/* Free pack page */}
        <Route path="/packs/:packId" element={<SinglePackPage />} />
        <Route path="/cards/:cardId" element={<SingleCardPage />} />
      </Routes>
    </>
  );
}

export default App;
