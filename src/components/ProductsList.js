import React from 'react';
import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'Id', width: 20 },
    { field: 'name', headerName: 'Nombre', width: 170 },    
    {
        field: 'weight',
      headerName: 'Peso',
      width: 30,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
        field: 'price',
      headerName: 'Precio',
      width: 80,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
        field: 'quantity',
      headerName: 'Cantidad',
      minWidth: 40,
      align: 'left',
      format: (value) => value.toFixed(2),
    },
    { field: 'status', headerName: 'Status', width: 80 },
    { field: 'detail', headerName: 'Detalle', width: 1200 },
    { field: 'category', headerName: 'Categoria', width: 100 },
    { field: 'session', headerName: 'Sesion', width: 100 },
    { field: 'url', headerName: 'URL', width: 150 },
    { field: 'image', headerName: 'Imagen', width: 350 }

  ];

function Productos(props){

    //const [productos, setProductos] = useState([])
    const [tableData, setTableData] = useState([])
    
    useEffect(() => {
        console.log("%cSe monto el componente", "color: green");
        fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            setTableData(data.productos)
            //console.log("Total de Productos: ", data);
        })
        .catch(err => console.log(err));
    }, [])


    return(
        <div style={({height: 400, width:1200})}>
            <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={5}
                checkboxSelection
                
            />
            
            
                
                        
        </div>
    )
        
    
}

export default Productos


//*********************************************** */


