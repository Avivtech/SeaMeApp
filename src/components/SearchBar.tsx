
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  value?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "נתחיל בחיפוש...",
  value = ""
}) => {
  const [query, setQuery] = useState(value);
  
  // Update internal state when value prop changes
  useEffect(() => {
    setQuery(value);
  }, [value]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Immediately pass the current query value to the onSearch callback
    onSearch(query);
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="relative w-full max-w-3xl mx-auto scale-in"
    >
      <div className="relative flex w-full max-w-3xl items-center">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="pr-10 pl-12 py-6 h-14 rounded-full border-2 border-gray-200 focus:border-primary focus:ring-0 text-base transition-all duration-200 ease-in-out shadow-sm"
          dir="rtl"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Search className="h-5 w-5" />
        </div>
        <Button
          type="submit"
          className="absolute left-1 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 flex items-center justify-center bg-primary hover:bg-primary/90 transition-all duration-200"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
