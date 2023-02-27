import React from 'react';
import { useDispatch } from 'react-redux';

function Product({id, title, price}) {

    const dispatch = useDispatch();
    return (
        <div>
            <p>{title}</p>
            <p>{price}</p>
            <button onClick={() => dispatch({type: 'DELETE', payload: id})}>
                Удалить
            </button>
            <button onClick={()=>dispatch({type:'BASKET-ADD', payload: id})}>
                Добавить
            </button>
        </div>
    );
}

export default Product;