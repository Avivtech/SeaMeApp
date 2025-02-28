
import React from 'react';
import { cn } from '@/lib/utils';

const FilterItem = ({
  icon,
  label,
  isActive = false,
  onClick,
  className
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "filter-item flex flex-col items-center justify-center gap-2 p-4 rounded-xl transition-all duration-200",
        isActive ? "filter-item active" : "hover:bg-gray-100",
        className
      )}
      aria-pressed={isActive}
    >
      <div className="text-primary w-6 h-6 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

export default FilterItem;
