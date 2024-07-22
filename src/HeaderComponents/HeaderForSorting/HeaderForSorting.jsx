import { useContext } from "react";
import styles from './header_for_sorting.module.scss'
import GoBackButton from "../../ButtonComponents/GoBackButtons/GoBackButton/GoBackButton.jsx";
import { FilterContext } from "../../Context/ModalContext.jsx";

function HeaderForSorting() {
    const { set_sorting_open } = useContext(FilterContext);

    const handleClose = () => {
        set_sorting_open(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <GoBackButton onClick={handleClose} />
                <p className={styles.head_text}>
                    Сортировка
                </p>
                <div className={styles.empty} />
            </div>
        </div>
    );
}

export default HeaderForSorting;
