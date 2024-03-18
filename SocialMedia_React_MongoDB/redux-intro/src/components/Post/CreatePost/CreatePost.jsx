import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { create, reset } from '../../../redux/posts/postSlice'
import { notification, Input, Form, Button } from 'antd'
import { useNavigate } from "react-router-dom"

const CreatePost = () => {

    const initialState = {
        title: '',
        content: '',
    }


    const dispatch = useDispatch()


    /*
    const { isSuccess, message, isError } = useSelector((state) => state.post)
    
    useEffect(() => {
        
        if (isSuccess) {
            notification.success(
                {
                    message: 'Post created',
                    description: message
                })
        }
        if (isError) {

            notification.error({
                message: 'Error',
                description: message
            })
        }
        dispatch(reset())
    },
    [isSuccess, isError, message])
    */
    const [formData, setFormData] = useState(initialState)
    const { userId, title, content } = formData

    const navigate = useNavigate()


    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault(),
            dispatch(create(formData))
        setFormData(initialState)
        console.log('hola?')
        navigate('/')
    }


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <Input type='text' name='userId' value={userId} placeholder='userId' onChange={handleChange} />

                <Input type='text' name='title' value={title} placeholder='title' onChange={handleChange} />
                <Input type='text' name='content' value={content} placeholder='content' onChange={handleChange} />

                <button type='submit'> Create Post </button>
            </form>
        </div>
    )


}


export default CreatePost