import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faCalendarDays, faHandshakeAngle, faCircleInfo, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import './ResponsiveNavBar.css'
import NavItem from '../NavItem/NavItem';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import EventsDropdownMenu from '../EventsDropdownMenu/EventsDropdownMenu';
import GetInvolvedDropdownMenu from '../GetInvolvedDropdownMenu/GetInvolvedDropdownMenu'
import { useState, useRef, useEffect } from 'react';
import {motion, useScroll, useMotionValueEvent } from "framer-motion"

export default function ResponsiveNavBar({ user, setUser, scheduledEvents, handleChangeQty, handleCheckout, handleAddToOrder, cart, setCart }) {
    const [isOpen, setIsOpen] = useState(null)
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll()
    const dropdownRef = useRef(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious()
        if (latest > previous && latest > 150) {
            setHidden(true)
            setIsOpen(false)
        } else {
            setHidden(false)
        }
    })

    return (
        <motion.nav 
            className='ResponsiveNavBar'
            variants={{
                visible: { y:0 },
                hidden: { y:"-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
        >
            <ul className='navbar-nav'>
                <NavItem 
                    icon={<FontAwesomeIcon icon={faHouse} />} 
                    to="/"
                    title="Home"
                    dropdownRef={dropdownRef}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
                <NavItem 
                    icon={<FontAwesomeIcon icon={faCalendarDays} />} 
                    title="Events"
                    dropdownRef={dropdownRef}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                >
                    <EventsDropdownMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} menuHeight={menuHeight} setMenuHeight={setMenuHeight} dropdownRef={dropdownRef} />
                </NavItem>
                <NavItem 
                    icon={<FontAwesomeIcon icon={faPeopleGroup} />} 
                    title="Get Involved"
                    dropdownRef={dropdownRef} 
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                >
                    <GetInvolvedDropdownMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} menuHeight={menuHeight} setMenuHeight={setMenuHeight} dropdownRef={dropdownRef} />
                </NavItem>
                <NavItem 
                    icon={<FontAwesomeIcon icon={faCircleInfo} />} 
                    to="/about-us"
                    title="About Us"
                    dropdownRef={dropdownRef} 
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
                <NavItem 
                    icon={<FontAwesomeIcon icon={faHandshakeAngle} />} 
                    to="/sponsors"
                    title="Sponsors"
                    dropdownRef={dropdownRef} 
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
                <NavItem 
                    icon={<FontAwesomeIcon icon={faUser} />} 
                    title="Sign In"
                    dropdownRef={dropdownRef} 
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                >
                    <DropdownMenu 
                        user={user} 
                        setUser={setUser} 
                        activeMenu={activeMenu} 
                        setActiveMenu={setActiveMenu} 
                        menuHeight={menuHeight} 
                        setMenuHeight={setMenuHeight} 
                        dropdownRef={dropdownRef}  
                        scheduledEvents={scheduledEvents} 
                        handleChangeQty={handleChangeQty}
                        handleCheckout={handleCheckout}
                        handleAddToOrder={handleAddToOrder}
                        cart={cart}
                        setCart={setCart}
                    />
                </NavItem>
            </ul>
        </motion.nav>
    )
}
