import React from "react";
import api from "../../../api/api";

function useFetchExpense(){
    const [response, setResponse] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
  
    const fetchData = React.useCallback(() => {
      setLoading(true);//Comenzamos cargando
      setError(null);//Y con el error a nulo
      
      //Uso la api con axio o si usas fetch acuerdate de mandar los tokens
      api
        .get("gastos/")
        .then((response) => {
          setResponse(response.data);//Cuando se ejecute seteo la response
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);//Cuando se acabe de ejecutar que deje de cargar
        });
    }, []);
  
    React.useEffect(() => {
      fetchData();
    }, [fetchData]);
  
    return { response, error, loading };
  }

export default useFetchExpense