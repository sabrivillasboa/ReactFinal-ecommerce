export const asyncMock = (prod) =>{ 
    return new Promise((result) => {
        setTimeout(() => {
            result(prod)
        }, 1000);
    })
};