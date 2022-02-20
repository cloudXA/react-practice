function numberReducer(state = 1, action) {
    console.log(state, action, 'num')
    switch(action.type) {
        case 'ADD':
            return state + 1;
        case 'DEL':
            return state - 1;
        default:
            return state;
    }
}

export default numberReducer;
