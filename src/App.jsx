import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage'; 
import CardCollection from './pages/CardCollection/CardCollection'; 
import WorldMap from './pages/WorldMap/WorldMap';
import FreePack from './pages/FreePack/FreePack';
import SinglePackPage from './pages/SinglePackPage/SinglePackPage';
import SingleCardPage from './pages/SingleCardPage/SingleCardPage';
import { AuthProvider } from './context/AuthContext'; 
import AuthPage from './pages/Authentication/AuthPage';

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
        <Route path="/sign-in" element={<AuthPage/>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
