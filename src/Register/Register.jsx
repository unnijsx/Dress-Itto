import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Sidemenu from '../Sidemenu/LoggedoutSidemenu';
import Header from '../Header/LoggedoutHeader';

export default function Register() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#121212',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header toggleDrawer={toggleDrawer} />
      <Sidemenu open={drawerOpen} toggleDrawer={toggleDrawer} />

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ flex: 1 }}
      >
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              width: '100%',
              maxWidth: 500,
              backgroundColor: '#1e1e1e',
              borderRadius: 3,
            }}
          >
            <Typography variant="h4" align="center" color="white" gutterBottom sx={{mt: 6}}>
              Create Account
            </Typography>

            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
              InputLabelProps={{ style: { color: '#aaa' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{ input: { backgroundColor: '#2c2c2c' } }}
            />

            <TextField
              fullWidth
              label="Phone Number"
              margin="normal"
              InputLabelProps={{ style: { color: '#aaa' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{ input: { backgroundColor: '#2c2c2c' } }}
            />

            <TextField
              fullWidth
              label="Address"
              margin="normal"
              InputLabelProps={{ style: { color: '#aaa' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{ input: { backgroundColor: '#2c2c2c' } }}
            />

            <TextField
              fullWidth
              label="Backup Phone Number"
              margin="normal"
              InputLabelProps={{ style: { color: '#aaa' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{ input: { backgroundColor: '#2c2c2c' } }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              InputLabelProps={{ style: { color: '#aaa' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{ input: { backgroundColor: '#2c2c2c' } }}
            />

            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              margin="normal"
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
              Sign Up
            </Button></Link>

            <Typography variant="body2" align="center" color="gray">
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#90caf9' }}>
                Login
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
