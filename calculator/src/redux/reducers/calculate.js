const initialState = {
    digitOne: '',
    operator:'',
    digitTwo: '',
    result: ''
}

const evaluateExpression = (digitOne,digitTwo,operator) =>{
    switch(operator){
        case '+':
            return parseFloat(digitOne)+parseFloat(digitTwo);
        case '-':
            return parseFloat(digitOne)-parseFloat(digitTwo);
        case '*':
            return parseFloat(digitOne)*parseFloat(digitTwo);
        case '/':
            return parseFloat(digitOne)/parseFloat(digitTwo);
        default:
            return 'Math Error'
    }
}

const calculateReducer = (state=initialState,action) => {
    switch(action.type){
        case 'NUMBER_CLICK':
            if (state.digitOne === '') {
                return {
                    ...state,
                    digitOne:state.digitOne+action.num
                }
            } else {
                return {
                    ...state,
                    digitTwo:state.digitTwo+action.num
                }
            }
        case 'OPERATOR_CLICK':
            return {
                ...state,
                operator:action.operator
            }
        case 'EVALUATE':
            const input=evaluateExpression(state.digitOne,state.digitTwo,state.operator);
            return {
                ...state,
                result:input.toString()
            }
        case 'CLEAR':
            return {
                ...initialState
            }
        default:
            return state;
    }
}

export default calculateReducer;