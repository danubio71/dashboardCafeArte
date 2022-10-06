import React from 'react';
import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress'

const columns = [
    { field: 'id', headerName: 'Id', width: 20 },
    { field: 'name', headerName: 'Nombre', width: 120 },    
    { field: 'lastName', headerName: 'Apellido', width: 120 },
    { field: 'email', headerName: 'Correo', width: 250 },
    { field: 'url', headerName: 'URL', width: 150 },
    { field: 'image', headerName: 'Path Imagen', width: 450 }
  ];

function UsersList(props){

    //const [productos, setProductos] = useState([])
    const [tableData, setTableData] = useState([])
    
    useEffect(() => {
        console.log("%cSe monto el componente", "color: green");
        fetch('/api/users')
        .then(response => response.json())
        .then(data => {
            setTableData(data.usuarios)
            //console.log("Total de Productos: ", data);
        })
        .catch(err => console.log(err));
    }, [])
   

    return(
       
        <div style={({height: 400, width:1200})}>
            <DataGrid
                rows={tableData ? tableData : <CircularProgress />}
                columns={columns}
                pageSize={9}
                checkboxSelection
            />           
        </div>
    ) 
}

export default UsersList


//*********************************************** */


