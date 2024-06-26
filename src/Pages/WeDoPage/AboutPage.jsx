import styles from './we_do_page.module.scss'
import Example from '../../assets/imgs/ForStories.png'
import HeaderPage from "../../Components/HeaderPage/HeaderPage.jsx";

function WeDoPage() {
    return (
        <div className={styles.container}>
            <HeaderPage text={'Что мы делаем'}/>
            <div>
                <img src={Example}/>
                <img src={Example}/>
            </div>
        </div>
    )
}

export default WeDoPage
