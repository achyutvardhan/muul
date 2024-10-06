import { useCubeQuery } from "@cubejs-client/react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
}from "chart.js"

import { Pie } from "react-chartjs-2";
ChartJS.register(
    ArcElement,
  Tooltip,
  Legend
)
export default function PieChart() {


  const { resultSet, isLoading, error, progress } = useCubeQuery({
    "limit": 5000,
    "dimensions": [
      "demo_table.id",
      "demo_table.name"
    ],
    "measures": [
      "demo_table.value"
    ]
  });

  if (isLoading) {
    return (
      <div>
        {(progress && progress.stage) || "Loading..."}
      </div>
    );
  }

  if (error) {
    return <div>{error.toString()}</div>;
  }

  if (!resultSet) {
    return null;
  }

  // Access the data
  const data = resultSet.series()[0].series;
  console.log(resultSet.series())

  // Extract labels and values
  const labels = data.map((item) => { return item.x.split(',')[1]}); 
  const values = data.map((item) => item.value); 

  const chartData = {
    labels,
    datasets: [{
      label: "Value",
      data: values,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
    }]
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  

  return (
    <>
    <div style={{padding : 20, width : 1000, height : 900}}>

      <Pie
      data={chartData}
      options={chartOptions}
      ></Pie>
    </div>
    </>
  );
}
