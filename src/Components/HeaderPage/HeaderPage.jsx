import styles from './header_page.module.scss'
import GoBackButton from "../ButtonComponents/GoBackButton/GoBackButton.jsx";

function HeaderPage({text}) {
    return (
        <div className={styles.container}>
            <GoBackButton/>
            <p className={styles.text}>
                {text}
            </p>
        </div>
    )
}

export default HeaderPage
