import React from 'react'
import Card from '../components/Card'
import { Grid } from '@mui/material'

const Experience = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ my: 3 }}>
      <Card />
    </Grid>
  )
}

export default Experience
