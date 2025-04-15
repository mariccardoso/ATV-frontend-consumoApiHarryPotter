import styles from "./errorMessage.module.css";

const ErrorMessage = (error) => {
    if (error) {
        return (
            <div className={styles.error}>
                <p>{error}</p>
            </div>
        );
    }
}

export default ErrorMessage;