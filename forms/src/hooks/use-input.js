import {useState} from 'react';

const useInput = (props) => {
    const [enteredValue, setEnteredValue] = useState({props.initialState});
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = enteredValue.trim() !== '';
    const hasError = !valueIsValid && isTouched;
};1

export default useInput;