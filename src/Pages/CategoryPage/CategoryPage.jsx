import styles from './category_page.module.scss'
import HeaderPage from "../../Components/HeaderPage/HeaderPage.jsx";
import ItemComponents from "../../BlockComponents/ItemComponent/ItemComponents.jsx";
import MainFooter from "../../Components/MainFooter/MainFooter.jsx";
import PaginationButtons from "../../ButtonComponents/PaginationButtons/PaginationButtons.jsx";
import UnderCategories from "../../BlockComponents/UnderCategories/UnderCategories.jsx";
import TextInCategory from "../../BlockComponents/UnderCategories/TextInCategory/TextInCategory.jsx";
import FilterButtonsField from "../../ButtonComponents/FilterButtons/FilterButtonsField.jsx";
function CategoryPage () {
    return (

        <>
            <div className={styles.container}>
                <HeaderPage text={'Клинкерный кирпич'} search={true} />
            </div>
            <div className={styles.pad_bot}>
                <UnderCategories />
            </div>
            <div className={styles.pad_bot}>
                <TextInCategory />
            </div>
            <div className={styles.pad_bot16}>
                <FilterButtonsField />
            </div>
            <div className={styles.block}>
                <ItemComponents href={'/product'} name={'Кирпич утолщенный пустотелый лицевой «Красный Глубокий Рустик»'} price={'40.40'}/>
                <ItemComponents name={'Кирпич утолщенный пустотелый лицевой «Красный Глубокий Рустик»'} color={'Красный'} />
                <ItemComponents name={'Кирпич утолщенный пустотелый лицевой «Красный Глубокий Рустик»'} size={'10x10x10'} />
                <ItemComponents name={'Кирпич утолщенный пустотелый лицевой «Красный Глубокий Рустик»'} price={'66'} />
                <ItemComponents name={'Кирпич утолщенный пустотелый лицевой «Красный Глубокий Рустик»'} price={'66'} />
                <ItemComponents name={'Кирпич утолщенный пустотелый лицевой «Красный Глубокий Рустик»'} price={'66'} />
                <ItemComponents name={'Кирпич утолщенный пустотелый лицевой «Красный Глубокий Рустик»'} price={'66'} />
                <ItemComponents name={'Кирпич утолщенный пустотелый лицевой «Красный Глубокий Рустик»'} price={'66'} />
            </div>
            <div style={{paddingBottom: 41}}>
                <PaginationButtons />
            </div>
            <MainFooter />
        </>
    )
}
export default CategoryPage
