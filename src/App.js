import React, { useState } from 'react';
import AddUser from './components/AddUser';
import Users from './components/Users';

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Serhat Kadir",
      email: "serhat@gmail.com"
    },
    {
      id: 2,
      name: "Salih",
      email: "salih@gmail.com"
    },
    {
      id: 3,
      name: "Engin",
      email: "engin@gmail.com"
    }
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  const addNewUser = (newUser) => {
    const newUsers = users.push(newUser);
    setUsers(newUsers);
    console.log(users);
  }

  return (
    <div className='container'>
      <h4>User App</h4>
      <hr />
      <AddUser addNewUser={addNewUser} />

      <hr />

      <Users users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
