import React from "react";

export default function ChildComponent({ ProductFromparent }) {
  return (
    
      <div className="col-md-4 bg-light g-3 ms-3">
        <div className="card  rounded-2 rounded-bottom-4 "></div>
        <h4>{ProductFromparent.name}</h4>
        <h4>{ProductFromparent.price}</h4>
        <h4>{ProductFromparent.category}</h4>
        <h4>{ProductFromparent.onsale ? "in Stock" : "Out of Stock"}</h4>

        <button className="btn btn-danger rounded-4 ">Delete</button>
      </div>
  );
}
