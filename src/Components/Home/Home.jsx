import React, { useState, useEffect } from "react";

export default function Home() {
  const [count, setCounter] = useState(0);
  const [showCard, setShowcard] = useState(false);
  function changeCounter() {
    setCounter(count + 1);
  }
useEffect(() => {
  const timer = setTimeout(() => {
    setShowcard(true);
  }, 2000);
  return () => clearTimeout(timer);
}, []);

return (
    <div className="bg-light">
      <h1>Home Page</h1>
      <p className={count > 5 ? `bg-danger` : `bg-info`}>count: {count}</p>
      <button onClick={changeCounter}>click to increment</button>
      {showCard && (
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
