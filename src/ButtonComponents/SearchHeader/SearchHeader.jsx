import styles from './search_header.module.scss'
import Lupa from '../../assets/icons/Lupa.svg'

function SearchHeader () {
    return (
        <div className={styles.container}>
            <img src={Lupa} />
        </div>
    )
}

export default SearchHeader
