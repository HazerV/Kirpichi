import {useContext, useState, useEffect, useCallback} from 'react';
import styles from './category_page.module.scss';
import {FilterContext} from '../../Context/ModalContext';
import MainFooter from '../../Components/MainFooter/MainFooter';
import FilterButtonsField from '../../ButtonComponents/FilterButtons/FilterButtonsField';
import FilterModal from '../../Modals/FIlterModal/FilterModal';
import SortingModal from '../../Modals/SortingModal/SortingModal';
import PaginationButtons from '../../ButtonComponents/PaginationButtons/PaginationButtons';
import Header from '../../HeaderComponents/Header/Header';
import {useCategoryPage} from "../../hooks/useCategoryPage.js";
import ProductList from "../../Components/ProductsList/ProductList.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import SkeletonItemsBlock from "../../BlockComponents/ItemSkeleton/ItemSkeleton.jsx";

function CategoryPage() {
    const {is_filter_open, is_sorting_open, sortBy} = useContext(FilterContext);
    const navigate = useNavigate();
    const {
        loading,
        products,
        totalProducts,
        minPrice,
        maxPrice,
        aggregatedAttributes,
        currentPage,
        itemsPerPage,
        handleSortChange,
        handlePageChange,
        handlePriceChange,
        handleAttributeChange,
    } = useCategoryPage();

    const {categoryTitle} = useLocation().state || {};
    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    const [selectedAttributes, setSelectedAttributes] = useState({});
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const newSelectedAttributes = {};
        params.forEach((value, key) => {
            if (key !== 'page' && key !== 'min_price' && key !== 'max_price' && key !== 'sort_by') {
                newSelectedAttributes[key] = value.split(',');
            }
        });
        setSelectedAttributes(newSelectedAttributes);
    }, [location.search]);


    const toggleAttribute = useCallback((attributeName, newValues) => {
        setSelectedAttributes(prev => {
            const updated = {...prev};
            if (newValues.length > 0) {
                updated[attributeName] = newValues;
            } else {
                delete updated[attributeName];
            }
            return updated;
        });
    }, []);

    const updateURL = useCallback(() => {
        const params = new URLSearchParams(location.search);

        //delete if page 1
        if (params.get('page') === '1') {
            params.delete('page');
        }
        //update filter params
        Object.entries(selectedAttributes).forEach(([name, values]) => {
            if (values && values.length > 0) {
                params.set(name, values.join(','));
            } else {
                params.delete(name);
            }
        });
        if (Object.keys(selectedAttributes).length === 0) {
            params.delete('Страна производства');
        }

        const newUrl = `${location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
        navigate(newUrl, {replace: true});
    }, [selectedAttributes, location.pathname, navigate, location.search]);

    useEffect(() => {
        updateURL();
    }, [selectedAttributes, updateURL]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const newSelectedAttributes = {};

        params.forEach((value, key) => {
            if (key !== 'page' && key !== 'min_price' && key !== 'max_price' && key !== 'sort_by') {
                newSelectedAttributes[key] = value.split(',');
            }
        });
        setSelectedAttributes(newSelectedAttributes);

        // redirect if page = 1
        if (params.get('page') === '1') {
            params.delete('page');
            const newUrl = `${location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
            navigate(newUrl, {replace: true});
        }
    }, [location.search, navigate, location.pathname]);


    return (
        <>
            <Header/>
            <div className={styles.pad_bot16}>
                <FilterButtonsField/>
            </div>
            <div className={styles.block}>
                {
                    loading ? (
                        <SkeletonItemsBlock/>
                    ) : (
                        <ProductList products={products}/>
                    )
                }
                {
                    is_filter_open && (
                        <FilterModal
                            toggleAttribute={toggleAttribute}
                            selectedAttributes={selectedAttributes}
                            data={{
                                totalProducts: totalProducts,
                                min_price: minPrice,
                                max_price: maxPrice,
                                aggregated_attributes: aggregatedAttributes,
                            }}
                            onPriceChange={handlePriceChange}
                            onAttributeChange={handleAttributeChange}
                        />
                    )
                }
                {
                    is_sorting_open && (
                        <SortingModal onSortChange={handleSortChange} sortBy={sortBy}/>
                    )
                }
            </div>
            {
                totalProducts > 30 && (
                    <div className={styles.pad_bot16}>
                        <PaginationButtons
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                            categoryTitle={categoryTitle}
                        />
                    </div>
                )
            }
            <MainFooter/>
        </>
    );
}

export default CategoryPage;
