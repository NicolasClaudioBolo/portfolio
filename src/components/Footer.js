import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import img from '../assets/profile_pic.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ResponsiveAppBar = () => {
 
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <GitHubIcon sx={{fontSize: 40}} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <LinkedInIcon sx={{fontSize: 40}} />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Nicolas Bolo" src={img}/>
              </IconButton>
            </Tooltip>
            <Menu /> 
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

