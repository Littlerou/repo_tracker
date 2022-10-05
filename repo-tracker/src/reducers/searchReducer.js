const initState = { username: ""};

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'Search':
            return { ...state, username: action.payload };
        default:
            return state;
    };
};

export default searchReducer;