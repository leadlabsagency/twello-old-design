
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  placeholder?: string;
  buttonText?: string;
  className?: string;
  onSearch?: (query: string, results?: any[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Search software, categories...", 
  buttonText = "Search",
  className = "",
  onSearch
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);

    try {
      if (onSearch) {
        onSearch(searchQuery, []);
      } else {
        navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      }
    } catch (error: any) {
      console.error('Search error:', error);
      toast({
        title: "Search failed",
        description: "Failed to perform search. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-3xl">
      {/* Main Search Bar */}
      <form onSubmit={handleSearch} className={`flex items-center bg-white rounded-xl shadow-md p-2 space-x-2 w-full ${className}`}>
        <input
          type="text"
          placeholder={placeholder}
          className="flex-grow px-4 py-4 rounded-lg border border-gray-200 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          disabled={isSearching}
        />

        <button
          type="submit"
          className="bg-black text-white font-semibold px-6 py-4 rounded-lg hover:bg-gray-800 transition"
          disabled={isSearching}
        >
          {isSearching ? "Searching..." : buttonText}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
