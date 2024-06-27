import styles from './select_button.module.scss'

function SelectButton ({param_name, param_count}) {
    param_name = 'Параметр'
    param_count = '198'
    return (
        <button className={styles.container}>
            <div className={styles.unselected} />
            <p className={styles.text}>
                {param_name}
            </p>
            <div className={styles.count_field}>
                <p className={styles.text_inside_field}>
                    {param_count}
                </p>
            </div>
        </button>
    )
}

export default SelectButton
