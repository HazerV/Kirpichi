import SortingButton from "./SortingButton/SortingButton.jsx";
import FilterButton from "./FilterButton/FilterButton.jsx";
import styles from './filter_buttons_field.module.scss'
function FilterButtonsField () {
    return (
        <div className={styles.container}>
            <SortingButton />
            <FilterButton />
        </div>
    )
}

export default FilterButtonsField
