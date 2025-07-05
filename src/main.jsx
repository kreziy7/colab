import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Make sure to import your styles here
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import About from './pages/About.jsx';
import Advantages from './pages/Advantages.jsx';
import Club from './pages/Club.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/About.jsx';  // Optional: for 404 handling

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/advantages',
        element: <Advantages />,
      },
      {
        path: '/club',
        element: <Club />,
      },
      {
        path: '*',  // Catch-all route for unmatched paths
        element: <NotFound />,  // Optional 404 page
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
