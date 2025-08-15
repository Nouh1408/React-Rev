import axios from 'axios'
import React from 'react'

export default function PostDetails() {
    const [post, setPost] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        getData()
    },[])

    async function getData(){
      setIsLoading(true)
        try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts/3")

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
      <p>{post?.title}</p>
    </div>
  )
}
