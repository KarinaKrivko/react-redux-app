import React from 'react';
import AddProduct from '../AddProduct';
import ProductList from '../ProductList';

function ProductContainer() {
    return (
        <div>
            <AddProduct />
            <ProductList />
        </div>
    );
}

export default ProductContainer;