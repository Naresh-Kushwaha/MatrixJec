

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import ProtectedRoute from './ProtectedRoute';
import StudentProfile from './components/Student/StudentProfile';
import FacultyProfile from './components/Faculty/FacultyProfile';
import AdminProfile from './components/Admin/AdminProfile';
import HomePage from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Academic from './components/pages/Academics';
import Administration from './components/pages/Administration';
import Research from './components/pages/Research';
import FacultyHomePage from './components/Faculty/FacultyHomePage';

import BasicBars from './components/Chart/BarChartSingle';
import AddPublication from './components/GoogleScholar/AddPublication';
import SeePublication from './components/GoogleScholar/SeePublicationForm';
import Lectures from './components/Faculty/Lectures';
import Feedback from './components/Student/Feedback';
import UniversityCalendar from './components/pages/UniversityCalender';
import StudentPerformance from './components/Faculty/StudentPerformance';

import ResultData from './components/Faculty/Result';
import EventControler from './components/Admin/EventControler';
import ConnectMeeting from './components/Faculty/ConnectMeeting';
import GeneratMeeting from './components/Admin/GenerateMeeting';
import AdminDashboard from './components/Admin/CreateStudent';
// import Evaluation from './KaranFrontend/EvaluationForm';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login></Login>} />
      <Route path="/facultyHome" element={<FacultyHomePage></FacultyHomePage>} />
      {/* <Route path='/studentProfile' element={<StudentProfile></StudentProfile>}></Route> */}
      <Route  path="/studentProfile" element={
      <ProtectedRoute>
        <StudentProfile></StudentProfile>
        
        </ProtectedRoute>}/>
     
      <Route  path="/facultyProfile" element={
      
        <FacultyProfile></FacultyProfile>}
        
       />
       
        
        <Route  path="/adminProfile" element={
          
      <ProtectedRoute>
       <AdminProfile></AdminProfile>
        
        </ProtectedRoute>}/>


        <Route  path="/" element={
          
          <ProtectedRoute>
           <HomePage></HomePage>
            
            </ProtectedRoute>}/>

            <Route path="/aboutus" element={<AboutUs></AboutUs>} />
            <Route path="/academics" element={<Academic></Academic>} />
            <Route path="/administration" element={<Administration></Administration>} />
            <Route path="/research" element={<Research></Research>} />

            <Route path="/chart" element={<BasicBars></BasicBars>} />
            <Route path="/addpublication" element={<AddPublication></AddPublication>} />
            <Route path="/seepublication" element={<SeePublication></SeePublication>} />
            <Route path="/lectures" element={<Lectures></Lectures>} />
            <Route path="/feedback" element={<Feedback></Feedback>} />
            <Route path="/studentprofile" element={<StudentProfile></StudentProfile>} />
            <Route path="/calender" element={<UniversityCalendar></UniversityCalendar>} />
            <Route path="/studentperformance" element={<StudentPerformance></StudentPerformance>} />
            <Route path="/result" element={<ResultData></ResultData>} />
            <Route path="/eventcontroler" element={<EventControler></EventControler>} />
            <Route path="/adminprofile" element={<AdminProfile></AdminProfile>} />
            <Route path="/connectmeeting" element={<ConnectMeeting></ConnectMeeting>} />
            <Route path="/generatemeeting" element={<GeneratMeeting></GeneratMeeting>} />
            <Route path="/admindashbord" element={<AdminDashboard></AdminDashboard>} />
            {/* <Route path="/annualevaluation" element={<Evaluation></Evaluation>}></Route>
             */}

      </Routes>
      
  </Router>
  );
}

export default App;

