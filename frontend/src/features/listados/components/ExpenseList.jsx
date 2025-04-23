import ItemList from "./itemList";

const ExpenseList = () => {

const datos = [{
    "id" : 1,
    "description" : "Gasto 1",
    "limit" : 100,
    "category" : "FOOD",
    "total" : 45.3,
    "date" : "2025-04-22T12:02:00Z"
}];


const [expenses, setExpenses] = React.useState([]);
const [intpuValue, setInputValue] = React.useState("");


const handleChange = (e) => {
    setInputValue(e.target.value);
}

const handleClick = () => {
    console.log(inputValue)
}

return (
    <div className="listado-gastos">
        <input type="text" placeholder="Bucar" value={intpuValue} onChange={handleChange}></input>
        {expenses.map((dato) => {
        return (
          <ItemList key={dato.id} dato={dato} />
        );
      })}
    </div>
);
}
export default ExpenseList;