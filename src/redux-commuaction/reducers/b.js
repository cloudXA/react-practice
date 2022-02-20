const BReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SETB':
            return {
                    ...state,
                    b: action.payload.compBsay
            }
        default: 
            return state
    }
}

export default BReducer;