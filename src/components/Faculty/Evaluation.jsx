
 import React, { useState } from "react";
 import axios from "axios";
 export default function Evaluation(){

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      personalDetails: {
        firstName: "",
        lastName: "",
        email: "",
      },
      educationDetails: {
        college: "",
        degree: "",
        year: "",
      },
      certificate: null,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [step === 1 ? "personalDetails" : "educationDetails"]: {
          ...prev[step === 1 ? "personalDetails" : "educationDetails"],
          [name]: value,
        },
      }));
    };
  
    const handleFileChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        certificate: e.target.files[0],
      }));
    };
  
    const handleNext = () => setStep(step + 1);
    const handlePrev = () => setStep(step - 1);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append("personalDetails", JSON.stringify(formData.personalDetails));
      data.append("educationDetails", JSON.stringify(formData.educationDetails));
      data.append("certificate", formData.certificate);
  
      axios.post("/api/submit-form", data)
        .then((response) => alert("Form submitted successfully"))
        .catch((error) => alert("Error submitting form"));
    };


    return(
<div className="max-w-lg mx-auto my-10 p-5 border rounded-lg shadow-lg">
      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold mb-5">Personal Details</h2>
          <input
            type="text"
            name="firstName"
            value={formData.personalDetails.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="border w-full p-2 mb-4"
          />
          <input
            type="text"
            name="lastName"
            value={formData.personalDetails.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="border w-full p-2 mb-4"
          />
          <input
            type="email"
            name="email"
            value={formData.personalDetails.email}
            onChange={handleChange}
            placeholder="Email"
            className="border w-full p-2 mb-4"
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold mb-5">Education Details</h2>
          <input
            type="text"
            name="college"
            value={formData.educationDetails.college}
            onChange={handleChange}
            placeholder="College Name"
            className="border w-full p-2 mb-4"
          />
          <input
            type="text"
            name="degree"
            value={formData.educationDetails.degree}
            onChange={handleChange}
            placeholder="Degree"
            className="border w-full p-2 mb-4"
          />
          <input
            type="text"
            name="year"
            value={formData.educationDetails.year}
            onChange={handleChange}
            placeholder="Year of Graduation"
            className="border w-full p-2 mb-4"
          />
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold mb-5">Upload Certificate</h2>
          <input
            type="file"
            name="certificate"
            onChange={handleFileChange}
            className="border w-full p-2 mb-4"
          />
        </div>
      )}
      <div className="flex justify-between mt-4">
        {step > 1 && (
          <button onClick={handlePrev} className="bg-gray-500 text-white px-4 py-2 rounded">
            Previous
          </button>
        )}
        {step < 3 && (
          <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded">
            Next
          </button>
        )}
        {step === 3 && (
          <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        )}
      </div>
    </div>

    )
 }