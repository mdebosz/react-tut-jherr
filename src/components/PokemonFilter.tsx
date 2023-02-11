import useStore from "../store";

export const PokemonFilter = () => {
  const setFilter = useStore((state) => state.setFilter);
  const filter = useStore((state) => state.filter);

  return (
    <input
      className="text-lg p-1 w-full"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};
