import React from 'react';
import AuthForm from '../components/auth-form';

function AuthPage() {
  return (
    <div className=' row justify-content-center py-5'>
      <h2 className='text-center font-rubik mb-4'>Register</h2>
      <AuthForm />
      <p className='text-center mb-4'>
        Already have an account? <a href='#sign-in' className='text-decoration-none'>Sign In</a>
      </p>
    </div>
  );
}

export default AuthPage;
