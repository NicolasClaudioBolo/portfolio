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
  return (
      <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ my: 3 }}>
        <Card sx={{ maxWidth: 230 }}>
          <CardMedia
            component="img"
            height="200"
            image={img}
            alt="Nicolas Bolo"
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
            <Button size="small" sx={{mx:'auto'}}>Download resume</Button>
          </CardActions>
        </Card>
      </Grid>
  );
}

