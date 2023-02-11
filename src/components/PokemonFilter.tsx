import { useDispatch, useSelector } from "react-redux";
import { PokemonState } from "../App";

export const PokemonFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: PokemonState) => state.filter);

  return (
    <input
      className="text-lg p-1 w-full"
      value={filter}
      onChange={(e) => dispatch({ type: "setFilter", payload: e.target.value })}
    />
  );
};
