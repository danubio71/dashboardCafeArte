import React from 'react';
import { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

function Categorias(props){
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
        <div>
            
            <ul>
                {categorias && categorias.map((categoria, i) => <li key={i}> <strong>{categoria.name}:</strong> {categoria.amount}</li>) }     
                {!categorias && <CircularProgress />}           
            </ul>
        </div>
    )
}

export default Categorias