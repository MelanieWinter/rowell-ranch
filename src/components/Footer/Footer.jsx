import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import NavLink from '../NavLink/NavLink'
import './Footer.css'

export default function Footer({ user, setUser }) {
    // function handleLogOut() {
    //     userService.logOut()
    //     setUser()
    // }

    return (
        <footer className='Footer'>
            <img src="./assets/logo.png" alt="" className='logo' />
            <NavLink to="#" content="Events" />
            <NavLink to="#" content="Get Involved" />
            <NavLink to="#" content="About Us" />
            <NavLink to="#" content="Sponsors" />
            <NavLink to="/ticket-store" content="Buy Tickets" />
        </footer>
    )
}