import styles from './UserList.module.css'

function UserList(props) {
    return (
        <div className={styles.users}>
            <ul>
                {props.users.map(user => (
                    <li key={user.key}>{user.userName} ({user.age} years old)</li>
                ))} 
            </ul>
        </div>
    );
}

export default UserList;
