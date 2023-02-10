import { useContext } from "react";
import { PokemonContext } from "../PokemonContext";

export const PokemonFilter = () => {
  const {
    state: { filter },
    dispatch,
  } = useContext(PokemonContext);
  return (
    <input
      className="text-lg p-1 w-full"
      value={filter}
      onChange={(e) => dispatch({ type: "setFilter", payload: e.target.value })}
    />
  );
};
