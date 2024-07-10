import styles from './send_request_page.module.scss'
import InterestingGoods from "../../BlockComponents/InterestingGoods/InterestingGoods.jsx";
import HeaderPage from "../../HeaderComponents/HeaderPage/HeaderPage.jsx";
import HeaderProduct from "../../HeaderComponents/HeaderProduct/HeaderProduct.jsx";
import HeaderForHistories from "../../HeaderComponents/HeaderForHistories/HeaderForHistories.jsx";
import MainFooter from "../../Components/MainFooter/MainFooter.jsx";
import PersonalData from "../../BlockComponents/PersonalData/PersonalData.jsx";
function SendRequestPage() {
    return (
        <div className={styles.container}>
            <HeaderForHistories text={'Отправить заявку'}/>
            <div className={styles.pad_bot_32}>
                <InterestingGoods/>
            </div>
            <PersonalData />
            <div className={styles.footer}>
                <MainFooter/>
            </div>
        </div>
    )
}

export default SendRequestPage
