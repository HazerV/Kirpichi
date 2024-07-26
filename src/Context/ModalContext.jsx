import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const FilterContext = React.createContext();

function ModalContext({ children }) {
    const [is_filter_open, set_filter_open] = useState(false);
    const [is_sorting_open, set_sorting_open] = useState(false);
    const [sortBy, setSortBy] = useState('');
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const sortByParam = searchParams.get('sort_by');
        if (sortByParam) {
            setSortBy(sortByParam);
        }
    }, [location.search]);

    return (
        <FilterContext.Provider value={{
            is_filter_open,
            set_filter_open,
            is_sorting_open,
            set_sorting_open,
            sortBy,
            setSortBy
        }}>
            {children}
        </FilterContext.Provider>
    );
}

export { ModalContext, FilterContext };
