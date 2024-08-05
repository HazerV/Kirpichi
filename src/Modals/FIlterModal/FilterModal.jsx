import React, {useState, useEffect, useCallback} from 'react';
import styles from './filter_modal.module.scss';
import HeaderForFilter from "../../HeaderComponents/HeaderForFilter/HeaderForFilter.jsx";
import PriceFilter from "../../BlockComponents/Filter/PriceFilter/PriceFilter.jsx";
import SaveFilterButton from "../../ButtonComponents/FilterButtons/SaveFilterButton/SaveFilterButton.jsx";
import { useNavigate, useParams } from "react-router-dom";
import CharactersFilter from "../../BlockComponents/Filter/CharactersFilter/CharactersFilter.jsx";
import { FilterContext } from "../../Context/ModalContext.jsx";

function FilterModal({ data, selectedAttributes, toggleAttribute }) {
    const navigate = useNavigate();
    const { categorySlug } = useParams();
    const [minPrice, setMinPrice] = useState(data.min_price);
    const [maxPrice, setMaxPrice] = useState(data.max_price);

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
        <div className={styles.container}>
            <HeaderForFilter />
            <div className={styles.filters}>
                <PriceFilter
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onPriceChange={handlePriceChange}
                />
                {Object.entries(data.aggregated_attributes).map(([attributeName, attributeValues]) => (
                    <CharactersFilter
                        key={attributeName}
                        text={attributeName}
                        values={attributeValues}
                        selectedValues={selectedAttributes[attributeName] || []}
                        onAttributeChange={(newValues) => handleAttributeChange(attributeName, newValues)}
                    />
                ))}
            </div>
            <div className={styles.save_button}>
                <SaveFilterButton />
            </div>
        </div>
    );
}

export default FilterModal;
