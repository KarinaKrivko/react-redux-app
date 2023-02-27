import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product';

function ProductList() {

    const products = useSelector(state => state);

    return (
        <div>
            {
            products.map(product => <Product key={product.id} {...product}/>)
            }
        </div>
       
    )
 }
export default ProductList;