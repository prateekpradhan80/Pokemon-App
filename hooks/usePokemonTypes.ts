import { useEffect, useState } from 'react';

export default function usePokemonTypes() {
  const [types, setTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    fetch('https://pokeapi.co/api/v2/type')
      .then(res => res.json())
      .then(data => {
        setTypes(data.results.map((t: any) => t.name));
        setLoading(false);
      });
  }, [mounted]);

  return { types, loading: loading || !mounted };
} 