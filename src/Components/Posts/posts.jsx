import React, { useEffect, useState } from 'react'

export default function posts() {

    const [posts,setPosts] = useState([])

    useEffect(()=>{
        getData()
    },[])

    async function getData(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        setPosts(data)
    }
  return (
    <div>
        <h1>Posts Page</h1>
      {
        posts.map((p)=><h2>{p.id}</h2>)
      }
    </div>
  )
}
