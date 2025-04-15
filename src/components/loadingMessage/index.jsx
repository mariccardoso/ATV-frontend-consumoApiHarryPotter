import styles from "./loadingMessage.module.css";

const LoadingMessage = (loading) => {
    if (loading) {
        return(
            <div className={styles.loading}>
                <p>Carregando...</p>
            </div>
        )  
    }
}

export default LoadingMessage;