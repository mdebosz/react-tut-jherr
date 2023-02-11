import { create } from "zustand";
import { Pokemon } from "./Pokemon";

export type PokemonState = {
  filter: string;
  pokemon: Pokemon[];
  selectedItem: Pokemon | null;
  setPokemon: (pokemon: Pokemon[]) => void;
  setFilter: (filter: string) => void;
  setSelectedItem: (selectedItem: Pokemon | null) => void;
};

const useStore = create<PokemonState>(set => ({
  filter: "",
  pokemon: [],
  selectedItem: null,
  setFilter: (filter: string) => set((state: PokemonState) => ({
    ...state,
    filter,
  })),
  setPokemon: (pokemon: Pokemon[]) => set((state: PokemonState) => ({
    ...state,
    pokemon,
  })),
  setSelectedItem: (selectedItem: Pokemon | null) => set((state: PokemonState) => ({
    ...state,
    selectedItem,
    })),
}))

export default useStore;
