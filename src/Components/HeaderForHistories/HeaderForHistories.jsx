import styles from './header_for_histories.module.scss'
import GoBackButton from "../../ButtonComponents/GoBackButton/GoBackButton.jsx";

function HeaderForHistories ({text}) {

    return (
        <div className={styles.container}>
            <GoBackButton/>
            <p className={styles.text}>
                {text}
            </p>
        </div>
    )
}

export default HeaderForHistories
