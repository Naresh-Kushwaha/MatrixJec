import React from 'react';

function ResearchPaperList({ papers }) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-2">Research Papers</h3>
      <ul className="space-y-2">
        {papers.map((paper, index) => (
          <li key={index} className="border-l-4 border-blue-500 pl-2 text-sm">
            <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              {paper.title} ({paper.year}) - <i>{paper.journal}</i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResearchPaperList;
