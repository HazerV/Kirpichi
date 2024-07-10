import styles from './header_for_filter.module.scss'
import BucketButton from "../../ButtonComponents/BucketButton/BucketButton.jsx";
import GoBackButton from "../../ButtonComponents/GoBackButtons/GoBackButton/GoBackButton.jsx";
function HeaderForFilter () {
    return (
        <div className={styles.container}>
            <GoBackButton type={'filtering'} />
            <p className={styles.text}>
                Фильтр
            </p>
            <BucketButton />
        </div>
    )
}

export default HeaderForFilter
