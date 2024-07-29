import SortingButton from "./SortingButton/SortingButton.jsx";
import FilterButton from "./FilterButton/FilterButton.jsx";
import styles from './filter_buttons_field.module.scss'
import { useContext } from "react";
import { FilterContext } from "../../Context/ModalContext.jsx";

function FilterButtonsField() {

    const { is_filter_open, set_filter_open, is_sorting_open, set_sorting_open, sortBy } = useContext(FilterContext);
    function filter_view_handler() {
        set_filter_open(!is_filter_open);
    }
    function sorting_view_handler() {
        set_sorting_open(!is_sorting_open);
    }

    return (
        <div className={styles.container}>
            <div onClick={sorting_view_handler}>
                <SortingButton sortBy={sortBy} />
            </div>
            <div onClick={filter_view_handler}>
                <FilterButton />
            </div>
        </div>
    )
}

export default FilterButtonsField;
