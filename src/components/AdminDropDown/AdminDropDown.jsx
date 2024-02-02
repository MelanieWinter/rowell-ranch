import * as userService from '../../utilities/users-service'
import NavLink from '../NavLink/NavLink'
import './AdminDropDown.css'

export default function AdminDropDown({ user, setUser }) {
    function handleLogOut() {
        userService.logOut()
        setUser()
    }

    return (
        <div className='LogOut'>
            <div className='lo-1'>
                <span>Welcome {user.name}!</span>
            </div>
            <div className='lo-2'>
                <NavLink to="/admin-portal" content="Admin Portal" />
                <NavLink to="#" content="Log Out" onClick={handleLogOut}/>
            </div>
        </div>
    )
}