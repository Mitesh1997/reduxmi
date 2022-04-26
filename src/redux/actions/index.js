export const increment = (count) => {
    return {
        type: "Increment",
        payload: count
    }
}
export const decrement = (count) => {
    return {
        type: "Decrement",
        payload: count
    }
}
export const reset = () => {
    return {
        type: "Reset"
    }
}