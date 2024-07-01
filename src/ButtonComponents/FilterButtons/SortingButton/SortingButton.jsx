import styles from './sorting_button.module.scss'
import DownSvg from '../../../assets/icons/Down.svg'

function SortingButton () {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
                По популярности
            </p>
            <img src={DownSvg} alt="DownArrow"/>
        </div>
    )
}

export default SortingButton
