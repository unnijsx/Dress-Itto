import React, { useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Backdrop,
} from '@mui/material';
import Sidemenu from './AdminSidemenu';
import AdminHeader from './AdminHeader';
import { Link } from 'react-router-dom';

const userData = [
  {
    name: 'Alice Johnson',
    phone: '9876543210',
    address: '123 Maple Street, NY',
    totalOrders: 14,
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Bob Smith',
    phone: '8765432109',
    address: '456 Oak Avenue, LA',
    totalOrders: 22,
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Charlie Brown',
    phone: '7654321098',
    address: '789 Pine Road, TX',
    totalOrders: 9,
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];

export default function UsersList() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpenDialog = (user) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedUser(null);
  };

  const handleConfirmBlacklist = () => {
    console.log('Blacklisted user:', selectedUser.name);
    handleCloseDialog();
  };

  return (
    <Container
      sx={{
        py: 10,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '99vw',
        minHeight: '100vh',
        backgroundColor: '#121212',
      }}
    >
      <AdminHeader />
      <Sidemenu />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
          width: '100%',
          maxWidth: '1000px',
        }}
      >
        <Typography variant="h4" color="white">
          Users List
        </Typography>
      </Box>

      <TableContainer component={Paper} sx={{ backgroundColor: '#1e1e1e', width: '100%', maxWidth: '1000px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#90caf9' }}>Avatar</TableCell>
              <TableCell sx={{ color: '#90caf9' }}>Name</TableCell>
              <TableCell sx={{ color: '#90caf9' }}>Phone Number</TableCell>
              <TableCell sx={{ color: '#90caf9' }}>Address</TableCell>
              <TableCell sx={{ color: '#90caf9' }}>Total Orders</TableCell>
              <TableCell sx={{ color: '#90caf9' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((user, index) => (
              <TableRow
                key={user.name}
                sx={{ backgroundColor: index % 2 === 0 ? '#2a2a2a' : '#1e1e1e' }}
              >
                <TableCell>
                  <Avatar src={user.avatar} alt={user.name} />
                </TableCell>
                <TableCell sx={{ color: 'white' }}>{user.name}</TableCell>
                <TableCell sx={{ color: 'white' }}>{user.phone}</TableCell>
                <TableCell sx={{ color: 'white' }}>{user.address}</TableCell>
                <TableCell sx={{ color: 'white' }}>{user.totalOrders}</TableCell>
                <TableCell>
        <Link to="/adminviewuserorders" passHref legacyBehavior>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    sx={{
                      mr: 1,
                      textTransform: 'none',
                      borderColor: '#90caf9',
                      color: '#90caf9',
                      '&:hover': {
                        backgroundColor: '#90caf9',
                        color: 'black',
                      },
                    }}
                  >
                    View Orders
                  </Button></Link>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => handleOpenDialog(user)}
                    sx={{
                      textTransform: 'none',
                      borderColor: '#f44336',
                      color: '#f44336',
                      '&:hover': {
                        backgroundColor: '#f44336',
                        color: 'white',
                      },
                    }}
                  >
                    Blacklist
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        BackdropProps={{
          sx: {
            backdropFilter: 'blur(4px)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          },
        }}
      >
        <DialogTitle>Confirm Blacklist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to blacklist{' '}
            <strong>{selectedUser?.name}</strong>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleConfirmBlacklist} color="error" variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
