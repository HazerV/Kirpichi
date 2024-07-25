import SortingButton from "./SortingButton/SortingButton.jsx";
import FilterButton from "./FilterButton/FilterButton.jsx";
import styles from './filter_buttons_field.module.scss'
import React from "react";
import {FilterContext} from "../../Context/ModalContext.jsx";
function FilterButtonsField () {

    const {is_filter_open, set_filter_open, is_sorting_open, set_sorting_open} = React.useContext(FilterContext)
    function filter_view_handler () {
        if (is_filter_open === false ) {
            set_filter_open(true)
        } else {
            set_filter_open(false)
        }
    }
    function sorting_view_handler () {
        if (is_sorting_open === false) {
            set_sorting_open(true)
        } else {
            set_sorting_open(false)
        }
    }
    return (
        <div className={styles.container}>
            <div onClick={sorting_view_handler}>
                <SortingButton />
            </div>
            <div onClick={filter_view_handler}>
                <FilterButton />
            </div>
        </div>
    )
}

export default FilterButtonsField
