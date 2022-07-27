import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import { Grid, requirePropFactory } from '@mui/material'
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
      description: "I'm currently working on my first job as a web developer, programming a web app for a small lawyers firm from Buenos Aires. I'm using React.JS for the development.",
      techs: "ReactJS, Reactstrap and pure CSS.",
      alt: "Estudio Frenkel"
    }
  ]
  return (
    <Grid
      container
      direction="column"
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
