import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([])

  const addUserHandler = (uname, uage) => {
    //remember: if modifying  or appending values, use a function as argument method for setXXX call. this function will send the previous values so that you can spread teh previous value + add in the new value
    setUserList((prevUserList) => { return [...prevUserList, { name: uname, age: uage }] })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
