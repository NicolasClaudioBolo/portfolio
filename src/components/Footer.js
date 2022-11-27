import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from  '@mui/icons-material/WhatsApp'
import { Button } from '@mui/material';

const ResponsiveAppBar = () => {
 
  return (
    <AppBar position="static" sx={{bgcolor: '#000000'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <Button href='https://github.com/NicolasClaudioBolo' target='blank'>
              <GitHubIcon sx={{ fontSize: 40, color: "#fff" }} />
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <Button href='https://www.linkedin.com/in/nicolasbolo' target='blank'>
              <LinkedInIcon sx={{ fontSize: 40, color: "#fff" }} />
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <Button href="https://api.whatsapp.com/send?phone=5491135978090&text=Hi%20Nicolas,%20I'm%20contacting%20you%20from%20your%20website:" target='blank'>
              <WhatsAppIcon sx={{ fontSize: 40, color: "#fff" }} />
            </Button>
          </Box>
            <Menu /> 
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

