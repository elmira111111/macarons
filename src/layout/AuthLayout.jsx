import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => (
    <div className="auth-wrapper" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9'
    }}>
        <Outlet />
    </div>
);

export default AuthLayout;
