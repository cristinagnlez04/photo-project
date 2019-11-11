import React from "react";
import Foto from "../fotos/Foto";

const GaleriaFotos = ({ fotos }) => (
  <div>
    <h1>Fotos</h1>
    <p>
      Hay {fotos.length} {fotos.length === 1 ? "foto" : "fotos"}
    </p>

    <div style={{ display: "flex" }}>
      {fotos.map(foto => (
        <Foto {...foto} />
      ))}
    </div>
  </div>
);

export default GaleriaFotos;
