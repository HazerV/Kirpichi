import React from "react";
import styles from './filter_modal.module.scss';
import HeaderForFilter from "../../HeaderComponents/HeaderForFilter/HeaderForFilter.jsx";
import PriceFilter from "../../BlockComponents/Filter/PriceFilter/PriceFilter.jsx";
import CharactersFilter from "../../BlockComponents/Filter/CharactersFilter/CharactersFilter.jsx";
import SaveFilterButton from "../../ButtonComponents/FilterButtons/SaveFilterButton/SaveFilterButton.jsx";
import {useLocation, useNavigate, useParams} from "react-router-dom";

function FilterModal({ data, onPriceChange, onAttributeChange, selectedAttributes }) {
    const location = useLocation();
    const navigate = useNavigate();
    const { categorySlug } = useParams();

    const handleSaveFilters = () => {
        const params = new URLSearchParams(location.search);
        params.set('page', 1);
        if (data.min_price !== null) params.set('min_price', data.min_price);
        if (data.max_price !== null) params.set('max_price', data.max_price);
        Object.entries(selectedAttributes).forEach(([name, value]) => {
            if (value) params.set(name, value);
        });
        navigate(`/categories/${categorySlug}?${params.toString()}`);
    };

    const handlePriceChange = (newPriceRange) => {
        onPriceChange(newPriceRange);
        updateURL(newPriceRange[0], newPriceRange[1], selectedAttributes);
    };

    const handleAttributeChange = (attributeName, attributeValue) => {
        onAttributeChange(attributeName, attributeValue);
        updateURL(null, null, { ...selectedAttributes, [attributeName]: attributeValue });
    };

    const updateURL = (newMinPrice, newMaxPrice, newSelectedAttributes) => {
        const params = new URLSearchParams(location.search);
        params.set('page', 1);
        if (newMinPrice !== null) params.set('min_price', newMinPrice);
        if (newMaxPrice !== null) params.set('max_price', newMaxPrice);
        Object.entries(newSelectedAttributes).forEach(([name, value]) => {
            if (value) params.set(name, value);
        });
        navigate(`/categories/${categorySlug}?${params.toString()}`);
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
                            onAttributeChange={(value) => handleAttributeChange(attributeName, value)}
                        />
                    ))
                }
            </div>
            <SaveFilterButton onSave={handleSaveFilters} />
        </div>
    );
}

export default FilterModal;
