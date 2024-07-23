import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const FilterContext = React.createContext();

function ModalContext({ children }) {
    const [is_filter_open, set_filter_open] = useState(false);
    const [is_sorting_open, set_sorting_open] = useState(false);
    const [sort_by, setSortBy] = useState('');

    return (
        <FilterContext.Provider value={{
            is_filter_open,
            set_filter_open,
            is_sorting_open,
            set_sorting_open,
            sort_by,
            setSortBy
        }}>
            {children}
        </FilterContext.Provider>
    );
}

export { ModalContext, FilterContext };
