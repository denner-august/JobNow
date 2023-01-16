import styles from './styles.module.scss'
export function Loading() {
    return (
        <div className={styles.container}>
            <p className={styles.loading}>Carregando...</p>
        </div>
    )
}