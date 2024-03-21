import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updatePost, reset } from '../../../redux/posts/postSlice'
import { notification, Input, Form, Button } from 'antd'
import { useNavigate } from "react-router-dom"

const UpdatePost = () => {

    const { user } = useSelector((state) => state.auth)
    const { post } = useSelector((state) => state.posts)

    const initialState = {
        title: post.title,
        content: post.content,
    }
    const dispatch = useDispatch()
    const [form] = Form.useForm()

    //    const { isSuccess, message, isError } = useSelector((state) => state.post)

    useEffect(() => {
        const postToUpdate = {
            ...post,
        }
        form.setFieldsValue(postToUpdate)
    },
        [post])


    /*
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

    const token = JSON.parse(localStorage.getItem('token'))
    const navigate = useNavigate()


    /*   const handleChange = (e) => {
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }))
        }
    */
    const handleSubmit = (values) => {
           const postWithId = { ...values, id: post._id }
        //e.preventDefault()
        //   console.log(postWithId)

//        console.log(values)
        dispatch(updatePost(postWithId))
        navigate('/')
    }

    /* const user = JSON.parse(localStorage.getItem('user'))
     console.log({ user, message: 'crear posr' })
     console.log(user._id)*/

    return (
        <div>

            <Form onFinish={handleSubmit} form={form}>
                {/* <Input type='text' name='userId' value={userId} placeholder='userId' onChange={handleChange} /> */}
                <Form.Item label='title' name='title'>

                    <Input type='text' name='title' placeholder='title' />

                </Form.Item>
                <Form.Item label='title' name='content'>
                    <Input type='text' name='content' placeholder='content' />
                </Form.Item>

                <Button type='primary' htmlType='submit'> Update Post </Button>
            </Form>
        </div>
    )
}

export default UpdatePost