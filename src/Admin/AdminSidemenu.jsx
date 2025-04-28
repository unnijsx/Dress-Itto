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
import { useNavigate } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const drawerWidth = 240;

export default function AdminSidemenu({ open, toggleDrawer }) {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/adminhome' },
    { text: 'Products', icon: <ProductionQuantityLimitsIcon />, path: '/productlistcrud' },
    { text: 'Users', icon: <PeopleAltIcon />, path: '/adminuserlist' },
    { text: 'Orders', icon: <ShoppingCartIcon />, path: '/adminorderspage' },
    { text: 'Feedbacks', icon: <FeedbackIcon />, path: '/adminfeedbackview' },
    { text: 'Logout', icon: <LogoutIcon />, path: '/logout' },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    toggleDrawer(); 
  };

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
          mt: '64px',
        },
      }}
    >
      <Box
        sx={{ width: drawerWidth }}
        role="presentation"
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
