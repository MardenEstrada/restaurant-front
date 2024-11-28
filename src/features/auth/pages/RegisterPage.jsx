// src/features/auth/pages/LoginPage.jsx
import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div>
            <h1>Register Page</h1>
            <RegisterForm />
            <p>
                ¿Ya tienes cuenta? <Link to="/login">Iniciar Sesión</Link>
            </p>
        </div>
    );
};

export default RegisterPage;
