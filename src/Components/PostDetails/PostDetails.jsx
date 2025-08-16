import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function PostDetails() {

    const {id} =useParams()
    

    const [post, setPost] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        getData(id)
    },[id])

    async function getData(id){
      setIsLoading(true)
        try {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

        setPost(data)
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
      <h2>post details</h2>
      <div>
        <Link to={`/details/${Number(id)+1}`} className='btn btn-outline-danger'>Next Post</Link>
        <Link to={`/details/${Number(id)-1}`} className='btn btn-outline-info'>Previous Post</Link>
      </div>
      <p>{post?.title}</p>
    </div>
  )
}
