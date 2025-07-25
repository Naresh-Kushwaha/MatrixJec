import React, { useState } from 'react';

const StudentPerformance = () => {
  // Initialize state for table rows
  const [rows, setRows] = useState([]);

  // Function to add a new row
  const addRow = () => {
    const newRow = {
      col1: '',
      col2: '',
      col3: '',
      col4: '',
      col5: '',
      col6: '',
   
     
    };
    // Add new row to the existing rows
    setRows([...rows, newRow]);
  };

  // Function to handle input change
  const handleInputChange = (e, rowIndex, colName) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][colName] = e.target.value;
    setRows(updatedRows);
  };

  // Function to delete a row
  const deleteRow = (rowIndex) => {
    const updatedRows = rows.filter((_, index) => index !== rowIndex);
    setRows(updatedRows);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Performance of Attendance of Students</h1>

      {/* Table */}
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr>
            {/* 9 Table headers */}
            <th className="border border-gray-200 p-2">Semester</th>
            <th className="border border-gray-200 p-2">Name of Course</th>
            <th className="border border-gray-200 p-2">Sum of Students Present</th>
            <th className="border border-gray-200 p-2">Engaged Lectures</th>
            <th className="border border-gray-200 p-2">Student Onroll.</th>
            <th className="border border-gray-200 p-2">Average Attendence</th>
            <th className="border border-gray-200 p-2">Credits Earned</th>
            
          </tr>
        </thead>
        <tbody>
          {/* Map through rows and render each row with 9 columns */}
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {/* Render each column as an input field */}
              {Object.keys(row).map((colName, colIndex) => (
                <td key={colIndex} className="border border-gray-200 p-2">
                  <input
                    type="text"
                    value={row[colName]}
                    onChange={(e) => handleInputChange(e, rowIndex, colName)}
                    className="border rounded p-1 w-full"
                    placeholder={`Column ${colIndex + 1}`}
                  />
                </td>
              ))}
              {/* Delete button */}
              <td className="border border-gray-200 p-2">
                <button
                  onClick={() => deleteRow(rowIndex)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button to add a new row */}
      <button
        onClick={addRow}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Row
      </button>
    </div>
  );
};

export default StudentPerformance;
