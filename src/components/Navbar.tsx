
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Cloud, X, List } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Cloud className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Cloud Symphony</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 text-gray-500 dark:text-gray-400">
            <span className="text-sm">Version: 1.1</span>
            <span className="text-sm font-bold text-base">By AmenFlux</span>
          </div>
          
          <div className="-mr-2 flex items-center sm:hidden">
            <Button 
              variant="ghost" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <List className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Cloud className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            <div className="px-4 py-2 text-sm text-gray-500">
              Version: 1.1 <br />
              <span className="font-bold text-base">By AmenFlux</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
