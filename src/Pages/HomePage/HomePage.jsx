import {useState} from "react";
import styles from './home_page.module.scss'
import Header from "../../Components/Header/Header.jsx";
import HistoriesBLock from "../../Components/HistoriesBlock/HistoriesBLock.jsx";
import SliderPromo from "../../Components/SliderPromo/SliderPromo.jsx";
import ProducersBlock from "../../Components/ProducersBlock/ProducersBlock.jsx";
import CategoriesBlock from "../../Components/CategoriesBlock/CategoriesBlock.jsx";
import UniversalBlock from "../../Components/UniversalBlock/UniversalBlock.jsx";
import MainFooter from "../../Components/MainFooter/MainFooter.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import CategoriesImgs from "../../BlockComponents/CategoriesImgs/CategoriesImgs.jsx";
import ItemComponents from "../../BlockComponents/TopProductsComponents/ItemComponent/ItemComponents.jsx";

function HomePage() {
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <SliderPromo/>
                <HistoriesBLock/>
                <ProducersBlock/>
                {/*<CategoriesBlock />*/}
                <UniversalBlock name={'Категории'} children={
                    <CategoriesImgs/>
                }/>
                <UniversalBlock name={'Лидеры продаж'} isAll={true} children={
                    <ItemComponents name={'Кирпич утолщенный пустотелый лицевой "Красный Глубокий Рустик" '}
                                    description={'Марка прочности: М150-170-200'} size={'250*120*88'} color={'Красный'}
                                    price={'46.60'} surface={'Рустик'}/>
                }/>
            </main>
            <MainFooter/>
        </>
    )
}

export default HomePage
