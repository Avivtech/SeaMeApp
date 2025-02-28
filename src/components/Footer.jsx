
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-primary">SeaMe</h2>
            <p className="text-gray-600 mt-2">
              שירות מידע נגיש על חופי ישראל
            </p>
          </div>
          
          <div className="flex gap-6">
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
              אודות
            </Link>
            <Link to="/about-itai" className="text-gray-600 hover:text-primary transition-colors">
              על איתי
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; 2023 SeaMe. כל הזכויות שמורות.</p>
          <p className="mt-1">
            לזכרו של איתי פרי ז"ל
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
