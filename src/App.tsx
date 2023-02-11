import "./App.css";
import { PokemonInfo } from "./components/PokemonInfo";
import { PokemonFilter } from "./components/PokemonFilter";
import { PokemonTable } from "./components/PokemonTable";
import { observer } from "mobx-react";
import store from "./store";

// export const pokemonReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case "setPokemon":
//       return { ...state, pokemon: action.payload };
//     case "setSelectedItem":
//       return { ...state, selectedItem: action.payload };
//     case "setFilter":
//       return { ...state, filter: action.payload };
//     default:
//       return state;
//   }
// };

// const store = configureStore({
//   reducer: pokemonReducer,
// });

function App() {
  if (!store.pokemon) {
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

export default observer(App);
