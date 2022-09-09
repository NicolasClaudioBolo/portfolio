import React from 'react'
import ProfileCard from '../components/ProfileCard'
import { Grid } from '@mui/material';
import CoverLetter from '../components/CoverLetter'
import Experience from './Experience'
import '../App.css'

const Home = () => {
  return (
    <div>
    <Grid className='App'>
      <ProfileCard />
    </Grid>
    <Grid>
      <CoverLetter/>
    </Grid>
    <Grid>
      <Experience />
    </Grid>
    </div>
  )
}

export default Home
