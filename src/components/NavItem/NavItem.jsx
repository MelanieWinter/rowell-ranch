import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

export default function NavItem({ to, icon, title, children, onClick, dropdownRef }) {
    const [open, setOpen] = useState(false);
    // const [hoveredTitle, setHoveredTitle] = useState('');

    // const handleMouseEnter = () => {
    //     setHoveredTitle(title);
    // };

    // const handleMouseLeave = () => {
    //     setHoveredTitle('');
    // };

    const navItemRef = useRef(null)

    const toggleDropdown = () => {
        setOpen(!open);
    };

    // const closeDropdown = () => {
    //     setOpen(false);
    // };

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (navItemRef.current && dropdownRef.current ) {
                
    //         } else if (
    //             navItemRef.current &&
    //             !navItemRef.current.contains(event.target) &&
    //             !dropdownRef.current?.contains(event.target)
    //         ){
    //             closeDropdown();
    //         }
    //     };

    //     document.addEventListener('click', handleClickOutside);

    //     return () => {
    //         // Clean up the event listener when the component unmounts
    //         document.removeEventListener('click', handleClickOutside);
    //     };
    // }, [navItemRef, dropdownRef]);

    return (
        <li className='NavItem' ref={navItemRef}>
            <Link to={to} className='icon-button' onClick={toggleDropdown} title={title}>
                {icon}
            </Link>
            <div className='hovered-title'>{title}</div>
            {open && children}
        </li>
    );
}
