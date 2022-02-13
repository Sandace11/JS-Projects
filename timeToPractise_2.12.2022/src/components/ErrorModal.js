import styles from './ErrorModal.module.css'
import btnStyles from './AddUser.module.css'

function ErrorModal(props) {
    return (
        <div className={styles.modal}>
            <div className={styles.header}>
                <h2>Invalid Input</h2>
            </div>
            <div className={styles.content}>
                {props.type === 'empty' && <p>Please enter a valid name & age (non-empty values).</p>}
                {props.type === 'invalidAge' && <p>Please enter a valid age ({`>`} 0).</p>}
            </div>
            <div className={styles.actions}>
                <button className={btnStyles.button} onClick={props.onOkay}>Okay</button>
            </div>
        </div>
    );
}

export default ErrorModal;
