import React from 'react'
import ProfileCard from '../components/ProfileCard'
import { Grid } from '@mui/material';
import '../App.css'

const Home = () => {
  return (
    <Grid className='App'>
      <ProfileCard />
    </Grid>
  )
}

export default Home
