import { useContext } from "react";
import { PokemonContext } from "../PokemonContext";

export const PokemonFilter = () => {
  const { filter, setFilter } = useContext(PokemonContext);
  return (
    <input
      className="text-lg p-1 w-full"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};
