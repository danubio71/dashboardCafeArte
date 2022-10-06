import { Route } from 'react-router-dom'
import CardProductsList from './CardProductsList'
import CardUsersList from './CardUsersList'
import CardCategorias from './CardCategorias'
import CardLastUser from './CardLastUser'


export default function ContentMiddle(){
    return(
        
        <div className="row col-lg-6 mb-6">
           

           <Route path="/users-last" component={CardLastUser} />
            <Route path="/products-categorias" component={CardCategorias} />
            <Route path="/products-list" component={CardProductsList} />
            <Route path="/users-list" component={CardUsersList}/>
            
            
        </div>
        )
}