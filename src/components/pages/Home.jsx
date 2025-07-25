

import { useState } from 'react'
import { FaChalkboardTeacher, FaFlask, FaCalendarAlt, FaUserCog } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Import Font Awesome icons
import Header from '../Header1';
const navigation = [
    { name: 'About Us', href: '/aboutus' },
    { name: 'Academics', href: '/academics' },
    { name: 'Research', href: '/research' },
    { name: 'Administration', href: '/administration' },
    { name: 'Calender', href: '/calender' },
    
  ]


export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[url('https://wallpaperaccess.com/full/2137313.jpg')] bg-cover  bg-fixed h-screen" >

<Header navigation={navigation}></Header>
    

      <div className="relative  isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          


    <div className="min-h-screen  flex items-center border-spacing-x-52 justify-center">
      <div className="max-w-3xl w-full   px-8 py-0">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
         The Future Starts here!
        </h1>
        <p className="text-lg text-[#f5e8d9] text-center mb-8">
          We are pleased to have you here. Stay informed with the latest
          announcements and upcoming events tailored for you.
        </p>

        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4 mt-96 ">
          <h2 className="text-2xl font-semibold text-indigo-700">New Announcements</h2>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Faculty Development Program on September 20th.</li>
            <li>New Research Funding Opportunities are now available.</li>
          </ul>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <h2 className="text-2xl font-semibold text-green-700">Upcoming Events</h2>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Annual Faculty Conference - October 15th.</li>
            <li>Seminar on Advanced Research Methodologies - October 10th.</li>
          </ul>
        </div>
      </div>
    </div>
    
  
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-18 my-12 -mb-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl w-full px-4">
        {/* Course Management */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <FaChalkboardTeacher className="text-indigo-600 text-6xl mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Course Management</h2>
          <p className="text-gray-600 text-center mb-4">
            Manage and organize your courses with ease.
          </p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Go to Course Management
          </button>
        </div>

        {/* Research Tools */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <FaFlask className="text-green-600 text-6xl mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Research Tools</h2>
          <p className="text-gray-600 text-center mb-4">
            Access powerful tools for your research activities.
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Explore Research Tools
          </button>
        </div>

        {/* Event Scheduling */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <FaCalendarAlt className="text-yellow-500 text-6xl mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Event Scheduling</h2>
          <p className="text-gray-600 text-center mb-4">
            Organize and schedule upcoming events seamlessly.
          </p>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            View Event Schedule
          </button>
        </div>

        {/* Administrative Actions */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <FaUserCog className="text-red-600 text-6xl mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Administrative Actions</h2>
          <p className="text-gray-600 text-center mb-4">
            Perform administrative tasks and manage settings.
          </p>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Admin Dashboard
          </button>
        </div>
      </div>
    </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div>
        
      </div>
      <footer className="bg-[#986443] text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <ul>
              <li className="mb-2">123 University Ave, City, State, 12345</li>
              <li className="mb-2">Phone: (123) 456-7890</li>
              <li>Email: <a href="mailto:info@university.edu" className="text-white underline">info@university.edu</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2"><a href="/aboutus" className="text-white hover:underline">About Us</a></li>
              <li className="mb-2"><a href="/admissions" className="text-white hover:underline">Admissions</a></li>
              <li className="mb-2"><a href="/departments" className="text-white hover:underline">Departments</a></li>
              <li className="mb-2"><a href="/contact" className="text-white hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-gray-300" aria-label="Facebook">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-gray-300" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-gray-300" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-gray-300" aria-label="LinkedIn">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} University Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}
