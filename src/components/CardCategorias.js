
import Card from './Card'
import Categorias from './Categorias'


export default function CardCategorias() {
    return(
        <Card 
        size={12}
        title="Productos por Categorias">
            <div className="text-center">
                <Categorias/>
            </div>
            
        </Card>
    )
}