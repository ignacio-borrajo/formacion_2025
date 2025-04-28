import React from "react";
import api from "../../../api/api"; // Asegúrate de tener configurado el API de esta forma

const useFetchLines = (expenseId, tags) => {
  const [response, setResponse] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const fetchData = React.useCallback(() => {
    setLoading(true);
    setError(null);

    let url = `gastos/${expenseId}/lineas/`;

    if (tags) {
      url += `?tags=${tags}`;
    }

    api
      .get(url)
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching lines:", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [expenseId, tags]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { response, error, loading };
};

export default useFetchLines;
