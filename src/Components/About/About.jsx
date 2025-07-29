import { useState } from "react";

export default function About() {
  const [counter, setCounter] = useState(0);
  const course1 = {
    name: "Cardiology",
    price: 100,
    onSale: false,
  };
 

  

  function increment() {
    setCounter(counter + 1);
  }


  return (
    <div className="bg-warning">
      <h1>About Page</h1>
      <h2>Count: {counter}</h2>
      <button onClick={increment}>Click me</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
        saepe.
      </p>
      <ul>
        <li>CourseName: {course1.name}</li>
        <li>{course1.price}</li>
        <li>OnSale: {course1.onSale ? "true" : "false"}</li>
      </ul>
      

    </div>
  );
}
