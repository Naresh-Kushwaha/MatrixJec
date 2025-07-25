import React from 'react';
import { Link } from 'react-router-dom';

function ResearchProfessorCard({ professor }) {
  return (
    <Link to={`/professors/${professor.id}`} className="block">
      <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
        <img
          src={professor.photo}
          alt={professor.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold">{professor.name}</h2>
        <p className="text-sm text-gray-600">{professor.department}</p>
        <p className="text-sm text-gray-500">{professor.email}</p>
        <p className="mt-2 text-gray-700">{professor.bio}</p>
      </div>
    </Link>
  );
}

export default ResearchProfessorCard;
