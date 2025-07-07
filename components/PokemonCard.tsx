'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function PokemonCard({ pokemon }: { pokemon: any }) {
  const router = useRouter();
  return (
    <div
      className="bg-gradient-to-br from-white to-blue-50  shadow-md p-5 flex flex-col items-center transition-transform  hover:shadow-xl hover:border-blue border-2 border-transparent cursor-pointer"
      onClick={() => router.push(`/pokemon/${pokemon.name}`)}
    >
      <div className="text-xs text-gray-400 mb-1">#{pokemon.id?.toString().padStart(3, '0') || '---'}</div>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-24 h-24 rounded-full bg-white border-2 border-blue-100 mb-2"
      />
      <div className="capitalize font-bold text-lg mb-1">{pokemon.name}</div>
      <div className="flex flex-wrap gap-1 mb-3">
        {pokemon.types?.map((type: string) => (
          <span
            key={type}
            className="bg-blue-200 text-blue-800 text-xs px-2 py-0.5 rounded-full"
          >
            {type}
          </span>
        ))}
      </div>
      <button
        className=" px-4 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition"
        onClick={e => {
          e.stopPropagation();
          router.push(`/pokemon/${pokemon.name}`);
        }}
      >
        Details →
      </button>
    </div>
  );
} 