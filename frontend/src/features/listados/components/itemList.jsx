
function ItemList({dato}){

    return <div style={{backgroundColor: "lightblue", border: '1px solid black',borderRadius: '5px'}}>
        <h3>ID: {dato?.id}</h3>
        <h3>Description: {dato?.description}</h3>
        <h3>Category: {dato?.category}</h3>

    </div>
    
}

export default ItemList;