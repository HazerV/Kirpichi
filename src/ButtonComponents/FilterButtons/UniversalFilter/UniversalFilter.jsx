import styles from './universal_filter.module.scss'
import DownSvg from '../../../assets/icons/Down.svg'

function UniversalFilter ({text}) {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
                {text}
            </p>
            <img src={DownSvg} alt="Arrow Image"/>
        </div>
    )
}

export default UniversalFilter
