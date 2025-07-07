import React from 'react';
import PokemonCard from './PokemonCard';

export default function PokemonList({ pokemons, loading }: { pokemons: any[], loading: boolean }) {
  if (loading) return <div className="text-center">Loading...</div>;
  if (!pokemons.length) return <div className="text-center">No Pokémon found.</div>;

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {pokemons.map(pokemon => (
        <div
          key={pokemon.name}
          className=" flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 max-w-[400px] min-w-[280px] h-[420px] "
        >
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
} 