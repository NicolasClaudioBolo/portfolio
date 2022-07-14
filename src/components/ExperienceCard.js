import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import img from '../assets/shopolytics.png'
import img1 from '../assets/estudio_frenkel.png'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ExperienceCard({job}) {
  const [expanded, setExpanded] = React.useState(false);
  console.log(job, "job")

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

const work = job

  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
            title={work.title}
            subheader={work.date}
        />
        <CardMedia
            component="img"
            height="194"
            image={img}
            alt="Shopolytics"
        />
        <CardContent>
            <Typography variant="body2" color="text.primary">
            {work.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography paragraph>Used technologies:</Typography>
            <Typography paragraph>
                VueJS, Tailwind, Laravel Sail and Docker.
            </Typography>
            <Typography>
                <a href="#">View code</a>
            </Typography>
            </CardContent>
        </Collapse>
        </Card>

        {/* <Card sx={{ maxWidth: 345 }}>
        <CardHeader
            title="Estudio Frenkel"
            subheader="Since March, 2022"
        />
        <CardMedia
            component="img"
            height="194"
            image={img1}
            alt="Estudio Frenkel"
        />
        <CardContent>
            <Typography variant="body2" color="text.primary">
            I'm currently developing a website for a small lawyers firm from Buenos Aires.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <ExpandMore
            expand={open}
            onClick={handleExpandClick(false)}
            aria-expanded={open}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography paragraph>Used technologies:</Typography>
            <Typography paragraph>
                ReactJS, Reactstrap and pure CSS.
            </Typography>
            <Typography>
                <a href="#">View code</a>
            </Typography>
            </CardContent>
        </Collapse>
        </Card> */}
    </div>
  );
}

