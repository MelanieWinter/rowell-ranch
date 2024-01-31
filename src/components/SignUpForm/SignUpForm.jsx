import { useState } from 'react'
import { signUp } from '../../utilities/users-service' 
import { Link } from 'react-router-dom'
import './SignUpForm.css'

export default function SignUpForm({ setUser, isActive, setIsActive, handleToggleForm }) {

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: '',
    })

    function handleChange(evt) {
        setFormData({
            ...formData, 
            [evt.target.name]: evt.target.value,
            error: '' 
        })
    }

    async function handleSubmit(evt) { 
        evt.preventDefault() // 

        try { 
            const formDataPayload = {...formData} 
            delete formDataPayload.confirm
            delete formDataPayload.error
            const user = await signUp(formDataPayload) 
            setUser(user)
        } catch(error) {
            console.log(error)
            setFormData({ 
            ...formData,
            error: 'Sign Up Failed - Try Again' }) 
        }
    }

    const disable = formData.password !== formData.confirm

    return (
        <div>
            <div className="SignUpForm">
                <h3>Sign Up</h3>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required onFocus={() => setIsActive(true)} onBlur={() => setIsActive(false)} />
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required onFocus={() => setIsActive(true)} onBlur={() => setIsActive(false)} />
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required onFocus={() => setIsActive(true)} onBlur={() => setIsActive(false)} />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required onFocus={() => setIsActive(true)} onBlur={() => setIsActive(false)} />

                    <label>Is this an admin account?</label>
                    <input type="checkbox" name="admin" />

                    
                    <button type="submit" disabled={disable}>SIGN UP</button>

                    <p>
                        Already have an account?<br />Click here to 
                        <Link to="#" onClick={handleToggleForm}>LogIn</Link>
                    </p>
                    <p className="error-message">&nbsp;{formData.error}</p>
                </form>
            </div>
            
        </div>
    )
}

// TODO: Add in option for admin account... must have secret code to create admin account
// TODO: Add admin as a boolean option for user model
// TODO: Have admin or user portal come up depending on what sort of account is logged in