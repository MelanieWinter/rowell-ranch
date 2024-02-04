import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

export default function NavItem({ to, icon, title, children, onClick }) {
    const [open, setOpen] = useState(false);
    const navItemRef = useRef(null);


    const toggleDropdown = () => {
        setOpen(!open);
    };

    return (
        <li className='NavItem' ref={navItemRef}>
        <Link to={to} className='icon-button' onClick={ toggleDropdown} title={title}>
            {icon}
        </Link>
        {open && children}
        </li>
    );
}
