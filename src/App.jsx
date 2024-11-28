import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './features/auth/context/AuthContext';
import IndexPage from './features/index/pages/IndexPage';
import LoginPage from './features/auth/pages/LoginPage';
import RegisterPage from './features/auth/pages/RegisterPage';
import DashboardPage from './features/dashboard/pages/DashboardPage';
import ProductsPage from './features/dashboard/pages/ProductsPage';
import ClientsPage from './features/dashboard/pages/ClientsPage';
import NotFoundPage from './features/auth/pages/404Page';
import ProtectedRoute from './shared/ProtectedRoute';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Ruta de inicio */}
                    <Route path="/" element={<IndexPage />} />
                    {/* Ruta de login */}
                    <Route path="/login" element={<LoginPage />} />
                    {/* Ruta de registro */}
                    <Route path="/register" element={<RegisterPage />} />
                    {/* Ruta de Dashboard protegida */}
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <DashboardPage />
                            </ProtectedRoute>
                        }
                    >
                        <Route path="products" element={<ProductsPage />} />
                        <Route path="clients" element={<ClientsPage />} />
                    </Route>
                    {/* Ruta para páginas no encontradas */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
