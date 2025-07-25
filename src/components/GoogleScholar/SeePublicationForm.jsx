
import axios from 'axios';
import Header2 from '../Header2';
import React, { useState, useEffect } from "react";
import BarChartSingle from '../Chart/BarChartSingle';

const SeePublication = () => {
 
  
  
  const [data, setData] = useState({
    field1: "",
    field2: "",
    field3: "",
  });
  const [dataArray,setdataArray]=useState([]);
  const navigation = [
    { name: 'Dashboard', href:'/facultyProfile', current: false},
    { name: 'Add-Publication', href: '/addpublication', current: false },


  ]
  const ProjctData = [1, 5, 3, 2, 1, 2, 3];
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the API request using axios
        const response = await axios.get('http://localhost:8080/api/googlepublications');
        
        // Store the array response into state
        setdataArray(response.data);
        console.log(response.data);
      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData(); // Call the function to fetch data
  }, []);
  return(
    <div>
      
      <div><Header2 navigation={navigation}></Header2></div>
 <div className="flex  justify-center w-full bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6  ">
      <div  >
        <h1 className='p-6 font-bold underline'> Publication Data</h1>
      <div className='flex flex-row justify-center'>
      
      <div className='pl-10 flex items-center '>Publication</div>
      
<BarChartSingle data={ProjctData} > </BarChartSingle>
</div>
      </div>
     <ul className='py-8 lg:mx-32 '>
      {
        dataArray.map((data,index)=>(
          <li key={index} className='bg-[#d6d0d0] border rounded-md p-12 my-6 px-14'>
        <h2 className="text-xl font-semibold mb-4 text-center">Publication {index+1}</h2>
        <p className="text-gray-700 text-lg mb-2">

          <strong>Title:</strong> {data.title}
        </p>
        <p className="text-gray-700 text-lg mb-2">
          <strong>Authors</strong> {data.authors}
        </p>
        <p className="text-gray-700 text-lg mb-2">
          <strong>Journal</strong> {data.journal}
        </p>
        <p className="text-gray-700 text-lg mb-2">
          <strong>Citation</strong> {data.citationCount}
        </p>
        </li>
      ))
    }
        </ul> 
      </div>
    </div>
    </div>


  

  )
};

export default SeePublication;
