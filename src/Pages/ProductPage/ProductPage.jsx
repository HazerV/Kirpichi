import styles from './product_page.module.scss'
import HistoriesBLock from "../../Components/HistoriesBlock/HistoriesBLock.jsx";
import SendRequest from "../../BlockComponents/SendRequest/SendRequest.jsx";
import HeaderProduct from "../../Components/HeaderProduct/HeaderProduct.jsx";
import ProductSlider from "../../BlockComponents/ProductSlider/ProductSlider.jsx";
import HeaderPage from "../../Components/HeaderPage/HeaderPage.jsx";
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
                <HeaderPage text={category_name}/>
            </div>
            <ProductSlider/>
            <div className={styles.container}>
                <PriceField/>
                <div>
                    <HistoriesBLock text={'Что мы делаем'} />
                </div>
                <div style={{paddingBottom: 32}}>
                    <SimilarProducts text={'Похожие товары:'} />
                </div>
                <div style={{paddingBottom: 32}}>
                    <ProducersButtons text={'Производитель:'}/>
                </div>
                <CharacteristicsBlock text={'5%'} name={'Водопоглощение'}/>
            </div>
            <MainFooter />
        </div>
    )
}

export default ProductPage
