import React, {useState, Fragment} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    let key = Math.random();
    setUsersList( (prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: key}];
    });
  }
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
