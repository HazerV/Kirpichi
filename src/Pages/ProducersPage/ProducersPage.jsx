import styles from './producers_page.module.scss'
import HeaderPage from "../../HeaderComponents/HeaderPage/HeaderPage.jsx";
import ProducerPreview from "../../BlockComponents/ProducerPreview/ProducerPreview.jsx";
import PaginationButtons from "../../ButtonComponents/PaginationButtons/PaginationButtons.jsx";
import MainFooter from "../../Components/MainFooter/MainFooter.jsx";
function ProducersPage () {
    return (
        <div className={styles.container}>
            <HeaderPage text={'Производители'} search={false} />
            <div className={styles.block}>
                <ProducerPreview text={'Вензелинский кирпичный завод'}/>
                <ProducerPreview text={'Вензелинский кирпичный завод'}/>
                <ProducerPreview text={'Вензелинский кирпичный завод'}/>
                <ProducerPreview text={'Вензелинский кирпичный завод'}/>
                <ProducerPreview text={'Вензелинский кирпичный завод'}/>
                <ProducerPreview text={'Вензелинский кирпичный завод'}/>
                <ProducerPreview text={'Вензелинский кирпичный завод'}/>
                <ProducerPreview text={'Вензелинский кирпичный завод'}/>
            </div>
            <div className={styles.footer}>
                <MainFooter />
            </div>
        </div>
    )
}
export default ProducersPage
