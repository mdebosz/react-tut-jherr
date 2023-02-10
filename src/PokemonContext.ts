import { createContext } from "react";
import { Pokemon } from "./Pokemon";

export const PokemonContext = createContext<{
  state: {
    filter: string;
    pokemon: Pokemon[];
    selectedItem: Pokemon | null;
  },
  dispatch: React.Dispatch<
    | { type: "setFilter", payload: string }
    | { type: "setPokemon", payload: Pokemon[] }
    | { type: "setSelectedItem", payload: Pokemon | null }
  >;
}>({
  state: {
    filter: "",
    pokemon: [],
    selectedItem: null,
  },
  dispatch: () => {},
});
