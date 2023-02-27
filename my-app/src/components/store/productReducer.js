

const products = [
    {id: 1,
    title: 'bread',
    price: 1,
    discount: 50
},

{   id: 2,
    title: 'milk',
    price: 2,
    discount: 20
},
{   id: 3,
    title: 'butter',
    price: 2,
    discount: 25
},
{   id: 4,
    title: 'cookie',
    price: 3,
    discount: 10
},
]


export const productReducer = (state = products, action) => {
    if (action.type === 'ADD'){
        return [...state, action.payload]
    }else if(action.type === 'DELETE'){
        return state.filter(({id}) => id !== action.payload)
    }else{
    return state
}
}