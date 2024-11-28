import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

const ProductsPage = () => {
    return (
        <div className="dashboard-page">
            <Navbar />
            <Sidebar />
            <main>
                <h2>Lista de Productos</h2>
                <ProductList />
            </main>
            <Footer />
        </div>
    );
};

export default ProductsPage;
