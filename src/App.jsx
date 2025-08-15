import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Error from "./Components/Error/Error.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Posts from './Components/Posts/Posts.jsx'
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostDetails from "./Components/PostDetails/PostDetails.jsx";


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
        {path:"posts", element:<Posts/>},
        {path:"details", element:<PostDetails/>},
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
