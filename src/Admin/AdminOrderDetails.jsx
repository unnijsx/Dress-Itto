import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  Button,
} from '@mui/material';
import AdminHeader from './AdminHeader';
import Sidemenu from './AdminSidemenu';

export default function AdminOrderDetails() {
  const [orderDetails, setOrderDetails] = useState({
    id: 'ORD001',
    user: {
      name: 'John Doe',
      phone: '9876543210',
      address: '123 Main St, Chennai, TN',
    },
    date: '2025-04-20',
    status: 'Pending', // Change to Delivered to test default
    items: [
      {
        name: 'Red Dress',
        price: 49.99,
        quantity: 2,
        image: 'https://via.placeholder.com/80x100?text=Red+Dress',
      },
      {
        name: 'Black Heels',
        price: 70.0,
        quantity: 1,
        image: 'https://via.placeholder.com/80x100?text=Heels',
      },
    ],
  });

  const getTotal = () =>
    orderDetails.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

  const handleMarkCompleted = () => {
    setOrderDetails((prev) => ({ ...prev, status: 'Delivered' }));
  };

  return (
    <Container
      sx={{
        py: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#121212',
      }}
    >
      <AdminHeader />
      <Sidemenu />

      <Typography variant="h4" color="white" gutterBottom>
        Order Details - {orderDetails.id}
      </Typography>

      <Box
        sx={{
          backgroundColor: '#1e1e1e',
          p: 3,
          borderRadius: 2,
          width: '100%',
          maxWidth: '1000px',
          color: 'white',
        }}
      >
        {/* User Info */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Customer Info</Typography>
          <Typography>Name: {orderDetails.user.name}</Typography>
          <Typography>Phone: {orderDetails.user.phone}</Typography>
          <Typography>Address: {orderDetails.user.address}</Typography>
        </Box>

        {/* Order Info */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Order Info</Typography>
          <Typography>Date: {orderDetails.date}</Typography>
          <Typography>
            Status:{' '}
            <Chip
              label={orderDetails.status}
              color={
                orderDetails.status === 'Delivered' ? 'success' : 'warning'
              }
              size="small"
              sx={{ ml: 1 }}
            />
          </Typography>

          {orderDetails.status === 'Pending' && (
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleMarkCompleted}
                sx={{
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#90caf9',
                    color: 'black',
                  },
                }}
              >
                Mark as Completed
              </Button>
            </Box>
          )}
        </Box>

        {/* Items Table */}
        <Typography variant="h6" sx={{ mb: 1 }}>
          Items
        </Typography>
        <TableContainer component={Paper} sx={{ backgroundColor: '#2a2a2a' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#90caf9' }}>Image</TableCell>
                <TableCell sx={{ color: '#90caf9' }}>Product Name</TableCell>
                <TableCell sx={{ color: '#90caf9' }}>Price ($)</TableCell>
                <TableCell sx={{ color: '#90caf9' }}>Qty</TableCell>
                <TableCell sx={{ color: '#90caf9' }}>Subtotal ($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderDetails.items.map((item) => (
                <TableRow key={item.name}>
                  <TableCell>
                    <Avatar
                      src={item.image}
                      alt={item.name}
                      variant="rounded"
                      sx={{ width: 60, height: 80 }}
                    />
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>{item.name}</TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    {item.price.toFixed(2)}
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    {item.quantity}
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    {(item.price * item.quantity).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell
                  colSpan={4}
                  align="right"
                  sx={{ color: 'white', fontWeight: 'bold' }}
                >
                  Total:
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
                  ${getTotal().toFixed(2)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
