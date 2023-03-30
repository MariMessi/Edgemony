import React from 'react';
// import { ReactDOM } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import City from './pages/City';
import Activities from './pages/activities';
import Activity from './pages/activities/Id';
import About from './pages/About';
import MainLayout from './layouts/mainLayout';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

import './index.css';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element= {<MainLayout />}>
      <Route path ="/" element={<Home />} />

      <Route path='activities' element={<Activities />} />
        <Route path='activities/:id' element={<Activity />} />
     
      <Route path='about' element={<About />} />      

      
      //city
      <Route path='city' element={<City />}>
        <Route path='nizza' element={<p>Nizza</p>} />
        <Route path=':id' element={<p>Altre città</p>} />
      </Route>
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