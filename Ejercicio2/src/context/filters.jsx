import { createContext, useState} from "react";

export const FiltersContext = createContext();

export function FiltersProvider({ children }){
    const [filters, setfilters]=useState({
        category:'all',
        minPrice: 0
    })
    return(
        <FiltersContext.Provider value={
            {
                filters, 
                setfilters
            }
        }>
            {children}
        </FiltersContext.Provider>
    )
}