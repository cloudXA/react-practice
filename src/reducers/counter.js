const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'increase':
            return state + action.payload
        case 'decrease':
            return state - 1
        default: 
            return state
    }
}

export default counterReducer;