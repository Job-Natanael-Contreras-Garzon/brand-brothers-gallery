
import React from 'react';
import { type FilterCategory } from '../data/portfolioData';
import { filterCategories } from '../data/portfolioData';

interface FilterNavProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
}

export const FilterNav: React.FC<FilterNavProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 ">
      {filterCategories.map((category) => (
        <button
          key={category.key}
          onClick={() => onFilterChange(category.key)}
          className={`
            px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 
            border-b-2 hover:text-brand-teal
            ${activeFilter === category.key 
              ? 'text-brand-teal border-brand-teal' 
              : 'text-gray-300 border-transparent hover:border-brand-teal/50'
            }
          `}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};
