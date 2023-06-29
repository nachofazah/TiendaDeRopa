import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Changuito from './components/Changuito';
import Producto from './components/Producto';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import camiseta from './imagenes/camiseta.jpg';
import campera from './imagenes/campera.jpg';
import remera from './imagenes/remera.jpg';
import gorro from './imagenes/gorro.jpg';
import medias from './imagenes/medias.jpg';
import zapatillas from './imagenes/zapatillas.jpg';
import zapatos from './imagenes/zapatos.jpg';


function App() {

//creamos lista de productos
  const [productos, guardarProducto] = useState(
    [
      {id: 0, articulo: "remera", precio: 4500, imagen: remera},
      {id: 1, articulo: "campera", precio: 22500, imagen: campera},
      {id: 2, articulo: "camiseta", precio: 17000, imagen: camiseta},
      {id: 3, articulo: "zapatos", precio: 30000, imagen: zapatos},
      {id: 4, articulo: "medias", precio: 1200, imagen: medias},
      {id: 5, articulo: "zapatillas", precio: 19900, imagen: zapatillas},
      {id: 6, articulo: "gorros", precio: 1900, imagen: gorro}
    ]
  )

  const [changuito, agregarProducto] = useState([]);

  return (
    <>
      <Header/>
      <div className='cuerpo'>
          <Changuito
            changuito = {changuito}
            agregarProducto = {agregarProducto}
          />
          <h1>Listado de Productos</h1>
          <div className='flex'>
          {
            productos.map( producto => (
              <Producto
                producto = {producto}
                productos = {productos}
                key = {producto.id}
                changuito = {changuito}
                agregarProducto = {agregarProducto}
              />  
            ))
          }
          </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
