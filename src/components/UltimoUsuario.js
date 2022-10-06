import React from 'react';
import { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

function UltimoUsuario(){
    const [ultimoUsuario, setUltimoUsuario] = useState(null)

    useEffect(() => {
        console.log("%cSe monto el componente", "color: green");
        fetch('/api/users/lastuser')
        .then(response => response.json())
        .then(data => {
            setUltimoUsuario(data.lastUser)
            //console.log("ULTIMO USER data: ", data);           
        })
        .catch(err => console.log(err));
    }, [])
    //console.log("ULTIMO USER: ", ultimoUsuario);
    
   
    return(

        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={ultimoUsuario && ultimoUsuario.image} className="img-fluid rounded-start" alt="Ultimo Usuario" />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                {ultimoUsuario &&  <ul>
                <strong>Id: </strong>{ultimoUsuario.id}<br></br>
                 <strong>Nombre: </strong>{ultimoUsuario.name}<br></br>
                 <strong>Apellido: </strong>{ultimoUsuario.lastName}<br></br>
                 <strong>Email: </strong>{ultimoUsuario.email}<br></br>
                 <strong>Usuario: </strong>{ultimoUsuario.username}<br></br>
                 <strong>Fecha de Nacimiento: </strong>{ultimoUsuario.birth_date}<br></br>
                 <strong>Status: </strong>{ultimoUsuario.status}<br></br>
                 <strong>URL Imagen: </strong>{ultimoUsuario.image}<br></br>                
            </ul>}
            {!ultimoUsuario && <CircularProgress />}
                </div>
                </div>
            </div>
        </div>

        
       
    )
}

export default UltimoUsuario