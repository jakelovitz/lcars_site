import * as React from "react";
import * as ReactDOM from "react-dom/client";
import logo from './logo.svg';
import './App.css';
import HomePage from './homepage.js';
import ErrorPage from './ErrorPage.js';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// import Pdf from '../Lovitz-Resume.pdf';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     // loader: rootLoader,
//     children: [
//       {
        
//       },
//     ],
//   },
//   {
//     path: "/error",
//     element: <ErrorPage />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

function App() {
  return (
    <div>
      <HomePage />
    </div>
  
  
  );
}

export default App;
