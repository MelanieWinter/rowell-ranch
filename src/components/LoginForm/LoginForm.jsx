import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import './LoginForm.css'
import { Link } from 'react-router-dom';

export default function LoginForm({ user, setUser, isActive, setIsActive, handleToggleForm }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const user = await usersService.login(credentials);
            setUser(user);
            setIsActive(false);
        } catch {
            setError('Log In Failed - Try Again');
        }
    }

    return (
        <section>
            <div className="LoginForm">
                <h3>Log In</h3>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <button type="submit">LOG IN</button>
                    {/* <p>
                        Don't have an account?<br />Click here to 
                        <Link to="#" onClick={handleToggleForm}>Sign-Up</Link>
                    </p> */}
                    <p className="error-message">&nbsp;{error}</p>
                </form>
            </div>
        </section>
    );
}
