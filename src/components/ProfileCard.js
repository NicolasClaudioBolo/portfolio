import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../assets/profile_pic.png'
import { Grid } from '@mui/material';
import profilePic from '../assets/profile_pic.png'
import { Link } from 'react-router-dom';

export default function MediaCard() {
  return (
      <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ my: 3 }}>
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
              Front End Developer
            </Typography>
          </CardContent>
          <CardActions>
            <Link size="small" style={{marginLeft:100, textDecoration:'none', color:'black'}} to='/Resume'>View resume</Link>
            {/* <a size="small" sx={{mx:'auto'}} href='../assets/profile_pic.png' download='profile_pic.png'>Download resume</a> */}
          </CardActions>
        </Card>
      </Grid>
  );
}

