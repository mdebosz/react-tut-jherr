import { useContext } from "react";
import { Pokemon } from "../Pokemon";
import { PokemonContext } from "../PokemonContext";
import { PokemonRow } from "./PokemonRow";

export const PokemonTable = () => {
  const { pokemon, filter, setSelectedItem } = useContext(PokemonContext);

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Type</th>
          <th className="border px-4 py-2">Select</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter(({ name }) =>
            name.english.toLowerCase().includes(filter.toLowerCase())
          )
          .slice(0, 10)
          .map((pokemon) => (
            <PokemonRow
              key={pokemon.name.english}
              pokemon={pokemon}
              onSelect={(pokemon: Pokemon) => setSelectedItem(pokemon)}
            />
          ))}
      </tbody>
    </table>
  );
};
