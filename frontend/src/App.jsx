import { useState } from 'react'
import './App.css'
import ItemList from "./ItemList";

function App() {
  const [count, setCount] = useState(0)

  const datos = [
    {
      "id":1,
      "description": "Gasto 1",
      "limit": 100,
      "category": "FOOD",
      "total": 45.3,
      "date": "2025-04-22T12:02:00Z"
    },
    {
      "id":2,
      "description": "Gasto 2",
      "limit": 200,
      "category": "FOOD",
      "total": 45.3,
      "date": "2025-04-22T12:02:00Z"
    },
    {
      "id":3,
      "description": "Gasto 3",
      "limit": 300,
      "category": "FOOD",
      "total": 45.3,
      "date": "2025-04-22T12:02:00Z"
    },
    {
      "id":4,
      "description": "Gasto 4",
      "limit": 400,
      "category": "FOOD",
      "total": 45.3,
      "date": "2025-04-22T12:02:00Z"
    },
  ]

  return (
    <>
      <h1>GASTOS</h1>
      {datos.map((dato) => {
        return <ItemList key={dato.id} dato={dato} /> 
      })}
    </>
  )
}

export default App
