import { observer } from "mobx-react";
import { Pokemon } from "../Pokemon";
import store from "../store";
import { PokemonRow } from "./PokemonRow";

export const PokemonTable = observer(() => {
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
        {store.filteredPokemon.slice(0, 10).map((pokemon) => (
          <PokemonRow
            key={pokemon.name.english}
            pokemon={pokemon}
            onSelect={(pokemon: Pokemon) => store.setSelectedItem(pokemon)}
          />
        ))}
      </tbody>
    </table>
  );
});
