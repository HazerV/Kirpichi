import styles from './product_page.module.scss'
import HistoriesBLock from "../../Components/HistoriesBlock/HistoriesBLock.jsx";
import HeaderProduct from "../../HeaderComponents/HeaderProduct/HeaderProduct.jsx";
import ProductSlider from "../../BlockComponents/ProductSlider/ProductSlider.jsx";
import PriceField from "../../BlockComponents/PriceField/PriceField.jsx";
import SimilarProducts from "../../BlockComponents/SimilarProducts/SimilarProducts.jsx";
import ProducersButtons from "../../ButtonComponents/ProducersButtons/ProducersButtons.jsx";
import CharacteristicsBlock from "../../BlockComponents/CharacteristicsBlock/CharacteristicsBlock.jsx";
import MainFooter from "../../Components/MainFooter/MainFooter.jsx";

function ProductPage({category_name}) {
    category_name = 'Кирпич силикатный'
    return (
        <div>
            <div className={styles.container}>
                <HeaderProduct category_name={category_name} />
            </div>
            <div className={styles.slider}>
                <ProductSlider/>
            </div>
            <div className={styles.container}>
                <PriceField/>
                <div className={styles.pad_right}>
                    <HistoriesBLock text={'Что мы делаем'} />
                </div>
                <div className={styles.pad_bot}>
                    <SimilarProducts text={'Похожие товары:'} />
                </div>
                <div className={styles.pad_bot}>
                    <ProducersButtons text={'Производитель:'}/>
                </div>
                <CharacteristicsBlock text={'5%'} name={'Водопоглощение'}/>
            </div>
            <MainFooter />
        </div>
    )
}

export default ProductPage
