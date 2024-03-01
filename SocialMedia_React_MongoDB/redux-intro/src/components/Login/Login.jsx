import React, { useState } from 'react'
import './Login.scss'

const Login = () => {

    const [formData, setFormData] = useState({ email:'' })

    const { email } = formData

    const onChange = (e)=>{

        setFormData((prevState)=> ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('formData', formData)
    }

    return (
        
        <form onSubmit={onSubmit} className="form">
            <div className='fields'>
            <label htmlFor="email">
            <input type="email" name="email" value={email} placeholder="email required" onChange={onChange}/>
            </label>
            <button type="submit">Login</button>
            </div>
        </form>

        )

    }

export default Login