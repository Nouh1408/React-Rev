import { useState } from "react";

export default function About() {
  const [counter, setCounter] = useState(0);
  const course1 = {
    name: "Cardiology",
    price: 100,
    onSale: false,
  };

  const course2 = {
    name: "Pathology",
    price: 200,
    onSale: true,
  };
  const [course, setCourse] = useState(course1);

  function increment() {
    setCounter(counter + 1);
  }
 function ChangeCourse() {
    setCourse((prevCourse) =>
      prevCourse.name === "Cardiology" ? course2 : course1
    );
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
        <li>OnSale: {course.onSale ? "true" : "false"}</li>
      </ul>
      <button onClick={ChangeCourse}>Change Course</button>

    </div>
  );
}
