import React from "react";

export default function Card({p}) {
  return (
    <div className="inner bg-danger g-4 mb-2 text-center">
      <h2>{p.title.split(" ", 3).join(" ")}</h2>
      <p>{p.body.split(" ", 10).join(" ")}</p>
      <button className="btn btn-info ">view details</button>
    </div>
  );
}
