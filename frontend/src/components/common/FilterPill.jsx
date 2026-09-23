import React from 'react';

const FilterPill = ({ label, active, onClick, count, icon: Icon }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 select-none cursor-pointer ${
        active
          ? 'bg-brand-500 text-white shadow-sm ring-2 ring-brand-500/20'
          : 'bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200'
      }`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{label}</span>
      {count !== undefined && (
        <span
          className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
            active ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-500'
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
};

export default FilterPill;
