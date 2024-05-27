import {useState} from "react";
import styles from './home_page.module.scss'
import Header from "../../Components/Header/Header.jsx";
import HistoriesBLock from "../../Components/HistoriesBlock/HistoriesBLock.jsx";
import SliderPromo from "../../Components/SliderPromo/SliderPromo.jsx";
import ProducersBlock from "../../Components/ProducersBlock/ProducersBlock.jsx";
import CategoriesBlock from "../../Components/CategoriesBlock/CategoriesBlock.jsx";
import SellLeaders from "../../Components/SellLeaders/SellLeaders.jsx";
import MainFooter from "../../Components/MainFooter/MainFooter.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
function HomePage() {
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <SliderPromo />
                <HistoriesBLock />
                <ProducersBlock />
                <CategoriesBlock />
                <SellLeaders />
            </main>
            <MainFooter />
        </>
    )
}

export default HomePage
