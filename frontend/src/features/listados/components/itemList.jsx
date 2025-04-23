import React from 'react';

const ItemList= ({dato})=>{
    
    return(
    <div>
        <h2>
        <a href="lines/{dato.id}">{dato.description}</a>
        </h2>
        <p>Limite: {dato.limit}</p>
        <p>Categoria: {dato.category}</p>
        <p>Total Gastos: {dato.total}</p>
        <p>Fecha: {dato.date}</p>
    </div>)
}

export default ItemList;