import React from 'react';
import { AppBar, Toolbar, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Social App
        </Typography>
        <TextField
          placeholder="Search..."
          variant="outlined"
          size="small"
          style={{ marginRight: '20px' }}
        />
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <Button color="inherit">Profile</Button>
        </Link>
        <Link to="/notifications" style={{ textDecoration: 'none' }}>
          <Button color="inherit">Notifications</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;