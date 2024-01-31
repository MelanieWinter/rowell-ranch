import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import NavLink from '../NavLink/NavLink'
import Logo from '../Logo/Logo'
import './Footer.css'

export default function Footer({ user, setUser }) {
    return (
        <footer className='Footer'>
            <NavLink to="/" content=<Logo size='logo-sm' /> />
            <NavLink to="#" content="Events" />
            <NavLink to="#" content="Get Involved" />
            <NavLink to="#" content="About Us" />
            <NavLink to="#" content="Sponsors" />
            <NavLink to="/ticket-store" content="Buy Tickets" />
        </footer>
    )
}