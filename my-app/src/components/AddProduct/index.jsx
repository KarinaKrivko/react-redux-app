import React from 'react';
import { useDispatch } from 'react-redux';

function AddProduct() {

    const dispatch = useDispatch();

    const onSubmit = event => {
        event.preventDefault();
        const {title, price, discount} = event.target;

        dispatch({ type: 'ADD', payload: {
            id: Date.now(),
            title: title.value,
            price: price.value,
            discount: discount.value,
        }});

        title.value = '';
        price.value = '';
        discount.value = '';
    }

    return (
        <form onSubmit={onSubmit}>
            <input type='text' name='title' placeholder='наименование' />
            <input type='text' name='price' placeholder='цена' /> 
            <input type='text' name='discount' placeholder='скидка' />
            <button>Добавить</button> 
        </form>
    );
}

export default AddProduct;