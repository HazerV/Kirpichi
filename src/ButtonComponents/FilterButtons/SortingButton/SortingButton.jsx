import styles from './sorting_button.module.scss'
import DownSvg from '../../../assets/icons/Down.svg'

function SortingButton({ sortBy }) {
    const getSortText = (sortBy) => {
        switch(sortBy) {
            case 'price_asc':
                return 'По возрастанию цены';
            case 'price_desc':
                return 'По убыванию цены';
            default:
                return 'По популярности';
        }
    }

    return (
        <div className={styles.container}>
            <p className={styles.text}>
                {getSortText(sortBy)}
            </p>
            <img src={DownSvg} alt="DownArrow"/>
        </div>
    )
}

export default SortingButton;
