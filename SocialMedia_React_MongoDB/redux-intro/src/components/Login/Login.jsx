import { useState, useEffect } from 'react'
import { login, reset } from '../../redux/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Input, notification } from 'antd'
//import './Login.scss'
//import Profile from '../Profile/Profile'

const Login = () => {
    const navigate = useNavigate()
    const { isError, isSuccess, message } = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    useEffect(() => {

        if (isError) {
            notification.error({
                message: 'ErrorLogin',
                description: message
            })
        }
        if (isSuccess) {
            notification.success({
                message: 'LoginSuccess',
                description: message
            })
            setTimeout(() => {
                navigate('/profile')
            },
                2000)
        }
        dispatch(reset())
    }, [isError, isSuccess, message])
    //   }
    //})

    const [formData, setFormData] = useState({ email: '', password: '' })

    const handleChange = (e) => {

        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //   console.log('formData', formData)
        dispatch(login(formData))
        navigate('/profile')
    }

    const { email, password } = formData
    return (

        <form onSubmit={handleSubmit} className="form">
            <div className='fields'>

                <Input type="email" name="email" value={email} placeholder="email required" onChange={handleChange} />
                <Input type="password" name="password" value={password} placeholder="password required" onChange={handleChange} />
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

export default Login