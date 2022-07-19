import React, { useState } from 'react';

function AuthForm() {
  const [userInfo, setUserInfo] = useState({ username: '', password: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    };
    fetch('/api/auth/sign-up', req)
      .then(res => res.json())
      .then(result => {
        window.location.hash = '#sign-in';
        setUserInfo({ username: '', password: '' });
      });
  }

  return (
    <>
      <h2 className='text-center font-rubik mb-3'>Register</h2>
      <form className='' onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            id="username"
            className="form-control bg-light"
            type="text"
            name="username"
            value={userInfo.username}
            placeholder='Username'
            required
            autoFocus
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            id="password"
            className="form-control bg-light"
            type="password"
            name="password"
            value={userInfo.password}
            placeholder='Password'
            required
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button type="submit" className="btn btn-primary px-4 mb-3 font-rubik ">Register</button>
        </div>
        <p className='text-center mb-3'>
          Already have an account? <a href='#sign-in' className='text-decoration-none'>Sign In</a>
        </p>
      </form>

    </>
  );
}

export default AuthForm;
