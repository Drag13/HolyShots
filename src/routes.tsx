import { createBrowserRouter } from 'react-router-dom';
import App from './App';

export const browserRouter = createBrowserRouter([
  { index: true, element: <App /> },
]);
