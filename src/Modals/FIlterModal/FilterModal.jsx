import React from "react";
import styles from './filter_modal.module.scss';
import HeaderForFilter from "../../HeaderComponents/HeaderForFilter/HeaderForFilter.jsx";
import PriceFilter from "../../BlockComponents/Filter/PriceFilter/PriceFilter.jsx";
import CharactersFilter from "../../BlockComponents/Filter/CharactersFilter/CharactersFilter.jsx";
import SaveFilterButton from "../../ButtonComponents/FilterButtons/SaveFilterButton/SaveFilterButton.jsx";

function FilterModal({ data, onPriceChange, onAttributeChange, selectedAttributes }) {
    return (
        <div className={styles.container}>
            <HeaderForFilter />
            <div className={styles.filters}>
                <PriceFilter
                    minPrice={data.min_price}
                    maxPrice={data.max_price}
                    onPriceChange={onPriceChange}
                />
                {
                    Object.entries(data.aggregated_attributes).map(([attributeName, attributeValues]) => (
                        <CharactersFilter
                            key={attributeName}
                            text={attributeName}
                            values={attributeValues}
                            selectedValue={selectedAttributes[attributeName]}
                            onAttributeChange={(value) => onAttributeChange(attributeName, value)}
                        />
                    ))
                }
            </div>
            <SaveFilterButton />
        </div>
    );
}

export default FilterModal;
