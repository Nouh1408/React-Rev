import React from 'react'
import img from '../../assets/img.png'

export default function Error() {
  return (
    <div>
      <div className="container">
        <div className='d-flex justify-content-center flex-column'>
            <h1>404 Page not Found</h1>
            {/* <img src={img} alt="" /> */}
            <img src="img.png" alt="" />
        </div>
      </div>
    </div>
  )
}
