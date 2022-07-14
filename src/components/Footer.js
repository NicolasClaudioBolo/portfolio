import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const ResponsiveAppBar = () => {
 
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <GitHubIcon sx={{fontSize: 40}} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <LinkedInIcon sx={{fontSize: 40}} />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <EmailIcon sx={{fontSize: 40}} />
          </Box>
            <Menu /> 
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

