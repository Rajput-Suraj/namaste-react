import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';

import Cart from './pages/Cart';
import About from './pages/About';
import Error from './pages/Error';
import Body from './components/Body';
import Contact from './pages/Contact';
import Header from './components/Header';
import RestaurantMenu from './pages/RestaurantMenu';

import { store } from './appData/store';

function AppLayout() {
  return (
    <Provider store={store}>
      <Header />
      <div className="py-8">
        <Outlet />
      </div>
    </Provider>
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
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);
