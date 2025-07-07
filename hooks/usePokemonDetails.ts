export default async function usePokemonDetails(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) return null;
  return res.json();
} 