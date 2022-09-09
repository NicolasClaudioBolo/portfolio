import React from 'react'
import { Bar } from 'react-chartjs-2';



const SkillsChart = () => {
  return (
    <div>
        <Bar
  options={""}
  data={[
    {TLabel: "VanillaJS",
    TData: 50,
    },
    {TLabel: "ReactJS",
    TData: 50,
    },
    {TLabel: "HTML5",
    TData: 50,
    },
    {},
    {},
  ]}
/>
    </div>
  )
}

export default SkillsChart
