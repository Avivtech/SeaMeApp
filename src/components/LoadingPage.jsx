
import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import Logo from './Logo.jsx';

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex flex-col items-center justify-center">
      <Logo size="lg" className="mb-8 animate-bounce" />
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-gray-600">טוען...</p>
    </div>
  );
};

export default LoadingPage;
