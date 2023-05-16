export const setToLS = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value))
}


export const getFromLS = (key) => {
    const valueFound = localStorage.getItem(key);
    if(valueFound) {
        return JSON.parse(valueFound)
    }
}