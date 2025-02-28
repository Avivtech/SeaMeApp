
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface FilterItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  showDropdownIndicator?: boolean;
}

const FilterItem: React.FC<FilterItemProps> = ({
  icon,
  label,
  isActive = false,
  onClick,
  className,
  showDropdownIndicator = false
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "filter-item flex flex-col items-center justify-center gap-2 p-4 rounded-xl transition-all duration-200",
        isActive 
          ? "filter-item-active bg-primary/20 border border-white shadow-sm" 
          : "hover:bg-gray-100",
        className
      )}
      aria-pressed={isActive}
    >
      <div className={cn(
        "w-6 h-6 flex items-center justify-center",
        isActive ? "text-white" : "text-gray-600"
      )}>
        {icon}
      </div>
      <div className="flex items-center gap-1">
        <span className={cn(
          "text-sm font-medium",
          isActive ? "text-white" : "text-gray-700"
        )}>
          {label}
        </span>
        {showDropdownIndicator && (
          <ChevronDown className={cn(
            "h-3 w-3 transition-transform",
            isActive ? "text-white rotate-180" : "text-gray-500"
          )} />
        )}
      </div>
      {isActive && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"></div>
      )}
    </button>
  );
};

export default FilterItem;
