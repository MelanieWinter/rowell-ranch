import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faCalendarDays, faHandshakeAngle, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import './ResponsiveNavBar.css'

export default function ResponsiveNavBar({ user, setUser }) {
    return (
        <>
            <nav className='ResponsiveNavBar'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to="/events" className='nav-link'>
                            <FontAwesomeIcon icon={faCalendarDays} />
                            <span className='link-text'>Events</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/get-involved" className='nav-link'>
                            <FontAwesomeIcon icon={faHandshakeAngle} />
                            <span className='link-text'>Get Involved</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/about-us" className='nav-link'>
                            <FontAwesomeIcon icon={faCircleInfo} />
                            <span className='link-text'>About Us</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/sponsors" className='nav-link'>
                            <FontAwesomeIcon icon={faPeopleGroup} />
                            <span className='link-text'>Sponsors</span>
                        </Link>
                    </li>
                    {/* <li className='nav-item dos'>
                        <Link to="/" className='nav-link'>
                            <FontAwesomeIcon icon={faPeopleGroup} />
                            <span className='link-text'>Rowell Ranch</span>
                        </Link>
                    </li> */}
                    <li className='logo'>
                        <Link to="/" className='nav-link'>
                            <Logo size="logo-sm" />
                            <span className='link-text'>Rowell Ranch</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
