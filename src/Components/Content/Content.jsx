import React, { useState } from 'react'
import ChildComponent from '../ChildComponent/ChildComponent.jsx'

export default function Content() {
    const [product, setProduct] = useState([
    {
    name:"Asus tuf",
    price:30000,
    category:"Laptop",
    onsale:true
  },
  {
    name:"iphone",
    price:15000,
    category:"Mobile",
    onsale:true
  },
  {
    name:"ipad",
    price:10000,
    category:"Tablet",
    onsale:false
  },
  {
    name:"iphone",
    price:15000,
    category:"Mobile",
    onsale:true
  },
  {
    name:"iphone",
    price:15000,
    category:"Mobile",
    onsale:true
  },
  ])

  return (
    <div>
      <h1>Content Page</h1>
      <div className='container bg-warning'>
        <div className="row p-2">
            <div className="col-md-3">
                <div className="card  rounded-2 rounded-bottom-4 ">
                    {
                        product.map(function(item){
                            return <ChildComponent ProductFromparent={item}/>
                        })
                    }
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
