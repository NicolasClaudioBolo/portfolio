import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


//POR AHORA NO TOCAR
// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

const card = (
  <Card id='about'>
    <CardContent sx={{mx:1, my:1}}>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        About me
      </Typography>
      <Typography variant="h5" component="div">
        I'm a young front end developer, proactive, with aims to grow professionally and make use of the knowledge acquired in Coderhouse bootcamps mentioned in my resume. I'm truly eager to start my professional career in the IT field. I'm constantly learning new dev tools, and I have a great ability to work in teams.
      </Typography>
    </CardContent>
  </Card>
);

export default function OutlinedCard() {
  return (
    <Box sx={{maxWidth:500,mx:5, my:3}}>
      <Card variant="outlined" sx={{borderRadius:5}}>{card}</Card>
    </Box>
  );
}
