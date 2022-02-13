import { useState } from 'react';
import styles from './AddUser.module.css'

const AddUser = (props) => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');

    const userNameInputHandler = (event) => {
        setUserName(event.target.value);
    }

    const ageInputHandler = (event) => {
        setAge(event.target.value);
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        const userData = {
            userName : userName,
            age : age
        }
        setUserName('');
        setAge('');
        props.onSubmit(userData);
    }

    return (
        <form onSubmit={formSubmitHandler} className={styles.input}>
            <label>Username</label>
            <input type="text" value={userName} onChange={userNameInputHandler}/>
            <label>Age (Years)</label>
            <input type="text" value={age} onChange={ageInputHandler}/>
            <button className={styles.button} type="submit">Add User</button>
        </form>
    );
}

export default AddUser;