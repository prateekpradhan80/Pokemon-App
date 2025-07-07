import React from 'react';
import Link from 'next/link';
import usePokemonDetails from '../../../hooks/usePokemonDetails';

export default async function PokemonDetailPage({ params }: { params: { name: string } }) {
  const { name } = params;
  const details = await usePokemonDetails(name);

  if (!details) {
    return <div className="p-4">Pokémon not found.</div>;
  }

  // Prepare data
  const types = details.types.map((t: any) => t.type.name).join(', ');
  const stats = details.stats.map((s: any) => s.stat.name).join(', ');
  const abilities = details.abilities.map((a: any) => a.ability.name).join(', ');
  const moves = details.moves.slice(0, 5).map((m: any) => m.move.name).join(', ');

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <div className="w-full max-w-2xl">
        <Link href="/" className="text-teal-500 font-bold text-lg mb-6 ml-8 inline-block hover:underline">
          &lt; Back
        </Link>
        <div className="rounded-2xl overflow-hidden shadow-lg mx-auto" style={{ maxWidth: 500 }}>
          <div className="bg-teal-300 flex flex-col items-center justify-center py-8">
            <img
              src={details.sprites.front_default}
              alt={details.name}
              className="w-60 h-60 object-contain"
            />
          </div>
          <div className="bg-amber-200 px-8 py-8 text-lg">
            <div className="mb-2"><span className="font-bold">Name:</span> {details.name.charAt(0).toUpperCase() + details.name.slice(1)}</div>
            <div className="mb-2"><span className="font-bold">Type:</span> {types}</div>
            <div className="mb-2"><span className="font-bold">Stats:</span> {stats}</div>
            <div className="mb-2"><span className="font-bold">Abilities:</span> {abilities}</div>
            <div className="mb-2"><span className="font-bold">Some Moves:</span> {moves}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
