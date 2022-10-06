import UsersList from './UsersList'
import Card from './Card'


export default function CardUsersList() {
    return(
        <Card 
            size={18}
            title="Listado de Usuarios">
            <UsersList/>
        </Card>
    )
}