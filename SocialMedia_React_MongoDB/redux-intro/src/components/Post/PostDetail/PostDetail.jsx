import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getById } from '../../../redux/posts/postSlice'
import UpdatePost from '../UpdatePost/UpdatePost'
import { deletePost } from '../../../redux/posts/postSlice'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'


const PostDetail = () => {
    const navigate = useNavigate()

    const { id } = useParams()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const { post, isLoading } = useSelector((state) => state.posts)


    useEffect(() => {
        dispatch(getById(id))
    }, [])

    const handleDelete = () => {
        dispatch(deletePost(id));
        navigate('/')

    }

    if (isLoading || !post) {
        return (
            <div>
                cargando...
            </div>
        )
    }

    return (
        <div>
            <h1>PostDetail</h1>
            <p>Title: {post.title}</p>
            <p>Content: {post.content}</p>
            <p>User Id : {post.userId}</p>





            {user._id == post.userId ?
                (
                    <>
                        <EditOutlined onClick={() => navigate('/updatePost')} />
                        <DeleteOutlined onClick={() => handleDelete()} />
                    </>
                )

                :
                (console.log('nada'))

            }


        </div>
    )
}

export default PostDetail