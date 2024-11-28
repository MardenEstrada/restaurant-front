import axios from "./axiosConfig";

// Función para iniciar sesión
export const login = async (email, password) => {
    try {
        const response = await axios.post("/auth/login", { email, password });
        const token = response.data.token;
        localStorage.setItem('token', token); // Guardar el token
        return token;
    } catch (error) {
        throw error.response?.data || "Error al iniciar sesión";
    }
};


// Función para registrar un usuario
export const register = async (userData) => {
    try {
        await axios.post("/auth/register", userData);
        return "¡Usuario registrado correctamente!";
    } catch (error) {
        throw error.response?.data || "Error al registrarte";
    }
};
