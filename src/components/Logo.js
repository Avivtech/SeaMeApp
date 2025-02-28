
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Logo = ({ size = 'md', className }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <Link 
      to="/" 
      className={cn(
        "flex items-center gap-2 logo-container",
        className
      )}
      aria-label="SeaMe Home"
    >
      <div className={cn(
        "bg-primary rounded-md p-1 seashell-logo flex items-center justify-center",
        sizeClasses[size]
      )}>
        <svg 
          className="w-full h-full fill-white" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.5,9.5c-1.5,0-1.5-0.5-3-0.5s-1.5,0.5-3,0.5s-1.5-0.5-3-0.5s-1.5,0.5-3,0.5s-1.5-0.5-3-0.5s-1.5,0.5-3,0.5v2c1.5,0,1.5-0.5,3-0.5
          s1.5,0.5,3,0.5s1.5-0.5,3-0.5s1.5,0.5,3,0.5s1.5-0.5,3-0.5s1.5,0.5,3,0.5V9.5z"/>
          <path d="M3,14.5c1.5,0,1.5-0.5,3-0.5s1.5,0.5,3,0.5s1.5-0.5,3-0.5s1.5,0.5,3,0.5s1.5-0.5,3-0.5v-2c-1.5,0-1.5,0.5-3,0.5s-1.5-0.5-3-0.5
          s-1.5,0.5-3,0.5s-1.5-0.5-3-0.5s-1.5,0.5-3,0.5V14.5z"/>
          <path d="M21.5,17c-1.5,0-1.5-0.5-3-0.5S17,17,15.5,17s-1.5-0.5-3-0.5S11,17,9.5,17S8,16.5,6.5,16.5S5,17,3.5,17v2
          c1.5,0,1.5-0.5,3-0.5s1.5,0.5,3,0.5s1.5-0.5,3-0.5s1.5,0.5,3,0.5s1.5-0.5,3-0.5s1.5,0.5,3,0.5V17z"/>
          <path d="M21,3H3C1.9,3,1,3.9,1,5v14c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V5C23,3.9,22.1,3,21,3z M21,19H3V5h18V19z"/>
          <path d="M21,5H3v14h18V5z M15.5,7c1.38,0,1.5,0.5,3,0.5v1c-1.38,0-1.5-0.5-3-0.5s-1.62,0.5-3,0.5S11,8,9.5,8S7.88,8.5,6.5,8.5
          S5,8,3.5,8V7c1.38,0,1.5,0.5,3,0.5S8.12,7,9.5,7s1.62,0.5,3,0.5S14.12,7,15.5,7z"/>
        </svg>
      </div>
      <div className={cn(
        "font-semibold text-primary tracking-tight",
        textSizeClasses[size]
      )}>
        <span>sea</span>
        <span className="font-bold">me</span>
      </div>
    </Link>
  );
};

export default Logo;
