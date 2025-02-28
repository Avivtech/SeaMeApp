
import React, { useState } from 'react';
import Logo from './Logo.jsx';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="bg-primary text-white sticky top-0 z-50 w-full shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo className="text-white" />
        <div className="lg:hidden">
          <Button 
            size="icon" 
            variant="ghost" 
            className="text-white hover:bg-primary/20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        <nav className={`lg:flex ${isOpen ? 'block absolute top-full left-0 right-0 bg-primary shadow-lg p-4' : 'hidden'} transition-all duration-300 ease-in-out`}>
          <ul className="flex flex-col lg:flex-row gap-6 items-center">
            <li>
              <Link 
                to="/" 
                className="text-white hover:text-blue-100 transition-colors py-2 block"
                onClick={() => setIsOpen(false)}
              >
                ראשי
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-white hover:text-blue-100 transition-colors py-2 block"
                onClick={() => setIsOpen(false)}
              >
                אודות
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-white hover:text-blue-100 transition-colors py-2 block"
                onClick={() => setIsOpen(false)}
              >
                צור קשר
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
