import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App';
// import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Details from './components/Details';
import AboutClass from './pages/AboutClass';
import Shimmer from './components/Shimmer';
import reportWebVitals from './reportWebVitals';

const InstaMart = lazy(() => import('./pages/InstaMart'));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: (
      <>
        {/* <Header /> */}
        <Error />
        {/* <Footer /> */}
      </>
    ),
    children: [
      {
        path: '/',
        element: <App />,
      },
      // {
      //   path: '/about',
      //   element: <About />,
      // },
      {
        path: 'about',
        element: <AboutClass />,
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant-details/:id',
        element: <Details />,
      },
      {
        path: '/insta-mart',
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
