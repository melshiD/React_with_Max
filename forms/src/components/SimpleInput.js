import {useState, useRef} from 'react'

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsvalid] = useState(false);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    let codes = () => {
      let codeArray = [];
      for(let i in enteredName){
        codeArray.push(enteredName.charCodeAt(i));
        console.log(enteredName.charCodeAt(i))
      }
      return codeArray;
    }
    console.log(codes());
  };

  return (
    <form onClick={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} 
               type='text' 
               id='name' 
               onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
