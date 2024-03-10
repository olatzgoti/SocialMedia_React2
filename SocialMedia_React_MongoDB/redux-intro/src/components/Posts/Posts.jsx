import Post from '../Post/Post/Post'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll, reset } from '../../redux/posts/postSlice'

const Posts = () =>{
    const { isLoading } = useSelector((state)=>state.posts)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAll())
        dispatch(reset())
    }, [])

return (
    <div>
       <h1>Posts</h1>
        {isLoading ?
        'Cargando'
        :    
        <Post/>
        }
    </div>
    )
}

export default Posts