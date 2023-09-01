import {useId} from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters';
export function Filters(){
    const {filters,setfilters}=useFilters();
    const minPriceFilterId=useId();
    const contegoryFilterId=useId();

    const handleChangeMinPrice= (event)=>{
        setfilters(prevState=>({
            ... prevState,
            minPrice: event.target.value
        }))
    }
    const handleChangeCategory = (event)=>{
        setfilters(prevState=>({
            ... prevState,
            category: event.target.value
        }))
    }
    return(
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input type="range" 
                id={minPriceFilterId} 
                min='0'
                max='100'
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={contegoryFilterId}>Categoria</label>
                <select id={contegoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todo</option>
                    <option value="Yoga y Pilates">Yoga y Pilates</option>
                    <option value="Futbol">Futbol</option>
                    <option value="Mochilas deportivas">Mochilas deportivas</option>
                    <option value="Ciclismo">Ciclismo</option>
                    <option value="Boxeo">Boxeo</option>

                </select>
            </div>
        </section>
    )
}