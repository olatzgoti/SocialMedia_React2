import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from 'react-router-dom'
import { EditOutlined, DeleteOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons'
import { deletePost } from "../../../redux/posts/postSlice"


const Post = () => {
    const { posts } = useSelector((state) => state.posts)
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = (id) => {
        dispatch(deletePost(id));
        navigate('/')

    }

    //    const icono = (post.likes == user._id)

    //const likes = []
    return (
        <>
            {posts.map((post, index) => (

                <div key={post._id} className="post">
                    <h2>Post nº {index + 1}</h2>
                    {/*  <img
                    src={`http://localhost:3000/${post.post_img}`}
                    width="350px"
                /> */}
                    <h3>post id: {post._id}</h3>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <p>userId: {post.userId}</p>
                    <span>Likes : {post.likes?.length}</span>

                    {post.likes.map((e) => { e == user._id }) ?
                        (
                            <HeartFilled />)
                        : (
                            //<HeartOutlined />

                            console.log('a la verga')

                        )
                    }


                    <span>

                    </span>


                    <Link to={`/post/${post._id}`}>
                        <h2>{post.title}</h2>
                    </Link>

                    {user._id == post.userId ?
                        (<>
                            <EditOutlined onClick={() => navigate('/updatePost')} />
                            <DeleteOutlined onClick={() => handleDelete(post._id)} />



                        </>)
                        :
                        (console.log('nada'))

                    }

                </div>
            ))}
        </>
    )
}

export default Post
