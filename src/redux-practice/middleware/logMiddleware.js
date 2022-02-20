function logMiddleware() {
    return (next) => {
        return (action)=> {
            const { type } = action;
            console.log('发生一次action:', type)
            return next(action)
        }
    }
}

export default logMiddleware;