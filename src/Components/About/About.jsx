import { useState } from "react";

export default function About() {
  const [counter, setCounter] = useState(0);
  const [course,setCourse]= useState({
    name:"Cardiology",
    price:200,
    onSale:true
  })

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
        <li>CourseName: {course.name}</li>
        <li>{course.price}</li>
        <li>OnSale: {course.onSale ? "true":"false"}</li>
      </ul>
    </div>
  );
}
