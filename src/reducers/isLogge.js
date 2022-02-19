const isLoggerReducer = (state = false, action) => {
    switch (action.type) {
        case 'sing_in':
            return '!state'
        default: 
            return state
    }
}

export default isLoggerReducer;