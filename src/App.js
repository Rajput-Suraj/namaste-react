import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './pages/About';
import Error from './pages/Error';
import Body from './components/Body';
import Contact from './pages/Contact';
import Header from './components/Header';
import RestaurantMenu from './pages/RestaurantMenu';
import { UserContext } from './utils/userContext';

function AppLayout() {
  const data = useContext(UserContext);
  return (
    <UserContext.Provider value={data}>
      <Header />
      <div className="py-8">
        <Outlet />
      </div>
    </UserContext.Provider>
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
      {
        path: '/restaurant-menu/:id',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);
