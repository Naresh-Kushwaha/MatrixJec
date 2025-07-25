import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
export default function Login(){
    const navigate=useNavigate();

    const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCheckbox, setSelectedCheckbox] = useState('');
  const handleCheckboxChange = (event) => {
    setSelectedCheckbox(event.target.value);
  };
  const handleSubmit = async (e) => {
    
    e.preventDefault(); // Prevent the default form submission behavior

    // Data to be sent to the API
    const data = {
      username,
      password,
    };
    if(selectedCheckbox==''){
      alert("Select CheckBox")
    }
    try {
      

      const response = await axios.post(`http://localhost:8080/api/${selectedCheckbox}/login`, data);
      // const response = await axios.post(`https://sih2024-0pz6.onrender.com/${selectedCheckbox}/login`, data);

      console.log('Success:', response.data);

      login(); 
      localStorage.setItem('data',JSON.stringify(data));
   
      

      navigate(`/${selectedCheckbox}Profile`);
    } catch (error) {
  
      if (error.response) {
        console.error('Error:', error.response.data);
        alert("Incorrect Creditionals")
      }
      else {
        console.error('Error:', error.message);
      }
    }
  };


    return (
      <>

        <div className="flex   min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkLyX4WzOrMZusf26yw1nYZLAJ2TrTQ8bLXQ&s"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    
                    required
                    
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                     
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                   
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full justify-center items-center ">
      <h3>Login as</h3>
      <div className="flex justify-between space-x-3">
      <div>
        <input
          type="checkbox"
          id="student"
          value="student"
          checked={selectedCheckbox === 'student'}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="student">Student</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="faculty"
          value="faculty"
          checked={selectedCheckbox === 'faculty'}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="faculty">Faculty</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="admin"
          checked={selectedCheckbox === 'admin'}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="admin">Admin</label>
      </div>
      </div>
    </div>

              
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            {/* <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p> */}
          </div>
        </div>
      </>
    )
  }
  