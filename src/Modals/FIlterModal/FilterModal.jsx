import React from "react";
import styles from './filter_modal.module.scss'
import HeaderForFilter from "../../HeaderComponents/HeaderForFilter/HeaderForFilter.jsx";
import PriceFilter from "../../BlockComponents/Filter/PriceFilter/PriceFilter.jsx";
import UniversalFilter from "../../ButtonComponents/FilterButtons/UniversalFilter/UniversalFilter.jsx";
import CharactersFilter from "../../BlockComponents/Filter/CharactersFilter/CharactersFilter.jsx";
import SaveFilterButton from "../../ButtonComponents/FilterButtons/SaveFilterButton/SaveFilterButton.jsx";
import {FilterContext} from "../../Context/ModalContext.jsx";
function FilterModal ({data}) {
    return (
        <div className={styles.container}>
            <HeaderForFilter />
            <div className={styles.filters}>
                <PriceFilter />
                <CharactersFilter text={'Параметр фильтра'} />
            </div>
            <SaveFilterButton />
        </div>
    )
}

export default FilterModal
