import styles from './status_indicator.module.scss';

function StatusIndicator({ checked, onChange }) {

    return (
        <div onClick={onChange} className={checked ? styles.container_active : styles.container_non_active}>
            {checked && <div className={styles.inside} />}
        </div>
    );
}

export default StatusIndicator;
