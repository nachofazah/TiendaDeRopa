import React from 'react';
import Producto from './Producto';

const Changuito = ({changuito, agregarProducto}) => {
    return ( 
        <>
            <div>
                <h1>Tus productos seleccionados</h1>
                {changuito.map( (producto) => (
                    <Producto
                        key = {producto.id}
                        producto = {producto}
                        changuito = {changuito}
                        agregarProducto = {agregarProducto}
                    />
                ))}
            </div>
        </>
     );
}
 
export default Changuito;