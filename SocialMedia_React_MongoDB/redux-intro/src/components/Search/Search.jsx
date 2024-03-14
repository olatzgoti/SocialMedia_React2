import { useEffect } from "react"
import { useParams } from 'react-router-dom'

const Search = () => {
    const { postName } = useParams()


    useEffect(()=>{
        console.log(postName)
    }, [postName])


    return(
        <>
        {posts.map((post)=>(
            <div key={post._id} classNAme='post'>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              {/*  { //<img src={`http://localhost:3000/${post.post_img}`} width='350px' /> //} */}
              
              </div>


        ))
        }
        <h1>Search</h1>
        
        </>
        )
    }

export default Search