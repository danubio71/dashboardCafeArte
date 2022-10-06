import React from 'react';
import { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

function TotalProductos(){
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        console.log("%cSe monto el componente", "color: green");
        fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            setProductos(data.total)                       
        })
        .catch(err => console.log(err));
    }, [])
    
    
    return(
        
        
            <div className="col-md-4 mb-4">
                <div className="card border-left-secondary shadow h-100 py-2" id='card-color'>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-secondary text-uppercase mb-1">Total de Productos:</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{productos ? productos : <CircularProgress />}</div>
                            </div>
                            <div className="col-auto">
                            <i className="fa-solid fa-mug-saucer"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        

        
    )
}

export default TotalProductos