import styles from './filter_button.module.scss'
import OptionsSvg from '../../../assets/icons/Options.svg'
function FilterButton () {
    return (
        <button className={styles.container}>
            <img src={OptionsSvg} alt="options"/>
            <p className={styles.text}>
                Фильтры
            </p>
        </button>
    )
}

export default FilterButton
