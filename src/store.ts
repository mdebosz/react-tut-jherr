import { computed, makeObservable, observable } from "mobx";
import { Pokemon } from "./Pokemon";


class Store {
  filter: string = "";
  pokemon: Pokemon[] = [];
  selectedItem: Pokemon | null = null;

  constructor() {
    makeObservable(this, {
      filter: observable,
      pokemon: observable,
      selectedItem: observable,
      filteredPokemon: computed,
    });
  }

  get filteredPokemon() {
    return this.pokemon.filter(({name: {english}}) => {
      return english.toLowerCase().includes(this.filter.toLowerCase());
    });
  }

  setFilter(filter: string) {
    this.filter = filter;
  }
  setPokemon(pokemon: Pokemon[]) {
    this.pokemon = pokemon;
  }
  setSelectedItem(selectedItem: Pokemon | null) {
    this.selectedItem = selectedItem;
  }
}

const store = new Store();

fetch("http://localhost:5173/pokemon.json").then((response) => {
      response.json().then((pokemon) => {
        store.setPokemon(pokemon);
      });
    });

export default store;
