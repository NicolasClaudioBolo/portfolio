import React from 'react';
import react_logo from '../assets/react.png';
import javascript_logo from '../assets/js.png';
import css_logo from '../assets/css.png';
import html_logo from '../assets/html-5.png';
import firebase_logo from '../assets/firebase.png';
import tailwind_logo from '../assets/tailwind.png';
import sass_logo from '../assets/sass.png';
import vue_logo from '../assets/vuejs.svg';
import bootstrap_logo from '../assets/bootstrap.png';
import json_logo from '../assets/json.png';
import { Grid } from '@mui/material';
import './SkillsChart.css'


const skills = [{
  image: react_logo,
  alt: 'ReactJS'
}, 
{
  image: javascript_logo,
  alt: 'JavaScript'
}, 
{
  image: css_logo,
  alt: 'CSS'
}, 
{
  image: html_logo,
  alt: 'HTML'
}, 
{
  image: firebase_logo,
  alt: 'Firebase'
}, 
{
  image: tailwind_logo,
  alt: 'Tailwind'
}, 
{
  image: sass_logo,
  alt: 'SASS'
}, 
{
  image: vue_logo,
  alt: 'VueJS'
}, 
{
  image: bootstrap_logo,
  alt: 'Bootstrap'
},
{
  image: json_logo,
  alt: 'JSON'
}]

const SkillsChart = () => {
return (
  <div container style={{padding:20, marginTop:0, marginBottom:28}} id='skills'>
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{ my: 3 }}>
        {skills.map((skill, i)=>{
          return(
            <div direction="column" xs={12} sm={6}> 
              <img src={skill.image} key={i} className='heart-beat' alt={skill.alt} />
            </div>
          )
        })}
    </Grid>
  </div>
)
}

export default SkillsChart