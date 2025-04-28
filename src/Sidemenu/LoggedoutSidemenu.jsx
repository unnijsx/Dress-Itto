import * as React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import LoginIcon from '@mui/icons-material/Login';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function LoggedoutSidemenu({ open, toggleDrawer }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    toggleDrawer(false)(); // close drawer after navigating
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Women', icon: <FemaleIcon />, path: '/category/women' },
    { text: 'Men', icon: <MaleIcon />, path: '/category/men' },
    { text: 'Kids', icon: <ChildCareIcon />, path: '/category/kids' },
    { text: 'Accessories', icon: <LocalMallIcon />, path: '/category/accessories' },
    { text: 'Login', icon: <LoginIcon />, path: '/login' },
  ];
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={toggleDrawer}
      PaperProps={{
        sx: {
          width: drawerWidth,
          backgroundColor: '#121212',
          color: 'white',
          mt: '64px', // matches header height
        },
      }}
    >
      <Box
        sx={{ width: drawerWidth }}
        role="presentation"
        onKeyDown={toggleDrawer}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ color: 'white' }}>
            DressStore
          </Typography>
        </Toolbar>
        <Divider sx={{ borderColor: '#444' }} />
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => handleNavigate(item.path)}
              sx={{
                '&:hover': {
                  backgroundColor: '#1f1f1f',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
