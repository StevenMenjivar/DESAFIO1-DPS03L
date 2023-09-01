import React, { useState } from 'react';
import '../components/styles.css';

const Peliculas = [
  { nombre: 'Super Mario Bros. La película', precio: 19.98},
  { nombre: 'Skibidi Toilet', precio: 3.70},
  { nombre: 'Megalodón 2', precio: 20.34},
  { nombre: 'John Wick 4', precio: 15.30},
  { nombre: 'Deadpool 3', precio: 14.50},
  { nombre: 'The Whale', precio: 10.50},
  { nombre: 'Titanic 5', precio: 3.50},
  { nombre: 'Rápido y furioso 20', precio: 4.60},
  { nombre: 'Transformers 8', precio: 6.40},
  { nombre: 'Pocahontas 1', precio: 14.50},  
];

const App = () => {
  const [pelis, setPelis] = useState(Peliculas);
  const [elementos, setElementos] = useState([]);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState('');
  
  const añadirLista = () => {
    if (peliculaSeleccionada) {
      setElementos([...elementos, { ...peliculaSeleccionada, cantidad: 1 }]);
      setPeliculaSeleccionada('');
    }
  };
  
  const eliminarElemento = (index) => {
    const newElementos = elementos.filter((_, i) => i !== index);
    setElementos(newElementos);
  };
  
  const cambiarPelicula = (index, cantidad) => {
    const newElementos = [...elementos];
    newElementos[index].cantidad = cantidad;
    setElementos(newElementos);
  };
  
  const total = elementos.reduce((total, item) => total + item.precio * item.cantidad, 0);

  return (
    <div className="App">
      <h1 className="app-title">Lista de compras</h1>
      <div className="picker-container">
        <select
          className="picker"
          value={JSON.stringify(peliculaSeleccionada)}
          onChange={(e) => setPeliculaSeleccionada(JSON.parse(e.target.value))}
        >
          <option value="">Selecciona una película</option>
          {pelis.map((movie, index) => (
            <option key={index} value={JSON.stringify(movie)}>
              {movie.nombre}
            </option>
          ))}
        </select>
        <button className="add-button" onClick={añadirLista}>Agregar elemento</button>
      </div>
      <ul className="item-list">
        {elementos.map((item, index) => (
          <li key={index} className="cart-item">
            {item.nombre} <span className="item-price">({item.precio.toFixed(2)} USD)</span>
            <input
              type="number"
              className="item-quantity"
              value={item.cantidad}
              onChange={(e) => cambiarPelicula(index, parseInt(e.target.value))}
            />
            <button className="delete-button" onClick={() => eliminarElemento(index)}>X</button>
          </li>
        ))}
        {elementos.length > 0 && <hr className="item-divider" />}
        <li className="total">Total: <span className="total-amount">{total.toFixed(2)} USD</span></li>
      </ul>
    </div>
  );
};

export default App;
