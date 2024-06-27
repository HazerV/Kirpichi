import styles from './histories_page.module.scss'
import HeaderForHistories from "../../Components/HeaderForHistories/HeaderForHistories.jsx";
import HistoryEx from '../../assets/imgs/HistoryEx.png'
import MainFooter from "../../Components/MainFooter/MainFooter.jsx";
function HistoriesPage() {
    return (
        <div className={styles.container}>
            <HeaderForHistories text={'Истории'}/>
            <div className={styles.images}>
                <img src={HistoryEx}/>
                <img src={HistoryEx}/>
                {/*<img src={HistoryEx}/>*/}
            </div>
            <p className={styles.head_text}>
                Доставка
            </p>
            <p className={styles.text}>
                Carbone de Balmain Eau de Toilette Balmain (в России известен как «Бальман Карбон»), выпущенный в 2010
                году, классифицируется как аромат для мужчин и принадлежит семействам Пряные и Древесные.
            </p>
            <div className={styles.footer}>
                <MainFooter/>
            </div>
        </div>
    )
}

export default HistoriesPage
