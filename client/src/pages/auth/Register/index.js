import { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { showErrorMessage, showSuccessMessage } from '../utils/Notification';

import { isEmpty, isEmail, isTooShort, isMatch } from '../utils/validation';

import './style.scss';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirm_password: '',
  error: '',
  success: ''
};

function Register() {
  const [user, setUser] = useState(initialState);

  const { name, email, password, confirm_password, error, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, error: '', success: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty(name) || isEmpty(password)) {
      return setUser({
        ...user,
        error: 'Fields cannot be empty',
        success: ''
      });
    }
    if (!isEmail(email)) {
      return setUser({
        ...user,
        error: 'Invalid email',
        success: ''
      });
    }
    if (isTooShort(password)) {
      return setUser({
        ...user,
        error: 'Password must have at least 6 characters',
        success: ''
      });
    }
    if (!isMatch(password, confirm_password)) {
      return setUser({
        ...user,
        error: 'Passwords must match',
        success: ''
      });
    }
    try {
      const res = await axios.post('/user/register', {
        name,
        email,
        password
      });
      setUser({
        ...user,
        error: '',
        success: res.data.msg
      });
    } catch (err) {
      err.response.data.msg &&
        setUser({
          ...user,
          error: err.response.data.msg,
          success: ''
        });
    }
  };

  return (
    <div className="register-page">
      <div className="form-wrapper">
        <h2>Register</h2>
        {error && showErrorMessage(error)}
        {success && showSuccessMessage(success)}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your name"
              id="name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
            <div className="invalid-feedback">Just Testing</div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter email address"
              id="email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
            <div className="invalid-feedback">Just Testing</div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter password"
              id="password"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
            <div className="invalid-feedback">Just Testing</div>
          </div>
          <div className="form-group">
            <label htmlFor="confirm_password">Confirm password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Confirm password"
              id="confirm_password"
              name="confirm_password"
              value={confirm_password}
              onChange={handleChangeInput}
            />
            <div className="invalid-feedback">Just Testing</div>
          </div>
          <div className="">
            <button type="submit">Register</button>
          </div>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
