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


const skills = [react_logo, javascript_logo, css_logo, html_logo, firebase_logo, tailwind_logo, sass_logo, vue_logo, bootstrap_logo, json_logo]

const SkillsChart = () => {
  return (
    <div container style={{padding:20, marginTop:0, marginBottom:128}}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ my: 3 }}>
          {skills.map((skill, i)=>{
            return(
              <div direction="column" xs={12} sm={6}> 
                <img src={skill} key={i} style={{height: 100, padding:10}} />
              </div>
            )
          })}
      </Grid>
    </div>
  )
}

export default SkillsChart
