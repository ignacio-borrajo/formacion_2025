import React from "react";

const useFetchExpenses = () => {
  const [response, setResponse] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const fetchData = React.useCallback(() => {
    setLoading(true);
    setError(null);

    fetch("http://localhost:8000/api/gastos/")
      .then((response) => response.json())
      .then((data) => {
        setResponse(data);
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
