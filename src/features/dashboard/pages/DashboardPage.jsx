import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function DashboardPage() {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <main>
                <Outlet /> {/* Renderiza las rutas anidadas aquí */}
            </main>
            <Footer />
        </div>
    );
}

export default DashboardPage;
