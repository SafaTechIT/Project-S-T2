import React from 'react';
import { Box, List, ListItem, ListItemText, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Grid item xs={3}> {/* استفاده از Grid */}
      <Box padding="20px" bgcolor="#ffffff" borderRadius="10px" boxShadow={3}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/profile">
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button component={Link} to="/notifications">
            <ListItemText primary="Notifications" />
          </ListItem>
        </List>
        <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
          Tweet
        </Button>
      </Box>
    </Grid>
  );
};

export default Sidebar;