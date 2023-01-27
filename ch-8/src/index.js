import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Details from './components/Details';
import reportWebVitals from './reportWebVitals';

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
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant-details/:id',
        element: <Details />,
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
