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
      });
  }

  return (
    <form className='col-10 col-md-5 col-lg-4 mb-4' onSubmit={handleSubmit}>
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
        <button type="submit" className="btn px-4 btn-primary">Register</button>
      </div>
    </form>
  );
}

export default AuthForm;
