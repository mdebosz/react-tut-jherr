import { useEffect } from "react";
import "./App.css";
import { PokemonInfo } from "./components/PokemonInfo";
import { PokemonFilter } from "./components/PokemonFilter";
import { PokemonTable } from "./components/PokemonTable";
import { Pokemon } from "./Pokemon";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

export type PokemonState = {
  filter: string;
  pokemon: Pokemon[];
  selectedItem: Pokemon | null;
};

const initialState: PokemonState = {
  filter: "",
  pokemon: [],
  selectedItem: null,
};

export const pokemonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "setPokemon":
      return { ...state, pokemon: action.payload };
    case "setSelectedItem":
      return { ...state, selectedItem: action.payload };
    case "setFilter":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: pokemonReducer,
});

function App() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state: PokemonState) => state.pokemon);

  useEffect(() => {
    fetch("http://localhost:5173/pokemon.json").then((response) => {
      response.json().then((pokemon) => {
        dispatch({ type: "setPokemon", payload: pokemon });
      });
    });
  }, []);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[800px] pt-4 m-auto grid grid-cols-4 gap-2">
      <div className="col-span-3">
        <h1 className="text-center">Pokemon Search</h1>
        <PokemonFilter />
        <PokemonTable />
      </div>
      <div className="col-span-1">{<PokemonInfo />}</div>
    </div>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
