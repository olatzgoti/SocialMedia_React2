import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../../redux/auth/authSlice'
import './Register.scss'
//import { notification } from 'antd'
import { notification } from 'antd'

const Register = () => {


    const dispatch = useDispatch()
    const { isSuccess, message, isError} = useSelector((state)=>state.auth)

    useEffect(()=>{
        if(isSuccess)
        {
            notification.success({
                message:'Success',
                description: message,
            })
        }
        if(isError){
            notification.error({
                message:'Error', 
                description: message,
            })
    }    
        dispatch(reset())
    }, [isSuccess, isError, message])


    
    const [formData, setFormData] = useState({ name:'', email:'', password:'', age:'' })

    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('formData',formData)
        dispatch(register(formData))
    }
    
    const { name, email, password, age } = formData
    return (
        
    <form onSubmit={handleSubmit} className="form">

     <div className='fields'>
            <input type="text" name="name" value={name} placeholder="name required" onChange={handleChange} />
            <input type="email" name="email" value={email} placeholder="email required" onChange={handleChange}/>
            <input type="password" name="password" value={password} placeholder="password required" onChange={handleChange}/>
            <input type="text" name="age" value={age} placeholder="age required" onChange={handleChange}/>
        <button type="submit">Register</button>
     </div>
    </form>
    )
}

export default Register