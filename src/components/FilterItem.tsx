
import React from 'react';
import { cn } from '@/lib/utils';

interface FilterItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

const FilterItem: React.FC<FilterItemProps> = ({
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
        isActive 
          ? "filter-item-active bg-primary/20 border border-primary shadow-sm" 
          : "hover:bg-gray-100",
        className
      )}
      aria-pressed={isActive}
    >
      <div className={cn(
        "w-6 h-6 flex items-center justify-center",
        isActive ? "text-primary" : "text-gray-600"
      )}>
        {icon}
      </div>
      <span className={cn(
        "text-sm font-medium",
        isActive ? "text-primary" : "text-gray-700"
      )}>
        {label}
      </span>
      {isActive && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></div>
      )}
    </button>
  );
};

export default FilterItem;
