import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import { Grid } from '@mui/material'
import shopolytics_img from '../assets/shopolytics.png'
import estudiofrenkel_img from '../assets/estudio_frenkel.png'
import pulsodiario_img from '../assets/pulso_diario.png'
import portfolio_img from '../assets/portfolio.png'
import '../components/ExperienceCard.css'

export default function Experience () {
  const data = [
    // ['ReactJS', 'VueJS', 'JavaScript', 'Tailwind', 'MUI', 'Reactstrap', 'Laravel', 'Docker', 'CSS', 'HTML5'],
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
      title: "Pulso Diario",
      date: "September, 2022",
      img: pulsodiario_img,
      description: "I'm currently developing a local news website using JS vanilla with pure HTML and CSS. I'm developing a ReactJS version for better performance",
      techs: "JavaScript, HTML5 and CSS",
      alt: "Pulso Diario",
      target: "https://www.pulsodiario.com.ar"
    },
    {
      title: "Estudio Frenkel",
      date: "March, 2022",
      img: estudiofrenkel_img,
      description: "My main task here was to develop a contact website for a small lawyers firm from Buenos Aires. I used React JS.",
      techs: "ReactJS, Reactstrap and CSS.",
      alt: "Estudio Frenkel",
      target: "https://github.com/NicolasClaudioBolo/EstudioFrenkel"
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
    <div container id='experience'>
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
