import { createContext } from "react";
import { Pokemon } from "./Pokemon";

export const PokemonContext = createContext<{
  filter: string;
  pokemon: Pokemon[];
  selectedItem: Pokemon | null;
  setFilter: (filter: string) => void;
  setPokemon: (pokemon: Pokemon[]) => void;
  setSelectedItem: (item: Pokemon | null) => void;
}>({
  filter: "",
  pokemon: [],
  selectedItem: null,
  setFilter: () => {},
  setPokemon: () => {},
  setSelectedItem: () => {},
});
