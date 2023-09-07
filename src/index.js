import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MusicContext from './Context/MusicContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <MusicContext>
            <App />
          </MusicContext>
  </React.StrictMode>
);


