
import React, { useState } from 'react';
import { FilterCategory } from '@/types/beaches';
import { Button } from '@/components/ui/button';
import FilterItem from './FilterItem';
import { X, Check } from 'lucide-react';

interface FilterPanelProps {
  title: string;
  categories: FilterCategory[];
  onFilterChange: (categoryId: string, optionId: string) => void;
  onReset: () => void;
  onApply: () => void;
  className?: string;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  title,
  categories,
  onFilterChange,
  onReset,
  onApply,
  className
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const currentCategory = categories.find(cat => cat.id === activeCategory);
  
  // Count total active filters
  const activeFiltersCount = categories.reduce(
    (count, category) => count + category.options.filter(option => option.isActive).length, 
    0
  );

  return (
    <div className={`bg-white rounded-3xl shadow-sm border border-gray-200 p-6 relative ${className}`}>
      {activeFiltersCount > 0 && (
        <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
          {activeFiltersCount} פעיל
        </div>
      )}
      
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {categories.map((category) => {
          // Count active filters in this category
          const activeCategoryFilters = category.options.filter(option => option.isActive).length;
          
          return (
            <FilterItem
              key={category.id}
              icon={category.icon}
              label={category.title}
              isActive={activeCategory === category.id || activeCategoryFilters > 0}
              onClick={() => handleCategoryClick(category.id)}
              className="relative"
            />
          );
        })}
      </div>
      
      {currentCategory && (
        <div className="mt-6 fade-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">{currentCategory.title}</h3>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 text-gray-500"
              onClick={() => setActiveCategory(null)}
            >
              <X className="h-4 w-4 mr-1" />
              סגור
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {currentCategory.options.map((option) => (
              <div
                key={option.id}
                className={`
                  border rounded-lg p-3 cursor-pointer transition-all relative
                  ${option.isActive 
                    ? 'bg-primary/10 border-primary shadow-sm' 
                    : 'border-gray-200 hover:border-gray-300'}
                `}
                onClick={() => onFilterChange(currentCategory.id, option.id)}
              >
                <div className="flex items-center">
                  <div
                    className={`w-4 h-4 rounded-full mr-2 border ${
                      option.isActive ? 'bg-primary border-primary' : 'border-gray-300'
                    }`}
                  >
                    {option.isActive && (
                      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span className={`text-sm ${option.isActive ? 'font-medium text-primary' : ''}`}>
                    {option.label}
                  </span>
                </div>
                
                {option.isActive && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-4 mt-8">
        <Button
          variant="outline"
          onClick={onReset}
          className="w-full"
          disabled={activeFiltersCount === 0}
        >
          {activeFiltersCount > 0 ? (
            <>
              <X className="h-4 w-4 ml-1" />
              ניקוי ({activeFiltersCount})
            </>
          ) : 'ניקוי'}
        </Button>
        <Button
          onClick={onApply}
          className={`w-full ${activeFiltersCount > 0 ? 'bg-primary hover:bg-primary/90' : ''}`}
        >
          {activeFiltersCount > 0 ? (
            <>
              <Check className="h-4 w-4 ml-1" />
              החל סינון ({activeFiltersCount})
            </>
          ) : 'חיפוש'}
        </Button>
      </div>
    </div>
  );
};

export default FilterPanel;
