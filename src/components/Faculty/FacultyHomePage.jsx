
import Header2 from "../Header2";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";


export default function FacultyHomePage(){
   

    const navigation = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Lectures', href: '#', current: false },
        { name: 'Student Performance', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
      ]

      const data = [
        { name: "2019", OddSemester: 40, EvenSemester: 10 },
        { name: "2020", OddSemester: 30, EvenSemester: 18 },
        { name: "2021", OddSemester: 45, EvenSemester: 30 },
        { name: "2022", OddSemester: 20, EvenSemester: 35 },
        { name: "2023", OddSemester: 18, EvenSemester: 48 },
        { name: "2024", OddSemester: 23, EvenSemester: 38 },
     
      ];
    return(
        <div className="w-[100%] h-[100%]">
            <div>
                <Header2 navigation={navigation}></Header2>
            </div >
            <div className="w-fit h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis  />
            <Tooltip />
            <Legend />
            <Bar dataKey="OddSemester" fill="#8884d8" />
            <Bar dataKey="EvenSemester" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
         
            
        </div>
        
    )
}