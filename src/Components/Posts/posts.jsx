import React, { useEffect, useState } from 'react'

export default function posts() {

    const [posts,setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        getData()
    },[])

    async function getData(){
      setIsLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        setIsLoading(false)
        setPosts(data)
    }
  return (
    <div>
        <h1>Posts Page</h1>
      {
       isLoading? <p>loading...</p>: posts.map((p)=><h2>{p.id}</h2>)
      }
    </div>
  )
}
