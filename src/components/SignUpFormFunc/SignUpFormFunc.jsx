import { useState } from 'react'

export default function SignUpFormFunc() {
    const [signUpFormData, setSignUpFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })

    const handleChange = (evt) => {
        setSignUpFormData({
            ...signUpFormData,
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    function handleSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(signUpFormData));
    }

    const disable = signUpFormData.password !== signUpFormData.confirm;
    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={signUpFormData.name} onChange={handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={signUpFormData.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={signUpFormData.password} onChange={handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={signUpFormData.confirm} onChange={handleChange} required />
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{signUpFormData.error}</p>
        </div>
    )
}