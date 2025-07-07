import { useEffect, useState } from 'react';

export default function usePokemonTypes() {
  const [types, setTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then(res => res.json())
      .then(data => {
        setTypes(data.results.map((t: any) => t.name));
        setLoading(false);
      });
  }, []);

  return { types, loading };
} 