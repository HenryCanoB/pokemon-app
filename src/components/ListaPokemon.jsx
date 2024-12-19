/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";

import { obtenerPokemon } from "../helpers/obtenerPokemon";

export const ListaPokemon = ({ pokemon }) => {
  const [imagenes, setImagenes] = useState([]);

  const obtenerImagenes = async () => {
    const nuevaImagen = await obtenerPokemon(pokemon);
    setImagenes(nuevaImagen);
  };

  useEffect(() => {
    obtenerImagenes();
  }, []);

  return (
    <>
      <div className="col-md-4">
        <h3>{pokemon}</h3>
        <div className="card" key={imagenes.id}>
          <img className="img-card-top" src={imagenes.imgSrc}></img>
          <div className="card-body">
            <h5 className="card-title">Tipo : {imagenes.type}</h5>
            <ul>
              <li>Ataque: {imagenes.attack}</li>
              <li>Defensa: {imagenes.defense}</li>
              <li>HP: {imagenes.defense}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
