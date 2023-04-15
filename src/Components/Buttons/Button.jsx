import styles from './Button.module.css';

const Button = ({ info, onClick }) => {
    return (
        <>
            <button className={styles.btn} onClick={onClick}>{info}</button>
        </>
    )
}

export default Button;