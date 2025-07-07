import { useEffect, useState } from "react";

export default function usePokemonList(type: string, search: string) {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  // console.log("poke", pokemons);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    setLoading(true);
    let url = "https://pokeapi.co/api/v2/pokemon?limit=151";
    fetch(url)
      .then((res) => res.json())
      .then(async (data) => {
        let list = data.results;
        if (type) {
          const typeRes = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
          const typeData = await typeRes.json();
          list = typeData.pokemon.map((p: any) => p.pokemon);
        }
        if (search) {
          list = list.filter((p: any) =>
            p.name.toLowerCase().includes(search.toLowerCase())
          );
        }
        // Fetch details for type badges and id
        const detailedList = await Promise.all(
          list.slice(0, 30).map(async (p: any) => {
            const res = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${p.name}`
            );
            const details = await res.json();
            return {
              ...p,
              image:
                details.sprites.front_default ||
                `https://img.pokemondb.net/sprites/home/normal/${p.name}.png`,
              id: details.id,
              types: details.types.map((t: any) => t.type.name),
            };
          })
        );
        setPokemons(detailedList);
        setLoading(false);
      });
  }, [type, search, mounted]);

  return { pokemons, loading: loading || !mounted };
}
