
import Card from './Card'
import UltimoUsuario from './UltimoUsuario'


export default function CardLastUser() {
    return(
        <Card 
        size={12}
        title="Ultimo Usuario Creado">
            
                <div className="text-center">
                    <UltimoUsuario/>
                </div>
            
            </Card>
    )
}