import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchControlsProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  agencyFilter: string;
  setAgencyFilter: (agency: string) => void;
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
}

const AGENCIES = ['All', 'NASA', 'ESA', 'SpaceX', 'JAXA', 'ISRO', 'CNSA', 'Roscosmos', 'CSA'];
const CATEGORIES = ['All', 'Mission', 'Satellite', 'Probe'];

const SearchControls: React.FC<SearchControlsProps> = ({
  searchTerm,
  setSearchTerm,
  agencyFilter,
  setAgencyFilter,
  categoryFilter,
  setCategoryFilter,
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
      
      {/* Text Search */}
      <div className="relative w-full md:w-1/3">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
          placeholder="Search updates, missions, satellites..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="flex w-full md:w-auto gap-4">
        
        {/* Agency Filter */}
        <div className="relative w-1/2 md:w-48">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter className="h-4 w-4 text-gray-400" />
          </div>
          <select
            value={agencyFilter}
            onChange={(e) => setAgencyFilter(e.target.value)}
            className="block w-full pl-10 pr-8 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg bg-gray-50 appearance-none cursor-pointer"
          >
            {AGENCIES.map((agency) => (
              <option key={agency} value={agency}>
                {agency === 'All' ? 'All Agencies' : agency}
              </option>
            ))}
          </select>
          {/* Custom Arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>

        {/* Category Filter */}
        <div className="relative w-1/2 md:w-48">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter className="h-4 w-4 text-gray-400" />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="block w-full pl-10 pr-8 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg bg-gray-50 appearance-none cursor-pointer"
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category === 'All' ? 'All Categories' : category}
              </option>
            ))}
          </select>
           {/* Custom Arrow */}
           <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SearchControls;
