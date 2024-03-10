import { useSelector } from 'react-redux'
import {Spin} from 'antd'

const Profile = ()=>{

    const { user } = useSelector((state => state.auth))

//console.log(user)
    return(
        <>
    
        <h1>Profile</h1>
        <p>{user.name}  </p>
        <p>{user.email}</p>
    
    </>
    )
}





export default Profile