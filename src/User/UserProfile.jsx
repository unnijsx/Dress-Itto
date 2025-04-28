import React, { useState } from 'react';
import { Box, Avatar, Typography, TextField, Button, Container, Card, CardContent, Divider, IconButton } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Header from './Header';
import LoggedoutSidemenu from './Sidemenu';

export default function UserProfilePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Mock user data
  const [user, setUser] = useState({
    name: 'Aanya Sharma',
    email: 'aanya@example.com',
    phone: '+91 9876543210',
    address: '123 Rosewood Lane, Mumbai, Maharashtra, 400001',
    avatarUrl: 'https://i.pravatar.cc/150?img=47',
  });

  const [editingUser, setEditingUser] = useState(user);

  const handleChange = (e) => {
    setEditingUser({
      ...editingUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEditingUser({
        ...editingUser,
        avatarUrl: imageUrl,
      });
    }
  };

  const handleUpdate = () => {
    // Later: send to backend
    setUser(editingUser);
    alert('Profile updated!');
  };

  return (
    <Box sx={{ backgroundColor: '#121212', minHeight: '100vh', overflowX: 'hidden', minWidth: '99vw' }}>
      <Header toggleDrawer={() => setDrawerOpen(true)} />
      <LoggedoutSidemenu open={drawerOpen} toggleDrawer={() => setDrawerOpen(false)} />

      <Container sx={{ py: 5 }}>
        <Typography variant="h4" align="center" color="white" gutterBottom>
          Your Profile
        </Typography>

        <Card sx={{ backgroundColor: '#1e1e1e', mt: 5, p: 3 }}>
          <CardContent sx={{ textAlign: 'center', position: 'relative' }}>
            <Avatar
              src={editingUser.avatarUrl}
              alt={editingUser.name}
              sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
            />
            
            {/* Hidden File Input */}
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="avatar-upload"
              type="file"
              onChange={handleImageChange}
            />

            {/* Icon Button for Upload */}
            <label htmlFor="avatar-upload">
              <IconButton
                component="span"
                sx={{
                  position: 'absolute',
                  top: 100,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#333',
                  '&:hover': { backgroundColor: '#555' },
                  color: 'white',
                }}
              >
                <CameraAltIcon />
              </IconButton>
            </label>

            <Typography variant="h6" color="white" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="subtitle1" color="gray" gutterBottom>
              {user.email}
            </Typography>

            <Divider sx={{ backgroundColor: 'grey.800', my: 3 }} />

            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                name="name"
                value={editingUser.name}
                onChange={handleChange}
                variant="filled"
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'grey' } }}
                sx={{ backgroundColor: '#2c2c2c', borderRadius: 2 }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Phone"
                name="phone"
                value={editingUser.phone}
                onChange={handleChange}
                variant="filled"
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'grey' } }}
                sx={{ backgroundColor: '#2c2c2c', borderRadius: 2 }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Address"
                name="address"
                value={editingUser.address}
                onChange={handleChange}
                variant="filled"
                multiline
                rows={2}
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'grey' } }}
                sx={{ backgroundColor: '#2c2c2c', borderRadius: 2 }}
              />

              <Button
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3 }}
                onClick={handleUpdate}
              >
                Update Profile
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
