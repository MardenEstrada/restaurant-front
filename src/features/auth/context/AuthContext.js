import React, { createContext, useState } from "react";
import { login } from "../../../api/authService";

export const AuthContext = createContext(); // Exportación de AuthContext

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const handleLogin = async (email, password) => {
        try {
            const data = await login(email, password);
            setUser({ email: data.email });
            localStorage.setItem("token", data.token);
        } catch (error) {
            console.error("Error de autenticación:", error);
        }
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
