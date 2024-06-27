import styles from './pagination_buttons.module.scss'
import {FilledPaginationButton, UnfilledPaginationButton} from "./ButtonForPagination/ButtonForPagination.jsx";
import Dots from './ButtonForPagination/Dots/Dots.jsx'
function PaginationButtons() {
    return (
        <div className={styles.container}>
            <FilledPaginationButton count={1}/>
            <UnfilledPaginationButton count={2}/>
            <UnfilledPaginationButton count={3}/>
            <UnfilledPaginationButton count={4}/>
            <Dots />
            <UnfilledPaginationButton count={9}/>
        </div>
    )
}

export default PaginationButtons
