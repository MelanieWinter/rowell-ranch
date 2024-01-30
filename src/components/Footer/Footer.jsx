import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './Footer.css'

export default function Footer({ user, setUser }) {
    // function handleLogOut() {
    //     userService.logOut()
    //     setUser()
    // }

    return (
        <footer className='Footer'>
            <img src="./assets/logo.png" alt="" className='logo' />
            <Link to="#">EVENTS</Link>
            <Link to="#">GET INVOLVED</Link>
            <Link to="#">ABOUT US</Link>
            <Link to="#">SPONSORS</Link>
            <Link to="#">ADMIN PORTAL</Link>
            <button className='buy-tickets'>BUY TICKETS</button>
            {/* {user && (
                <Link to="#" onClick={handleLogOut}>
                    Log Out
                </Link>
            )} */}

        </footer>
    )
}