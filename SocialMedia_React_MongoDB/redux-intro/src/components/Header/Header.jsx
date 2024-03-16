import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from '../../redux/auth/authSlice'
import { useEffect, useState } from 'react'
import {
    HomeOutlined,
    LogoutOutlined,
    LoginOutlined,
    IdcardOutlined,
    AuditOutlined,
} from '@ant-design/icons'
import { Menu, Input } from 'antd'


const TheHeader = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { Search } = Input
    const { user } = useSelector((state) => state.auth)
    const [ current, setCurrent ] = useState('home')
    const [text, setText] = useState('')
    let items = []

    const handleChange = (e) => {
        setText(e.target.value)

        if (e.key === 'Enter') {
            console.log(text)
            //navigate(`/search/${text}`)
        }
    }

    const handleMenu = () => {
        if (user) {
            items = [{
                label: 'Home',
                key: 'home',
                icon: <HomeOutlined />,
            },
            {
                label: 'Logout',
                key: 'logout',
                icon: <LogoutOutlined />,
            },
            {
                label: 'Profile',
                key: 'profile',
                icon: <AuditOutlined />,
            },
            {
                label: 'search',
                icon: <Input />,
            }]
        }

        else {
            items = [
                {
                    label: 'Home',
                    key: 'home',
                    icon: <HomeOutlined />,
                },
                {
                    label: 'Login',
                    key: 'login',
                    icon: <LoginOutlined />,
                },
                {
                    label: 'Register',
                    key: 'register',
                    icon: <IdcardOutlined />,
                },
                {
                    key: 'search',
                    icon: <Input />,
                }
            ]
        }
    }

    handleMenu()

    useEffect(() => {
        handleMenu()

    }, [user])



    const onLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
        navigate('/login')
    }




    const onClick = (e) => {
        console.log('click', e)
        setCurrent(e.key)

        switch (e.key) {
            case 'home':
                navigate('/')
                break
            case 'login':
                navigate('/login')
                break
            case 'logout':
                onLogout()
                break
            case 'register':
                navigate('/register')
                break
            case 'profile':
                navigate('/profile')
                break
        }

    }

    return (

        <>
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            />
        </>




    )


}
export default TheHeader


/*     <nav>
        <Link to='/'> Home </Link>
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
 
            )
        }
        <input onKeyUp={handleChange} placeholder='search post' name='text' />
    </nav>
)
}
*/