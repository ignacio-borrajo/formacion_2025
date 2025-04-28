import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Line from "../components/Line";
import LineList from "../components/LineList";
import useFetchLines from "../hooks/useFetchLines";

const Lines = () => {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const { response, error, loading } = useFetchLines(id, searchTerm);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <h1>LINEAS DEL GASTO</h1>
      <LineList onSearch={handleSearch} searchTerm={searchTerm} />
      {loading && <p>Cargando...</p>}
      {error && <p>Hubo un error al cargar las líneas</p>}
      <div>
        {response?.map((line) => (
          <Line key={line.id} dato={line} />
        ))}
      </div>
    </>
  );
};

export default Lines;
