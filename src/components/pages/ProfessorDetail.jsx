import React from 'react';
import { useParams, Link } from 'react-router-dom';
import professors from '../Professors/data/professors.json';
import { FaArrowLeft } from 'react-icons/fa';

const ProfessorDetail = () => {
  const { id } = useParams();
  const professor = professors.find((prof) => prof.id.toString() === id);

  if (!professor) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600">Professor not found</h2>
        <Link to="/research" className="text-blue-500 underline mt-4 inline-block">
          <FaArrowLeft className="inline-block mr-2" />
          Back to Research
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/research" className="text-blue-600 flex items-center mb-4 hover:underline">
        <FaArrowLeft className="mr-2" /> Back to Research
      </Link>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={professor.photo}
            alt={professor.name}
            className="w-40 h-40 rounded-lg object-cover shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-1">{professor.name}</h2>
            <p className="text-gray-600 mb-1">{professor.department}</p>
            <p className="text-sm text-gray-500 mb-2">{professor.email}</p>
            <p className="mb-4">{professor.bio}</p>

            {professor.education && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Education</h3>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {professor.education.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </div>
            )}

            {professor.awards && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Awards & Recognitions</h3>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {professor.awards.map((award, index) => (
                    <li key={index}>{award}</li>
                  ))}
                </ul>
              </div>
            )}

            {professor.socials && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Social Links</h3>
                <ul className="flex gap-4 mt-2">
                  {professor.socials.map((social, index) => (
                    <li key={index}>
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {social.platform}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Research Papers</h3>
          {professor.researchPapers && professor.researchPapers.length > 0 ? (
            <ul className="list-disc list-inside text-gray-700">
              {professor.researchPapers.map((paper, index) => (
                <li key={index}>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {paper.title}
                  </a>{" "}
                  - <span className="text-sm">{paper.journal}, {paper.year}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No research papers available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessorDetail;
