import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './NavItem.css'

export default function NavItem({ to, icon, children }) {
    const [open, setOpen] = useState(false);

    return (
        <li className='NavItem'>
            <Link to={to} className='icon-button' onClick={() => setOpen(!open)}>
                {icon}
            </Link>
            {open && children}
        </li>
    )
}