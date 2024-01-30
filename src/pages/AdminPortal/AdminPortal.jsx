import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './AdminPortal.css'

export default function AdminPortal({ setUser }) {
    const [showAdminLogin, setShowAdminLogin] = useState(true)

    return (
        <main className='AdminPortal'>
            {showAdminLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
            <h3 onClick={() => setShowAdminLogin(!showAdminLogin)}>
                {showAdminLogin ? 'SIGN UP' : 'LOGIN'}
            </h3>
        </main>
    )
}

// for admin login check is adminauthcode === process.env.ADMIN_AUTH_CODE 
// add auth code field


// import { useState } from 'react';
// import './AuthPage.css';
// import LoginForm from '../../components/LoginForm/LoginForm';
// import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import Logo from '../../components/Logo/Logo';

// export default function AuthPage({ setUser }) {
//   const [showLogin, setShowLogin] = useState(true);

//   return (
//     <main className="AuthPage">
//       <div>
//         <Logo />
//         <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
//       </div>
//       {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
//     </main>
//   );
// }