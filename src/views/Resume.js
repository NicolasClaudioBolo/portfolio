import { Container } from '@mui/system'
import React from 'react'

const Resume = () => {
  return (
    <Container>
      <img
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="resume"
        src="../src/assets/profile_pic.png"
      />
    </Container>
  )
}

export default Resume
