import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

export default function NavItem({ to, icon, title, children, onClick, dropdownRef, isOpen, setIsOpen }) {
    const [open, setOpen] = useState(false);
    const [currentOpen, setCurrentOpen] = useState('');

    const navItemRef = useRef(null);

    const toggleDropdown = () => {
        setOpen(!open);
        setCurrentOpen(title);
    };

    useEffect(() => {
        if (isOpen !== title) {
            setOpen(false);
        }
    }, [isOpen]);

    return (
        <li className='NavItem' ref={navItemRef}>
            <Link
                to={to}
                className='icon-button'
                onClick={() => { toggleDropdown(); setIsOpen(title); }}
                title={title}
            >
                {icon}
            </Link>
            <div className='hovered-title'>{title}</div>
            {open && children}
        </li>
    );
}
