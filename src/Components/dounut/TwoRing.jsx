import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut } from 'react-chartjs-2';

export default function TwoRing() {
  return (
    <div className='' style={{height:'100%',width:'100%'}}>
      <Doughnut
        className=""
        data={{
          labels: ["Crowdsal investors: 80%", "Foundation:20%"],
          datasets: [
            {
              label: "Ratio of principal and Interest",
              data: [80,20],
              backgroundColor: ["#0082ff", "#faa002"],
              hoverOffset: 4,
              widtg: 50,
            },
          ],
        }}
      ></Doughnut>
    </div>
  )
}
