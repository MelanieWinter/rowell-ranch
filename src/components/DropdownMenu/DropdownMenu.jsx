import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
import { CSSTransition } from 'react-transition-group'
import './DropdownMenu.css';
import { useState } from 'react';

export default function DropdownMenu() {
    const [activeMenu, setActiveMenu ] = useState('main')
    const [menuHeight, setMenuHeight] = useState(null)

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropDownItem({ children, leftIcon, rightIcon, goToMenu }) {
        return (
            <Link 
                to="#" 
                className='menu-item'
                onClick={() => goToMenu && setActiveMenu(goToMenu)}
            >
                <span className='icon-button'>
                    {leftIcon}
                </span>
                {children}
                <span className='icon-right'>
                    {rightIcon}
                </span>
            </Link>
        );
    }

    return (
        <div className='DropdownMenu' style={{ minHeight: menuHeight }}>
            <CSSTransition 
                in={activeMenu === 'main'} 
                unmountOnExit 
                timeout={500}
                classNames='menu-primary'
                onEntered={calcHeight}
            >
                <div className='menu'>
                    <DropDownItem>My Profile</DropDownItem>
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faGear} />}
                        rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
                        goToMenu="settings"
                    >
                        Settings
                    </DropDownItem>
                </div>
            </CSSTransition>

            <CSSTransition 
                in={activeMenu === 'settings'} 
                unmountOnExit 
                timeout={500}
                classNames='menu-secondary'
                onEntered={calcHeight}
            >
                <div className='menu'>
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faChevronLeft} />}
                        goToMenu="main"
                    />
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                </div>
            </CSSTransition>
        </div>
    );
}
