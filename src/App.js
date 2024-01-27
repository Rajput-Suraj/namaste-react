import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './pages/About';
import Error from './pages/Error';
import Body from './components/Body';
import Contact from './pages/Contact';
import Header from './components/Header';

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);
