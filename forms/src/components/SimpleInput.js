import {useState, useRef} from 'react'

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const formSubmissionHandler = event => {
    event.preventDefault();
    console.log(nameInputRef.current.value);
  };

  return (
    <form onClick={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} 
               type='text' 
               id='name' 
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
