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
            <img src="./assets/logo.png" alt="" className='logo' />
            <Link to="#">EVENTS</Link>
            <Link to="#">GET INVOLVED</Link>
            <Link to="#">ABOUT US</Link>
            <Link to="#">SPONSORS</Link>
            <button>BUY TICKETS</button>
            {user && (
                <Link to="#" onClick={handleLogOut}>
                    Log Out
                </Link>
            )}

        </nav>
    )
}