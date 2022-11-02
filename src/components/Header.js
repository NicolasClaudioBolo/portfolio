import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Dropdown from './Dropdown'
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom'

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{opacity: 0.85}}>
      <AppBar position="static">
        <Toolbar sx={{ml:6}}>
          <Dropdown />
          <Link to='/'>
            <HomeIcon sx={{ fontSize: 40, ml:16, color: "#fff" }} />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

