import React, { useState, useEffect } from 'react';

const Cart = ({cart}) => {
    const [selectedItems, setSelectedItems] = useState([cart]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Realiza el fetch para obtener los datos de los productos
        fetch('http://146.190.59.47:3000/product/list')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error));
    }, []);

    const handleItemSelect = (itemId) => {
        // Verifica si el item ya está seleccionado
        const isSelected = selectedItems.includes(itemId);

        if (isSelected) {
            // Si el item ya está seleccionado, lo removemos del estado
            setSelectedItems(selectedItems.filter(id => id !== itemId));
        } else {
            // Si el item no está seleccionado, lo agregamos al estado
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    // Filtra los elementos del carrito basándote en los elementos seleccionados
    setSelectedItems(cart)

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Mi Carrito</h1>
            <div className="bg-white shadow-md rounded-md p-4 w-80">
                {selectedItems.map(product => (
                    <div key={product.id} className="card">
                        <h1>{product.id}</h1>
                        <h3>{product.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;