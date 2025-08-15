import React from "react";
import { Link } from "react-router-dom";

export default function Card({p}) {
  return (
    <div className="inner bg-danger g-4 mb-2 text-center">
      <h2>{p.title.split(" ", 3).join(" ")}</h2>
      <p>{p.body.split(" ", 10).join(" ")}</p>
      <Link to={`/details/${p.id}`} className="btn btn-info ">view details</Link>
    </div>
  );
}
