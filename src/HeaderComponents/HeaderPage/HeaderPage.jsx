import styles from './header_page.module.scss'
import GoBackButton from "../../ButtonComponents/GoBackButtons/GoBackButton/GoBackButton.jsx";
import SearchHeader from "../../ButtonComponents/SearchHeader/SearchHeader.jsx";

function HeaderPage({text, search}) {
    // search = false
    return (
        <div className={styles.container}>
            <GoBackButton type={'page'}/>
            <p className={styles.text}>
                {text}
            </p>
            {
                search === false ? (
                    <div className={styles.empty}/>
                ) : (
                    <SearchHeader/>
                )
            }
        </div>
    )
}

export default HeaderPage
