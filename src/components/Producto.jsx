import React from 'react';

const Producto = ({producto, productos, changuito, agregarProducto}) => {

    const {id, articulo, precio, imagen} = producto;

    const seleccionarProducto = (id) => {
        const producto = productos.filter(
            producto => producto.id === id
        )[0];
        agregarProducto([...changuito, producto]);
    };

    const eliminarProducto = (id) => {
        const productos = changuito.filter(producto => producto.id !== id);
        agregarProducto(productos);
    }

    return ( 
        <div className='contenedor'>
            <div className="card" style={{ width: '18rem' }}>
            <img src={imagen} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{articulo}</h5>
                <p className="card-text">Lleva confort, elegí nuestros zapatos </p>
                <a href="#" className="btn btn-primary">Precio: {precio}</a>
                </div>
                {
                    productos
                    ?
                        <button
                        type="button"
                        onClick={ () => seleccionarProducto(id) }
                        >Comprar</button> 
                        :
                        <button
                        type="button"
                        onClick={ () => eliminarProducto(id) }
                        >Eliminar</button>
                }  
                <br></br> 
            </div>
        </div>    
     );
}
 
export default Producto;