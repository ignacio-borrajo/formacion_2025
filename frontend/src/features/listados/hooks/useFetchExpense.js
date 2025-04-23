import React from "react";
import api from "../../../api/api";

const useFetchExpenses = () => {
  const [response, setResponse] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const fetchData = React.useCallback(() => {
    setLoading(true);
    setError(null);

    api.get("gastos/")
        .then(response => {
          setResponse(response.data);
    }).catch((error) => {
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