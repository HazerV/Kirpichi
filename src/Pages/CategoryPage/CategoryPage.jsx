import {useContext, useEffect, useState} from "react";
import styles from './category_page.module.scss';
import {FilterContext} from "../../Context/ModalContext.jsx";
import ItemComponents from "../../BlockComponents/ItemComponent/ItemComponents.jsx";
import MainFooter from "../../Components/MainFooter/MainFooter.jsx";
import FilterButtonsField from "../../ButtonComponents/FilterButtons/FilterButtonsField.jsx";
import FilterModal from "../../Modals/FIlterModal/FilterModal.jsx";
import SortingModal from "../../Modals/SortingModal/SortingModal.jsx";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {superFilter} from "../../services/superfilter/superfilter.js";
import PaginationButtons from "../../ButtonComponents/PaginationButtons/PaginationButtons.jsx";
import Header from "../../HeaderComponents/Header/Header.jsx";
import CleanFilter from "../../BlockComponents/Filter/CleanFilter/CleanFilter.jsx";
import {getByCategoryId} from "../../services/categories/categories.js";

function CategoryPage() {
    const [loading, setLoading] = useState(true);


    const {is_filter_open, is_sorting_open, set_sorting_open, sortBy, setSortBy} = useContext(FilterContext);
    const location = useLocation();
    const navigate = useNavigate();
    const {categoryTitle} = useLocation().state || {};
    const [isFilterOrSortingOpen, setIsFilterOrSortingOpen] = useState(false);
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
    const {categorySlug} = useParams();
    const [categoryId, setCategoryId] = useState(null);

    useEffect(() => {
        const fetchCategoryId = async () => {
            try {
                const response = await getByCategoryId(categorySlug);
                if (response.data.status === "ok") {
                    setCategoryId(response.data.category.id);
                }
            } catch (error) {
                console.error('Ошибка получения ID категории', error);
            }
        };
        fetchCategoryId();
    }, [categorySlug]);

    const fetchProducts = async () => {
        try {
            const offset = (currentPage - 1) * itemsPerPage;
            const searchParams = new URLSearchParams(location.search);
            const params = {
                categories_id: [categorySlug],
                limit: itemsPerPage,
                offset: offset,
                min_price: searchParams.get('min_price'),
                max_price: searchParams.get('max_price'),
                sort_by: searchParams.get('sort_by'),
                attributes: categoryId ? {
                    "category_id": [categoryId]
                } : {},
                ...Object.fromEntries(searchParams.entries()),
            };
            const response = await superFilter(params);
            setAggregatedAttributes(response.data.res.aggregated_attributes);
            setProducts(response.data.res.products);
            setTotalProducts(response.data.res.products_total);
            setMinPrice(response.data.res.min_price);
            setMaxPrice(response.data.res.max_price);
            setLoading(false);
        } catch (error) {
            console.error('Ошибка получения продуктов', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (categoryId) {
            fetchProducts();
        }
    }, [categoryId, categorySlug, currentPage, minPriceParam, maxPriceParam, location.search]);

    useEffect(() => {
        const isFilterOrSortingOpen = Object.values(selectedAttributes).some(value => value !== undefined) || sortBy !== null;
        setIsFilterOrSortingOpen(isFilterOrSortingOpen);

        const selectedAttributesFromURL = {};
        for (const [key, value] of new URLSearchParams(location.search).entries()) {
            if (key !== 'page' && key !== 'min_price' && key !== 'max_price' && key !== 'title' && key !== 'sort_by') {
                selectedAttributesFromURL[key] = value;
            }
        }
        setSelectedAttributes(selectedAttributesFromURL);
        fetchProducts();
    }, [categorySlug, currentPage, minPriceParam, maxPriceParam, location.search]);

    const handlePageChange = (pageNumber) => {
        const params = new URLSearchParams(location.search);
        params.set('page', pageNumber);
        if (minPriceParam) params.set('min_price', minPriceParam);
        if (maxPriceParam) params.set('max_price', maxPriceParam);
        if (sortBy) params.set('sort_by', sortBy);
        Object.entries(selectedAttributes).forEach(([name, value]) => {
            if (value) params.set(name, value);
        });
        navigate(`/categories/${categorySlug}?${params.toString()}`);
    };

    const handleSortChange = (newSortBy) => {
        const params = new URLSearchParams(location.search);
        params.set('page', 1);
        params.set('sort_by', newSortBy);
        navigate(`/categories/${categorySlug}?${params.toString()}`);
        setSortBy(newSortBy);
        set_sorting_open(false);
        fetchProducts();
    };

    const handlePriceChange = (newPriceRange) => {
        const [newMinPrice, newMaxPrice] = newPriceRange;
        const params = new URLSearchParams(location.search);
        params.set('page', 1);
        if (newMinPrice) params.set('min_price', newMinPrice);
        if (newMaxPrice) params.set('max_price', newMaxPrice);
        if (sortBy) params.set('sort_by', sortBy);
        navigate(`/categories/${categorySlug}?${params.toString()}`);
        fetchProducts();
    };

    const updateURL = (newSelectedAttributes) => {
        const params = new URLSearchParams(location.search);
        params.set('page', 1);
        if (minPriceParam) params.set('min_price', minPriceParam);
        if (maxPriceParam) params.set('max_price', maxPriceParam);
        if (sortBy) params.set('sort_by', sortBy);
        Object.entries(newSelectedAttributes).forEach(([name, value]) => {
            if (value) params.set(name, value);
        });

        navigate(`/categories/${categorySlug}?${params.toString()}`);
        fetchProducts();
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

    if (is_filter_open) {
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

    if (is_sorting_open) {
        return (
            <SortingModal onSortChange={handleSortChange} sortBy={sortBy}/>
        );
    }

    const sortedProducts = [...products].sort(sortProducts);

    return (
        <>
            <Header/>
            <div className={styles.pad_bot16}>
                <FilterButtonsField/>
            </div>
            <div className={styles.block}>
                {
                    loading ? (
                    <div>Loading</div>
                ) : (
                    sortedProducts.map((product, index) => (
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
                    ))
                )}
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
