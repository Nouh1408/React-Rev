import React, { useEffect, useState } from 'react'
import axios from 'axios'



export default function posts() {

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
  return (
    <div>
        <h1>Posts Page</h1>
        <div className="container">
          <div className="row">
            
            {
              posts.map((p)=>{
                return(
                <div key={p.id} className="col-md-4">
                <div  className="inner bg-danger g-4 mb-2 text-center">
                  <h2>{p.title.split(" ",3).join(" ")}</h2>
                  <p>{p.body.split(" ",10).join(" ")}</p>
                  <button className='btn btn-info '>view details</button>
                </div>
                </div>
                )
              })
            }
            
          </div>
        </div>
    </div>
  )
}
