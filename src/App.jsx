import './App.css';
import LandingPage from './pages/LandingPage/LandingPage'; 
import { Routes, Route } from 'react-router-dom'; 
import CardCollection from './pages/CardCollection/CardCollection';
import WorldMap from './pages/WorldMap/WorldMap';
import FreePack from './pages/FreePack/FreePack';
import SinglePackPage from './pages/SinglePackPage/SinglePackPage';
import SingleCardPage from './pages/SingleCardPage/SingleCardPage';
import Authentication from './pages/Authentication/Authentication'; // Import the new authentication page

function App() {
  return (
    <>
      {/* Define the routes inside App */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/card-collection" element={<CardCollection />} />
        <Route path="/world-map" element={<WorldMap />} />
        <Route path="/free-pack" element={<FreePack />} />
        <Route path="/packs/:packId" element={<SinglePackPage />} />
        <Route path="/cards/:cardId" element={<SingleCardPage />} />
        <Route path="/sign-in" element={<Authentication />} /> {/* Add sign-in route */}
      </Routes>
    </>
  );
}

export default App;
