function inforReducer(state = {}, action) {
    console.log(state, action, 'info')
    const { payload = {} } = action;
    switch(action.type) {
        case 'SET':
            return {
                ...state,
                ...payload
            }
        default:
            return state;
    }
}

// state初始为{name: null}, dispatch的payload为{name: 'alien', mes: 'let us learn react' },实现了state的新增 + 修改

export default inforReducer;