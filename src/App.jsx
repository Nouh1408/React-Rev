import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import React from "react";
import Btn from "./Components/Btn/Btn";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Content from "./Components/Content/Content.jsx";



function App() {
  

return (
 <React.Fragment>
  <Navbar/>
  <Home/>
     <About/>
     <Content/>
 </React.Fragment>
  )
}

export default App 
