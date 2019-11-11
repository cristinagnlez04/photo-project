import React from "react";

const Foto = ({ id, alt_description, urls: { regular } }) => (
  <img alt={alt_description} src={regular} />
);

export default Foto;
