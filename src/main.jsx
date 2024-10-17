import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot from react-dom/client
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import './styles/global.css';
import App from './App';

// Create the root and render the app using React 18's new API
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>   
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
