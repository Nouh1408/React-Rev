import Home from "./Components/Home/Home"

import React from "react";

import Navbar from "./Components/Navbar/Navbar.jsx";
import { RouterProvider,createBrowserRouter } from "react-router-dom";




function App() {
  

return (
 <React.Fragment>
  <RouterProvider router={
    createBrowserRouter([
      {path:"home", element:<Home/>},
      {path:"about", element:<About/>}
    ])
  }/>
     
 </React.Fragment>
  )
}

export default App 
