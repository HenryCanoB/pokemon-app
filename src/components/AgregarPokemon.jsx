/* eslint-disable react/prop-types */

import { useState } from "react";

export const AgregarPokemon = ({ onNuevoPokemon }) => {
  const [valorInput, setValorInput] = useState("pikachu");

  return (
    <>
      <form
        onSubmit={(e) => {
            e.preventDefault();
          if (valorInput.trim().length <= 1) return;
          onNuevoPokemon(valorInput.trim().toLowerCase());
          setValorInput("");
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Buscar Pokemon"
          value={valorInput}
          onChange={(e) => setValorInput(e.target.value)}
        ></input>
      </form>
    </>
  );
};
