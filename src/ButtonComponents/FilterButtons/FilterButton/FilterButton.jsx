import styles from './filter_button.module.scss'
import OptionsSvg from '../../../assets/icons/Options.svg'
function FilterButton () {
    return (
        <div className={styles.container}>
            <img src={OptionsSvg} alt="options"/>
            <p className={styles.text}>
                Фильтры
            </p>
        </div>
    )
}

export default FilterButton
