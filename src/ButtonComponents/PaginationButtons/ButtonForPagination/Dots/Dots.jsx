import styles from './dots.module.scss'
import Dot from "./Dot/Dot.jsx";

function Dots () {
    return (
        <div className={styles.container}>
            <Dot />
            <Dot />
            <Dot />
        </div>
    )
}

export default Dots
