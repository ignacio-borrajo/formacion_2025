import React from 'react'

const useFetchExpense = () => { 

    const [respose, setResponse] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);


    const fetchData = React.useCallback(() => {
        setLoading(true);
        setError(null);

        fetch("http://localhost:8000/api/gatos/")
        .them((response) => { response.json() })
        .them((data) => {
            setResponse(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
        }).finally(() => {
            setLoading(false);
        });        
}, []);

React.useEffect(() => {
    fetchData();
}, [fetchData]);
    
    return { respose, error, loading };
};

export default useFetchExpense;