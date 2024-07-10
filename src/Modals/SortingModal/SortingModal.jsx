import styles from './sorting_modal.module.scss'
import HeaderForSorting from "../../HeaderComponents/HeaderForSorting/HeaderForSorting.jsx";
import SortingField from "../../BlockComponents/SortingField/SortingField.jsx";
function SortingModal () {
    return (
        <>
            <HeaderForSorting />
            <div className={styles.container}>
                <SortingField />
            </div>

        </>
    )
}
export default SortingModal
