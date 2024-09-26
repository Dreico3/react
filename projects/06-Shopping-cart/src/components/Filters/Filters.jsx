import { useId } from 'react'
import './filters.css'
import { useFilters } from '../../hooks/useFilters'
export default function Filters() {
    const { filters ,setFilters } = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()//en el caso de q no tengamos un id confiable al mapear los arrays
    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>{filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select name="category" id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todos</option>
                    <option value="laptops">portatiles</option>
                    <option value="smartphoned">Celulares</option>
                </select>
            </div>
        </section>
    )
}