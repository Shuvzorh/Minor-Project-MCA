import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({
  value,
  onChange,
  placeholder = 'Search by food type, location, provider...',
  className = ''
}) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <Search className="absolute left-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white pl-10 pr-10 py-2.5 rounded-xl border border-stone-200 text-sm text-surface-dark placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all shadow-soft-sm"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-3 p-1 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
