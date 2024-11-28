import React, { useEffect, useState } from "react";
import { getProducts } from "../../../api/productService";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts();
            setProducts(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;