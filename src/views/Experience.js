import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import { Grid, requirePropFactory } from '@mui/material'
import shopolytics_img from '../assets/shopolytics.png'
import estudiofrenkel_img from '../assets/estudio_frenkel.png'
import pulsodiario_img from '../assets/shopolytics.png'
import portfolio_img from '../assets/portfolio.png'

const Experience = () => {
  const data = [
    {
      title: "Shopolytics",
      date: "May, 2022",
      img: shopolytics_img,
      description: "I developed a dashboard along side a SSR front end developer for the landing page of our clients website.",
      techs: "VueJS, Tailwind, Laravel and Docker",
      alt: "Shopolytics",
      target: "https://github.com/NicolasClaudioBolo/shopolytics"
    },
    {
      title: "Estudio Frenkel",
      date: "March, 2022",
      img: estudiofrenkel_img,
      description: "My main task here was to develop a contact website for a small lawyers firm from Buenos Aires. I used React JS.",
      techs: "ReactJS, Reactstrap and pure CSS.",
      alt: "Estudio Frenkel",
      target: "https://github.com/NicolasClaudioBolo/EstudioFrenkel"
    },
    {
      title: "Pulso Diario",
      date: "September, 2022",
      img: pulsodiario_img,
      description: "I'm currently developing a local news website using JS vanilla with pure HTML and CSS.",
      techs: "JavaScript, HTML5 and CSS3",
      alt: "Pulso Diario",
      target: "https://www.pulsodiario.com.ar"
    },
    {
      title: "My portfolio",
      date: "November, 2022",
      img: portfolio_img,
      description: "This is the very same web page you're looking at. I used ReactJS and MUI for the development",
      techs: "ReactJS and Material UI",
      alt: "My portfolio",
      target: ""
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
              <ExperienceCard job={job} key={i}/>
            </div>
          )
        })}
     </Grid>
     </div>
  )
}

export default Experience
