import React from "react";
import Header from "../Header1";
 export default function Research(){
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/aboutus' },
        { name: 'Academics', href: '/academics' },
        { name: 'Administration', href: '/administration' },
        { name: 'Calender', href: '/calender' },
        
      ]

    return(
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="p-3">
<Header navigation={navigation}></Header>
            </div>
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Research Opportunities</h1>
  
          {/* Research Opportunities Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Research Opportunities</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our university offers a wide range of research opportunities across various disciplines. Students and faculty are encouraged to engage in innovative research projects that contribute to advancing knowledge and addressing real-world challenges.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li className="mb-2">Collaborative research with industry partners.</li>
              <li className="mb-2">Interdisciplinary research centers.</li>
              <li className="mb-2">Research internships and fellowships.</li>
              <li className="mb-2">Opportunities to present at national and international conferences.</li>
            </ul>
          </section>
  
          {/* Grants Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Grants</h2>
            <p className="text-lg text-gray-700 mb-4">
              We offer various grants to support research activities and projects. These grants are designed to provide financial assistance and resources to researchers and research teams.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li className="mb-2">Seed grants for new research projects.</li>
              <li className="mb-2">Competitive grants for high-impact research.</li>
              <li className="mb-2">Research development grants for collaborative initiatives.</li>
              <li className="mb-2">Travel grants for conference presentations and collaborations.</li>
            </ul>
          </section>
  
          {/* Publications Section */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Publications</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our university is committed to publishing cutting-edge research across various academic journals and platforms. Faculty and students are encouraged to contribute to and engage with scholarly publications.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li className="mb-2">Access to university research repository.</li>
              <li className="mb-2">Opportunities to publish in top-tier journals.</li>
              <li className="mb-2">Collaborative publications with international researchers.</li>
              <li className="mb-2">Support for open access and publicly funded research.</li>
            </ul>
          </section>
        </div>
      </div>
    )
 }