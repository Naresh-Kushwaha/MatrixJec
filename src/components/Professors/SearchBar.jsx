import React from 'react';

function ResearchSearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by name, department or bio..."
      value={value}
      onChange={onChange}
      className="w-full max-w-xl px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}

export default ResearchSearchBar;
