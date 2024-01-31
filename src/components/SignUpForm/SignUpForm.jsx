import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import { Link } from 'react-router-dom';
import './SignUpForm.css';

export default function SignUpForm({ setUser, isActive, setIsActive, handleToggleForm }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    admin: false,
    adminAuthCode: '',
    error: '',
  });

  const handleChange = (evt) => {
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, [evt.target.name]: evt.target.value, error: '' };
      if (evt.target.name === 'adminAuthCode' && isAdmin) {
        const adminAuthCodeFromEnv = process.env.REACT_APP_ADMIN_AUTH_CODE;
        updatedFormData.disable = evt.target.value !== adminAuthCodeFromEnv;
      }
      if (evt.target.name === 'confirm') {
        updatedFormData.disable = updatedFormData.password !== evt.target.value;
      }
      return updatedFormData;
    });
  };

  const handleCheckbox = () => {
    setIsAdmin((prevIsAdmin) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        admin: !prevIsAdmin,
        adminAuthCode: '',
      }));
      return !prevIsAdmin;
    });
  };

    const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
        const formDataPayload = { ...formData };
        delete formDataPayload.confirm;
        delete formDataPayload.error;
        const user = await signUp(formDataPayload);
        setUser(user);
        } catch (error) {
        console.log(error);
        setFormData({
            ...formData,
            error: 'Sign Up Failed - Try Again',
        });
        }
    };

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
            <input type="checkbox" name="admin" checked={isAdmin} onChange={handleCheckbox} />

            {isAdmin && (
                <div>
                <label>Admin Auth Code</label>
                <input
                    type="text"
                    name="adminAuthCode"
                    value={formData.adminAuthCode}
                    onChange={handleChange}
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(false)}
                />
                </div>
            )}

            <button type="submit" disabled={formData.disable}>
                SIGN UP
            </button>

            <p>
                Already have an account?<br />
                Click here to <Link to="#" onClick={handleToggleForm}>LogIn</Link>
            </p>
            <p className="error-message">&nbsp;{formData.error}</p>
            </form>
        </div>
    </div>
  );
}
