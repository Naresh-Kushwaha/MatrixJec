import React, { useState, useEffect } from 'react';
import data from '../Professors/data/professors.json';
import ResearchProfessorCard from '../Professors/ProfessorCard';
import ResearchSearchBar from '../Professors/SearchBar';
import { filterProfessors } from '../../utils/filterUtils';

function Research() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const result = filterProfessors(data, searchTerm);
    setFilteredData(result);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-8">Research Profiles</h1>

      {/* Centered SearchBar */}
      <div className="flex justify-center mb-6">
        <ResearchSearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      {/* Professor Cards Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredData.map((prof) => (
          <ResearchProfessorCard key={prof.id} professor={prof} />
        ))}
      </div>
    </div>
  );
}

export default Research;
