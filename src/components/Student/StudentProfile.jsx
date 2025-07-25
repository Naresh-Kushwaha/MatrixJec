import React from "react"
import Header2 from "../Header2"

import './StudentProfile.css';
 import {NavLink} from 'react-router-dom';
  export default function StudentProfile() {

    const navigation = [
      { name: 'Dashboard', href: '/studentprofile', current: true },
   
      { name: 'Feedback', href: '/feedback', current: false },
     

    ]
    return (

      <div>


        <div>
          <Header2 navigation={navigation}></Header2>
        </div>
        
        <div className="py-60">
        <div className="parentcontainer"> 
 <div className="parentcontainer2"> 
        <div className="innerparent">
        <p className="para" >Hello,Student1</p>
        <div className="studentsdetails"><p>Branch</p> <p>Infromation Technology</p></div>
        <div className="studentsdetails"><p>Semester</p><p>3<sup>rd</sup></p></div>
        <div className="studentsdetails">
          <p>Batch</p> <p>2023-27</p>
        </div>
        <div className="studentsdetails">
          <p className="college">College</p>
         <p className="college">Jabalpur Engineering College</p>  
        </div>
        
        </div>
      <div className="imagefed">
        <img src='https://tse1.mm.bing.net/th?id=OIP.TqBlVoCE5Za9IFznBGnuLwHaFj&pid=Api&P=0&h=220' alt="" className="feedimg" />
      </div>
      </div>
      <div className="messg">
        <p className="line"></p>
        <p>Be Unbiased and honest while filling feedback form </p>
        <p className="line"></p>
      </div>
      <div className="feeddiv">
        <NavLink to={'#' }><button className="feedbutton">Fill The Feedback Form</button></NavLink>
      </div>
      </div>

      </div>
      </div>
    )}