import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faUser, faPencil, faTicket, faCartShopping, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
import { CSSTransition } from 'react-transition-group'
import './DropdownMenu.css';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import * as userService from '../../utilities/users-service'
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import * as ordersAPI from '../../utilities/orders-api';
import { useEffect } from 'react'

export default function DropdownMenu({ menuKey, menuType, user, setUser, activeMenu, setActiveMenu, menuHeight, setMenuHeight, order, cart, handleChangeQty, handleCheckout }) {

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function handleLogOut() {
        userService.logOut()
        setUser()
    }

    function setUserAndCloseMenu(user) {
        setUser(user);
        setActiveMenu('main');
    }

    function DropDownItem({ children, leftIcon, rightIcon, goToMenu, user, setUser, to }) {
        return (
            <Link
                to={to}
                className="menu-item"
                onClick={() => goToMenu && setTimeout(() => setActiveMenu(goToMenu), 300)}
            >
                <span className="icon-button">{leftIcon}</span>
                {children}
                <span className="icon-right">{rightIcon}</span>
            </Link>
        );
    }

    return (
        <div className="DropdownMenu" style={{ minHeight: menuHeight }} key={menuKey}>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEntered={calcHeight}
            >
                <div className="menu">
                    {user && user.admin && 
                        <>
                            <DropDownItem
                                leftIcon={<FontAwesomeIcon icon={faUser} />}
                                to="/admin-portal"
                            >
                                Admin Portal
                            </DropDownItem>
                            <Link
                                to="#"
                                className="menu-item"
                                onClick={handleLogOut}
                            >
                                <span 
                                    className="icon-button" 
                                    style={{ transform: 'rotate(180deg)' }}
                                >
                                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                </span>
                                Log Out
                                <span className="icon-right"></span>
                            </Link>
                        </>
                    }
                    {user && !user.admin &&
                        <>
                            <DropDownItem
                            leftIcon={<FontAwesomeIcon icon={faUser} />}
                            to="/user-portal"
                            >
                            Order History
                            </DropDownItem>
                            <DropDownItem
                            leftIcon={<FontAwesomeIcon icon={faTicket} />}
                            to="/ticket-store"
                            >
                            Buy Tickets
                            </DropDownItem>
                            <DropDownItem
                            leftIcon={<FontAwesomeIcon icon={faCartShopping} />}
                            rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
                            goToMenu="cart"
                            >
                            Shopping Cart
                            </DropDownItem>
                            <Link
                                to="#"
                                className="menu-item"
                                onClick={handleLogOut}
                            >
                                <span 
                                    className="icon-button" 
                                    style={{ transform: 'rotate(180deg)' }}
                                >
                                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                </span>
                                Log Out
                                <span className="icon-right"></span>
                            </Link>
                        </>
                    }
                    {!user &&
                        <>
                            <DropDownItem
                                leftIcon={<FontAwesomeIcon icon={faPencil} />}
                                rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
                                goToMenu="signup"
                            >
                                Sign Up
                            </DropDownItem>
                            <DropDownItem
                                leftIcon={<FontAwesomeIcon icon={faPencil} />}
                                rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
                                goToMenu="login"
                            >
                                Log In
                            </DropDownItem>
                        </>
                    }
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'login'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary"
                onEntered={calcHeight}
            >
                <div className="menu">
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faChevronLeft} />}
                        goToMenu="main"
                    />
                    <LoginForm setUser={setUserAndCloseMenu} user={user} />
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'signup'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary"
                onEntered={calcHeight}
            >
                <div className="menu">
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faChevronLeft} />}
                        goToMenu="main"
                    />
                    <SignUpForm setUser={setUserAndCloseMenu} user={user} />
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'cart'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary cart"
                onEntered={calcHeight}
            >
                <div className="menu">
                    <DropDownItem
                        leftIcon={<FontAwesomeIcon icon={faChevronLeft} />}
                        goToMenu="main"
                    />
                    <ShoppingCart 
                    order={cart}
                    handleChangeQty={handleChangeQty}
                    handleCheckout={handleCheckout}
                />
                </div>
            </CSSTransition>
        </div>
    );
}