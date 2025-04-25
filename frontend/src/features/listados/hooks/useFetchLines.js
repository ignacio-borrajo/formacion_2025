import React from "react";
import api from "../../../api/api";

const useFetchLines = (expenseId) => {
  const [allLines, setAllLines] = React.useState([]);
  const [filteredLines, setFilteredLines] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

 
  React.useEffect(() => {
    if (expenseId) {
      setLoading(true);
      setError(null);

      api
        .get(`/lines/${expenseId}/`)
        .then((response) => {
          setAllLines(response.data); 
          setFilteredLines(response.data);
        })
        .catch((error) => {
          console.error("Error fetching lines:", error);
          setError(error.response?.data?.message || "Error al cargar las líneas");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [expenseId]);

  
  const filterLines = (labelIds) => {
    if (labelIds.length === 0) {
      setFilteredLines(allLines); 
    } else {
      const filtered = allLines.filter((line) =>
        line.labels.some((label) => labelIds.includes(label.id))
      );
      setFilteredLines(filtered);
    }
  };

  return {  allLines, filteredLines, filterLines, error, loading };
};

export default useFetchLines;