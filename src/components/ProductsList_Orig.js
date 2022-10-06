import React from 'react';
import { useState, useEffect } from 'react'
import Product from './Product';




function Productos(props){

    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        console.log("%cSe monto el componente", "color: green");
        fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            setProductos(data.productos)
            console.log("Total de Productos: ", data);
        })
        .catch(err => console.log(err));
    }, [])


    return(
        <div>
            
            <table className="table">
                <thead>
                    <tr> 
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Peso</th>
                        <th>Detalle</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                        <th>Session</th>
                        <th>Imagen url</th>
                        <th>Cantidad</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {   productos ? productos.map((producto, i) => 
                        <Product {...producto} key={i} />) : <div>Cargando Productos...</div>
                    }   
                </tbody>                
            </table>
                
                        
        </div>
    )
        
    
}

export default Productos


//*********************************************** */


