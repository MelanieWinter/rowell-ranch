import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

export default function NavItem({ to, icon, title, children }) {
    const [open, setOpen] = useState(false);
    const navItemRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
        if (navItemRef.current && !navItemRef.current.contains(event.target)) {
            setOpen(false);
        }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
        document.removeEventListener('click', handleOutsideClick);
        };
    }, []); 

    const toggleDropdown = () => {
        setOpen(!open);
    };

    return (
        <li className='NavItem' ref={navItemRef}>
        <Link to={to} className='icon-button' onClick={toggleDropdown} title={title}>
            {icon}
        </Link>
        {open && children}
        </li>
    );
}
