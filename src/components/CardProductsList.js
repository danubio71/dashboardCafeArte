import Card from './Card'
import ProductsList from './ProductsList'

export default function CardProductsList() {
    return(
        <Card 
            size={18}
            title="Listado de Productos">
            <ProductsList/>
        </Card>
    )
}