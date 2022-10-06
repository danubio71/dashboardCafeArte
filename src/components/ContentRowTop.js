import React from 'react';
import ContentMiddle from './ContentMiddle';
import TotalCategorias from './TotalCategorias';
import TotalProductos from './TotalProductos';
import TotalUsuarios from './TotalUsuarios';


function ContentRowTop(props) {
    
    return (
        <div className="container-fluid">
            
            <div className="row justify-content-center align-self-center">            {/*NO:  fixed-top */}
                <TotalProductos/>
                <TotalUsuarios/>
                <TotalCategorias/>
            </div>
            <ContentMiddle/>
        </div>
    );
  }


export default ContentRowTop;