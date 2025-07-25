import React from "react";
import { FaUsers, FaUniversity } from "react-icons/fa"; 
import Header from "../Header1";
 export default function Administration(){
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/aboutus' },
        { name: 'Research', href: '/research' },
        { name: 'Academics', href: '/academics' },
        { name: 'Calender', href: '/calender' },
        
      ]
    return(
        <div className="min-h-screen bg-gray-100 py-12 px-4">
           <div className="p-3">

           <Header navigation={navigation}></Header>
           </div>

        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            University Directory
          </h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* University Administration */}
            <div className="bg-[#bf7b50] text-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <FaUniversity className="text-white text-6xl mb-4" />
              <h2 className="text-2xl font-semibold mb-4">University Administration</h2>
              <p className="text-lg mb-6">
                Access information about the university's administrative offices and key contacts.
              </p>
              <a
                href="/administration"
                className="bg-white text-[#bf7b50] px-4 py-2 rounded shadow hover:bg-gray-200 transition"
              >
                View Administration Directory
              </a>
            </div>
  
            {/* Faculty Directory */}
            <div className="bg-[#bf7b50] text-white rounded-lg shadow-lg p-6 flex flex-col items-center">
              <FaUsers className="text-white text-6xl mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Faculty Directory</h2>
              <p className="text-lg mb-6">
                Explore the directory of faculty members and their contact details.
              </p>
              <a
                href="/faculty"
                className="bg-white text-[#bf7b50] px-4 py-2 rounded shadow hover:bg-gray-200 transition"
              >
                View Faculty Directory
              </a>
            </div>
          </div>
        </div>
      </div>
    )
 }