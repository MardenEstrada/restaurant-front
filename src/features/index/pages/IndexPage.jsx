import React from 'react';
import Header from '../../../shared/Header';

const IndexPage = () => {
    return (
        <div className="index-page">
            <Header />
            <main>
                <h1>Bienvenido a nuestro restaurante</h1>
                <p>Explora nuestros menús, conoce nuestra historia y disfruta de una experiencia única.</p>
            </main>
        </div>
    );
};

export default IndexPage;
