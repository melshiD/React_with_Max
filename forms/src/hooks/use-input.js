import {useReducer} from 'react';

const inititalInputState = {
    value: '',
    isTouched: false
};

const inputStateReducer = (state, action) => {
    if(action.type === 'INPUT'){
        return {value: action.value}
    }
    if(action.type === 'BLUR'){

    }
    if(action.type === 'RESET'){

    }
    return inputStateReducer;
}

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, inititalInputState);

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({type: 'INPUT', value: event.target.value});
    };

    const inputBlurHandler = (event) => {
        dispatch({type: 'BLUR'});
    };

    const reset =() => {
        dispatch({type: 'RESET'})
    }

    return {
        value: inputState.value, 
        isValid: valueIsValid,
        hasError, 
        valueChangeHandler, 
        inputBlurHandler,
        reset
    };
};

export default useInput;