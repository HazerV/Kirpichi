import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FilterContext } from '../Context/ModalContext';
import { superFilter } from "../services/superfilter/superfilter.js";
import { getByCategoryId } from "../services/categories/categories.js";

export function useCategoryPage() {
    const [loading, setLoading] = useState(true);
    const { sortBy, setSortBy } = useContext(FilterContext);
    const location = useLocation();
    const navigate = useNavigate();
    const { categorySlug } = useParams();
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [aggregatedAttributes, setAggregatedAttributes] = useState({});
    const [selectedAttributes, setSelectedAttributes] = useState({});
    const [categoryId, setCategoryId] = useState(null);
    const [productsCount, setProductsCount] = useState(0);

    const itemsPerPage = 30;
    const currentPage = parseInt(new URLSearchParams(location.search).get('page')) || 1;

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


    useEffect(() => {
        if (categoryId) {
            fetchProducts();}
    }, [categoryId, categorySlug, currentPage, location.search, sortBy]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const newSelectedAttributes = {};
        const newSortBy = searchParams.get('sort_by') || '';

        for (const [key, value] of searchParams.entries()) {
            if (key !== 'page' && key !== 'min_price' && key !== 'max_price' && key !== 'sort_by') {
                newSelectedAttributes[key] = value;
            }
        }
        setSelectedAttributes(newSelectedAttributes);
        setSortBy(newSortBy);
    }, [location.search, setSortBy]);

    const handlePageChange = (pageNumber) => {
        const params = new URLSearchParams(location.search);
        params.set('page', pageNumber);
        navigate(`/categories/${categorySlug}?${params.toString()}`);
    };

    const handleSortChange = (newSortBy) => {
        const params = new URLSearchParams(location.search);
        params.set('page', 1);
        params.set('sort_by', newSortBy);
        navigate(`/categories/${categorySlug}?${params.toString()}`);
        setSortBy(newSortBy);
    };

    const handlePriceChange = (newPriceRange) => {
        const [newMinPrice, newMaxPrice] = newPriceRange;
        const params = new URLSearchParams(location.search);
        params.set('page', 1);
        if (newMinPrice) params.set('min_price', newMinPrice);
        if (newMaxPrice) params.set('max_price', newMaxPrice);
        navigate(`/categories/${categorySlug}?${params.toString()}`);
    };

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
                sort_by: sortBy ? [sortBy] : [],
                attributes: categoryId ? { "category_id": [categoryId] } : {},
            };

            Object.entries(selectedAttributes).forEach(([key, value]) => {
                if (value) {
                    params.attributes[key] = [value];
                }
            });

            console.log('Fetching products with params:', params); // Logging params

            const response = await superFilter(params);
            setProductsCount(response.data.res.products_total);
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

    const handleAttributeChange = (attributeName, attributeValue) => {
        const newSelectedAttributes = {
            ...selectedAttributes,
            [attributeName]: attributeValue,
        };
        setSelectedAttributes(newSelectedAttributes);

        const params = new URLSearchParams(location.search);
        params.set('page', 1);
        Object.entries(newSelectedAttributes).forEach(([name, value]) => {
            if (value) {
                params.set(name, value);
            } else {
                params.delete(name);
            }
        });

        console.log('Navigating with new params:', params.toString()); // Logging new params

        navigate(`/categories/${categorySlug}?${params.toString()}`);
    };

    useEffect(() => {
        if (categoryId) {
            fetchProducts();
        }
    }, [categoryId, categorySlug, currentPage, location.search, sortBy]);

    return {
        productsCount,
        loading,
        products,
        totalProducts,
        minPrice,
        maxPrice,
        aggregatedAttributes,
        selectedAttributes,
        currentPage,
        itemsPerPage,
        handlePageChange,
        handleSortChange,
        handlePriceChange,
        handleAttributeChange,
    };
}
