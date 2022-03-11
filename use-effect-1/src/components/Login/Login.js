import React, { useState, useReducer, useEffect, useContext, useRef } from 'react';
import AuthContext from '../../Store/auth-context';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    console.log('on my way in : ' + action.val);
    return {value: action.val, isValid: action.val.includes('@')};
  }
  if(action.type === 'INPUT_BLUR'){
    console.log('on my way out : ' + action.val);
    return {value: state.value, isValid: state.isValid};
  }
  return {value: '', isValid: false};
};

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.trim().length > 6};
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.isValid};
  }
  return {value: '', isValid: false};
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '', isValid: null}, );

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '', isValid: null});

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log('in the func')
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    }, 500);

    return () => {clearTimeout(timerId)};
  }, [emailState.isValid, passwordState.isValid]);

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});
  };

  const validateEmailHandler = (event) => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if(!emailIsValid){
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input ref={emailInputRef} 
               id="email" 
               label="E-mail" 
               type="email" 
               isValid={emailIsValid} 
               onChange={emailChangeHandler} 
               onBlur={validateEmailHandler}
        />
        <Input ref={passwordInputRef}
               id="password" 
               label="Password" 
               type="password" 
               isValid={passwordIsValid} 
               onChange={passwordChangeHandler} 
               onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" 
                  className={classes.btn} 
                  onClick={submitHandler}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
