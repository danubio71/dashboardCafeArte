import React from 'react';

import TotalProductos from './TotalProductos';
import TotalUsuarios from './TotalUsuarios';
import UltimoUsuario from './UltimoUsuario';

function Home(){
    return(
        <div>
            <h2>Soy el componente HOME</h2>
            <p>Esto es un parrafo</p>       
        
        <TotalProductos />
        <TotalUsuarios />
        <UltimoUsuario/>
        </div>
    )
}

export default Home