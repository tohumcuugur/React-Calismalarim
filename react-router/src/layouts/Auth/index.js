import React from 'react';
import {Link, Outlet } from 'react-router-dom';
import './styles.css';

function AuthLayout() {
  return (
    <div className='auth-container'>
      <div className='auth-menu'>
        <Link to="/auth">Giriş yap</Link>
        <Link to="/auth/register">Kayıt ol</Link>
      </div>
      <hr />
      <Outlet />
    </div>

  )
}

export default AuthLayout