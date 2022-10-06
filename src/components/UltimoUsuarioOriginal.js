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
            console.log("ULTIMO USER data: ", data);           
        })
        .catch(err => console.log(err));
    }, [])
    console.log("ULTIMO USER: ", ultimoUsuario);
    
   
    return(
        
        
        <div>
            
           {ultimoUsuario &&  <ul>
                <li>Id: {ultimoUsuario.id}</li>
                <li>Nombre: {ultimoUsuario.name}</li>
                <li>Apellido: {ultimoUsuario.lastName}</li>
                <li>Email: {ultimoUsuario.email}</li>
                <li>Usuario: {ultimoUsuario.username}</li>
                <li>Fecha de Nacimiento: {ultimoUsuario.birth_date}</li>
                <li>Status: {ultimoUsuario.status}</li>
                <li>URL Imagen: {ultimoUsuario.image}</li>
                
            </ul>}
            {!ultimoUsuario && <CircularProgress />}

        </div>
    )
}

export default UltimoUsuario