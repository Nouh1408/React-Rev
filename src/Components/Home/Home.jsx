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
  if(count==0) return
  console.log("Countrer Change");
  
},[count])

return (
    <div className="bg-light">
      <h1>Home Page</h1>
      <p className={count > 5 ? `bg-danger` : `bg-info`}>count: {count}</p>
      <button className="btn btn-outline-info" onClick={changeCounter}>click to increment</button>
      
    </div>
  );
}
