import { useSelector } from "react-redux"
import { Link } from 'react-router-dom' 
const Post = ()=> {
    const { posts } = useSelector((state)=>state.posts)
    return (
        <>

        {posts.map((post, index) => (

            <div key={post._id} className="post">
                <h2>Post nº {index}</h2>
                <p>{post.content}</p>
            {/*  <img
                src={`http://localhost:3000/${post.post_img}`}
                width="350px"
            /> */}
                <Link to={`/post/${post._id}`}>
                <h2>{post.title}</h2>
                </Link>
            </div>
        ))}
        </>
    )
}

export default Post
