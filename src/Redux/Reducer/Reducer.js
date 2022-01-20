const initialState  = [
    {
        id: 0,
        name: 'Shongkor talukdar',
        contact : '01755077446',
        email : 'sk0@gmail.com'
},
    {
        id: 1,
        name: 'Shanta talukdar',
        contact : '01755177446',
        email : 'sk1@gmail.com'
}
];

const Reducer = (state = initialState , action) => {
    switch (action.type) {
        default :
            return state;
    }
}
export default Reducer;