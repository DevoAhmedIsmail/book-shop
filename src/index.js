import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// Pages
import HomeRoot from './pages/Roots/HomeRoot';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Books from './pages/Books/Books';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        index:true,
        element: <Home />,
      },
      {
        path: 'books',
        element: <Books />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
