
import React from 'react';
import { cn } from '@/lib/utils';

const LoadingSpinner = ({ className, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={cn(
        "animate-spin rounded-full border-t-transparent border-4 border-primary",
        sizeClasses[size]
      )} />
    </div>
  );
};

export default LoadingSpinner;
