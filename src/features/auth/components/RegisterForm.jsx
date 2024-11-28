import React from 'react';

const RegisterForm = () => {
    return (
        <div className="register-page">
            <h1>Crear cuenta</h1>
            <form>
                <div>
                    <label>Nombre:</label>
                    <input type="text" placeholder="Ingresa tu nombre" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Ingresa tu email" />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" placeholder="Ingresa tu contraseña" />
                </div>
                <div>
                    <label>Confirmar contraseña:</label>
                    <input type="password" placeholder="Confirma tu contraseña" />
                </div>
                <button type="submit">Crear cuenta</button>
            </form>
        </div>
    );
};

export default RegisterForm;
