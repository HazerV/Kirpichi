import styles from './home_page.module.scss'
import Header from "../../Components/Header/Header.jsx";
import HistoriesBLock from "../../Components/HistoriesBlock/HistoriesBLock.jsx";
import SliderPromo from "../../Components/SliderPromo/SliderPromo.jsx";
import MainFooter from "../../Components/MainFooter/MainFooter.jsx";
import CategoriesBlock from "../../Components/CategoriesBlock/CategoriesBlock.jsx";
function HomePage() {
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <SliderPromo/>
                <HistoriesBLock text={'Что мы делаем'} href={'/about'}/>
                <HistoriesBLock text={'Производители'} href={'/producers'}/>
                <CategoriesBlock/>
                <HistoriesBLock text={'Истории'} href={'/histories'}/>
            </main>
            <MainFooter/>
        </>
    )
}

export default HomePage
