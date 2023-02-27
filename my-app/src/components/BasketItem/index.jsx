import React from 'react';
import { useDispatch } from 'react-redux';
import s from './style.module.css';

function BasketItem({id, count}) {

    const dispatch = useDispatch();

    return (
        <div className={s.item}>
            <p>ID: {id}</p>
            <p>COUNT: {count}</p>
            <div className={s.btns}>
                <button onClick={()=> dispatch({type: 'BASKET_INCREMENT', payload: id})}>+</button>
                <button onClick={()=> dispatch({type: 'BASKET_DECREMENT', payload: id})}>-</button>
            </div>
        </div>
    );
}

export default BasketItem;

