import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import clap from './clap.wav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

var audio = new Audio(clap);
document.onclick = function() {
  audio.volume = 0.08;
  audio.play();
};