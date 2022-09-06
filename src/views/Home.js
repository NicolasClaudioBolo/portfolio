import React from 'react'
import ProfileCard from '../components/ProfileCard'
import { Grid } from '@mui/material';
import CoverLetter from '../components/CoverLetter'
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
    </div>
  )
}

export default Home
