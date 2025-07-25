import { PaperClipIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthContext';

import axios from 'axios';
import Header2 from '../Header2';
import ChartBar from '../Chart/Chartbar';

import BasicBars from '../Chart/BarChartSingle';
import BarChartSingle from '../Chart/BarChartSingle';

export default function FacultyProfile1() {
const navigate=useNavigate();
const [button,setbutton]=useState(true);
const [responseData, setResponseData] = useState(null);
    const navigation = [
        { name: 'Dashboard', href: '/facultyProfile', current: true },
     
        { name: 'Annual Evaluation', href: '/annualevaluation', current: false },
        { name: 'Lectures', href: '/lectures', current: false },
        { name: 'Student Performance', href: '/studentperformance', current: false },
        { name: 'Result', href: '/result', current: false },
        { name: 'Connect', href: '/connectmeeting', current: false },
      ]
      const Attendence = [29, 13, 90, 44, 48, 38, 43];

     const CreditData = [60, 45, 98, 22, 48, 90, 43];
     const ProjctData = [1, 5, 3, 2, 1, 2, 3];
      const data1 = [
        { name: "2019", OddSemester: 40, EvenSemester: 10 },
        { name: "2020", OddSemester: 30, EvenSemester: 18 },
        { name: "2021", OddSemester: 45, EvenSemester: 30 },
        { name: "2022", OddSemester: 20, EvenSemester: 35 },
        { name: "2023", OddSemester: 18, EvenSemester: 48 },
        { name: "2024", OddSemester: 23, EvenSemester: 38 },
     
      ];
    
      
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

      const { logout } = useContext(AuthContext);


  const handleLogout = () => {
    logout();
    localStorage.clear();
    navigate('/');
  
  };
  const [response, setResponse] = useState([]);

 
 
  
  
  const storedData = localStorage.getItem('data');
  const data = storedData ? JSON.parse(storedData) : null;

 const fetchdata=async()=> {

            try {
                const response = await axios.get('http://localhost:8080/api/faculty/get', {
                    auth: {
                        username: data.username,  // Replace with your username
                        password: data.password   // Replace with your password
                    }
                });
             
                setbutton(false);
                
                setResponse(response.data);
               
                
            } catch (error) {
            console.log(error);
            }} 
            console.log(response);

  return (
<div >
 
  <div>
    <Header2 navigation={navigation}></Header2>
  </div>
  


  

    
    {button?(

      <div className=''>
<div className=' flex flex-col text-center font-bold '> 
  <div>
    <h1  className='py-6 underline'>Performance of Engaging Lectures/Practical</h1>
  
    <div className='flex flex-row justify-center '>
      
        <div className='pl-10 flex items-center '>% target Achieved</div>
        
        <div><ChartBar data={data1}></ChartBar></div>
  
  </div>
  </div>
  <div>
  <h1  className='py-6 underline'>Performance of Attendence of Student</h1>

  <div className=' flex flex-row justify-center '>
    
      
      
        <div className='pl-10 flex items-center '>% Attendence</div>
        <div className='flex flex-col text-center justify-center'>
<BarChartSingle data={Attendence}></BarChartSingle>
</div>
  </div>
  </div>
  <div>
  <h1  className='py-6 underline'>Performance of the Result</h1>


  <div className='flex flex-row justify-center '>
      
        <div className='pl-10 flex items-center '>Average Result</div>
        
<BarChartSingle data={CreditData}> </BarChartSingle>
  </div>
  </div>
 
</div>
  
  
</div>
    ):(
      <div className='pt-12'>
         <div className='sm:px-12 lg:px-44'>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-bold leading-7 text-gray-900">Basic Details</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{response.username}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Designation</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{response.designation}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Phone Number</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{response.phonenumber}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email ID</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{response.email}</dd>
          </div>
           <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Area or Subject</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>{response.subject}
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Affiliation</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{response.affliation}</dd>
          </div>
          
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
           {response.about}
            </dd>
          </div>





          <div className="px-4 sm:px-0">
        <h3 className="text-base font-bold leading-7 text-gray-900">Educational Details</h3>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Degree</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{response.degree}</dd>
          </div>
          
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">University</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{response.university}</dd>
          </div>
          


          <div className="px-4 sm:px-0">
        <h3 className="text-base font-bold leading-7 text-gray-900">Other Details</h3>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Courses</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{response.courses}</dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Research Interests</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{response.researchinterests}</dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Selected Publications</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <div>
              
               <ol className='flex flex-col gap-4'>
               {response.selectedpublication.length > 0 ? (
        response.selectedpublication.map((faculty, index) => (
          <div key={index}>{faculty}</div> // Example rendering
        ))
      ) : (
        <p>No  data available</p>
      )}

                
               </ol>
               </div>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Working Papers</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div>
                <ol>
                {response.workingpapers!=null ? (
              response.workingpapers.map((faculty, index) => (
          <div key={index}>{faculty}</div> // Example rendering
        ))
      ) : (
        <p>No  data available</p>
      )}
                </ol>
              </div>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Work in Progress</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <div>
                <ol>
                {response.workinprogress!=null ? (
              response.workinprogress
              .map((faculty, index) => (
          <div key={index}>{faculty}</div> // Example rendering
        ))
      ) : (
        <p>No  data available</p>
      )}
                </ol>
              </div>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Academic Experience</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <div>
                <ol>
                {response.academicexperience!=null ? (
              response.academicexperience.map((faculty, index) => (
          <div key={index}>{faculty}</div> // Example rendering
        ))
      ) : (
        <p>No  data available</p>
      )}
                </ol>
              </div>
               </dd>

          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Workshops /Seminars/Conferences:</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              
              
            <div>
                <ol>
                {response.seminar!= null ? (
              response.academicexperience.map((faculty, index) => (
          <div key={index}>{faculty}</div> // Example rendering
        ))
      ) : (
        <p>No  data available</p>
      )}
                </ol>
              </div>
              
              </dd>
          </div>

          





          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
      </div>
    )}
  
    </div>
  )
}
