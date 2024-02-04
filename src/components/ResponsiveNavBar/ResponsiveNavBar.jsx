import { useState, props } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faCalendarDays, faHandshakeAngle, faCircleInfo, faBars, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import './ResponsiveNavBar.css'
import NavItem from '../NavItem/NavItem';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

export default function ResponsiveNavBar({ user, setUser, props }) {

    return (
        <nav className='ResponsiveNavBar'>
            <ul className='navbar-nav'>
                <NavItem 
                    icon={<FontAwesomeIcon icon={faHouse} />} 
                    to="/"
                />
                <NavItem 
                    icon={<FontAwesomeIcon icon={faCalendarDays} />} 
                    to="/events"
                />
                <NavItem 
                    icon={<FontAwesomeIcon icon={faPeopleGroup} />} 
                    to="/get-involved"
                />
                <NavItem 
                    icon={<FontAwesomeIcon icon={faCircleInfo} />} 
                    to="/about-us"
                />
                <NavItem 
                    icon={<FontAwesomeIcon icon={faHandshakeAngle} />} 
                    to="/sponsors"
                />
                <NavItem 
                    icon={<FontAwesomeIcon icon={faUser} />} 
                >
                    <DropdownMenu></DropdownMenu>
                </NavItem>
            </ul>
        </nav>
    )
}
