import { useState } from 'react'
import NavLink from '../NavLink/NavLink'
import LoginForm from '../LoginForm/LoginForm'
import SignUpForm from '../SignUpForm/SignUpForm'
import Logo from '../Logo/Logo'
import LogOut from '../LogOut/LogOut'
import './NavBar.css'

export default function NavBar({ user, setUser }) {
    const [isActive, setIsActive] = useState(false);
    const [isLoginActive, setIsLoginActive] = useState(true);

    function handleToggleForm() {
        setIsLoginActive(prevState => !prevState);
    }

    return (
        <nav className='NavBar'>
            <Logo size='logo-md' />
            <NavLink to="#" content="Events" />
            <NavLink to="#" content="Get Involved" />
            <NavLink to="#" content="About Us" />
            <NavLink to="#" content="Sponsors" />
            <div className={user ? 'log-out' : 'log-in' + (isActive ? ' active' : '')}>
                {user ? (
                    <>
                        <LogOut user={user} setUser={setUser} />
                    </>
                ) : (
                    <>
                        {isLoginActive ? (
                            <>
                                <LoginForm className='login-component' isActive={true} setIsActive={setIsActive} handleToggleForm={handleToggleForm} />
                            </>
                        ) : (
                            <>
                                <SignUpForm className='login-component' isActive={true} setIsActive={setIsActive} handleToggleForm={handleToggleForm} />
                            </>
                        )}
                    </>
                )}
            </div>
        </nav>
    );
}

// TODO: Get it so the orange box doesn't push down other elements