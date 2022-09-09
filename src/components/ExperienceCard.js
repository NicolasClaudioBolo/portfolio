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
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

const work = job

  return (
    <div>
        <Card sx={{ maxWidth: 345, my:3, mx:5, borderRadius:5, boxShadow:10 }}>
        <CardHeader
            title={work.title}
            subheader={work.date}
        />
        <CardMedia
            component="img"
            height="194"
            image={work.img}
            alt={work.alt}
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
                {work.techs}
            </Typography>
            <Typography>
                <a href="#">View code</a>
            </Typography>
            </CardContent>
        </Collapse>
        </Card>
    </div>
  );
}

