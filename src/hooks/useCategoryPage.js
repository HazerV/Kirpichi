import { useState, useEffect, useContext, useMemo, useCallback } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FilterContext } from '../Context/ModalContext';
import { superFilter } from "../services/superfilter/superfilter.js";
import { getByCategoryId } from "../services/categories/categories.js";
import debounce from 'lodash/debounce';

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

    const fetchCategoryId = useCallback(async () => {
        try {
            const response = await getByCategoryId(categorySlug);
            if (response.data.status === "ok") {
                setCategoryId(response.data.category.id);
            }
        } catch (error) {
            console.error('Ошибка получения ID категории', error);
        }
    }, [categorySlug]);

    useEffect(() => {
        fetchCategoryId();
    }, [fetchCategoryId]);

    const fetchProducts = useCallback(async (params) => {
        try {
            const response = await superFilter(params);
            setProductsCount(response.data.res.products_total);
            setAggregatedAttributes(response.data.res.aggregated_attributes);
            setProducts(response.data.res.products);
            setTotalProducts(response.data.res.products_total);
            setMinPrice(response.data.res.min_price);
            setMaxPrice(response.data.res.max_price);
            setLoading(false);
            console.log(response.data.res)

        } catch (error) {
            console.error('Ошибка получения продуктов', error);
            setLoading(false);
        }
    }, []);

    const debouncedFetchProducts = useMemo(
        () => debounce(fetchProducts, 300),
        [fetchProducts]
    );

    const requestParams = useMemo(() => {
        const searchParams = new URLSearchParams(location.search);
        const offset = (currentPage - 1) * itemsPerPage;
        const attributes = {};

        for (const [key, value] of searchParams.entries()) {
            if (key !== 'page' && key !== 'min_price' && key !== 'max_price' && key !== 'sort_by') {
                attributes[key] = value.split(',');
            }
        }

        return {
            categories_id: categoryId ? [categoryId] : [],
            limit: itemsPerPage,
            offset: offset,
            min_price: searchParams.get('min_price') || null,
            max_price: searchParams.get('max_price') || null,
            sort_by: sortBy ? [sortBy] : [],
            attributes: {
                ...attributes,
                category_id: categoryId ? [categoryId] : []
            },
        };
    }, [categoryId, currentPage, itemsPerPage, location.search, sortBy]);
    useEffect(() => {
        if (categoryId) {
            debouncedFetchProducts(requestParams);
        }
    }, [categoryId, debouncedFetchProducts, requestParams]);

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

    const handlePageChange = useCallback((pageNumber) => {
        const params = new URLSearchParams(location.search);
        params.set('page', pageNumber);
        navigate(`/categories/${categorySlug}?${params.toString()}`);
    }, [location.search, navigate, categorySlug]);

    const handleSortChange = useCallback((newSortBy) => {
        const params = new URLSearchParams(location.search);
        params.set('page', 1);
        params.set('sort_by', newSortBy);
        navigate(`/categories/${categorySlug}?${params.toString()}`);
        setSortBy(newSortBy);
    }, [location.search, navigate, categorySlug, setSortBy]);

    const handlePriceChange = (newPriceRange) => {
        const [newMinPrice, newMaxPrice] = newPriceRange;
        const params = new URLSearchParams(location.search);
        params.set('page', 1);
        if (newMinPrice) params.set('min_price', newMinPrice);
        if (newMaxPrice) params.set('max_price', newMaxPrice);
        navigate(`/categories/${categorySlug}?${params.toString()}`);
    };
    const handleAttributeChange = useCallback((attributeName, attributeValue) => {
        setSelectedAttributes(prevAttributes => {
            const newAttributes = { ...prevAttributes };
            if (attributeValue) {
                if (!newAttributes[attributeName]) {
                    newAttributes[attributeName] = [];
                }
                if (!newAttributes[attributeName].includes(attributeValue)) {
                    newAttributes[attributeName] = [...newAttributes[attributeName], attributeValue];
                } else {
                    newAttributes[attributeName] = newAttributes[attributeName].filter(v => v !== attributeValue);
                }
                if (newAttributes[attributeName].length === 0) {
                    delete newAttributes[attributeName];
                }
            } else {
                delete newAttributes[attributeName];
            }
            return newAttributes;
        });

        const params = new URLSearchParams(location.search);
        params.set('page', 1);
        if (selectedAttributes[attributeName] && selectedAttributes[attributeName].length > 0) {
            params.set(attributeName, selectedAttributes[attributeName].join(','));
        } else {
            params.delete(attributeName);
        }

        navigate(`/categories/${categorySlug}?${params.toString()}`);
    }, [location.search, navigate, categorySlug, selectedAttributes]);



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
