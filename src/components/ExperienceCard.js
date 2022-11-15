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
import './ExperienceCard.css'




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

//   const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 1.0
//   }
// const useElementOnScreen = (options) => {
//   const containerRef = useRef(null)
//   const [isVisible, setIsVisible] = useState(false)

//   const callbackFunction = (entries) => {
//     const [entry] = entries
//     setIsVisible(entry.isIntersecting)
//   }

//   useEffect(() => {
//     console.log("containerRef", containerRef.current)
//   const observer = new IntersectionObserver(callbackFunction, options)
//     observer.observe(ExperienceCard)
//       if (containerRef.current) observer.observe(containerRef.current)
//       return () => {
//         if (containerRef.current) observer.unobserve(containerRef.current)
//       }
//     }, [containerRef, options])
//   return [containerRef, isVisible]

// }

// const [containerRef, isVisible] = useElementOnScreen({
//     root: null,
//     rootMargin: "0px",
//     threshold: 1.0
// })

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
                <a href={work.target} target='blank'>View code</a>
            </Typography>
            </CardContent>
        </Collapse>
        </Card>
    </div>
  );
}



