
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-sm opacity-80 max-w-xs">
              SeaMe - שירות המספק מידע נגיש על חופי ישראל, מיועד לסייע לאנשים עם מוגבלויות למצוא חופים המתאימים לצרכיהם
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-2">קישורים</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  ראשי
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  אודות הפרויקט
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  יצירת קשר
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  רשימת חופים מלאה
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-2">צור קשר</h3>
            <address className="not-italic text-sm opacity-80">
              <p>דוא"ל: contact@seame.co.il</p>
              <p>טלפון: 03-123-4567</p>
              <p>כל הזכויות שמורות לקבוצת הפרויקט</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-sm opacity-70 text-center">
          <p>© {new Date().getFullYear()} SeaMe. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
