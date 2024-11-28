// src/features/auth/pages/LoginPage.jsx
import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <LoginForm />
            <p>
                ¿No tienes cuenta? <Link to="/register">Crear cuenta</Link>
            </p>
        </div>
    );
};

export default LoginPage;
