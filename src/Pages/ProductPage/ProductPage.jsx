import styles from './product_page.module.scss'
import HistoriesBLock from "../../Components/HistoriesBlock/HistoriesBLock.jsx";
import SendRequest from "../../BlockComponents/SendRequest/SendRequest.jsx";
import HeaderProduct from "../../Components/HeaderProduct/HeaderProduct.jsx";
function ProductPage ({name}) {
    name = 'Кирпич силикатный'
    return (
        <div className={styles.container}>
            <HeaderProduct text={name} />
        </div>
    )
}

export default ProductPage
