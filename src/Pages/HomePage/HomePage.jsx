import {useState} from "react";
import styles from './home_page.module.scss'
import Header from "../../Components/Header/Header.jsx";
import HistoriesBLock from "../../Components/HistoriesBlock/HistoriesBLock.jsx";
import SliderPromo from "../../Components/SliderPromo/SliderPromo.jsx";
function HomePage() {
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <SliderPromo />
                <HistoriesBLock />
            </main>
        </>
    )
}

export default HomePage
