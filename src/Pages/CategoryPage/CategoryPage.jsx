import React, { useContext } from 'react';
import styles from './category_page.module.scss';
import { FilterContext } from '../../Context/ModalContext';
import MainFooter from '../../Components/MainFooter/MainFooter';
import FilterButtonsField from '../../ButtonComponents/FilterButtons/FilterButtonsField';
import FilterModal from '../../Modals/FIlterModal/FilterModal';
import SortingModal from '../../Modals/SortingModal/SortingModal';
import PaginationButtons from '../../ButtonComponents/PaginationButtons/PaginationButtons';
import Header from '../../HeaderComponents/Header/Header';
import { useCategoryPage } from "../../hooks/useCategoryPage.js";
import ProductList from "../../Components/ProductsList/ProductList.jsx";
import { useLocation } from "react-router-dom";

function CategoryPage() {
    const { is_filter_open, is_sorting_open, sortBy } = useContext(FilterContext);
    const {
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
    } = useCategoryPage();
    const { categoryTitle } = useLocation().state || {};
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

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

    return (
        <>
            <Header/>
            <div className={styles.pad_bot16}>
                <FilterButtonsField/>
            </div>
            <div className={styles.block}>
                {
                    loading ? (
                        <div> Loading </div>
                    ) : (
                        <ProductList products={products}/>
                    )
                }
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

export default CategoryPage;
