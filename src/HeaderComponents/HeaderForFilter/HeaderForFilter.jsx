import {useContext} from "react";
import styles from './header_for_filter.module.scss'
import BucketButton from "../../ButtonComponents/BucketButton/BucketButton.jsx";
import GoBackButton from "../../ButtonComponents/GoBackButtons/GoBackButton/GoBackButton.jsx";
import {FilterContext} from "../../Context/ModalContext.jsx";
function HeaderForFilter () {
    const {set_filter_open} = useContext(FilterContext)
    return (
        <div className={styles.container}>
            <GoBackButton onClick={() => set_filter_open(false)} />
            <p className={styles.text}>
                Фильтр
            </p>
            <BucketButton />
        </div>
    )
}

export default HeaderForFilter
