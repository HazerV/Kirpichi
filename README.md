import {useLocation, useNavigate, useParams} from "react-router-dom";
import styles from "*.module.scss";
import HeaderForFilter from "../../HeaderComponents/HeaderForFilter/HeaderForFilter.jsx";
import PriceFilter from "../../BlockComponents/Filter/PriceFilter/PriceFilter.jsx";
import CharactersFilter from "../../BlockComponents/Filter/CharactersFilter/CharactersFilter.jsx";
import React from "react";

function FilterModal({ data, onPriceChange, onAttributeChange, selectedAttributes }) {

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
                            onAttributeChange={(value) => handleAttributeChange(attributeName,
                                Loading content
