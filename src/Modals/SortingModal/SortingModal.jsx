import styles from './sorting_modal.module.scss'
import HeaderForSorting from "../../HeaderComponents/HeaderForSorting/HeaderForSorting.jsx";
import SortingField from "../../BlockComponents/SortingField/SortingField.jsx";
import {useContext} from "react";
import {FilterContext} from "../../Context/ModalContext.jsx";

function SortingModal({ onSortChange, sort_by }) {
    const { set_sorting_open } = useContext(FilterContext);

    const handleSortChange = (newSortBy) => {
        onSortChange(newSortBy);
        set_sorting_open(false);
    };

    return (
        <div className={styles.container}>
            <HeaderForSorting onClose={() => set_sorting_open(false)} />
            <div className={styles.container_sort}>
                <SortingField onSortChange={handleSortChange} sort_by={sort_by} />
            </div>
        </div>
    );
}
export default SortingModal
