import React from "react";

const ItemList = ({dato}) => {

    const [expense, setExpense] = React.useState([]);

    React.useEffect(() => {
        setExpense(dato);
    },[dato]);

    return expense ? (
        <div>
            <h2>
                <a href='lines/{dato.id}'>{expense.description}</a>
            </h2>
            <p>Limite: {dato.limit}</p>
            <p>Categoria: {dato.category}</p>
            <p>Total: {dato.total}</p>
            <p>Fecha: {dato.date}</p>
        </div> 
    ) : (
        "Loading...");
};

export default ItemList;