import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from '../../redux/auth/authSlice'
import { useState } from 'react'

const TheHeader = () => {

const navigate = useNavigate()
const dispatch = useDispatch()

const { user } = useSelector((state) => state.auth)
const [text, setText] = useState('') 

const handleChange = (e)=>{
    setText(e.target.value)
    if(e.key==='Enter'){
        console.log(text)
        //navigate(`/search/${text}`)
    }
    }



const onLogout = (e)=>{
    e.preventDefault()
    dispatch(logout())

    navigate('/login')
}
return (

<nav>
    <Link to='/'> Home </Link>
    <input onKeyUp={handleChange} placeholder='search post' name='text'/>
    {user ? 
            (
        <>
            <button onClick={onLogout}>Logout</button>
            <Link to="/profile">{user.name}</Link>
        </>
            )
        : (
        <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </>

        )}
</nav>

)
}

export default TheHeader