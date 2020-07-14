import { combineReducers } from 'redux'

const initialState = { value: "0", symbole: null, value2: null }


function Calculator(state = initialState, action) {
    switch (action.type) {
        case 'Add':
            if (state.value2 === null) {
                state.value2 = state.value
                state.value = '0'
            }
            state.symbole = '+'
            return state
        case 'Subtract':
            if (state.value2 === null) {
                state.value2 = state.value
                state.value = '0'
            }
            state.symbole = '-'
            return state
        case 'Divide':
            if (state.value2 === null) {
                state.value2 = state.value
                state.value = '0'
            }
            state.symbole = '/'
            return state
        case 'Multiple':
            if (state.value2 === null) {
                state.value2 = state.value
                state.value = '0'
            }
            state.symbole = '*'
            return state
        case 'Equal':
            if (state.value2 !== null) {
                switch (state.symbole) {
                    case '-':
                        state.value = parseFloat(state.value) - parseFloat(state.value2)
                        break;
                    case '*':
                        state.value = parseFloat(state.value) * parseFloat(state.value2)
                        break;
                    case '/':
                        state.value = parseFloat(state.value) / parseFloat(state.value2)
                        break;
                    case '+':
                    default:
                        state.value = parseFloat(state.value) + parseFloat(state.value2)
                        break;
                }
            }
            return { value: state.value.toLocaleString(), symbole: null, value2: null }
        case 'Clear':
            return '0'
        case 'Del':
            if (state.value.length === 1) {
                return { value: '0', symbole: state.symbole, value2: state.value2 }
            }
            else {
                return {
                    value: state.value.substr(0, state.value.length - 1),
                    symbole: state.symbole,
                    value2: state.value2
                }
            }
        case '1':
            if (state.value === '0') {
                return { value: '1', symbole: state.symbole, value2: state.value2 }
            }
            else {
                return { value: state.value + '1', symbole: state.symbole, value2: state.value2 }
            }
        case '2':
            if (state.value === '0') {
                return { value: '2', symbole: state.symbole, value2: state.value2 }
            }
            else {
                return { value: state.value + '2', symbole: state.symbole, value2: state.value2 }
            }
        case '3':
            if (state.value === '0') {
                return { value: '3', symbole: state.symbole, value2: state.value2 }
            }
            else {
                return { value: state.value + '3', symbole: state.symbole, value2: state.value2 }
            }
        case '4':
            if (state.value === '0') {
                return { value: '4', symbole: state.symbole, value2: state.value2 }
            }
            else {
                return { value: state.value + '4', symbole: state.symbole, value2: state.value2 }
            }
        case '5':
            if (state.value === '0') {
                return { value: '5', symbole: state.symbole, value2: state.value2 }
            }
            else {
                return { value: state.value + '5', symbole: state.symbole, value2: state.value2 }
            }
        case '6':
            if (state.value === '0') {
                return { value: '6', symbole: state.symbole, value2: state.value2 }
            }
            else {
                return { value: state.value + '6', symbole: state.symbole, value2: state.value2 }
            }
        case '7':
            if (state.value === '0') {
                return { value: '7', symbole: state.symbole, value2: state.value2 }
            }
            else {
                return { value: state.value + '7', symbole: state.symbole, value2: state.value2 }
            }
        case '8':
            if (state.value === '0') {
                return { value: '8', symbole: state.symbole, value2: state.value2 }
            }
            else {
                return { value: state.value + '8', symbole: state.symbole, value2: state.value2 }
            }
        case '9':
            if (state.value === '0') {
                return { value: '9', symbole: state.symbole, value2: state.value2 }
            }
            else {
                return { value: state.value + '9', symbole: state.symbole, value2: state.value2 }
            }
        case '0':
            if (state.value === '0') {
                return { value: '0', symbole: state.symbole, value2: state.value2 }
            }
            else {
                return { value: state.value + '0', symbole: state.symbole, value2: state.value2 }
            }
        case '.':
            if (state.value.indexOf(".") >= 0) {
                return state
            }
            else {
                return { value: state.value + '.', symbole: state.symbole, value2: state.value2 }
            }
        default:
            return state
    }
}

const reducers = combineReducers({
    values: Calculator,
})

export default reducers