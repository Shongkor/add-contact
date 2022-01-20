const initialState  = [
    {
        id: 0,
        name: 'Shongkor talukdar',
        number : '01755077446',
        email : 'sk0@gmail.com'
},
    {
        id: 1,
        name: 'Shanta talukdar',
        number : '01755177446',
        email : 'sk1@gmail.com'
}
];


const Reducer = (state = initialState , action) => {
    switch (action.type) {
        case 'ADD_STUDENT' :
            const newState=[...state, action.payload]
            return newState
        default :
            return state;
    }
    
}
export default Reducer;