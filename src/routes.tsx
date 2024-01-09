import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './Layout';
import { HomePage } from './home-page/home.page';

export const browserRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
