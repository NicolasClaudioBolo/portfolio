import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import {Link as LinkScroll} from 'react-scroll';

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined }
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <IconButton
          size="large"
          edge="start"
          color="secondary"
          aria-label="open drawer"
          sx={{ mr: 2 }}
           >
            <MenuIcon 
            color="inherit"
            fontSize="large" />
          </IconButton>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper sx={{borderRadius: 5, boxShadow: 20, ml:-3.5}}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}>
                    <MenuItem>
                      <LinkScroll to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={handleClose} style={{textDecoration:"none", color:"black"}}>
                            About me
                      </LinkScroll>
                    </MenuItem>
                    <MenuItem>
                      <LinkScroll to="experience" spy={true} smooth={true} offset={-15} duration={500} onClick={handleClose} style={{textDecoration:"none", color:"black"}}>
                            Experience
                      </LinkScroll>
                    </MenuItem>
                    <MenuItem style={{textDecoration:"none", color:"black"}}>
                    <LinkScroll to="skills" spy={true} smooth={true} offset={-100} duration={500} onClick={handleClose} style={{textDecoration:"none", color:"black"}}>
                            Skills
                      </LinkScroll>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}