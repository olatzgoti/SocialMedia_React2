import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/authSlice'
import './Register.scss'

const Register = () => {

    const [formData, setFormData] = useState({ first_name:'', last_name:'', email:'', password:'' })

    const { first_name, last_name, email, password } = formData
    
    const dispatch = useDispatch()

    const onChange = (e)=>{
        setFormData((prevState)=> ({
        ...prevState,
        [e.target.name]:e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
   //     dispatch(register(formData))
        console.log('formData',formData)
    }
    
    return (
        
        <form onSubmit={onSubmit} className="form">
        
          <div className='fields'>
        <label htmlFor="Name">

        <input type="text" name="first_name" value={first_name} placeholder="first name required" onChange={onChange} />
        </label>
        <label htmlFor="Last name">

        <input type="text" name="last_name" value={last_name} placeholder="last name required" onChange={onChange}/>
        </label>
        <label htmlFor="Email">
        <input type="email" name="email" value={email} placeholder="email required" onChange={onChange}/>
        </label>
        <label htmlFor="Password">
        <input type="password" name="password" value={password} placeholder="password required" onChange={onChange}/>
        </label>
        <button type="submit">Register</button>
            </div>
    </form>
    )
}

export default Register