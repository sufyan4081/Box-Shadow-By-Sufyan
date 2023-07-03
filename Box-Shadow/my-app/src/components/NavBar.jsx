import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';


const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{position: 'fixed'}}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Box Shadow
          </Typography>
        <Avatar alt="Remy Sharp" src="./assets/images/my-pic.jpg" />
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default NavBar
