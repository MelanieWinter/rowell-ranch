import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faCalendarDays, faHandshakeAngle, faCircleInfo, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import './ResponsiveNavBar.css'
import NavItem from '../NavItem/NavItem';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import EventsDropdownMenu from '../EventsDropdownMenu/EventsDropdownMenu';
import GetInvolvedDropdownMenu from '../GetInvolvedDropdownMenu/GetInvolvedDropdownMenu'
import AdminNavButton from '../AdminNavButton/AdminNavButton';

export default function ResponsiveNavBar({ user, setUser, props }) {

    return (
        <nav className='ResponsiveNavBar'>
            <ul className='navbar-nav'>
                <NavItem 
                    icon={<FontAwesomeIcon icon={faHouse} />} 
                    to="/"
                    title="Home"
                />
                <NavItem 
                    icon={<FontAwesomeIcon icon={faCalendarDays} />} 
                    title="Events"
                >
                    <EventsDropdownMenu />
                </NavItem>
                <NavItem 
                    icon={<FontAwesomeIcon icon={faPeopleGroup} />} 
                    title="Get Involved"
                >
                    <GetInvolvedDropdownMenu />
                </NavItem>
                <NavItem 
                    icon={<FontAwesomeIcon icon={faCircleInfo} />} 
                    to="/about-us"
                    title="About Us"
                />
                <NavItem 
                    icon={<FontAwesomeIcon icon={faHandshakeAngle} />} 
                    to="https://rowellranchrodeo.com/sponsors/"
                    title="Sponsors"
                />
                <NavItem 
                    icon={<FontAwesomeIcon icon={faUser} />} 
                    title="Sign In"
                >
                    <DropdownMenu user={user} setUser={setUser} />
                </NavItem>
            </ul>
        </nav>
    )
}
