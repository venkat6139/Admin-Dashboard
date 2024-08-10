import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';
import './index.css';

const NavigationBar = () => {
  return (
    <div className="sidebar">
      <List component="nav">
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/posts">
          <ListItemText primary="Posts" />
        </ListItem>
      </List>
    </div>
  );
};

export default NavigationBar;
