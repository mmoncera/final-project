import React from 'react';
import AuthForm from '../components/auth-form';

function AuthPage() {
  return (
    <div className=' row justify-content-center py-5'>
      <div className='col-10 col-sm-8 col-md-6 col-lg-4'>
        <AuthForm />
      </div>
    </div>
  );
}

export default AuthPage;
