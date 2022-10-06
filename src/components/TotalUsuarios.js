import React from 'react';
import { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

function TotalUsuarios(){
    const [usuarios, setUsuarios] = useState(null)
    //const [ultimoUsuario, setUltimoUsuario] = useState(null)

    useEffect(() => {
        console.log("%cSe monto el componente", "color: green");
        fetch('/api/users')
        .then(response => response.json())
        .then(data => {
            setUsuarios(data.total)
        })
        .catch(err => console.log(err));
    }, [])
    
  

    return(
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2" id='card-color'>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total de Usuarios:</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{usuarios ? usuarios : <CircularProgress />}</div>
                            </div>
                            <div className="col-auto">
                            <i className="fa-solid fa-users"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TotalUsuarios