import './App.css';
import LandingPage from './pages/LandingPage/LandingPage'; // Landing Page
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route for routing
import CardCollection from './pages/CardCollection/CardCollection'; // Card Collection Page
import WorldMap from './pages/WorldMap/WorldMap';

function App() {
  return (
    <>
      {/* Define the routes inside App */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/card-collection" element={<CardCollection />} />
        <Route path="/world-map" element={<WorldMap />} />
      </Routes>
    </>
  );
}

export default App;
