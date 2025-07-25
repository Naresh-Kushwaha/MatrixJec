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
  import React from "react";
 export default function ChartBar(props){
 
  const data=props.data;
    return(
        <div className="w-[650px] h-[400px] mt-12 ">
            
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

    )

  }