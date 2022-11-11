import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Dropdown from './Dropdown';
import HomeIcon from '@mui/icons-material/Home';
import {Link as LinkScroll} from 'react-scroll'

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1, position:'fixed', top:-1, width:'100vw', zIndex:3}}>
      <AppBar position="static" sx={{bgcolor: '#000000', opacity: 0.75}}>
        <Toolbar sx={{ml:6}}>
          <Dropdown />
          <LinkScroll to='top' spy={true} smooth={true} offset={-100} duration={500}>
            <HomeIcon sx={{ fontSize: 40, ml:16, color: "#fff" }} />
          </LinkScroll>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

