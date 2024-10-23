import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage'; 
import CardCollection from './pages/CardCollection/CardCollection'; 
import WorldMap from './pages/WorldMap/WorldMap';
import FreePack from './pages/FreePack/FreePack';
import SinglePackPage from './pages/SinglePackPage/SinglePackPage';
import SingleCardPage from './pages/SingleCardPage/SingleCardPage';
import Authentication from './pages/Authentication/Authentication'; // Import Authentication
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/card-collection" element={<CardCollection />} />
        <Route path="/world-map" element={<WorldMap />} />
        <Route path="/free-pack" element={<FreePack />} />
        <Route path="/packs/:packId" element={<SinglePackPage />} />
        <Route path="/cards/:cardId" element={<SingleCardPage />} />
        <Route path="/sign-in" element={<Authentication />} /> {/* Sign-In Route */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
