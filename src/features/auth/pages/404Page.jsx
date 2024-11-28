import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <h1>404 - Página no encontrada</h1>
            <p>Lo sentimos, la página que estás buscando no existe.</p>
            <Link to="/" style={{ color: '#4CAF50', textDecoration: 'underline' }}>
                Volver a la página de inicio
            </Link>
        </div>
    );
};

export default NotFoundPage;
