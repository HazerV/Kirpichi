import {useContext} from "react";
import styles from './header_for_sorting.module.scss'
import GoBackButton from "../../ButtonComponents/GoBackButtons/GoBackButton/GoBackButton.jsx";
import {FilterContext} from "../../Context/ModalContext.jsx";
function HeaderForSorting () {
    const {set_sorting_open} = useContext(FilterContext)
    return (
        <div className={styles.container}>
            <GoBackButton onClick={() => set_sorting_open(false)} />
            <p className={styles.head_text}>
                Сортировка
            </p>
            <div className={styles.empty} />
        </div>
    )
}
export default HeaderForSorting
