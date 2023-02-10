import { useContext } from "react";
import { PokemonContext } from "../PokemonContext";

export const PokemonInfo = () => {
  const { selectedItem } = useContext(PokemonContext);

  return selectedItem ? (
    <div className="mt-4">
      <h2 className="text-center">{selectedItem.name.english}</h2>
      <table className="table-auto w-full">
        {Object.entries(selectedItem.base).map(([key, value]) => (
          <tr key={key}>
            <td className="border px-4 py-2">{key}</td>
            <td className="border px-4 py-2">{value}</td>
          </tr>
        ))}
      </table>
    </div>
  ) : null;
};
