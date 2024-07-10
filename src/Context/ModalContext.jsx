import React from "react";
import {useLocation} from "react-router-dom";
const FilterContext = React.createContext()
function ModalContext ({children}) {
    const [is_filter_open, set_filter_open] = React.useState(false)
    const [is_sorting_open, set_sorting_open] = React.useState(false)
    return (
        <FilterContext.Provider value={{is_filter_open, set_filter_open, is_sorting_open, set_sorting_open}}>
            {children}
        </FilterContext.Provider>
    )
}
export {
    ModalContext,
    FilterContext
}
