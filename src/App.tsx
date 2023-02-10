import { useEffect, useReducer } from "react";
import "./App.css";
import { PokemonInfo } from "./components/PokemonInfo";
import { PokemonFilter } from "./components/PokemonFilter";
import { PokemonTable } from "./components/PokemonTable";
import { PokemonContext } from "./PokemonContext";

export const pokemonReducer = (state: any, action: any) => {
  switch (action.type) {
    case "setPokemon":
      return { ...state, pokemon: action.payload };
    case "setSelectedItem":
      return { ...state, selectedItem: action.payload };
    case "setFilter":
      return { ...state, filter: action.payload };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(pokemonReducer, {
    filter: "",
    pokemon: [],
    selectedItem: null,
  });

  useEffect(() => {
    fetch("http://localhost:5173/pokemon.json").then((response) => {
      response.json().then((pokemon) => {
        dispatch({ type: "setPokemon", payload: pokemon });
      });
    });
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className="w-[800px] pt-4 m-auto grid grid-cols-4 gap-2">
        <div className="col-span-3">
          <h1 className="text-center">Pokemon Search</h1>
          <PokemonFilter />
          <PokemonTable />
        </div>
        <div className="col-span-1">{<PokemonInfo />}</div>
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
