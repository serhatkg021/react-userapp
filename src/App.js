import React, { useState } from 'react';
import AddUser from './components/AddUser';
import Users from './components/Users';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  const addNewUser = (newUser) => {
    setUsers(users => (
      [...users, newUser]
    ))
  }

  return (
    <div className='container'>
      <h4>User App</h4>
      <hr />
      <AddUser addNewUser={addNewUser} />

      <hr />

      <Users users={users} error={error} isLoaded={isLoaded} getUsers={getUsers} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
