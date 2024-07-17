import {useEffect, useState, useContext} from "react";
import styles from './category_page.module.scss'
import HeaderPage from "../../HeaderComponents/HeaderPage/HeaderPage.jsx";
import ItemComponents from "../../BlockComponents/ItemComponent/ItemComponents.jsx";
import MainFooter from "../../Components/MainFooter/MainFooter.jsx";
import UnderCategories from "../../BlockComponents/UnderCategories/UnderCategories.jsx";
import TextInCategory from "../../BlockComponents/UnderCategories/TextInCategory/TextInCategory.jsx";
import FilterButtonsField from "../../ButtonComponents/FilterButtons/FilterButtonsField.jsx";
import {FilterContext} from "../../Context/ModalContext.jsx";
import FilterModal from "../../Modals/FIlterModal/FilterModal.jsx";
import SortingModal from "../../Modals/SortingModal/SortingModal.jsx";
import {useParams, useLocation} from "react-router-dom";
import {getProductsByCategoryId} from "../../services/products/products.js";
import PaginationButtons from "../../ButtonComponents/PaginationButtons/PaginationButtons.jsx";

function CategoryPage() {
    const {is_filter_open, is_sorting_open} = useContext(FilterContext);
    const {categorySlug} = useParams();
    const location = useLocation();
    const categoryTitle = location.state?.categoryTitle || '';
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProductsByCategoryId(categorySlug);
                setProducts(response.data.products);
            } catch (error) {
                console.error('Ошибка получения продукта', error);
            }
        };
        fetchProducts();
    }, [categorySlug]);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(products.length / itemsPerPage);

    if (is_filter_open === true) {
        return (
            <div>
                <FilterModal/>
            </div>
        )
    }
    if (is_sorting_open === true) {
        return (
            <div>
                <SortingModal/>
            </div>
        )
    }
    return (
        <>
            <div className={styles.container}>
                <HeaderPage text={categoryTitle} search={true}/>
            </div>
            <div className={styles.pad_bot}>
                <UnderCategories/>
            </div>
            <div className={styles.pad_bot}>
                <TextInCategory/>
            </div>
            <div className={styles.pad_bot16}>
                <FilterButtonsField/>
            </div>
            <div className={styles.block}>
                {currentItems.map((product, index) => (
                    <ItemComponents
                        {...product}
                        image={product.images.photo}
                        photo2x={product.images.photo2x}
                        description={product.model}
                        surface={product.template}
                        size={product.quantity}
                        color={product.model}
                        key={index}
                        href={`/product/${product.id}`}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
            <div className={styles.pad_bot16}>
                <PaginationButtons
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>

            <MainFooter/>
        </>
    )
}

export default CategoryPage
