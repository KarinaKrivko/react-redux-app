import React from 'react';


function Buttons({count}) {
    return (
        <div>
            <button onClick={count}>+</button>
            <button onClick={count}>-</button>
        </div>
    );
}

export default Buttons;