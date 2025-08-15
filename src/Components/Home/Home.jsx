import React, { useState, useEffect } from "react";

export default function Home() {
  const [count, setCounter] = useState(0);
  const [showCard, setShowcard] = useState(false);


  function changeCounter() {
    setCounter(count + 1);
  }
/* useEffect(()=>{
  console.log("mounted");
  return ()=>{
    console.log("Unmounted");
    
  }
  
}) */

useEffect(()=>{
  console.log("mounting");
  return()=>{
    console.log("bye");
    
  }
  
},[])
useEffect(() => {
  if(count == 0) return
  console.log("counter change");
}, [count])


return (
    <div className="bg-light">
      <h1>Home Page</h1>
      <p className={count > 5 ? `bg-danger w-50` : `bg-info`}>count: {count}</p>
      <button className="btn btn-outline-danger" onClick={changeCounter}>click to increment</button>
      
    </div>
  );
}
