import { observer } from "mobx-react";
import store from "../store";

export const PokemonInfo = observer(() => {
  return store.selectedItem ? (
    <div className="mt-4">
      <h2 className="text-center">{store.selectedItem.name.english}</h2>
      <table className="table-auto w-full">
        {Object.entries(store.selectedItem.base).map(([key, value]) => (
          <tr key={key}>
            <td className="border px-4 py-2">{key}</td>
            <td className="border px-4 py-2">{value}</td>
          </tr>
        ))}
      </table>
    </div>
  ) : null;
});
