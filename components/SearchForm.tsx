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
    <form className="flex w-1/2 flex-col md:flex-row gap-2 mb-6">
      <select
        className="p-5 rounded border slct"
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
        className="p-4 mt-5 rounded border flex-1 inpt"
        type="text"
        placeholder="Search Pokemon"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </form>
  );
} 