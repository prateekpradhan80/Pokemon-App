'use client';

import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import PokemonList from '../components/PokemonList';
import usePokemonTypes from '../hooks/usePokemonTypes';
import usePokemonList from '../hooks/usePokemonList';

export default function HomePage() {
  const [type, setType] = useState('');
  const [search, setSearch] = useState('');
  const { types, loading: typesLoading } = usePokemonTypes();
  const { pokemons, loading: pokemonsLoading } = usePokemonList(type, search);

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Pokemon Search</h1>
      <SearchForm
        types={types}
        loading={typesLoading}
        type={type}
        setType={setType}
        search={search}
        setSearch={setSearch}
      />
      <PokemonList pokemons={pokemons} loading={pokemonsLoading} />
    </main>
  );
} 