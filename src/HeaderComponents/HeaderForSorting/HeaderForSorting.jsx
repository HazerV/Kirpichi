import styles from './header_for_sorting.module.scss'
import GoBackButton from "../../ButtonComponents/GoBackButtons/GoBackButton/GoBackButton.jsx";
function HeaderForSorting () {
    return (
        <div className={styles.container}>
            <GoBackButton type={'sorting'} />
            <p className={styles.head_text}>
                Сортировка
            </p>
            <div className={styles.empty} />
        </div>
    )
}
export default HeaderForSorting
