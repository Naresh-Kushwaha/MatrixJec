import React from "react";
import Header from "../Header1";
 export default function Academic(){
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/aboutus' },
        { name: 'Research', href: '/research' },
        { name: 'Administration', href: '/administration' },
        { name: 'Calender', href: '/calender' },
        
      ]

    return(
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="p-3">
                <Header navigation={navigation}></Header>
            </div>
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">University Overview</h1>
  
          {/* Programs/Courses Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Programs/Courses</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our university offers a diverse range of programs and courses across various disciplines. 
              From undergraduate degrees to advanced research programs, we provide an extensive curriculum designed to meet the academic and professional needs of our students. 
              Explore our offerings and find the program that best aligns with your career goals.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Bachelor's Programs</li>
              <li>Master's Programs</li>
              <li>Doctoral Programs</li>
              <li>Online Courses</li>
              <li>Professional Certifications</li>
            </ul>
          </section>
  
          {/* Departments/Schools/Faculties Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Departments/Schools/Faculties</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our university is organized into several departments, schools, and faculties, each specializing in different fields of study. 
              These academic units are dedicated to providing high-quality education and conducting groundbreaking research in their respective areas.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>College of Engineering</li>
              <li>School of Business</li>
              <li>Faculty of Arts and Humanities</li>
              <li>Department of Computer Science</li>
              <li>School of Medicine</li>
            </ul>
          </section>
  
          {/* Research Centers and Institutes Section */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Research Centers and Institutes</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our university is home to several research centers and institutes that focus on a wide range of scientific, technological, and social research. 
              These centers work on cutting-edge projects and contribute significantly to advancements in their fields. 
              Discover the innovative research being conducted and the impact it has on the world.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Institute for Advanced Research</li>
              <li>Center for Environmental Studies</li>
              <li>Laboratory for Innovation in Technology</li>
              <li>Research Institute of Social Sciences</li>
              <li>Biomedical Research Center</li>
            </ul>
          </section>
        </div>
      </div>
    )
 }