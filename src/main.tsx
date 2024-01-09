import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElementId = `root`;
const rootElement = document.getElementById(rootElementId);

if (!rootElement) {
  throw new Error(`Element with Id ${rootElementId} not exists`);
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
