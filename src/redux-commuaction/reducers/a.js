const AReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SETA':
            return {
                ...state,
                a: action.payload.compAsay
            }
        default: 
            return state
    }
}

export default AReducer;