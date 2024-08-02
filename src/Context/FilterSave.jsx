import React, { createContext, useContext, useState, useEffect } from 'react';

const FilterSaveContext = createContext();

export const useFilterSave = () => {
    return useContext(FilterSaveContext);
};

export const FilterSaveProvider = ({ children }) => {
    const [selectedAttributes, setSelectedAttributes] = useState({});

    const toggleAttribute = (attributeName, value) => {
        setSelectedAttributes(prev => ({
            ...prev,
            [attributeName]: prev[attributeName] === value ? undefined : value
        }));
    };

    useEffect(() => {
        const handleRouteChange = () => {
            if (window.location.pathname !== '/categories') {
                setSelectedAttributes({});
            }
        };
        window.addEventListener('popstate', handleRouteChange);

        handleRouteChange();

        return () => window.removeEventListener('popstate', handleRouteChange);
    }, []);

    return (
        <FilterSaveContext.Provider value={{ selectedAttributes, toggleAttribute }}>
            {children}
        </FilterSaveContext.Provider>
    );
};
