import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header2 from "../Header2";

const EventControler= () => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState(null);
  const navigation = [
    { name: 'Home', href: '/adminprofile', current: true },
    { name: 'Connect', href: 'generatemeeting', current: false },
    { name: 'Projects', href: '#', current: false },
    
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert(`Event: ${eventTitle} on ${eventDate}`);
  };

  return (
    <div>
        <Header2 navigation={navigation}></Header2>
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
       
      <h2 className="text-2xl font-bold mb-4">Add Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventTitle">
            Event Title
          </label>
          <input
            id="eventTitle"
            type="text"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter event title"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventDate">
            Event Date
          </label>
          <DatePicker
            selected={eventDate}
            onChange={(date) => setEventDate(date)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholderText="Select a date"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Event
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default EventControler;
