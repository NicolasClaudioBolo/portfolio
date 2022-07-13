import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent sx={{mx:20}}>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        About me
      </Typography>
      <Typography variant="h5" component="div">
      I'm a young front end developer, proactive, with aims to grow professionally and make use of the knowledge acquired in Coderhouse bootcamps mentioned below. I'm truly eager to start my professional career in the world of IT. I'm constantly learning new dev tools, and I have a great ability to work in teams.
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
