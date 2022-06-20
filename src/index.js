import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import VinteflixContextProvider, { VinteFlixContext } from './context/VinteflixContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VinteflixContextProvider>
      <App />
    </VinteflixContextProvider>
  </React.StrictMode>
);
