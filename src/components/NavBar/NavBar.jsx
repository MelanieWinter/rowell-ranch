import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css'

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut()
        setUser()
    }

    return (
        <nav className='NavBar'>
            <span>Welcome, {user.name}!</span>
            <Link to="/orders">Order History</Link>
            {/* &nbsp; | &nbsp; */}
            <Link to="/orders/new">New Order</Link>
            <Link to="#" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}