import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/login">Iniciar sesión</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
