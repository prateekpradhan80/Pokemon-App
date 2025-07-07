import React from 'react';

export default function SearchForm({
  types,
  loading,
  type,
  setType,
  search,
  setSearch,
}: {
  types: string[];
  loading: boolean;
  type: string;
  setType: (t: string) => void;
  search: string;
  setSearch: (s: string) => void;
}) {
  return (
    <form className="flex flex-col md:flex-row gap-2 mb-6">
      <select
        className="p-2 rounded border"
        value={type}
        onChange={e => setType(e.target.value)}
        disabled={loading}
      >
        <option value="">All Types</option>
        {types.map(t => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <input
        className="p-2 rounded border flex-1"
        type="text"
        placeholder="Search Pokémon"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </form>
  );
} 