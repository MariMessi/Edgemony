import React from 'react';
// import { ReactDOM } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import City from './pages/City';
import Activity from './pages/Activity';
import About from './pages/About';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

import './index.css';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path ="/" element={<Home />} />
      <Route path='city' element={<City />}>
        <Route path='nizza' element={<p>Nizza</p>} />
        <Route path=':id' element={<p>Altre città</p>} />
      </Route>
      <Route path='activity' element={<Activity />}>
        <Route path='tour' element={<p>Tour</p>} />
        <Route path=':id' element={<p>Altre attività</p>} />
      </Route>
      <Route path='about' element={<About />} />
    </Route>
  )
);


const domNode = document.getElementById("root");
const root = createRoot(domNode);


root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);




// const router = CreateBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   }
// ]
// );




// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );