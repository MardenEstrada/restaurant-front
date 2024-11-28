import axios from "./axiosConfig";

// Obtener todos los productos
export const getProducts = async () => {
    try {
        const response = await axios.get("/products");
        return response.data;
    } catch (error) {
        throw error.response?.data || "Error buscando producto";
    }
};

// Crear un producto
export const createProduct = async (product) => {
    try {
        const response = await axios.post("/products", product);
        return response.data;
    } catch (error) {
        throw error.response?.data || "Error creando producto";
    }
};

// Actualizar un producto
export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`/products/${id}`, product);
        return response.data;
    } catch (error) {
        throw error.response?.data || "Error actualizando producto";
    }
};

// Eliminar un producto
export const deleteProduct = async (id) => {
    try {
        await axios.delete(`/products/${id}`);
        return "Product deleted successfully!";
    } catch (error) {
        throw error.response?.data || "Error eliminando producto";
    }
};
