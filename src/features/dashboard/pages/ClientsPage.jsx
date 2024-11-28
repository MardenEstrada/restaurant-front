import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ClientsPage = () => {
    return (
        <div className="dashboard-page">
            <Navbar />
            <Sidebar />
            <main>
                <h2>Lista de Clientes</h2>
                {/* Aquí puedes agregar la lógica y componentes para mostrar los clientes */}
            </main>
            <Footer />
        </div>
    );
};

export default ClientsPage;
