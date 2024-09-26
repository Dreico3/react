import { useFilters } from '../../hooks/useFilters'
import './footer.css'

export default function Footer() {
    const { filters } = useFilters()
    return (
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }
            {/* <h4>prueba tecnica de react </h4>
            <span>@drerick</span>
            <h5>Sooping cart con useContect & useReducer</h5> */}
        </footer>
    )
}