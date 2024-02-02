import * as userService from '../../utilities/users-service'
import NavLink from '../NavLink/NavLink'
import './UserDropDown.css'

export default function UserDropDown({ user, setUser }) {
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
                <NavLink to="/user-portal" content="Account" />
                <NavLink to="/ticket-store" content="Buy Tickets" />
                <NavLink to="#" content="Log Out" onClick={handleLogOut}/>
            </div>
        </div>
    )
}