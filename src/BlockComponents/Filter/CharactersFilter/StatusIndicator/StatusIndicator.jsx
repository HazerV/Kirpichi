import styles from './status_indicator.module.scss';

function StatusIndicator({checked}) {

    return (
        <div className={checked ? styles.container_active : styles.container_non_active}>
            {
                checked && <div className={styles.inside}/>
            }
        </div>
    );
}

export default StatusIndicator;
