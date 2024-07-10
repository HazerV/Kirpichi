import styles from './header_for_histories.module.scss'
import GoBackButton from "../../ButtonComponents/GoBackButtons/GoBackButton/GoBackButton.jsx";

function HeaderForHistories ({text}) {

    return (
        <div className={styles.container}>
            <GoBackButton type={'page'}/>
            <p className={styles.text}>
                {text}
            </p>
        </div>
    )
}

export default HeaderForHistories
