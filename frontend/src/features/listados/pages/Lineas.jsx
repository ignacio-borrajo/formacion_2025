import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import useFetchExpensesLin from '../hooks/useFetchExpenseLin'
import { useParams, Link } from 'react-router-dom';

const Lineas = ()=>{
    const [lines,setLines] = useState([])
    let expense_pk = useParams().expenseid
    const columns=[
        {field: "description", headerName: "Descripcion",},
        {field: "amount", headerName: "Cantidad",},
        {field: "date", headerName: "Fecha",},
        {field:"id",headerName:"Modificar Lineas", 
            renderCell:(params)=>(
                <div>
                    <button><Link to={`/editar/${params.value}`}>Modificar</Link></button>
                    <button><Link to={`/editar/${params.value}`}>Eliminar</Link></button>
                </div>
            )
        },
    ]
    const { response, error, loading } = useFetchExpensesLin(expense_pk);
    useEffect(()=>{
        if (response) {
            setLines(response)
        }
    },
    [response])
    return(
        <div>
            <DataGrid columns={columns} rows={lines}/>
        </div>
    )
}

export default Lineas