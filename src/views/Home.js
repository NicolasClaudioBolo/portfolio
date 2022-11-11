import React from 'react'
import ProfileCard from '../components/ProfileCard'
import { Grid } from '@mui/material';
import CoverLetter from '../components/CoverLetter'
import Experience from './Experience'
import '../App.css'
import Skills from './Skills';
import BackToTop from '../components/BackToTop';

const Home = () => {
  return (
    <div>
      <Grid className='App'>
        <ProfileCard  xs={12} sm={6}/>
      </Grid>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '40vh'}}
      >
        <CoverLetter  xs={12} sm={6}/>
      </Grid>
      <Grid>
        <Experience/>
      </Grid>
      <Grid>
        <Skills />
      </Grid>
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        style={{ minHeight: '10vh', marginTop:0}}
      >
        <BackToTop />
      </Grid>
    </div>
  )
}

export default Home
