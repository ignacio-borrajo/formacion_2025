import React from "react"

function useFetchExpense(){


    const [response,setResponse]=React.useState([])
    const [loading,setLoading]=React.useState(true)
    const [error,setError]=React.useState(null)

    const fetchData=React.useCallback(()=>{
        setLoading(true),
        setError(null),

        fetch("http://127.0.0.1:8000/api/gastos/")
        .then((response)=>response.json())
        .then(data=>{
            setResponse(data)
            
        })
        .catch((error)=>{
            console.log(error)
            setError(error)
        })
        .finally(()=>setLoading(false))
        
    });

    React.useEffect(()=>fetchData(),[fetchData])


    return [response,loading,error]

}

export default useFetchExpense