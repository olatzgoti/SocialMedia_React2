import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getById } from '../../../redux/posts/postSlice'

const PostDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { post, isLoading } = useSelector((state) => state.posts)


    useEffect(() => {
        dispatch(getById(id))
    }, [])


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
            <p>{post.title}</p>
            <p>{post.content}</p>
            <p>{post.commentsId}</p>
        </div>
    )
}

export default PostDetail