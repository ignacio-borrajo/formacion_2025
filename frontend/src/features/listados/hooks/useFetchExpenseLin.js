import { useCallback, useEffect, useState } from "react"
import api from "../../../api/api"

const useFetchExpenseLin = (expense_pk)=>{
    
    const [response,setResponse]=useState([])
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(true)

    const fetchData = useCallback(()=>{
        setLoading(true);
        setError(null)
        
        api.get('gastos/'+expense_pk)
        .then((response)=>{
            setResponse(response.data)
        })
        .catch(error=>{
            setError(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])

    useEffect(()=>{
        fetchData()
    },[fetchData])

    return {response,error,loading}
}

export default useFetchExpenseLin