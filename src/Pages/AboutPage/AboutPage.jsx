import styles from './about_page.module.scss'
import Example from '../../assets/imgs/ForStories.png'
import HeaderPage from "../../HeaderComponents/HeaderPage/HeaderPage.jsx";
import PaginationButtons from "../../ButtonComponents/PaginationButtons/PaginationButtons.jsx";
import MainFooter from "../../Components/MainFooter/MainFooter.jsx";
function AboutPage() {
    return (
        <div className={styles.container}>
            <HeaderPage text={'Что мы делаем'}/>
            <div className={styles.images_block}>
                <img className={styles.image} src={Example}/>
                <img className={styles.image} src={Example}/>
                <img className={styles.image} src={Example}/>
                <img className={styles.image} src={Example}/>
            </div>
            <div style={{paddingBottom: 45}}>
                <PaginationButtons />
            </div>
            <MainFooter />
        </div>
    )
}

export default AboutPage
