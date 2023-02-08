import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import Landing from './routes/js/landing';
import ErrorPage from "./routes/js/404";
import About from './routes/js/about';


import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Work from './routes/js/work';
import Jdocopilot from './routes/js/jdocopilot';
import Contact from './routes/js/contact';
import Cgus from './routes/js/cgus';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />
  },
  {
    path: "about/",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "work/",
    element: <Work />,
    errorElement: <ErrorPage />
  },
  {
    path: "jdocopilot/",
    element: <Jdocopilot />,
    errorElement: <ErrorPage />
  },
  {
    path: "contact/",
    element: <Contact />,
    errorElement: <ErrorPage />
  },
  {
    path: "cgus/",
    element: <Cgus />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
