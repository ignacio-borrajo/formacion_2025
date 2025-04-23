import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemList from './features/listados/components/ItemList'

function App() {
  const [count, setCount] = useState(0)
  const datos =[
    {
      "id": 1,
      "description":"Gasto 1",
      "category":"FOOD",
      "total":45.3,
      "date":"2025-04-22T12:02:00Z",
    },
    {
      "id": 2,
      "description":"Gasto 2",
      "category":"OTHR",
      "total":4.3,
      "date":"2025-04-22T12:02:00Z",
    },
    {
      "id": 3,
      "description":"Gasto 3",
      "category":"FOOD",
      "total":5.3,
      "date":"2025-04-22T12:02:00Z",
    },
    {
      "id": 4,
      "description":"Gasto 4",
      "category":"FOOD",
      "total":45.3,
      "date":"2025-04-22T12:02:00Z",
    }

  ]
  return (
    <>
      <h1>GASTOS</h1> 

     

      {datos.map((dato) =>  {
        return (
          <ItemList key={dato.id} dato={dato} />
        )
      })}
     
    </>
  )
}

export default App
