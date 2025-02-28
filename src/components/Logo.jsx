
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ size = 'md', className }) => {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <Link to="/" className={`font-bold ${sizes[size]} text-primary ${className || ''}`}>
      SeaMe
    </Link>
  );
};

export default Logo;
