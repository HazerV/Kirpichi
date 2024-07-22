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
    const {is_filter_open, is_sorting_open, set_sorting_open, sortBy, setSortBy} = useContext(FilterContext);
    const location = useLocation();
    const navigate = useNavigate();
    const {categorySlug} = useParams();
    const {categoryTitle} = useLocation().state || {};

    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const itemsPerPage = 30;
    const currentPage = parseInt(new URLSearchParams(location.search).get('page')) || 1;
    const minPriceParam = parseInt(new URLSearchParams(location.search).get('min_price')) || undefined;
    const maxPriceParam = parseInt(new URLSearchParams(location.search).get('max_price')) || undefined;
    const [aggregatedAttributes, setAggregatedAttributes] = useState({});
    const [selectedAttributes, setSelectedAttributes] = useState({});


    const fetchProducts = async () => {
        try {
            const offset = (currentPage - 1) * itemsPerPage;
            const searchParams = new URLSearchParams(location.search);
            const params = {
                categories_id: [categorySlug],
                limit: itemsPerPage,
                offset: offset,
                min_price: minPriceParam,
                max_price: maxPriceParam,
                sortBy: sortBy,
                ...Object.fromEntries(searchParams.entries()),
            };
            console.log(params)
            const response = await superFilter(params);
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
        for (const [key, value] of new URLSearchParams(location.search).entries()) {
            if (key !== 'page' && key !== 'min_price' && key !== 'max_price' && key !== 'title' && key !== 'sortBy') {
                selectedAttributesFromURL[key] = value;
            }
        }
        setSelectedAttributes(selectedAttributesFromURL);
        fetchProducts();
    }, [categorySlug, currentPage, minPriceParam, maxPriceParam, sortBy]);

    const handlePageChange = (pageNumber) => {
        const params = new URLSearchParams(location.search);
        params.set('page', pageNumber);
        if (minPriceParam) params.set('min_price', minPriceParam);
        if (maxPriceParam) params.set('max_price', maxPriceParam);
        if (sortBy) params.set('sortBy', sortBy);
        Object.entries(selectedAttributes).forEach(([name, value]) => {
            if (value) params.set(name, value);
        });
        navigate(`/categories/${categorySlug}?${params.toString()}`);
    };

    const handleSortChange = (newSortBy) => {
        const params = new URLSearchParams(location.search);
        params.set('page', 1);
        if (minPriceParam) params.set('min_price', minPriceParam);
        if (maxPriceParam) params.set('max_price', maxPriceParam);
        Object.entries(selectedAttributes).forEach(([name, value]) => {
            if (value) params.set(name, value);
        });
        params.set('sortBy', newSortBy);
        navigate(`/categories/${categorySlug}?${params.toString()}`);
        setSortBy(newSortBy);
        set_sorting_open(false);
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
        if (sortBy) params.set('sortBy', sortBy);
        navigate(`/categories/${categorySlug}?${params.toString()}`);
    };

    const updateURL = (newSelectedAttributes) => {
        const params = new URLSearchParams(location.search);
        params.set('page', 1);
        if (minPriceParam) params.set('min_price', minPriceParam);
        if (maxPriceParam) params.set('max_price', maxPriceParam);
        if (sortBy) params.set('sortBy', sortBy);

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

    const sortProducts = (a, b) => {
        if (sortBy === 'price_asc') {
            return a.price - b.price;
        } else if (sortBy === 'price_desc') {
            return b.price - a.price;
        } else {
            return 0;
        }
    };

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

    if (is_sorting_open === true) {
        return (
            <SortingModal onSortChange={handleSortChange} sortBy={sortBy}/>
        );
    }

    return (
        <>
            <div className={styles.container}>
                <Header/>
            </div>
            <div className={styles.pad_bot16}>
                <FilterButtonsField/>
            </div>
            <div className={styles.block}>
                {products.sort(sortProducts).map((product, index) => (
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
            <MainFooter/>
        </>
    );
}
export default CategoryPage
