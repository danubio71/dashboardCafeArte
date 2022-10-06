import React from 'react';
import { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

function TotalCategorias(){
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        console.log("%cSe monto el componente", "color: green");
        fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            setCategorias(data.productsByCategory)
        })
        .catch(err => console.log(err));
    }, [])    
    
    return(       
        
            <div className="col-md-4 mb-4">
                <div className="card border-left-success shadow h-100 py-2" id='card-color'>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1" id='card-color'>Total de Categorias:</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{categorias ? categorias.length : <CircularProgress />}</div>
                            </div>
                            <div className="col-auto">
                            <i className="fa-solid fa-list-check"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        

        
    )
}

export default TotalCategorias