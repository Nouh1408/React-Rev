import React, { useState } from 'react'
import ChildComponent from '../ChildComponent/ChildComponent.jsx'

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
                    <ChildComponent name={product.name} price={product.price} category={product.category} onsale = {product.onSale}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
