import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './FeedbackForm.css';
import Header2 from '../Header2';

const Feedback = () => {
  const [formData, setFormData] = useState({
    institutionName: '',
    teacherName: '',
    courseType: '',
    subjectName: '',
    semester: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
  };

  const performanceMeasures = [
    {
      title: "1. Lecture (Theory)",
      criteria: ["Clarity", "Orderly Sequence", "Adequacy of Examples"]
    },
    {
      title: "2. Text Books",
      criteria: ["Suitability", "Name of the Reference Book"]
    },
    {
      title: "3. Practical Classes",
      criteria: ["Relevant Practical", "Effectiveness", "No. of Practical Conducted"]
    },
    {
      title: "4. Projects/Assignments, If Any",
      criteria: ["Relevance", "Effectiveness"]
    },
    {
      title: "5. The Instruction",
      criteria: ["Preparation", "Enthusiasm", "Concern for Students", "Enforcing Discipline", "Adherence to Schedule"]
    },
    {
      title: "6. Evaluation",
      criteria: ["Relevance to Coverage", "Enthusiasm", "Concern for Student"]
    },
    {
      title: "7. The Course As A Whole",
      criteria: ["Achieving Objectives", "Interest Evoked", "Overall Rating"]
    }
  ];

  const ratings = ['Poor', 'Fair', 'Average', 'Good', 'Excellent'];

  const renderPerformanceMeasure = () => {
    return performanceMeasures.map((measure, index) => (
      <motion.div
        key={index}
        className="measure-item"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <h3>{measure.title}</h3>
        {measure.criteria.map((criterion, criterionIndex) => (
          <div key={criterionIndex} className="sub-measure">
            <p>{criterion}</p>
            <div className="rating">
              {ratings.map((rating, ratingIndex) => (
                <motion.label
                  key={ratingIndex}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <input 
                    type="radio" 
                    name={`${measure.title}-${criterion}`} 
                    value={rating} 
                  />
                  {rating}
                </motion.label>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    ));
  };

  return (
    <motion.div 
      className="feedback-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className='mainheading'>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <input
            type="text"
            name="institutionName"
            value={formData.institutionName}
            onChange={handleInputChange}
            placeholder="Institution Name"
            required 
            className='inputs'
          />
        </div>
        <div className="form-section">
          <input
            type="text"
            name="teacherName"
            value={formData.teacherName}
            onChange={handleInputChange}
            placeholder="Teacher Name"
            required
            className='inputs'
          />
        </div>
        <div className="form-section">
          <select
            name="courseType"
            value={formData.courseType}
            onChange={handleInputChange}
            required
            className = 'selection'
          >
            <option value="">Select Course Type</option>
            <option value="Theory">Theory</option>
            <option value="Practical">Practical</option>
            <option value="Project">Project</option>
          </select>
        </div>
        <div className="form-section">
          <input
            type="text"
            name="subjectName"
            value={formData.subjectName}
            onChange={handleInputChange}
            placeholder="Subject Name"
            required
            className='inputs'
          />
        </div>
        <div className="form-section">
          <input
            type="text"
            name="semester"
            value={formData.semester}
            onChange={handleInputChange}
            placeholder="Semester"
            required
            className='inputs'
          />
        </div>
        <h2 className='mainheading2'>Performance Measure</h2>
        {renderPerformanceMeasure()}
        <motion.button
          className="submit-button"
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit Feedback
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Feedback;