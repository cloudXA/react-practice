export const increase = (number) => {
    return {
        type: 'increase',
        payload: number
    }
}
export const decrease = () => {
    return {
        type: 'decrease'
    }
}