import React from "react";
import Fotos from "../fotos/Fotos";
import Foto from "../fotos/Foto";
import GaleriaFotos from "../fotos/GaleriaFotos";

import fotos from "./fotos.json";

export default {
  title: "Fotos"
};

const urlInvalida = "http://www.xxx.cl/shjksdhfk";
const foto = fotos[0];

export const networkError = () => <Fotos url={urlInvalida} />;
export const urlPorDefecto = () => <Fotos />;
export const conUnaFoto = () => <GaleriaFotos fotos={fotos} />;
export const fotoSola = () => <Foto {...foto} />;
