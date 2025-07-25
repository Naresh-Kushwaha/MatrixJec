import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Piechart = () => {
  // Data for the chart
  const data = {
    labels: ["Total", "Present"],
    datasets: [
      {
        label: "Students",
        data: [100, 19],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",   // Tailwind red
          "rgba(54, 162, 235, 0.6)",   // Tailwind blue
         // Tailwind orange
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Student Attendence Performance",
      },
    },
  };

  return (
    <div className="w-full md:w-1/2 mx-auto p-4 bg-white shadow-lg rounded-lg">
      <Pie data={data} options={options} />
    </div>
  );
};

export default Piechart;
