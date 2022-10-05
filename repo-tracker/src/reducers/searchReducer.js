const initState = { username: "Littlerou"};

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'SEARCH':
            return { ...state, username: action.payload };
        default:
            return state;
    };
};

export default searchReducer;