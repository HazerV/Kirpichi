import React from 'react';
import { useFilterSave } from "../../Context/FilterSave.jsx";
import styles from './filter_modal.module.scss';
import HeaderForFilter from "../../HeaderComponents/HeaderForFilter/HeaderForFilter.jsx";
import PriceFilter from "../../BlockComponents/Filter/PriceFilter/PriceFilter.jsx";
import SaveFilterButton from "../../ButtonComponents/FilterButtons/SaveFilterButton/SaveFilterButton.jsx";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CharactersFilter from "../../BlockComponents/Filter/CharactersFilter/CharactersFilter.jsx";

function FilterModal({ data, onPriceChange }) {
    const location = useLocation();
    const navigate = useNavigate();
    const { categorySlug } = useParams();
    const { selectedAttributes, toggleAttribute } = useFilterSave();

    const getQueryString = () => {
        const params = new URLSearchParams();
        params.set('page', 1);
        if (data.min_price !== null) params.set('min_price', data.min_price);
        if (data.max_price !== null) params.set('max_price', data.max_price);
        Object.entries(selectedAttributes).forEach(([name, value]) => {
            if (value !== null && value !== undefined) params.set(name, value);
        });

        return params.toString();
    };

    const handleSaveFilters = () => {
        const queryString = getQueryString();
        navigate(`/categories/${categorySlug}?${queryString}`);
    };

    const handlePriceChange = (newPriceRange) => {
        onPriceChange(newPriceRange);
        updateURL(newPriceRange[0], newPriceRange[1]);
    };

    const updateURL = (newMinPrice, newMaxPrice) => {const params = new URLSearchParams(location.search);
        params.set('page', 1);
        if (newMinPrice !== null) params.set('min_price', newMinPrice);
        if (newMaxPrice !== null) params.set('max_price', newMaxPrice);
        Object.entries(newSelectedAttributes).forEach(([name, value]) => {
            if (value) params.set(name, value);
        });

        const queryString = getQueryString();
        navigate(`/categories/${categorySlug}?${queryString}?${params.toString()}`);
    };

    return (
        <div className={styles.container}>
            <HeaderForFilter />
            <div className={styles.filters}>
                <PriceFilter
                    minPrice={data.min_price}
                    maxPrice={data.max_price}
                    onPriceChange={handlePriceChange}
                />
                {
                    Object.entries(data.aggregated_attributes).map(([attributeName, attributeValues]) => (
                        <CharactersFilter
                            key={attributeName}
                            text={attributeName}
                            values={attributeValues}
                            selectedValue={selectedAttributes[attributeName]}
                            onAttributeChange={(value) => toggleAttribute(attributeName, value)}
                        />
                    ))
                }
            </div>
            <SaveFilterButton onSave={handleSaveFilters} />
        </div>
    );
}

export default FilterModal;
