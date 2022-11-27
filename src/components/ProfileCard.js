import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../assets/profile_pic.png'
import { Grid } from '@mui/material';

export default function MediaCard() {

  // const onDownload = () => {
  //   const link = document.createElement("a");
  //   link.download = `resume.pdf`;
  //   link.href = "../src/assets/resume.pdf";
  //   link.click();
  // };

  return (
      <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ mb: 3, mt:10 }}
      id='top'
      >
        <Card sx={{ maxWidth: 300, borderRadius:5, boxShadow:10 }}>
          <CardMedia
            component="img"
            height="200"
            image={img}
            alt="Nicolas Bolo"
            sx= {{m:2, width: "fit-content", display: "inline", borderRadius:5}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nicolas Bolo
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
              Frontend developer
            </Typography>
          </CardContent>
          <CardActions sx={{mx:10}}>
            <a href='/resume.pdf' download='NicolasBoloFrontendDev.pdf' variant="contained" color="primary" sx={{mx:10, mb:3}} style={{fontSize:'larger', color: 'white', borderRadius: 5, backgroundColor: '#333', textDecoration: 'none', padding:5}}>
              Download resume
            </a>
          </CardActions>
        </Card>
      </Grid>
  );
}

