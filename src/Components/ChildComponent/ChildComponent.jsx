import React from "react";

export default function ChildComponent({name, price, category, onsale}) {
  return (
    <div>
      <h4>{name}</h4>
      <h4>{price}</h4>
      <h4>{category}</h4>
      <h4>{onsale ? "in Stock":"Out of Stock"}</h4>
      
      <button className="btn btn-danger rounded-4 ">Delete</button>
    </div>
  );
}
