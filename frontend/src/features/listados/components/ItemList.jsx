import React from 'react'

const ItemList = ({dato}) => {

    const [expense, setExpense] = React.useState();

    React.useEffect(() => {
        setExpense(dato);
    }, [dato]);

   return expense ? (
        <div>
        <h2><a href="lines/{dato.id}/">{dato.description}</a></h2>
        <p>Limite: {dato.limit}</p>
        <p>Categoría: {dato.category}</p>
        <p>Total Gastos: {dato.total}</p>
        <p>Fecha:{dato.date} </p>
        </div> ) : ('Loading' );
};