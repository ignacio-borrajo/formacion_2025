import React from "react";
import api from "../../../api/api";
import { useSearchParams } from 'react-router-dom';

const useFetchExpenses = () => {
  const [response, setResponse] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [searchParams] = useSearchParams();

  const fetchData = React.useCallback(() => {
    setLoading(true);
    setError(null);
    api
      .get("lines/?expense="+searchParams.get('expense')+"&tag="+searchParams.get('tag'))
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { response, error, loading };
};

export default useFetchExpenses;
