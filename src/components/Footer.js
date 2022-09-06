import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from  '@mui/icons-material/WhatsApp'

const ResponsiveAppBar = () => {
 
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <a href='https://github.com/NicolasClaudioBolo' target='blank'>
              <GitHubIcon sx={{ fontSize: 40, color: "#f44336" }} />
            </a>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <a href='https://www.linkedin.com/in/nicolasbolo' target='blank'>
              <LinkedInIcon sx={{ fontSize: 40, color: "#f44336" }} />
            </a>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <a href="https://api.whatsapp.com/send?phone=5491135978090&text=Hi%20Nicolas,%20I'm%20contacting%20you%20from%20your%20website:" target='blank'>
              <WhatsAppIcon sx={{ fontSize: 40, color: "#f44336" }} />
            </a>
          </Box>
            <Menu /> 
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

