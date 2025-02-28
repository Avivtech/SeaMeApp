
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import FilterItem from './FilterItem';
import { X } from 'lucide-react';

const FilterPanel = ({
  title,
  categories,
  onFilterChange,
  onReset,
  onApply,
  className
}) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const currentCategory = categories.find(cat => cat.id === activeCategory);

  return (
    <div className={`bg-white rounded-3xl shadow-sm border border-gray-200 p-6 ${className}`}>
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {categories.map((category) => (
          <FilterItem
            key={category.id}
            icon={category.icon}
            label={category.title}
            isActive={activeCategory === category.id}
            onClick={() => handleCategoryClick(category.id)}
          />
        ))}
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
                  border rounded-lg p-3 cursor-pointer transition-all
                  ${option.isActive ? 'bg-primary/10 border-primary' : 'border-gray-200 hover:border-gray-300'}
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
                  <span className="text-sm">{option.label}</span>
                </div>
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
        >
          ניקוי
        </Button>
        <Button
          onClick={onApply}
          className="w-full"
        >
          חיפוש
        </Button>
      </div>
    </div>
  );
};

export default FilterPanel;
