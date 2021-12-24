import React from 'react';
// import HeaderTop from './HeaderTop';
import HeaderBot from './HeaderBot';
import { Box } from '@mui/system';

// import AppBar from '@mui/material/AppBar';

// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <>
      <Box position="fixed" zIndex="999" sx={{ flexGrow: 1 }}>
        {/* <HeaderTop /> */}
        <HeaderBot />
      </Box>
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar></Toolbar>
        </AppBar>
      </Box> */}
    </>
  );
}

export default Header;
