import Post from '../Post/Post/Post'
import CreatePost from '../Post/CreatePost/CreatePost'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll, reset } from '../../redux/posts/postSlice'

const Posts = () => {
    const { isLoading } = useSelector((state) => state.posts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll())
        dispatch(reset())
    }, [])

    return (
        <div>


            <h1>PostList</h1>
            {isLoading ?
                'Cargando'
                :
                <>
                    <CreatePost />
                    <Post />


                </>
            }
        </div>
    )
}

export default Posts