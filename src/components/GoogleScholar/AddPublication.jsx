import React, { useState } from 'react';
import axios from 'axios';
import Header2 from '../Header2';
import { useNavigate } from 'react-router-dom';

const AddPublication = () => {
    const navigate = useNavigate();
  const [publication, setPublication] = useState({
    title: '',
    authors: '',
    journal: '',
    year: '',
    volume: '',
    issue: '',
    pages: '',
    doi: '',
    publisher: '',
    publicationType: '',
    abstract: '',
    keywords: '',
    citationCount: '',
    url: '',
    peerReviewStatus: '',
    awards: ''
  });
 
  const navigation = [
    { name: 'Dashboard', href:'/facultyProfile', current: false},
    { name: 'See-Publication', href: '/seepublication', current: false },
    
    

  ]

  const handleChange = (e) => {
    setPublication({
      ...publication,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/publications', publication);
      alert('Publication submitted successfully!');
      navigate('/seepublication')
      
    } catch (error) {
      console.error('There was an error submitting the publication:', error);
    }
  };

  return (
    <div>
       <div className=''><Header2 navigation={navigation}></Header2></div>
       <div  className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">

      
      <h2 className="text-xl font-semibold mb-4">Add New Publication</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
          required
            type="text"
            name="title"
            value={publication.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Authors</label>
          <input required
            type="text"
            name="authors"
            value={publication.authors}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Other Fields */}
        <div className="mb-4">
          <label className="block text-gray-700">Journal/Conference Name</label>
          <input required
            type="text"
            name="journal"
            value={publication.journal}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        

        <div className="mb-4">
          <label className="block text-gray-700">Publication Year</label>
          <input required
            type="number"
            name="year"
            value={publication.year}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Volume </label>
          <input  required
            type="text"
            name="volume"
            value={publication.volume}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Issue</label>
          <input  required
            type="text"
            name="issue"
            value={publication.issue}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Pages</label>
          <input  required
            type="text"
            name="pages"
            value={publication.pages}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">DOI</label>
          <input  required
            type="text"
            name="doi"
            value={publication.doi}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Publisher</label>
          <input  required
            type="text"
            name="publisher"
            value={publication.publisher}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Publication Type</label>
          <input  required
            type="text"
            name="publicationType"
            value={publication.publicationType}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Abstract</label>
          <input  required
            type="text"
            name="abstract"
            value={publication.abstract}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Keywords</label>
          <input  required
            type="text"
            name="keywords"
            value={publication.keywords}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Citation Count</label>
          <input  required
            type="text"
            name="citationCount"
            value={publication.citationCount}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">URL</label>
          <input  required
            type="url"
            name="url"
            value={publication.url}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Peer Review Status</label>
          <input  required
            type="text"
            name="peerReviewStatus"
            value={publication.peerReviewStatus}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">awards</label>
          <input required 
            type="text"
            name="awards"
            value={publication.awards}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>


        
        <div className="mb-4">
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">
            Submit Publication
          </button>
        </div>
      </form>
    </div> </div>
  );
};

export default AddPublication;
