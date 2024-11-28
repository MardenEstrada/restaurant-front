import React from 'react';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li><a href="/dashboard/products">Lista de Productos</a></li>
                <li><a href="/dashboard/clients">Lista de Clientes</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
