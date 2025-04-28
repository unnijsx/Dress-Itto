import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Sidemenu from '../Sidemenu/LoggedoutSidemenu';
import Header from '../Header/LoggedoutHeader';

export default function LoginPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ backgroundColor: '#121212', minHeight: '100vh', minWidth: '100vw' }}>
      <Header toggleDrawer={toggleDrawer} />
      <Sidemenu open={drawerOpen} toggleDrawer={toggleDrawer} />

      <Container maxWidth="sm" sx={{ pt: 10 }}>
        <Paper elevation={6} sx={{ p: 4, backgroundColor: '#1e1e1e', borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom align="center" color="white">
            Welcome Back
          </Typography>
          <Typography variant="body1" align="center" color="gray" sx={{ mb: 3 }}>
            Please log in to your account
          </Typography>

          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: '#aaa' } }}
            InputProps={{ style: { color: '#fff' } }}
            sx={{ input: { backgroundColor: '#2c2c2c' } }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: '#aaa' } }}
            InputProps={{ style: { color: '#fff' } }}
            sx={{ input: { backgroundColor: '#2c2c2c' } }}
          />

          <Link to={'/userhome'}><Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 3, mb: 1 }}
          >
            Login
          </Button></Link>

          <Typography variant="body2" align="center" color="gray">
            Don't have an account?{' '}
            <Link to="/register" style={{ color: '#90caf9' }}>
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
