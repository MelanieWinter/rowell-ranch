import { Link, useNavigate } from 'react-router-dom';
import * as userService from '../../utilities/users-service'
import NavLink from '../NavLink/NavLink'
import Logo from '../Logo/Logo'
import './Footer.css'

export default function Footer({ user, setUser }) {
    const navigate = useNavigate();

    const handleClick = (path) => {
        // Scroll to the top of the page before navigating
        window.scrollTo(0, 0);
        navigate(path);
    };

    return (
        <footer className='Footer'>
            <NavLink to="/" content={<Logo size='logo-sm' />} onClick={() => handleClick('/')} />
            <NavLink to="/events" content="Events" onClick={() => handleClick('#')} />
            <NavLink to="/get-involved" content="Get Involved" onClick={() => handleClick('#')} />
            <NavLink to="/about-us" content="About Us" onClick={() => handleClick('/about-us')} />
            <NavLink to="/sponsors" content="Sponsors" onClick={() => handleClick('#')} />
        </footer>
    )
}