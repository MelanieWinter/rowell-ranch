import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faChevronLeft, faHatCowboy, faHatCowboySide, faCow, faHorse, faHorseHead, faUtensils, faPersonDress, faChildReaching } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
import { CSSTransition } from 'react-transition-group'
import '../DropdownMenu/DropdownMenu.css';
import { useState } from 'react';

export default function EventsDropdownMenu({ menuKey, menuType }) {
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
        <div className='DropdownMenu DMEvents' style={{ minHeight: menuHeight }} key={menuKey}>
            <CSSTransition 
                in={activeMenu === 'main'} 
                unmountOnExit 
                timeout={500}
                classNames='menu-primary'
                onEntered={calcHeight}
            >
                <div className='menu'>
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faHatCowboy} />}
                        to="https://rowellranchrodeo.com/prorodeo/"
                    >
                        Pro Rodeo
                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faCow} />}
                        to="https://rowellranchrodeo.com/bullbash/"
                    >
                        Bull Bash
                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faHorseHead} />}
                        to="http://www.rowellranchrodeoparade.com/"
                    >
                        Parade
                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faHatCowboySide} />}
                        to="https://rowellranchrodeo.com/challenge/"
                    >
                        Cowboy Challenge
                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faUtensils} />}
                        to="https://rowellranchrodeo.com/challenge/"
                    >
                        BBQ & Dance
                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faPersonDress} />}
                        to="https://rowellranchrodeo.com/cowgirlpicnic/"
                    >
                        Cowgirl Picnic
                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faHorse} />}
                        to="https://rowellranchrodeo.com/roping/"
                    >
                        Team Roping
                    </DropDownItem>
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faChildReaching} />}
                        to="https://rowellranchrodeo.com/specialpartners/"
                    >
                        Special Partners
                    </DropDownItem>
                </div>
            </CSSTransition>
        </div>

        
    );
}
