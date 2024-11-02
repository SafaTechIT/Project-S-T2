import React from 'react';
import { Box, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = () => {
  return (
    <Box width="250px" padding="20px" bgcolor="#ffffff" borderRadius="10px" boxShadow={3}>
      <List>
        <motion.div whileHover={{ scale: 1.05 }}>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <ListItem button component={Link} to="/profile">
            <ListItemText primary="Profile" />
          </ListItem>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <ListItem button component={Link} to="/notifications">
            <ListItemText primary="Notifications" />
          </ListItem>
        </motion.div>
      </List>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
          Tweet
        </Button>
      </motion.div>
    </Box>
  );
};

export default Sidebar;