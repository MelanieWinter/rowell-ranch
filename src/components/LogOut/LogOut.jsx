import * as userService from '../../utilities/users-service'
import NavLink from '../NavLink/NavLink'
import './LogOut.css'

export default function LogOut({ user, setUser }) {
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
                <NavLink to="#" content="Account" />
                <NavLink to="#" content="Log Out" onClick={handleLogOut}/>
            </div>
        </div>
    )
}