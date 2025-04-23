import React from 'react';

const ItemList = ({ dato }) => {

    return  <div key={dato.id}>
    <h2>{dato.description}</h2>
    <p>Categoria: {dato.category}</p>
    <p>Total: {dato.total}</p>
    <p>Fecha: {dato.date}</p>
  </div>

};

export default ItemList;