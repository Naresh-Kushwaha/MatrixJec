import React, { useState } from "react";
import Header2 from "../Header2";

const AdminDashboard = () => {
  const [formType, setFormType] = useState("faculty"); // To toggle between forms
  const [facultyData, setFacultyData] = useState({ name: "", email: "", department: "" });
  const [studentData, setStudentData] = useState({ name: "", email: "", course: "" });

  const handleFacultySubmit = (e) => {
    e.preventDefault();
    console.log("Faculty Data Submitted: ", facultyData);
    // You can add your API call here to submit faculty data
    setFacultyData({ name: "", email: "", department: "" }); // Reset form
  };

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    console.log("Student Data Submitted: ", studentData);
    // You can add your API call here to submit student data
    setStudentData({ name: "", email: "", course: "" }); // Reset form
  };
  const navigation = [
    { name: 'Home', href: 'adminprofile', current: true },
 
    { name: 'Connect', href: '/generatemeeting', current: false },
  
    { name: 'Add Event', href: '/eventcontroler', current: false },
  ]

  return (
    <div>
        <Header2 navigation={navigation}></Header2>


    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Dashboard</h2>

        {/* Toggle between Faculty and Student Forms */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setFormType("faculty")}
            className={`px-4 py-2 mx-2 rounded-lg ${
              formType === "faculty" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Create Faculty
          </button>
          <button
            onClick={() => setFormType("student")}
            className={`px-4 py-2 mx-2 rounded-lg ${
              formType === "student" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Create Student
          </button>
        </div>

        {/* Faculty Form */}
        {formType === "faculty" && (
          <form onSubmit={handleFacultySubmit}>
            <h3 className="text-lg font-semibold mb-4">Create Faculty</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={facultyData.name}
                onChange={(e) => setFacultyData({ ...facultyData, name: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={facultyData.email}
                onChange={(e) => setFacultyData({ ...facultyData, email: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <input
                type="text"
                value={facultyData.department}
                onChange={(e) => setFacultyData({ ...facultyData, department: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Create Faculty
            </button>
          </form>
        )}

        {/* Student Form */}
        {formType === "student" && (
          <form onSubmit={handleStudentSubmit}>
            <h3 className="text-lg font-semibold mb-4">Create Student</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={studentData.name}
                onChange={(e) => setStudentData({ ...studentData, name: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={studentData.email}
                onChange={(e) => setStudentData({ ...studentData, email: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Course</label>
              <input
                type="text"
                value={studentData.course}
                onChange={(e) => setStudentData({ ...studentData, course: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Create Student
            </button>
          </form>
        )}
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
