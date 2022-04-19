import {useState} from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState('false');

  const enteredEmailIsValid = enteredEmail.includes('@');
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
    
  if (enteredNameIsValid) {
    formIsValid = true;
  }


  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if(!enteredNameIsValid){
      return;
    }
    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid ? 
                            'form-control invalid':
                            'form-control';

  const emailInputClasses = enteredEmailIsValid ? 
                            'form-control invalid':
                            'form-control';

  return (
    <form>

      {/* name  */}
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' 
               id='name' 
               onChange={nameInputChangeHandler}
               onBlur={nameInputBlurHandler}
               value={enteredName}
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>

      {/* email input  */}
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-mail</label>
        <input type='email' 
               id='email' 
               onChange={emailInputChangeHandler}
               onBlur={emailInputBlurHandler}
               value={enteredEmail}
        />
        {enteredEmailIsInvalid && <p className='error-text'>Please enter valid email.</p>}
      </div>

      {/* button to submit  */}
      <div className="form-actions">
        {/* styles aren't being applied properly to button, check it out  */}
        <button disabled={!formIsValid} onClick={formSubmissionHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
