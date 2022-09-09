import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import { Grid } from '@mui/material'
import shopolytics_img from '../assets/shopolytics.png'
import estudiofrenkel_img from '../assets/estudio_frenkel.png'

const Experience = () => {
  const data = [
    {
      title: "Shopolytics",
      date: "May, 2022",
      img: shopolytics_img,
      description: "I developed a dashboard along side a SSR front end developer for the landing page of our clients website.",
      techs: "VueJS, Tailwind, Laravel and Docker",
      alt: "Shopolytics"
    },
    {
      title: "Estudio Frenkel",
      date: "March, 2022",
      img: estudiofrenkel_img,
      description: "My main task here was to develop a contact website for a small lawyers firm from Buenos Aires. I used React JS.",
      techs: "ReactJS, Reactstrap and pure CSS.",
      alt: "Estudio Frenkel"
    }
  ]
  return (
    <div container>
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ my: 3 }}>
        {data.map((job, i)=>{
          return(
            <div direction="column" xs={12} sm={6}> 
              <ExperienceCard job={job} key={i} />
            </div>
          )
        })}
     </Grid>
     </div>
  )
}

export default Experience
