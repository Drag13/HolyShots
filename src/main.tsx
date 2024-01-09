import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { browserRouter } from './routes';
import './index.css';

const rootElementId = `root`;
const rootElement = document.getElementById(rootElementId);

if (!rootElement) {
  throw new Error(`Element with Id ${rootElementId} not exists`);
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
);
