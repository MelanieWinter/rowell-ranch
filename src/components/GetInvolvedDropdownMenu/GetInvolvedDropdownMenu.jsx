import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faHandshakeAngle, faPeopleGroup, faStore } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
import { CSSTransition } from 'react-transition-group'
import '../DropdownMenu/DropdownMenu.css';
import { useState } from 'react';

export default function GetInvolvedDropdownMenu({ menuKey, menuType }) {
    const [activeMenu, setActiveMenu ] = useState('main')
    const [menuHeight, setMenuHeight] = useState(null)

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropDownItem({ children, leftIcon, rightIcon, goToMenu, to }) {
        return (
            <Link 
                to={to} 
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
        <div className='DropdownMenu' style={{ minHeight: menuHeight }} key={menuKey}>
            <CSSTransition 
                in={activeMenu === 'main'} 
                unmountOnExit 
                timeout={500}
                classNames='menu-primary'
                onEntered={calcHeight}
            >
                <div className='menu'>
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faFaceSmile} />}
                        to="https://rowellranchrodeo.com/internships/"
                    >
                        Internships
                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faHandshakeAngle} />}
                        to="https://rowellranchrodeo.com/rodeosponsorship/"
                    >
                        Sponsorship
                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faPeopleGroup} />}
                        to="https://rowellranchrodeo.com/rodeovolunteer/"
                    >
                        Volunteer
                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faStore} />}
                        to="https://rowellranchrodeo.com/rodeovendors/"
                    >
                        Vendors
                    </DropDownItem>
                </div>
            </CSSTransition>
        </div>

        
    );
}
