import { useEffect, useState, useContext } from "react";
import styles from './category_page.module.scss';
import ItemComponents from "../../BlockComponents/ItemComponent/ItemComponents.jsx";
import MainFooter from "../../Components/MainFooter/MainFooter.jsx";
import FilterButtonsField from "../../ButtonComponents/FilterButtons/FilterButtonsField.jsx";
import { FilterContext } from "../../Context/ModalContext.jsx";
import FilterModal from "../../Modals/FIlterModal/FilterModal.jsx";
import SortingModal from "../../Modals/SortingModal/SortingModal.jsx";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { superFilter } from "../../services/superfilter/superfilter.js";
import PaginationButtons from "../../ButtonComponents/PaginationButtons/PaginationButtons.jsx";
import Header from "../../HeaderComponents/Header/Header.jsx";

function CategoryPage() {
    const { is_filter_open, is_sorting_open } = useContext(FilterContext);
    const { categorySlug } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);

    const categoryTitle = decodeURIComponent(searchParams.get('title') || '');
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const itemsPerPage = 30;
    const currentPage = parseInt(searchParams.get('page')) || 1;
    const minPriceParam = parseInt(searchParams.get('min_price')) || undefined;
    const maxPriceParam = parseInt(searchParams.get('max_price')) || undefined;
    const [aggregatedAttributes, setAggregatedAttributes] = useState({});
    const [selectedAttributes, setSelectedAttributes] = useState({});

    const fetchProducts = async () => {
        try {
            const offset = (currentPage - 1) * itemsPerPage;

            const response = await superFilter({
                categories_id: [categorySlug],
                limit: itemsPerPage,
                offset: offset,
                min_price: minPriceParam,
                max_price: maxPriceParam,
                ...Object.fromEntries(searchParams.entries()),
            });

            setAggregatedAttributes(response.data.aggregated_attributes);
            setProducts(response.data.products);
            setTotalProducts(response.data.products_total);
            setMinPrice(response.data.min_price);
            setMaxPrice(response.data.max_price);
        } catch (error) {
            console.error('Ошибка получения продуктов', error);
        }
    };

    useEffect(() => {
        const selectedAttributesFromURL = {};
        for (const [key, value] of searchParams.entries()) {
            if (key !== 'page' && key !== 'min_price' && key !== 'max_price' && key !== 'title') {
                selectedAttributesFromURL[key] = value;
            }
        }
        setSelectedAttributes(selectedAttributesFromURL);
        fetchProducts();
    }, [categorySlug, currentPage, minPriceParam, maxPriceParam]);

    const handlePageChange = (pageNumber) => {
        const params = new URLSearchParams(location.search);
        params.set('page', pageNumber);
        if (minPriceParam) params.set('min_price', minPriceParam);
        if (maxPriceParam) params.set('max_price', maxPriceParam);
        Object.entries(selectedAttributes).forEach(([name, value]) => {
            if (value) params.set(name, value);
        });
        navigate(`/categories/${categorySlug}?${params.toString()}`);
    };

    const handlePriceChange = (newPriceRange) => {
        const [newMinPrice, newMaxPrice] = newPriceRange;
        const params = new URLSearchParams(location.search);
        params.set('page', 1);
        if (newMinPrice) params.set('min_price', newMinPrice);
        if (newMaxPrice) params.set('max_price', newMaxPrice);
        Object.entries(selectedAttributes).forEach(([name, value]) => {
            if (value) params.set(name, value);
        });
        navigate(`/categories/${categorySlug}?${params.toString()}`);
    };

    const updateURL = (newSelectedAttributes) => {
        const params = new URLSearchParams(location.search);
        params.set('page', 1);
        if (minPriceParam) params.set('min_price', minPriceParam);
        if (maxPriceParam) params.set('max_price', maxPriceParam);

        Object.entries(newSelectedAttributes).forEach(([name, value]) => {
            if (value) params.set(name, value);
        });

        navigate(`/categories/${categorySlug}?${params.toString()}`);
    };

    const handleAttributeChange = (attributeName, attributeValue) => {
        const newSelectedAttributes = {
            ...selectedAttributes,
            [attributeName]: attributeValue,
        };
        setSelectedAttributes(newSelectedAttributes);
        updateURL(newSelectedAttributes);
    };

    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    if (is_filter_open === true) {
        return (
            <FilterModal
                data={{
                    min_price: minPrice,
                    max_price: maxPrice,
                    aggregated_attributes: aggregatedAttributes,
                }}
                onPriceChange={handlePriceChange}
                onAttributeChange={handleAttributeChange}
                selectedAttributes={selectedAttributes}
            />
        );
    }

    return (
        <>
            <div className={styles.container}>
                <Header />
            </div>
            <div className={styles.pad_bot16}>
                <FilterButtonsField />
            </div>
            {is_sorting_open && (
                <SortingModal />
            )}
            <div className={styles.block}>
                {products.map((product, index) => (
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
                    categoryTitle={categoryTitle}
                />
            </div>
            <MainFooter />
        </>
    );
}

export default CategoryPage;
