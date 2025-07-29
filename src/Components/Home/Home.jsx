import React, { useState } from 'react'
 

export default function Home() {
  const  [count, setCounter] = useState(0)
  // const [classs, setClasss] = useState(0)
  function changeCounter(){
    setCounter(count+1)
  }
  return (
    <div className='bg-light'>
      <h1 >Home Page</h1>
      <p className={count>5 ? `bg-danger`:`bg-info`}>count: {count}</p>
      <button onClick={changeCounter}>click to increment</button> 
    </div>
  )
}
