import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import * as userService from '../../utilities/users-service'
import NavLink from '../../components/NavLink/NavLink'

export default function AuthPage({ setUser }) {
    
    function handleLogOut() {
        userService.logOut()
        setUser()
    }

    return (
        <main className='AuthPage'>
            <h1>AuthPage</h1>
            <SignUpForm setUser={setUser} />
            <LoginForm setUser={setUser} />
            <NavLink to="#" content="Log Out" onClick={handleLogOut}/>
        </main>
    )
}

