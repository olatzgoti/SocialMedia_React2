import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
const Post = () => {
    const { posts } = useSelector((state) => state.posts)
    return (
        <>

            {posts.map((post, index) => (

                <div key={post._id} className="post">
                    <h2>Post nº {index + 1}</h2>
                    {/*  <img
                    src={`http://localhost:3000/${post.post_img}`}
                    width="350px"
                /> */}
                    <Link to={`/post/${post._id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    {/* <p>{post.content}</p> */}
                </div>
            ))}
        </>
    )
}

export default Post
