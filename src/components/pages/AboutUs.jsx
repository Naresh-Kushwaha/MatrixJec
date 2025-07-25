import React from "react";
import Header from "../Header1";
 export default function AboutUs(){

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Academics', href: '/academics' },
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
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Our University</h1>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Mission</h2>
          <p className="text-lg text-gray-700">
            Our university is dedicated to fostering a diverse and inclusive academic community that empowers students to achieve their full potential. 
            We strive to provide a transformative educational experience through innovative teaching, research excellence, and community engagement. 
            Our mission is to develop leaders who are prepared to tackle the challenges of the future and make a positive impact on the world.
          </p>
        </section>

        {/* History Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">History</h2>
          <p className="text-lg text-gray-700">
            Founded in 1850, our university has a long-standing tradition of academic excellence and community service. 
            Over the years, we have expanded our programs and facilities to meet the evolving needs of our students and society. 
            From our humble beginnings as a small college, we have grown into a leading institution known for our commitment to research, education, and public service.
          </p>
        </section>

        {/* Administration Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Administration</h2>
          <p className="text-lg text-gray-700">
            Our university is governed by a dedicated team of administrators who oversee the strategic direction and daily operations of the institution. 
            The administration is committed to maintaining high standards of academic integrity, ensuring effective management of resources, 
            and supporting the needs of students, faculty, and staff. Key administrative roles include the President, Provost, and various Deans who work together 
            to advance the university’s mission and vision.
          </p>
        </section>
      </div>
    </div>
    )
 }