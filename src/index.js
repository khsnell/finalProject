import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App key="home" page="home" />,
    },
    {
      path: "/dogs",
      element: <App key="dogs" page="dogs" />,
    },
    {
        path: "/locations",
        element: <App key="locations" page="locations" />,
    },
    {
        path: "/reviews",
        element: <App key="reviews" page="reviews" />
    },
    {
        path: "/*",
        element: <App key="error" page="error" />
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();