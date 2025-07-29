import React, { useState } from 'react'

export default function Content() {
    const [product, setProduct]= useState({
        name:"Logitech mouse",
        price:800,
        category:"Electronics",
        onSale:true
    })

  return (
    <div>
      <h1>Content Page</h1>
      <div className='container bg-warning'>
        <div className="row p-2">
            <div className="col-md-4">
                <div className="card rounded-2 rounded-bottom-4">
                    <h4>{product.name}</h4>
                    <h4>{product.price}</h4>
                    <h4>{product.category}</h4>
                    <h4>{product.onSale}</h4>
                    <button className='btn btn-danger rounded-4 '>Delete</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
