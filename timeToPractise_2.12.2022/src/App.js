import React, { useState } from 'react';
import AddUser from './components/AddUser';
import ErrorModal from './components/ErrorModal';
import UserList from './components/UserList';
import styles from './App.module.css'

function App() {
  const [errorOverlay, setErrorOverlay] = useState({ state: false, type: '' });
  const [userData, setUserData] = useState([
    { key: '1', userName: 'Max', age: '22' },
    { key: '2', userName: 'DAX', age: '23' },
    { key: '3', userName: 'Pax', age: '31' },
  ]);

  const addUserSubmitHandler = (data) => {
    if (data.userName.trim().length === 0 || data.age.trim().length === 0) {
      setErrorOverlay({ state: true, type: 'empty' });
    } else if (data.age.trim() < 0) {
      setErrorOverlay({ state: true, type: 'invalidAge' });
    } else {
      //Scope of my engineering genious knows n...😏(gets max key from userData and adds 1)
      data.key = Math.max(...userData.map(e => e.key)) + 1
      setUserData((prevData) => {
        return [...prevData, data]
      });
    }
  }
  const onOkayHandler = () => {
    setErrorOverlay({ state: false, type: '' });
  }

  return (
    <div className={styles}>
      {errorOverlay.state ? <ErrorModal onOkay={onOkayHandler} type={errorOverlay.type} /> : null}
      <AddUser onSubmit={addUserSubmitHandler} />
      <UserList users={userData} />
    </div>
  );
}

export default App;
