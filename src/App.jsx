import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Error from "./Components/Error/Error.jsx";

import React from "react";


import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Contact from "./Components/Contact/Contact.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      // errorElement:<Error/>,
      children: [
        { index:true, element: <Home /> }, //this is the start -- default
        { path: "about", element: <About /> },
        {path:"contact", element:<Contact/>},
        {path:"*",element:<Error/>}
      ],
    },
  ]);
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
