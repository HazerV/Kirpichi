import React, { useState, useEffect, useCallback, useContext } from 'react';
import styles from './filter_modal.module.scss';
import HeaderForFilter from "../../HeaderComponents/HeaderForFilter/HeaderForFilter.jsx";
import PriceFilter from "../../BlockComponents/Filter/PriceFilter/PriceFilter.jsx";
import SaveFilterButton from "../../ButtonComponents/FilterButtons/SaveFilterButton/SaveFilterButton.jsx";
import { useNavigate, useParams } from "react-router-dom";
import CharactersFilter from "../../BlockComponents/Filter/CharactersFilter/CharactersFilter.jsx";
import { FilterContext } from "../../Context/ModalContext.jsx";
import { Dialog } from 'primereact/dialog';
import { ScrollPanel } from 'primereact/scrollpanel';

function FilterModal({ data, selectedAttributes, toggleAttribute }) {
    const navigate = useNavigate();
    const { categorySlug } = useParams();
    const [minPrice, setMinPrice] = useState(data.min_price);
    const [maxPrice, setMaxPrice] = useState(data.max_price);
    const { is_filter_open } = useContext(FilterContext);
    useEffect(() => {
        setMinPrice(data.min_price);
        setMaxPrice(data.max_price);
    }, [data.min_price, data.max_price]);

    const updateURL = useCallback(() => {
        const params = new URLSearchParams();
        params.set('page', 1);
        if (minPrice !== null) params.set('min_price', minPrice);
        if (maxPrice !== null) params.set('max_price', maxPrice);
        Object.entries(selectedAttributes).forEach(([name, values]) => {
            if (values.length > 0) {
                params.set(name, values.join(','));
            }
        });

        navigate(`/categories/${categorySlug}?${params.toString()}`);
    }, [navigate, categorySlug, minPrice, maxPrice, selectedAttributes]);

    useEffect(() => {
        updateURL();
    }, [updateURL]);

    const handlePriceChange = (newPriceRange) => {
        const [newMinPrice, newMaxPrice] = newPriceRange;
        setMinPrice(newMinPrice);
        setMaxPrice(newMaxPrice);
    };

    const handleAttributeChange = (attributeName, newValues) => {
        toggleAttribute(attributeName, newValues);
    };

    return (
        <Dialog
            modal={true}
            position={'bottom'}
            closable={false}
            visible={is_filter_open}
            className={styles.container}
            onHide={() => {
                setMinPrice(data.min_price);
                setMaxPrice(data.max_price);
            }}
        >
            <HeaderForFilter />
            <div className={styles.filters}>
                <PriceFilter
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onPriceChange={handlePriceChange}
                />
                {
                    Object.entries(data.aggregated_attributes).map(([attributeName, attributeValues]) => (
                        <CharactersFilter
                            key={attributeName}
                            text={attributeName}
                            values={attributeValues}
                            selectedValues={selectedAttributes[attributeName] || []}
                            onAttributeChange={(newValues) => handleAttributeChange(attributeName, newValues)}
                        />
                    ))
                }
            </div>
            <div className={styles.save_button}>
                <SaveFilterButton />
            </div>
            <p className={styles.total_products}>
                Кол-во товаров: {data.totalProducts}
            </p>
        </Dialog>
    );
}

export default FilterModal;
