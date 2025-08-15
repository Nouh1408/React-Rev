import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Card/Card.jsx'



export default function Posts() {

    const [posts,setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        getData()
    },[])

    async function getData(){
      setIsLoading(true)
        try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPosts(data)
        } catch (error) {
         setError(error) 
        } finally{
        setIsLoading(false)
        }
    }
    if(isLoading){
      return <p>loading ....</p>
    }
    if(error){
      return <p>try later</p>
    }
  return (
    <div>
        <h1>Posts Page</h1>
        <div className="container">
          <div className="row">
            
            {
              posts.map((p)=>{
                return(
                <div key={p.id} className="col-md-4">
                <Card p={p} />
                </div>
                )
              })
            }
            
          </div>
        </div>
    </div>
  )
}
