import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import { Grid } from '@mui/material'

const Experience = () => {
  const data = [
    {
      title: "Shopolytics",
      date: "May, 2022",
      img: "profile_pic",
      description: "I developed a dashboard along side a SSR front end developer for the landing page of our clients website.",
      techs: ["VueJS", "Tailwind", "Laravel", "Docker"]
    }
  ]
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ my: 3 }}>
        {data.map((job, i)=>{
          return <ExperienceCard job={job} key={i} />
        })}
     </Grid>
  )
}

export default Experience
