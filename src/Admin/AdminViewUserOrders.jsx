import React from 'react';
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
  Chip,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import Sidemenu from './AdminSidemenu';

const ordersData = [
  {
    orderId: 'ORD001',
    date: '2025-04-20',
    items: [
      { name: 'Red Dress', qty: 1 },
      { name: 'Black Heels', qty: 1 },
    ],
    total: 119.99,
    status: 'Delivered',
  },
  {
    orderId: 'ORD002',
    date: '2025-04-17',
    items: [{ name: 'Leather Jacket', qty: 1 }],
    total: 99.99,
    status: 'Pending',
  },
];

export default function AdminViewUserOrders() {
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

      <Typography variant="h4" color="white" gutterBottom>
        User Orders
      </Typography>

      <TableContainer
        component={Paper}
        sx={{ backgroundColor: '#1e1e1e', width: '100%', maxWidth: '1000px' }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#90caf9' }}>Order ID</TableCell>
              <TableCell sx={{ color: '#90caf9' }}>Date</TableCell>
              <TableCell sx={{ color: '#90caf9' }}>Items</TableCell>
              <TableCell sx={{ color: '#90caf9' }}>Total ($)</TableCell>
              <TableCell sx={{ color: '#90caf9' }}>Status</TableCell>
              <TableCell sx={{ color: '#90caf9' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersData.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell sx={{ color: 'white' }}>{order.orderId}</TableCell>
                <TableCell sx={{ color: 'white' }}>{order.date}</TableCell>
                <TableCell sx={{ color: 'white' }}>
                  {order.items.map((item, i) => (
                    <div key={i}>
                      {item.name} × {item.qty}
                    </div>
                  ))}
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  {order.total.toFixed(2)}
                </TableCell>
                <TableCell>
                  <Chip
                    label={order.status}
                    color={order.status === 'Delivered' ? 'success' : 'warning'}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="info"
                    component={Link}
                    to="/adminorderdetails"
                    size="small"
                    sx={{ textTransform: 'none' }}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
