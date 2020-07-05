export const numberClick = (num) => {
    return {
        type:'NUMBER_CLICK',
        num
    }
}

export const operatorClick = (operator) => {
    return {
        type:'OPERATOR_CLICK',
        operator
    }
}

export const evaluate = (operator) => {
    return {
        type: 'EVALUATE',
        operator
    }
}

export const clear = () => {
    return {
        type: 'CLEAR'
    }
}