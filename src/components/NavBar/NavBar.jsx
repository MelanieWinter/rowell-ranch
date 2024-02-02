import { useState } from 'react';
import NavLink from '../NavLink/NavLink';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import Logo from '../Logo/Logo';
import './NavBar.css';
import UserDropDown from '../UserDropDown/UserDropDown';
import AdminDropDown from '../AdminDropDown/AdminDropDown'; // Import AdminDropDown

export default function NavBar({ user, setUser }) {
    const [isActive, setIsActive] = useState(false);
    const [isLoginActive, setIsLoginActive] = useState(true);

    function handleToggleForm() {
        setIsLoginActive((prevState) => !prevState);
    }

    return (
        <nav className="NavBar">
        <NavLink to="/" content={<Logo size="logo-md" />} />
        <NavLink to="/events" content="Events" />
        <NavLink to="/get-involved" content="Get Involved" />
        <NavLink to="/about-us" content="About Us" />
        <NavLink to="/sponsors" content="Sponsors" />
        <div className={user ? 'log-out' : 'log-in' + (isActive ? ' active' : '')}>
            {user ? (
            <>
                {user.admin ? <AdminDropDown user={user} setUser={setUser} /> : <UserDropDown user={user} setUser={setUser} />}
            </>
            ) : (
            <>
                {isLoginActive ? (
                <>
                    <LoginForm className="login-component" isActive={true} setIsActive={setIsActive} handleToggleForm={handleToggleForm} setUser={setUser} />
                </>
                ) : (
                <>
                    <SignUpForm className="login-component" isActive={true} setIsActive={setIsActive} handleToggleForm={handleToggleForm} setUser={setUser} />
                </>
                )}
            </>
            )}
        </div>
        </nav>
    );
}
